import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { PropertyService } from '../../Services/property.service';
import { Iproperty } from '../../Models/iproperty';
import { error } from 'console';

@Component({
  selector: 'app-property-details',
  standalone: true,
  imports: [],
  templateUrl: './property-details.component.html',
  styleUrl: './property-details.component.css'
})
export class PropertyDetailsComponent implements OnInit {

  
  propertyId:number | null = null;
  property:Iproperty | null = null ;

  constructor(private route:ActivatedRoute,private properyservice:PropertyService) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params=>{
      this.propertyId = Number(params.get('id'));
      if(this.propertyId){
        this.fetchProperty(this.propertyId);
      }
    });
  }

  fetchProperty(id:number)
  {
    this.properyservice.getPropertyById(id).subscribe(
      (data) =>{
      this.property = data;
    },
    (error)=>{
      console.log("Error during fetching data",error);
    }
  );

  }
}
