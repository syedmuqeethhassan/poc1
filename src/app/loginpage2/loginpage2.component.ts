import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { FormBuilder, FormGroup } from '@angular/forms';
import {CalendarModule} from 'primeng/calendar';
import { stringify } from 'querystring';

@Component({
  selector: 'app-loginpage2',
  templateUrl: './loginpage2.component.html',
  styleUrls: ['./loginpage2.component.css']
})

export class Loginpage2Component implements OnInit {
  user: FormGroup = this.fb.group({
    age:['',[Validators.required]],
    dateofbirth:['',[Validators.required]] ,
    number:['',[Validators.required, Validators.pattern("^[0-9]*$")]]
  })
  ageValue=[ 
    {label: "1-5", value: "1-5"},
    {label: "5-10", value: "5-10"},
    {label: "10-15", value: "10-15"}
  ];
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
  }

}
