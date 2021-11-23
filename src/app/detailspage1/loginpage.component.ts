import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl, FormArray } from '@angular/forms';
import { Router } from '@angular/router';

import { PrimeNGConfig } from 'primeng/api'

import { FormFields } from '../shared/form-fields';
import { CustomValidations } from '../shared/validate';
import { ValidationMessages } from '../shared/validationmessages';
import {MessageService} from 'primeng/api';
import { NgZone } from '@angular/core';

const emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css'],
  providers: [CustomValidations,]
})


export class LoginpageComponent implements OnInit {
  loginForm: FormGroup;
  loginFormFields = FormFields.loginForm;
  loginValidationMessages = ValidationMessages.loginMessages;
  
  
  constructor(private fb: FormBuilder, private _customValidation: CustomValidations,private messageService: MessageService,private primengConfig: PrimeNGConfig,private ngZone: NgZone,private router: Router) 
  {
    this.createLoginForm()
  }
  
  ngOnInit(): void {
    this.primengConfig.ripple = true;
  }
  createLoginForm(){
    this.loginForm=this.fb.group({
    name: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(20)]],
    email: ['', [Validators.required,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]],
    password: ['', Validators.required],
    })
    this.loginForm.valueChanges.subscribe((data) => {
      this._customValidation.validate(data, this.loginForm, this.loginFormFields, this.loginValidationMessages)
    });
     
    
  }

  

 login() {
    if(this.loginForm.valid)
    {
      
      { this.messageService.add({
           severity: "success",
           summary: "Success Message",
           detail: "Order submitted"
        });}
        setTimeout(() => {this.router.navigateByUrl('/loginpage2')}, 1000);
    console.log("this works");
    }
    else{
      this._customValidation.validateAllFormFields(this.loginForm, this.loginFormFields, this.loginValidationMessages);
    }
   }}
