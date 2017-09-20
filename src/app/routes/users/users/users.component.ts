import { Component, OnInit } from '@angular/core';
import {ToasterService} from "angular2-toaster";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  constructor(public toasterService: ToasterService) {}

  popToast() {
    this.toasterService.pop('success', 'Args Title', 'Args Body');
  }

  ngOnInit() {}
}
