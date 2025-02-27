import { Component, OnInit, ElementRef } from '@angular/core';
import { ROUTES } from '../sidebar/sidebar.component';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { Router } from '@angular/router';
import { AppComponent } from 'src/app/app.component';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  public focus;
  public listTitles: any[];
  public location: Location;
  public email: string;
  isClient: any;
  constructor(location: Location,  private element: ElementRef, private router: Router, private appComponent: AppComponent, private storageService: StorageService) {
    this.location = location;
  }

  ngOnInit() {
    this.email = this.storageService.getUser().email;
    this.listTitles = ROUTES.filter(listTitle => listTitle);
    this.isClient = this.storageService.isClient();
  }

  getTitle(){
    var titlee = this.location.prepareExternalUrl(this.location.path());
    if(titlee.charAt(0) === '#'){
        titlee = titlee.slice( 1 );
    }

    for(var item = 0; item < this.listTitles.length; item++){
        if(this.listTitles[item].path === titlee){
            return this.listTitles[item].title;
        }
    }
    return 'Strona główna';
  }

  logout(): void {
    this.appComponent.logout();
  }
}
