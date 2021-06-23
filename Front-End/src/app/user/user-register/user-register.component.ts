import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validator, Validators } from '@angular/forms';
import { User } from 'src/app/model/user';
import { PasswordValidator } from 'src/app/services/password.validator';
import { UserService } from 'src/app/services/user.service';
import { ToasterService } from 'src/app/services/toastr.service';
import { AlertifyService } from 'src/app/services/alertify.service';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit {

  registerationForm!: FormGroup;
  user!: User;
  userSubmitted!: boolean;
  constructor(private fb: FormBuilder, private userService: UserService, private toastr: ToasterService, private alertify: AlertifyService) { }

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
    this.registerationForm = this.fb.group({
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
    this.userSubmitted = true;
    // this.user = Object.assign(this.user, this.registerationForm);
    debugger;
    if(this.registerationForm.valid) {
      this.userService.addUser(this.userData());
      this.registerationForm.reset();
      this.userSubmitted = false;
      // this.alertify.success('Successfully Registerd', 'Done');
      this.toastr.success("Successfully Registered", "Done");
    } else {
      // this.alertify.error('Please provide valid details', 'Error');
      this.toastr.error("Please provide valid details", "Error");
    }
  }

  userData(): User {
    return this.user = {
      userName: this.userName.value,
      email: this.email.value,
      password: this.password.value,
      mobile: this.mobile.value
    }
  }
}
