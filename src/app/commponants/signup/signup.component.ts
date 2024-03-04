import { AuthapiService } from './../../serveses/authapi.service';
import { Component } from '@angular/core';
import { FormControl,FormGroup,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  register:FormGroup=new FormGroup({
    name:new FormControl('',[Validators.minLength(3),Validators.required,Validators.maxLength(10)]),
    email:new FormControl('',[Validators.email, Validators.required]),
    password:new FormControl('',[Validators.pattern(/^\w{6,}$/), Validators.required]),
    rePassword:new FormControl('',[Validators.pattern(/^\w{6,}$/), Validators.required]),
    phone:new FormControl('',[Validators.pattern(/^01[0125][0-9]{8}$/), Validators.required])
  })
constructor(private _regester:AuthapiService,private _router:Router){

}
  handelform():void{

   
    
 if (this.register.valid) {



  this._regester.signup(this.register.value).subscribe({
   next:(respons) =>{
    if(respons.message=="success"){
      this._router.navigate(['/login'])
    }
    
   },
   error:(err)=>{
    console.log(err);
    
   },
 complete() {
     console.log("hello");
     
 },
   
    
  })
 }

 

  }
}
