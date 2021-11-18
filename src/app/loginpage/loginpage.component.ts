import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
const emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css']
})

export class LoginpageComponent implements OnInit {
  user: FormGroup = this.fb.group({
    name: ['', Validators.required,Validators.minLength(10)],
    email: ['', Validators.required,Validators.pattern(emailPattern)],
    password: ['', Validators.required]
  });

  constructor(private fb: FormBuilder) {  }


  

  ngOnInit(): void { }
}
