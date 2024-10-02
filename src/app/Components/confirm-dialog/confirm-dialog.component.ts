import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';


@Component({
  selector: 'app-confirm-dialog',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './confirm-dialog.component.html',
  styleUrl: './confirm-dialog.component.css'
})
export class ConfirmDialogComponent {

  @Output() confirm = new EventEmitter<boolean>();

  isVisible = false ;

  open(){
    this.isVisible = true;
  }

  close(){
    this.isVisible = false;
  }

  onConfirm()
  {
    this.confirm.emit(true);
    this.close();
  }

  onCancle()
  {
    this.confirm.emit(false);
    this.close();
  }
  
 
  

}
