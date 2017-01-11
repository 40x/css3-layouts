import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  users: Array<any> = [];
  
  constructor(private http: Http) {

  }

  ngOnInit() {
    this.getUsers();
  }

  getUsers() {
    this.http.get('http://mocker.egen.io/users')
      .subscribe((users)=> this.users = users.json());
  }
}
