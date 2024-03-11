import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactComponent } from './contact/contact.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { ProjectComponent } from './project/project.component';

const routes: Routes = [{ path: '',  redirectTo: '/home', pathMatch: 'full'},
{
  path: 'home',
  component: HomeComponent
},
{ path: 'about', component: AboutComponent },
{ path: 'projects', component: ProjectsComponent },
{ path: 'contact', component: ContactComponent },
{ path:'project-Info/:type',component:ProjectComponent},
{ path: '**', component: NotfoundComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
