import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http'
import { HttpService } from 'src/app/http.service';
import { timer } from 'rxjs';



@Component({
  selector: 'app-create-quiz',
  templateUrl: './create-quiz.component.html',
  styleUrls: ['./create-quiz.component.scss']
})
export class CreateQuizComponent implements OnInit {


  quiz = new FormGroup({
    quizName: new FormControl("", Validators.required),
    prompt: new FormControl("", Validators.required),
    answerA: new FormControl("", Validators.required),
    answerB: new FormControl("", Validators.required),
    answerC: new FormControl("", Validators.required),
    answerD: new FormControl("", Validators.required),
    isCorrect: new FormControl("", Validators.required)
  })

  constructor(
    public http: HttpClient,
    private get: HttpService) {

  }
  postQuiz(data: any) {
    if (this.quiz.value.prompt !== "" || this.quiz.value.answerA !== "" || this.quiz.value.answerB !== "" || this.quiz.value.answerC !== "" || this.quiz.value.answerC !== "" || this.quiz.value.quizName !== "") {
      this.get.onSubmit(data).subscribe((data) => {
        console.warn(data);
      })
    }

  }

  ngOnInit(): void {

  }

}
