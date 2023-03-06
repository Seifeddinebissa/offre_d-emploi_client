import { Injectable } from '@angular/core';
import { Formateur } from '../Model/Formateur.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { Entreprise } from '../Model/Entreprise.model';
import { Offre } from '../Model/Offre.model';
import { Observable } from 'rxjs';
import { JwtHelperService } from "@auth0/angular-jwt";
import { Contact } from '../Model/Contact.model';

const httpOption={
  headers:new HttpHeaders({'Content-Type':'application/Json'})
}
@Injectable({
  providedIn: 'root'
})
export class CrudService {
  registerentrepriseUrl="http://localhost:8081/api/entreprise/registerentreprise"
  registerFormateurUrl = "http://localhost:8081/api/formateur/registerformateur"
  loginFormateurUrl="http://localhost:8081/api/formateur/loginformateur"
  loginEntrepriseUrl="http://localhost:8081/api/entreprise/loginentreprise"
  apiUrl="http://localhost:8081/api"
  helper=new JwtHelperService();
  constructor(
    private http: HttpClient,
    private router: Router
  ) { }
  addFormateur(formateur: Formateur) {
    return this.http.post<any>(this.registerFormateurUrl, formateur);
  }
  addEntreprise(entreprise: Entreprise) {
    return this.http.post<any>(this.registerentrepriseUrl, entreprise);
  }
  loginEntreprise(entreprise: Entreprise) {
    return this.http.post<any>(this.loginEntrepriseUrl, entreprise);
  }
 loginFormateur(formateur: Formateur) {
    return this.http.post<any>(this.  loginFormateurUrl, formateur);
  }
  addOffre(offre:Offre){
    return this.http.post<any>(this.apiUrl+"/offre", offre);
  }
  deleteOffre(id:number|undefined){
    const Url=`${this.apiUrl+"/offre"}/${id}`
    return this.http.delete(Url,httpOption)
  }
  addContact(contact:Contact){
    return this.http.post<any>(this.apiUrl+"/contact", contact);
  }

  userDetail(){
    let token:any=localStorage.getItem('mytoken');
    if(token!=null)
    {let decotoken=this.helper.decodeToken(token);
    return decotoken.data
  }
  }


  getOffre():Observable<Offre[]>{
    return this.http.get<Offre[]>(this.apiUrl+"/offre")  
  }

  updateEntreprise(idE:number,entreprise:Entreprise):Observable<Entreprise>{
    const Url=`${this.apiUrl+"/entreprise"}/${idE}`
    return this.http.put<Entreprise>(Url,entreprise,httpOption)
  }
  public getEntrepriseById(idE : number):Observable<any>{
    return this.http.get<any>(`${this.apiUrl}/entreprise/${idE}`);
  }

  updateFormateur(idF:number,formateur:Formateur):Observable<Entreprise>{
    const Url=`${this.apiUrl+"/formateur"}/${idF}`
    return this.http.put<Entreprise>(Url,formateur,httpOption)
  }
  public getFormateurById(idF : number):Observable<any>{
    return this.http.get<any>(`${this.apiUrl}/formateur/${idF}`);
  }
  public getOffreById(id : number):Observable<any>{
    return this.http.get<any>(`${this.apiUrl}/offre/${id}`);
  }

  addpostulation(event:any){
    return this.http.post<any>(this.apiUrl+"/postulation/",event,httpOption);
  }
}
