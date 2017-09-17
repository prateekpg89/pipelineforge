import { PasswordValidators } from './password.validator';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'passchangeform-poject',
  templateUrl: './passchangeform-poject.component.html',
  styleUrls: ['./passchangeform-poject.component.css']
})
export class PasschangeformPojectComponent{
  form = new FormGroup({
    'old': new FormControl('',Validators.required, PasswordValidators.invalidOldPassword),
    'new': new FormControl('',[
      Validators.required
    ]),
    'confirm': new FormControl('',[
      Validators.required
    ])
  })

  get oldPass(){
    return this.form.get('old');
  }

  get newPass(){
    return this.form.get('new');
  }

  get confirmPass(){
    return this.form.get('confirm');
  }

  onKeyin(confirm: FormControl){
    if(this.newPass.value != confirm.value){
      this.confirmPass.setErrors({passwordMismatch: true});
    }
  }
}
