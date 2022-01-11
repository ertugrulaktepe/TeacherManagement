import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TeacherComponent } from './teacher/teacher.component';
import { MatInputModule } from '@angular/material/input'
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { AppRoutingModule } from './app-routing.module'
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { CreateQuizComponent } from './teacher/create-quiz/create-quiz.component';
import { HttpClientModule } from '@angular/common/http';
import { StudentComponent } from './student/student.component';
import { CountdownModule } from 'ngx-countdown';
import { SignComponent } from './sign/sign.component';
import { QuizComponent } from './student/quiz/quiz.component';





@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    TeacherComponent,
    CreateQuizComponent,
    StudentComponent,
    SignComponent,
    QuizComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatSelectModule,
    MatButtonModule,
    AppRoutingModule,
    MatProgressSpinnerModule,
    HttpClientModule,
    CountdownModule














  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
