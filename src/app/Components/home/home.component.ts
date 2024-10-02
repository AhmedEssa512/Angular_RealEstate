import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClientModule } from '@angular/common/http';
import { Router, RouterModule } from '@angular/router';
import { PropertyService } from '../../Services/property.service';
import { Iproperty } from '../../Models/iproperty';
import { routes } from '../../app.routes';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,HttpClientModule,RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
   properties: Iproperty[] = [];
  

 
  constructor(private _propertyService:PropertyService,private _route:Router) {}

  ngOnInit(): void {
    this._propertyService.getProperties().subscribe((data)=>{
      this.properties = data;
    });
  }

  propertyDetails(propertyId:string)
  {
    this._route.navigate(['/property',propertyId]);
  }

  deleteProperty(id:any){
    if(confirm("Are you sure to delete this property?")){
      this._propertyService.deleteProperty(id).subscribe(()=>{
        this.properties = this.properties.filter(property => property.id !== id);
      });
    } 
  }

 


 
  



}
