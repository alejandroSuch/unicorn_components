import { Component, ComponentRef } from '@angular/core';
import { ToastService, TooltipService } from '../../../index';

@Component({
    selector: 'app-utils',
    templateUrl: 'utils.component.html',
})
export class UtilsComponent {
    tooltip: ComponentRef<any>;

    removed1;
    removed2;
    removed3;
    removed4;
    removed5;

    constructor(
        private toastService: ToastService,
        private tooltipService: TooltipService,
    ) { }

    openToast() {
        this.toastService.createToast('Esto es el mensaje', { duration: 3000, showClose: true }).subscribe();
    }
    openTooltip(event) {
        this.tooltip = this.tooltipService.createTooltip('Esto es el mensaje del tooltip informativo', {
            left: event.clientX,
            top: event.clientY
        });
    }
    closeTooltip() {
        this.tooltip.destroy();
    }
}
