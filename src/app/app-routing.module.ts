import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyResumePageComponent } from '../app/my-resume-page/my-resume-page.component';
const routes: Routes = [
    
  { path: 'resume', component: MyResumePageComponent },  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
