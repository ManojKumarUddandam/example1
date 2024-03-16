import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { FootComponent } from './foot/foot.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { ProjectsComponent } from './projects/projects.component';
import { HttpClientModule } from '@angular/common/http';
import { ResponsiveService } from './ResponsiveService';
import { DarkModeComponent } from './dark-mode/dark-mode.component';
import { ResponsiveDirective } from './directives/responsive.directive';
import { FormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire/compat';
import { firebaseConfig } from './environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ContactComponent,
    FootComponent,
    HeaderComponent,
    HomeComponent,
    NotfoundComponent,
    ProjectsComponent,
    DarkModeComponent,
    ResponsiveDirective,
   
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule,
    AngularFireModule.initializeApp(firebaseConfig),
  ],
  providers: [ResponsiveService,
   
  ],
  bootstrap: [AppComponent]
})
export class AppModule { 
  
}