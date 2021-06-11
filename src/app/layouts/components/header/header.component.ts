import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AuthService } from 'src/app/auth/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  providers: [AuthService]
})
export class HeaderComponent {

  constructor(
    private authService: AuthService,
    public auth: AngularFireAuth,
    private router:Router) { }
  
  onLogout() {
    this.authService.logout()
    this.router.navigate(['/auth']);
  }
}