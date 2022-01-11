import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OutService {
  private loginUser = new BehaviorSubject<string>('');
  user$ = this.loginUser.asObservable();

  constructor() { }
  sendUser(name: string) {
    this.loginUser.next(name)
  }
}
