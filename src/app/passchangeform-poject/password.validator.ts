import { AbstractControl, ValidationErrors } from '@angular/forms';
export class PasswordValidators{
    static invalidOldPassword(control: AbstractControl): Promise<ValidationErrors|null>{
        return new Promise((resolve, reject)=>{
            setTimeout(()=>{
                if(control.value!= "1234"){
                    resolve({invalidOldPassword:true});
                }else{
                    resolve(null);
                }
            }, 2000)
        })
    }
}