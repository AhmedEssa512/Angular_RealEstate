import { Component } from '@angular/core';
import { RouterModule, RouterOutlet, ROUTES } from '@angular/router';
import { HeaderComponent } from './Components/header/header.component';
import { FooterComponent } from './Components/footer/footer.component';
import { HomeComponent } from './Components/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { PropertyDetailsComponent } from './Components/property-details/property-details.component';
import { routes } from './app.routes';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    HttpClientModule,
    RouterModule
  ], 
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {}
