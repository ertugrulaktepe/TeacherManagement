import { Component, OnInit } from '@angular/core';
import { OutService } from '../out.service';


@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.scss']
})


export class TeacherComponent implements OnInit {

  constructor(private outService: OutService) { }
  data: string = ('')
  ngOnInit(): void {
    this.outService.user$.subscribe(data => {
      this.data = data
      return data;


    })
  }



}
