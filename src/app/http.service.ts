import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class HttpService {
  url = 'http://localhost:3000/posts'
  url_register = 'http://localhost:3000/comments'
  constructor(private httpClient: HttpClient) { }
  getQuestions() {
    return this.httpClient.get(this.url)
  }
  onSubmit(data: any) {
    return this.httpClient.post(this.url, data)
  }
  register(userProfile: any) {
    return this.httpClient.post(this.url_register, userProfile)
  }
  getUserProfile() {
    return this.httpClient.get(this.url_register);
  }
}