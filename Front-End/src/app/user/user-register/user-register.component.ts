import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validator, Validators } from '@angular/forms';
import { PasswordValidator } from 'src/app/services/password.validator';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit {

  registerationForm!: FormGroup;
  user: any = {};
  constructor(private fg: FormBuilder) { }

  ngOnInit() {
    // this.registerationForm = new FormGroup({
    //   userName: new FormControl(null, [Validators.required, Validators.minLength(5)]),
    //   email: new FormControl(null, [Validators.required, Validators.email]),
    //   password: new FormControl(null, [Validators.required, Validators.minLength(8)]),
    //   confirmPassword: new FormControl(null, [Validators.required]),
    //   mobile:  new FormControl(null, [Validators.required, Validators.maxLength(10), Validators.minLength(10)])
    // },
    // {validators: PasswordValidator}
    // );
    this.createRegistrationForm();
  }

  createRegistrationForm() {
    this.registerationForm = this.fg.group({
      userName: new FormControl(null, [Validators.required, Validators.minLength(5)]),
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required, Validators.minLength(8)]),
      confirmPassword: new FormControl(null, [Validators.required]),
      mobile:  new FormControl(null, [Validators.required, Validators.maxLength(11), Validators.minLength(10)])
    },
    {validators: PasswordValidator}
    );
  }

  get userName(){
    return this.registerationForm.get('userName') as FormControl;
  }
  get email(){
    return this.registerationForm.get('email') as FormControl;
  }
  get password(){
    return this.registerationForm.get('password') as FormControl;
  }
  get confirmPassword(){
    return this.registerationForm.get('confirmPassword') as FormControl;
  }
  get mobile(){
    return this.registerationForm.get('mobile') as FormControl;
  }


  onSubmit() {
    console.log(this.registerationForm);
    // debugger;
    let temp = this.registerationForm.value;
    this.user = Object.assign(this.user, this.registerationForm);
    this.addUser(this.user, temp.email);
  }

  addUser(new_user: any, new_string: string) {
     let users: any[] = [];
    // if(localStorage.getItem('Users') === null) {
    //   users = [new_user];
    // } else{
    //   debugger;

    //   users = JSON.parse(localStorage.getItem('Users') || '{}');
    //   // users = [new_user, ...users];
    // }
    debugger;
    users.push(new_user);
    localStorage.setItem(new_string, JSON.stringify(users.values()));
  }
}
