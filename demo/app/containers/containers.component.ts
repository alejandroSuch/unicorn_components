import { Component } from '@angular/core';
import { ModalContentComponent } from '../modal-content/modal-content.component';
import { ModalService } from '../../../index';

@Component({
    selector: 'app-containers',
    templateUrl: 'containers.component.html',
})
export class ContainersComponent {
    pageSelected1;
    pageSelected2;
    collapsed;
    position;
    popupOpened

    constructor(private modalService: ModalService) { }

    openModal(options = {}) {
        this.modalService.createModal(ModalContentComponent, options).subscribe(
            param => { console.log('ok: ', param); },
            error => { console.log('ko'); }
        );
    }
    log(...args) {
        console.log('', ...args);
    }
}
