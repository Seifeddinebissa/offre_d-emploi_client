import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { LogiEntrepriseComponent } from './logi-entreprise/logi-entreprise.component';
import { LoginFormateurComponent } from './login-formateur/login-formateur.component';
import { RegisterFormateurComponent } from './register-formateur/register-formateur.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgToastModule } from 'ng-angular-popup';
import { FooterComponent } from './footer/footer.component';
import { RegisterentrepriseComponent } from './registerentreprise/registerentreprise.component';
import { HttpClientModule } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';
import { AddoffreComponent } from './addoffre/addoffre.component';
import { ListeoffreComponent } from './listeoffre/listeoffre.component';
import { ContactComponent } from './contact/contact.component';
import { ProfileComponent } from './profile/profile.component';
import { ModifierentrepriseComponent } from './modifierentreprise/modifierentreprise.component';
import { ModifierformateurComponent } from './modifierformateur/modifierformateur.component';
import { DescriptionComponent } from './description/description.component';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { PostulationComponent } from './postulation/postulation.component';
import { VosoffreComponent } from './vosoffre/vosoffre.component';
@NgModule({
  declarations: [
    AppComponent,
 
    LogiEntrepriseComponent,
    LoginFormateurComponent,
    RegisterFormateurComponent, 
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    RegisterentrepriseComponent,
    AddoffreComponent,
    ListeoffreComponent,
    ContactComponent,
    ProfileComponent,
    ModifierentrepriseComponent,
   
    ModifierformateurComponent,
    DescriptionComponent,
    AcceuilComponent,
    PostulationComponent,
    VosoffreComponent,
    
  ],
  imports: [
    NgToastModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxPaginationModule,
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
