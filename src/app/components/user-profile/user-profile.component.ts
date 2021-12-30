import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/shared/user';
import { AuthService } from './../../shared/auth.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  currentUser: any = {};
  //currentUser: User[] = [];

  constructor(
    public authService: AuthService,
    private actRoute: ActivatedRoute
  ) { 
    /*let id = this.actRoute.snapshot.paramMap.get('id');
    this.authService.getUserProfile(id).subscribe(res => {
      this.currentUser = res.msg;
    })*/
  }

  ngOnInit(): void {
    this.getUserProfile();
  }

  getUserProfile(): void {
    const id = parseInt(this.actRoute.snapshot.paramMap.get('id')!, 10);
    this.authService.getUserProfile(id).subscribe(res => this.currentUser = res.data)
  }

}
