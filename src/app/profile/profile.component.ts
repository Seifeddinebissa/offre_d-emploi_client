import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CrudService } from '../Service/crud.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  currentuser:any
  user:any;
  constructor(
    private service:CrudService,
    private route:Router
  ) { 

  }

  ngOnInit(): void {
    this.currentuser=localStorage.getItem("user")
    console.log(this.user);
    if(this.currentuser=='entreprise')
   {  this.service.getEntrepriseById(this.service.userDetail().id).subscribe(entreprise=>{
    this.user=entreprise
  })}else{this.service.getFormateurById(this.service.userDetail().id).subscribe(formateur=>{
    this.user=formateur
  })

  }
  
  }

 
}
