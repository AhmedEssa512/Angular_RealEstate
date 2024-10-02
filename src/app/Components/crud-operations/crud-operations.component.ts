import { Component, OnInit, ViewChild } from '@angular/core';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';
import { PropertyService } from '../../Services/property.service';
import { Iproperty } from '../../Models/iproperty';
import { error } from 'console';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-crud-operations',
  standalone: true,
  imports: [CommonModule,ConfirmDialogComponent],
  templateUrl: './crud-operations.component.html',
  styleUrl: './crud-operations.component.css'
})
export class CRUDOperationsComponent implements OnInit{
  @ViewChild('confirmDialog') confirmDialog !: ConfirmDialogComponent;
  properties:Iproperty[] = [];
  propertId !:number;




  /**
   *
   */
  constructor(private _properyService:PropertyService) {}
  ngOnInit(): void {
    this._properyService.getProperties().subscribe((data)=>{
      this.properties = data ;
    },
  (error)=>{
    console.log("error during fitching data in crud com")
  });
  }

  openConfirmDialog(id:string){
    this.propertId = +(id) ;
    this.confirmDialog.open();
  }

  deleteProperty(Isconfirmed:boolean){
    if(Isconfirmed){
      this._properyService.deleteProperty(this.propertId).subscribe(()=>{
        this.properties = this.properties.filter(p => Number(p.id) !== this.propertId )
      });
    }
  }

}
