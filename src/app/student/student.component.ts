import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent implements OnInit {
  data: any = []
  constructor(private http: HttpClient, private get: HttpService) {
    this.get.getQuestions().subscribe((data) => {
      this.data = data;
    })
  }

  ngOnInit(): void {

  }

}
