import { ToastrService } from 'ngx-toastr';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-blank-nav',
  templateUrl: './blank-nav.component.html',
  styleUrls: ['./blank-nav.component.css']
})
export class BlankNavComponent {
constructor(private _rout:Router, private _toste:ToastrService){}

signout(){
  this._toste.success('you are signout succesfuly')
  this._rout.navigate(['/login'])
  localStorage.clear()
  
}

}
