import {Component, OnInit, Input} from '@angular/core';
import {SidebarService} from "../../service/sidebar.service";
import {Router, ActivatedRoute} from '@angular/router';

@Component({
    selector: 'btpn-sidebar-item',
    templateUrl: 'sidebar-item.component.html'
})
export class SidebarItemComponent implements OnInit {
    @Input()
    urlPage: string;
    @Input()
    menuName: string;

    constructor(private sidebarService: SidebarService,
                private router: Router,
                private activatedRoute: ActivatedRoute) {
    }

    ngOnInit() {

    }

    goToPage() {
        this.router.navigate([this.urlPage], {relativeTo: this.activatedRoute, skipLocationChange: true});
        this.sidebarService.togglingOnOff();
    }
}
