import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';
import { PrimeNGConfig } from 'primeng/api';



@Component({
  selector: 'app-plan1',
  templateUrl: './plan1.component.html',
  styleUrls: ['./plan1.component.css']
})
export class Plan1Component implements OnInit {
  constructor(private primengConfig: PrimeNGConfig) {

  }
  
  items: MenuItem[];

  activeItem: MenuItem;


  ngOnInit(): void {
    

    this.items = [
            {label: 'Home', icon: 'pi pi-fw pi-home'},
            {label: 'Calendar', icon: 'pi pi-fw pi-calendar'},
            {label: 'Edit', icon: 'pi pi-fw pi-pencil'},
            {label: 'Documentation', icon: 'pi pi-fw pi-file'},
            {label: 'Settings', icon: 'pi pi-fw pi-cog'}
        ];

    this.activeItem = this.items[0];

    


  }
  display: boolean = false;

    showDialog() {
        this.display = true;
    }

}
