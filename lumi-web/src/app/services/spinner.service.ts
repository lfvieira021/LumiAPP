import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpinnerService {

  private spinnerSubject = new BehaviorSubject<boolean>(false);

  spinner$ = this.spinnerSubject.asObservable();
  private contador = 0;

  show() {
    this.contador++;
    this.spinnerSubject.next(true);
  }

  hide() {
    this.contador--;
    if (this.contador <= 0) {
      this.spinnerSubject.next(false);
      this.contador = 0;
    }
  }
}
