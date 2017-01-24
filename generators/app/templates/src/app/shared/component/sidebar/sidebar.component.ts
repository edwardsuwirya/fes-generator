import {Component, OnInit, Input} from '@angular/core';
import {SidebarService} from "../../service/sidebar.service";

@Component({
    selector: 'btpn-sidebar',
    templateUrl: 'sidebar.component.html'
    //,styleUrls: ['welcome.component.css']
})
export class SidebarComponent implements OnInit {
    isOpen: boolean = false;

    constructor(private sidebarService: SidebarService) {
    }

    ngOnInit() {
        this.sidebarService.toggleMenu.subscribe(res => {
            this.isOpen = res;
        })
    }
}
