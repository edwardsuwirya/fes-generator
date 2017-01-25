import {Component, ViewChild} from '@angular/core';
import {SidebarService} from "../../service/sidebar.service";

@Component({
    selector: 'btpn-top-header',
    templateUrl: 'top-header.component.html'
    //,styleUrls: ['welcome.component.css']
})
export class TopHeaderComponent {

    constructor(private sidebarService: SidebarService) {
    }

    changeStatus() {
      this.sidebarService.togglingOnOff();
    }
}
