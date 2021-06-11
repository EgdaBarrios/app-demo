import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AuthService } from 'src/app/auth/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  providers: [AuthService]
})
export class HeaderComponent implements OnInit {

  public isLogged = false;
  public user: any;

  constructor(
    private authService: AuthService,
    public auth: AngularFireAuth) { }

  ngOnInit() {
    console.log('header');
    this.user = this.authService.getCurrentUser();
    if(this.user) {
      this.isLogged = true;
      // console.log(this.user);
    }
  }

  onLogout() {
    this.authService.logout();
  }

}
