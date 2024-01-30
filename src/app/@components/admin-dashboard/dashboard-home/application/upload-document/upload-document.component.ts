import { Component } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { finalize } from 'rxjs';
import { FileMetaData } from 'src/app/model/file-meta-data';
import { FileService } from 'src/app/shared/file.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-upload-document',
  templateUrl: './upload-document.component.html',
  styleUrls: ['./upload-document.component.css'],
})
export class UploadDocumentComponent {
  selectedFiles!: FileList;
  currentFileUpload!: FileMetaData;
  percentage: number = 0;
  listOfFiles: FileMetaData[] = [];

  constructor(
    private fileService: FileService,
    private fireStorage: AngularFireStorage
  ) {}

  ngOnInit(): void {
    this.getAllFiles();
  }

  selectFile(event: any) {
    this.selectedFiles = event.target.files;
  }

  uploadFile() {
    console.log();
    this.currentFileUpload = new FileMetaData(this.selectedFiles[0]);
    const path = 'Uploads/' + this.currentFileUpload.file.name;

    const storageRef = this.fireStorage.ref(path);
    const uploadTask = storageRef.put(this.selectedFiles[0]);

    uploadTask
      .snapshotChanges()
      .pipe(
        finalize(() => {
          storageRef.getDownloadURL().subscribe({
            next: (downloadLink) => {
              this.currentFileUpload.url = downloadLink;
              this.currentFileUpload.size = this.currentFileUpload.file.size;
              this.currentFileUpload.name = this.currentFileUpload.file.name;

              this.fileService.saveMetaDataOfFile(this.currentFileUpload);
              this.ngOnInit();
            },
            error: (err) => {
              console.log('Error Occurred:', err);
            },
          });
        })
      )
      .subscribe({
        next: (res: any) => {
          this.percentage = (res.bytesTransferred * 100) / res.totalBytes;
        },
        error: (err) => {
          console.log('Error Occurred:', err);
        },
      });
    this.showAlert('Success', 'Upload Successful', 'Success');
  }

  // getAllFiles() {
  //   this.fileService.getAllFiles().subscribe(
  //     (res) => {
  //       this.listOfFiles = res.map((e: any) => {
  //         const data = e.payload.doc.data();
  //         data.id = e.payload.doc.id;
  //         return data;
  //       });
  //     },
  //     (err) => {
  //       console.log('Error occurred while fetching file meta data', err);
  //     }
  //   );
  // }
  getAllFiles() {
    this.fileService.getAllFiles().subscribe(
      (res) => {
        this.listOfFiles = res.map((e: any) => {
          const data = e.payload.doc.data();
          data.id = e.payload.doc.id;
          return data;
        });
        console.log(this.listOfFiles); // Add this line to check if listOfFiles is populated
      },
      (err) => {
        console.log('Error occurred while fetching file meta data', err);
      }
    );
  }

  deleteFile(file: FileMetaData) {
    if (window.confirm('Are you sure you want to delete' + file + '?')) {
      this.fileService.deleteFile(file);
      this.ngOnInit();
    }
  }

  showAlert(title: string, text: string, icon: any) {
    Swal.fire({
      title: title,
      text: text,
      icon: icon,
    });
  }
}
