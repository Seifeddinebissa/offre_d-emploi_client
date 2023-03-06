import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CrudService } from '../Service/crud.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
user:any
currentuser:any
  constructor(
    private service: CrudService,
    private router: Router,
  ) { }

  ngOnInit(): void {
      this.user=localStorage.getItem("user")
      this.currentuser=this.service.userDetail()
      console.log(this.user)
  }
  logOut(){
    localStorage.clear()
    this.router.navigate(["/home"])
    window.location.reload()
  }
}
