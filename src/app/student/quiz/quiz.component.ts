import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpService } from 'src/app/http.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})
export class QuizComponent implements OnInit {

  data: any = []


  constructor(private http: HttpClient, private get: HttpService, private route: ActivatedRoute) {
    this.get.getQuestions().subscribe((data) => {
      this.data = data;
    })
  }

  ngOnInit(): void {

  }

}
