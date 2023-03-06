import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CrudService } from '../Service/crud.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
user:any
currentuser:any
  constructor(
    private service: CrudService,
    private router: Router,
  ) {
 
   }

  ngOnInit(): void {
    this.user=localStorage.getItem("user")
    if(this.user=='entreprise')
   {  this.service.getEntrepriseById(this.service.userDetail().id).subscribe(entreprise=>{
      this.currentuser=entreprise
  })}else{ if(this.user=='formateur'){
      this.service.getFormateurById(this.service.userDetail().id).subscribe(formateur=>{
      this.currentuser=formateur
  })
}
  }
  }
  logOut(){
    localStorage.clear()
    this.router.navigate(["/home"])
    window.location.reload()

  }

}
