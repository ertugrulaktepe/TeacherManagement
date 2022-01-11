import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-sign',
  templateUrl: './sign.component.html',
  styleUrls: ['./sign.component.scss']
})
export class SignComponent implements OnInit {

  signUser = new FormGroup({
    userName: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    changeUser: new FormControl('', Validators.required),
    eMail: new FormControl('', Validators.email),
    phoneNumber: new FormControl('', Validators.required)
  }
  )
  constructor(private httpService: HttpService, private router: Router) { }
  userProfile: any = []

  signUp(userProfile: any) {
    userProfile = this.signUser.value
    this.httpService.register(userProfile).subscribe(userProfile => {
      alert("Başarıyla Kayıt Olundu")
      this.router.navigate(["/"])
      console.warn(userProfile);
      this.signUser.reset()

    })
  }


  ngOnInit(): void {
  }

}
