import { Injectable } from '@angular/core';
import { User } from './user.interface';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  public users =
    {
      name: 'ertuğrul',
      password: 123,
      changeUser: 'Öğretmen'
    }

  constructor() { }


}
