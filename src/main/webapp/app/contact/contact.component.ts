import { Component, OnInit } from '@angular/core';
import { faThumbsDown } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  name: string = ""
  email: string = ""
  msg:string = ""

  constructor() { }

  ngOnInit() {
  }

  send() {
    window.alert("Sending the following info: " + this.name + " " + this.email + " " + this.msg)
  }
}
