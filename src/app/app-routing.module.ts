import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { TeacherComponent } from './teacher/teacher.component';
import { StudentComponent } from './student/student.component';
import { SignComponent } from './sign/sign.component';
import { AuthGuard } from './auth.guard';
import { QuizComponent } from './student/quiz/quiz.component';


const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'teacher', component: TeacherComponent, },
  { path: 'student', component: StudentComponent, },
  { path: 'sign', component: SignComponent },
  { path: 'quiz/id:', component: QuizComponent },
]

@NgModule({
  exports: [RouterModule],
  imports: [
    CommonModule, RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { }
