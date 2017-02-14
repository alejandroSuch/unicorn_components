import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

export enum InputTypes { text, number, email, password }

@Component({
    selector: 'nts-input',
    templateUrl: 'input.component.html',
    styleUrls: ['input.component.scss'],
})
export class NtsInputComponent implements OnInit {

    @Input() ntsModel;
    @Output() ntsModelChange = new EventEmitter();
    @Output() ntsBlur = new EventEmitter();
    @Output() ntsFocus = new EventEmitter();
    @Output() ntsKeypress = new EventEmitter();

    @Input() type: string = 'text'; //InputTypes.text;
    @Input() placeholder: string = '';
    @Input() name: string = '';
    @Input() label: string = '';
    @Input() maxValue: number = null;
    @Input() minValue: number = null;
    @Input() value: string = '';
    @Input() icon: string;
    @Input() iconRight: string;
    @Input() hint: string = '';
    @Input() error: string = '';
    @Input() floating = false;
    @Input() debounce = 0;
    @Input() colorType = false;
    @Input() multiline = false;
    @Input() prefix = '';
    @Input() max = -1;
    @Input() step = 1;
    @Input() counter = false;
    @Input() autofocus = false;
    @Input() clear = false;
    @Input() caret = false;
    @Input() colorSwatch = false;
    @Input() required = false;

    debounceTimer;

    constructor() { }

    ngOnInit() {
        if (!this.ntsModel) {
            this.ntsModel = this.value;
        } else {
            this.value = this.ntsModel;
        }
    }
    onNgModelChange(ev) {
        clearTimeout(this.debounceTimer);
        this.debounceTimer = setTimeout(
            _ => this.ntsModelChange.emit(ev), this.debounce || 0
        );
    }
    onInputBlur(ev) {
        if (this.maxValue && this.ntsModel > this.maxValue) {
            this.ntsModel = this.maxValue;
            this.ntsModelChange.emit(this.ntsModel);

        } else if (this.minValue && this.ntsModel < this.minValue) {
            this.ntsModel = this.minValue;
            this.ntsModelChange.emit(this.ntsModel);
        }
        this.ntsBlur.emit(ev);
    }
}