import {
  Component,
  ElementRef,
  EventEmitter,
  OnInit,
  Output,
  QueryList,
  ViewChildren,
} from '@angular/core';

@Component({
  selector: 'app-otp',
  templateUrl: './otp.component.html',
  styleUrls: ['./otp.component.css'],
})
export class OtpComponent implements OnInit {
  otpDigits = [0, 1, 2, 3]; // Number of OTP digits
  otp: string[] = ['', '', '', '']; // Array to store OTP input values

  @Output() otpChange: EventEmitter<string> = new EventEmitter<string>();
  @ViewChildren('inputBoxes') inputBoxes!: QueryList<ElementRef>;

  ngOnInit(): void {
    this.setFocusOnFirstInput();
  }

  onInputChange(value: string, index: number): void {
    this.otp[index] = value;

    const otpValue = this.otp.join('');
    this.otpChange.emit(otpValue);

    if (value !== '') {
      this.setFocusOnNextInput(index);
    }
  }

  onBackspaceKey(event: Event): void {
    const keyboardEvent = event as KeyboardEvent;
    const currentIndex = this.getCurrentFocusedIndex();
    if (
      (keyboardEvent.code === 'Backspace' || keyboardEvent.code === 'Delete') &&
      currentIndex > 0
    ) {
      this.otp[currentIndex - 1] = '';
      this.setFocusOnPreviousInput(currentIndex - 1);
      this.emitOtpValue();
    }
  }

  onKeydown(event: KeyboardEvent, index: number): void {
    if (event.code === 'ArrowLeft' && index > 0) {
      this.setFocusOnPreviousInput(index);
    } else if (
      event.code === 'ArrowRight' &&
      index < this.otpDigits.length - 1
    ) {
      this.setFocusOnNextInput(index);
    }
  }

  onPaste(event: Event): void {
    const clipboardEvent = event as ClipboardEvent;
    clipboardEvent.preventDefault();
    const pastedData = clipboardEvent.clipboardData?.getData('text') || '';
    const otpArray = pastedData.split('').slice(0, this.otpDigits.length);
    otpArray.forEach((digit, index) => {
      this.otp[index] = digit;
    });
    this.emitOtpValue();
    this.setFocusOnNextInput(otpArray.length - 1);
  }

  private setFocusOnFirstInput(): void {
    if (this.inputBoxes && this.inputBoxes.first) {
      this.inputBoxes.first.nativeElement.focus();
    }
  }

  private setFocusOnNextInput(index: number): void {
    if (this.inputBoxes && index < this.inputBoxes.length - 1) {
      this.inputBoxes.toArray()[index + 1].nativeElement.focus();
    }
  }

  private setFocusOnPreviousInput(index: number): void {
    if (this.inputBoxes && index > 0) {
      this.inputBoxes.toArray()[index - 1].nativeElement.focus();
    }
  }

  private getCurrentFocusedIndex(): number {
    const currentIndex = this.inputBoxes
      .toArray()
      .findIndex((box) => box.nativeElement === document.activeElement);
    return currentIndex >= 0 ? currentIndex : 0;
  }

  private emitOtpValue(): void {
    const otpValue = this.otp.join('');
    this.otpChange.emit(otpValue);
  }
}
