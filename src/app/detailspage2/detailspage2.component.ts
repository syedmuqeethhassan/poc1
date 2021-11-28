import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { FormBuilder, FormGroup } from '@angular/forms';
import {CalendarModule} from 'primeng/calendar';
import { stringify } from 'querystring';
import { FormFields } from '../shared/form-fields';
import { CustomValidations } from '../shared/validate';
import { ValidationMessages } from '../shared/validationmessages';

@Component({
  selector: 'app-detailspage2',
  templateUrl: './detailspage2.component.html',
  styleUrls: ['./detailspage2.component.css'],
  providers: [CustomValidations]
})

export class Detailspage2Component implements OnInit {
  userform:FormGroup
  userFormFields = FormFields.user;
  userValidationMessages = ValidationMessages.usermessages;
  ageValue=[ 
    {label: "1-5", value: "1-5"},
    {label: "5-10", value: "5-10"},
    {label: "10-15", value: "10-15"}
  ];
  ngOnInit(): void {
  }
  constructor(private fx: FormBuilder,private _customValidation: CustomValidations) {
    this.createloginform()
  }
  
  createloginform(){
    this.userform=this.fx.group({
      age:['',[Validators.required]],
    dateofbirth:['',[Validators.required]] ,
    number:['',[Validators.required, Validators.pattern("^[0-9]*$")]]
    })
    this.userform.valueChanges.subscribe((data) => {
      this._customValidation.validate(data, this.userform, this.userFormFields, this.userValidationMessages)

    })
  }
}