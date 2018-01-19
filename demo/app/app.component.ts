import 'rxjs/add/operator/filter';

import { Component, ViewContainerRef } from '@angular/core';
import { ModalService, ToastService, TooltipService } from '../../index';
import { NavigationEnd, Router } from '@angular/router';

import { ModalContentComponent } from './modal-content/modal-content.component';

@Component({
    selector: 'app-unicorn',
    templateUrl: './app.component.html'
})
export class AppComponent {
    tabSelected = 'typo';

    constructor(
        private viewContainerRef: ViewContainerRef,
        private toastService: ToastService,
        private tooltipService: TooltipService,
        private modalService: ModalService,
        private router: Router
    ) {
        this.modalService.setDefaultContainer(this.viewContainerRef);
        this.toastService.setDefaultContainer(this.viewContainerRef);
        this.tooltipService.setDefaultContainer(this.viewContainerRef);

        this.router.events.filter(
            event => event instanceof NavigationEnd
                && event['urlAfterRedirects']
                && event['urlAfterRedirects'].split('/').length
                ? true : false
        ).subscribe(
            event => this.tabSelected = event['urlAfterRedirects'].split('/').pop(),
        );
    }

    onTabSelected(tab: string) {
        this.router.navigate([tab]);
    }
}
