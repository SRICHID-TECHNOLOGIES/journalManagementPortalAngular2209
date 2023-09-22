import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SubjectcontentComponent } from './Masters/subjectcontent/subjectcontent.component';
import { ManuscriptSubmissionComponent } from './Masters/manuscript-submission/manuscript-submission.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AuthorComponent } from './author/author.component';
import { EditorComponent } from './editor/editor.component';
import { ReviewerComponent } from './reviewer/reviewer.component';
import { RegisterComponent } from './register/register.component';
import { ManuscriptcontentComponent } from './Masters/manuscriptcontent/manuscriptcontent.component';
import { PasswordresetComponent } from './Masters/passwordreset/passwordreset.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path:'subjectcontent', component: SubjectcontentComponent},
  { path:'manuscriptsubmission', component: ManuscriptSubmissionComponent},
  { path:'', component: HomeComponent},
  { path:'footer', component: FooterComponent},
  { path:'navbar', component: NavbarComponent},
  { path:'author', component: AuthorComponent},
  { path:'editor', component: EditorComponent},
  { path:'reviewer', component: ReviewerComponent },
  { path:'register', component: RegisterComponent},
  { path:'typeOfContentMaster', component: ManuscriptcontentComponent},
  { path:'resetpassword', component: PasswordresetComponent},
  { path:'login', component: LoginComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
