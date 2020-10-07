import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Role } from '../models/role';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  Role = Role;
  username;
  password;
  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit() {
  }

  // login(role: Role) {
  //   console.log(role);
  //   this.authService.login(role);
  //   this.router.navigate(['/']);
  // }
  
  handleLoginClick(){
    if(this.username && this.password){
      if(this.username == "user"){
        this.authService.login(1);
        this.router.navigate(['/']);
      }else if(this.username == "admin"){
        this.authService.login(2);
        this.router.navigate(['/']);
      }
    } else {
      alert('enter username and password');
    }
  }

  logout() {
    this.authService.logout();
  }
}