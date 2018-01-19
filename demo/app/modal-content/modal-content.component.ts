import { Component, EventEmitter, Output } from '@angular/core';

import { IModalContent } from '../../../index';

@Component({
    selector: 'app-modal-content',
    template: 'Modal content',
})
export class ModalContentComponent implements IModalContent {
    @Output() submitModal = new EventEmitter();
    @Output() cancelModal = new EventEmitter();


    initModalOptions(options: {}) {
    }
    onCancel() {
        this.cancelModal.emit();
    }
}
