import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-register.component',
  imports: [ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {

  loginForm: FormGroup;
  email: FormControl;
  password: FormControl;
  name: FormControl;
  lastName: FormControl;
  birthDate: FormControl;

  constructor(){

    this.email = new FormControl('');
    this.password = new FormControl('');
    this.name = new FormControl('');
    this.lastName = new FormControl('');
    this.birthDate = new FormControl('');
    this.loginForm = new FormGroup({email: this.email, password: this.password, name: this.name, 
      lastName: this.lastName, birthDate: this.birthDate})

  }

  handleSubmit(): void{
    console.log(this.email.value, this.password.value)
  }

}
