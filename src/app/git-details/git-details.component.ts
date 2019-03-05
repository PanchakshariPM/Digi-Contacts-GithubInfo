import { Component, OnInit } from '@angular/core';
import { RestService } from '../rest.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-git-details',
  templateUrl: './git-details.component.html',
  styleUrls: ['./git-details.component.css']
})
export class GitDetailsComponent implements OnInit {

  gitUserName: any;
  getGitUserInfo: any;
  show: boolean = false;
  showError: boolean = false
  ifError = '';

  constructor(
    private restService: RestService,
    private http: HttpClient) { }

  ngOnInit() {
  }

  getGitUserDetails() {
    this.http.get('https://api.github.com/users/' + this.gitUserName)
      .subscribe((res) => {
        this.getGitUserInfo = res;
        this.show = true;
        console.log(this.getGitUserInfo, 'userInfo of Git');
      }, (err) => {
        this.showError = true;
        this.show = false;
        this.ifError = 'No user found by this name!';
      });
  };
};
