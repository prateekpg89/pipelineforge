import { UsernameValidators } from './username.validators';
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'signup-form',
  templateUrl: './signup-nestedgroupform.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent {
  form = new FormGroup({
    'account': new FormGroup({//we now have username and password inside a common div with form group property name account
      'username': new FormControl('',[
        Validators.required,
        Validators.minLength(3),
        UsernameValidators.canNotContainSpace],
        UsernameValidators.shouldBeUnique
      ),
      'password': new FormControl('',Validators.required)
    }) 
  })
  get username(){
    //return this.form.get('username');
    return this.form.get('account.username'); //since now username is not direct control of root form-group
  }
  login(){
    this.form.setErrors({invalidCredentials:true});
  }
}
