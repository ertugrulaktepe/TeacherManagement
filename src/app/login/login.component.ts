import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { map } from 'rxjs/operators'
import { Observable, of, Subject, timer } from 'rxjs';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';
import { OutService } from '../out.service';
import { HttpClient } from '@angular/common/http';
import { HttpService } from '../http.service';




@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    private loginService: LoginService,
    private router: Router,
    private outService: OutService,
    private http: HttpClient,
    private httpService: HttpService) { }


  showSpinner = false;
  userName: string = ('')
  userProfile: any = []



  loginUser = new FormGroup({
    userName: new FormControl(''),
    password: new FormControl(''),
    changeUser: new FormControl('')
  }
  )




  userLogin() {
    this.http.get<any>('http://localhost:3000/comments').subscribe(res => {
      const teacher = res.find((a: any) => {
        return a.userName === this.loginUser.value.userName && a.password === this.loginUser.value.password && a.changeUser === 'Öğretmen'
      })
      const student = res.find((a: any) => {
        return a.userName === this.loginUser.value.userName && a.password === this.loginUser.value.password && a.changeUser === 'Öğrenci'
      })
      if (teacher) {
        this.showSpinner = true
        timer(3000).subscribe(() => {
          this.router.navigate(['/teacher'])
          this.showSpinner = false
        })
        this.outService.sendUser(this.userName)
      } else {

      }
      if (student) {
        this.showSpinner = true
        timer(3000).subscribe(() => {
          this.router.navigate(['/student'])
          this.showSpinner = false
        })
        this.outService.sendUser(this.userName)
      } else {

      }
    })




  }

  ngOnInit(): void {

  }

}
