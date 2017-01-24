import {Component, ViewChild} from '@angular/core';
import {SidebarService} from "../../service/sidebar.service";

@Component({
    selector: 'btpn-top-header',
    templateUrl: 'top-header.component.html'
    //,styleUrls: ['welcome.component.css']
})
export class TopHeaderComponent {
    isSidebarOpen: boolean = false;

    constructor(private sidebarService: SidebarService) {
    }

    changeStatus() {
        this.isSidebarOpen = !this.isSidebarOpen;
        this.sidebarService.toggling(this.isSidebarOpen);
    }
}
