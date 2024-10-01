import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyResumePageComponent } from '../app/my-resume-page/my-resume-page.component';
import { ProjectDesignImageComponent } from './project-design-image/project-design-image.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FooterComponent } from './footer/footer.component';
const routes: Routes = [
    
  { path: '', component: MyResumePageComponent },  
  { path: 'navbar', component: NavBarComponent },  
  { path: 'footer', component: FooterComponent },  
  { path: 'project-image', component: ProjectDesignImageComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
