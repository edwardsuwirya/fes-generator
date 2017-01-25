/**
 * Created by 15050978 on 1/24/2017.
 */
import {Injectable} from '@angular/core';
import {BehaviorSubject}  from 'rxjs/BehaviorSubject';
import {Observable} from "rxjs/Observable";

@Injectable()
export class SidebarService {
  toggleMenu = new BehaviorSubject<boolean>(false);
  private currentStatus: boolean = false;

  togglingOnOff() {
    this.currentStatus = !this.currentStatus;
    this.toggleMenu.next(this.currentStatus);
  }


  listenStatus(): Observable<boolean> {
    return this.toggleMenu.asObservable();
  }

}
