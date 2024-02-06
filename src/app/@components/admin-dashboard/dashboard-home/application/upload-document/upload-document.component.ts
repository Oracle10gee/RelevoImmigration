import { Component } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-upload-document',
  templateUrl: './upload-document.component.html',
  styleUrls: ['./upload-document.component.css'],
})
export class UploadDocumentComponent {
  // selectedFiles!: FileList;
  // currentFileUpload!: FileMetaData;
  percentage: number = 0;
  // listOfFiles: FileMetaData[] = [];

  constructor(
    // private fileService: FileService,
    // private fireStorage: AngularFireStorage
  ) {}

  ngOnInit(): void {
    // this.getAllFiles();
  }

  uploadFileOne() {
    console.log();
    this.showAlert('Success', 'Upload Successful', 'Success');
  }
  uploadFileTwo() {
    console.log();
    this.showAlert('Success', 'Upload Successful', 'Success');
  }
  uploadFileThree() {
    console.log();
    this.showAlert('Success', 'Upload Successful', 'Success');
  }
  uploadFileFour() {
    console.log();
    this.showAlert('Success', 'Upload Successful', 'Success');
  }
  uploadFileFive() {
    console.log();
    this.showAlert('Success', 'Upload Successful', 'Success');
  }
  uploadFileSix() {
    console.log();
    this.showAlert('Success', 'Upload Successful', 'Success');
  }
  uploadFileSeven() {
    console.log();
    this.showAlert('Success', 'Upload Successful', 'Success');
  }


  showAlert(title: string, text: string, icon: any) {
    Swal.fire({
      title: title,
      text: text,
      icon: icon,
    });
  }
}
