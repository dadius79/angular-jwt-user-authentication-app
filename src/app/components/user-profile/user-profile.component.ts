import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/shared/user';
import { AuthService } from './../../shared/auth.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  //currentUser: Object = {};
  currentUser: Object = {
    _id: undefined,
    name: undefined,
    email: undefined,
    password: undefined
  };

  constructor(
    public authService: AuthService,
    private actRoute: ActivatedRoute
  ) { 
    let id = this.actRoute.snapshot.paramMap.get('id');
    this.authService.getUserProfile(id).subscribe(res => {
      this.currentUser = res.msg;
    })
  }

  ngOnInit(): void {
  }

}
