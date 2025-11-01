import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  standalone: true,
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {

  loginForm: FormGroup;
  email: FormControl;
  password: FormControl;

  constructor(){

    this.email = new FormControl('')
    this.password = new FormControl('')
    this.loginForm = new FormGroup({email: this.email, password: this.password})

  }

  handleSubmit(): void{
    console.log(this.email.value, this.password.value)
  }


}

