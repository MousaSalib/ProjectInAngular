
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  productForm: FormGroup;

  constructor() {
    this.productForm = new FormGroup({
      FullName: new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(30)]),
      UserName: new FormControl('', [Validators.required, Validators.pattern(/^\S*$/)]),
      Email: new FormControl('', [Validators.required, Validators.email, Validators.pattern(/^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,}$/)]),
      Password: new FormControl('', [Validators.required, Validators.pattern(/^(?=.*\d)(?=.*[a-zA-Z]).{8,}$/)])
      

    });
  }

  handleSubmitForm() {
    console.log(this.productForm);
  }
}

