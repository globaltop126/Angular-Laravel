import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  subject = new Subject();
  constructor() { }
  setMessage(msg: string) {
    this.subject.next(msg);
  }

  getMessage() {
    return this.subject.asObservable();
  }
}
