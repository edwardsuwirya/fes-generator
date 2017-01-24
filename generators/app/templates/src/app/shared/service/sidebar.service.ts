/**
 * Created by 15050978 on 1/24/2017.
 */
import {Injectable} from '@angular/core';
import {BehaviorSubject}  from 'rxjs/BehaviorSubject';

@Injectable()
export class SidebarService {
    public toggleMenu = new BehaviorSubject<boolean>(false);

    toggling(stat: boolean) {
        this.toggleMenu.next(stat);
    }

}