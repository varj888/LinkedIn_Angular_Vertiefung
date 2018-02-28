import { Component, OnInit } from '@angular/core';
import { AppModelService } from '../../app-model.service';
import { LoginService } from '../login.service';

@Component({
  selector: 'in-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  constructor( public appModel: AppModelService, login: LoginService ) {
    console.log ( appModel, login );
  }
  ngOnInit() {  }
}
