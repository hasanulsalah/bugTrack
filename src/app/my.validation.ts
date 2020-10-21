import {AbstractControl,ValidationErrors} from '@angular/forms';

export class MyValidation{
    static containSpace(control:AbstractControl):ValidationErrors|null{
        if((control.value as string).indexOf(' ')>=0){
            return {containSpace:true};
        }
        return null;
    } 

    static isDuplicate(control:AbstractControl):Promise<ValidationErrors|null>{
        return new Promise((resolve, reject)=>{
            setTimeout(()=>{
                if(control.value === 'info@baabtra.com'){
                    resolve({isDuplicate:true});
                }
                else{
                    resolve(null);
                }

            },2000);
        });
    }
}