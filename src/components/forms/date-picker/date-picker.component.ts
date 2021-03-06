import { Component, ElementRef, HostBinding, Input } from '@angular/core';

import { UniInputBaseComponent } from '../../base/input-base/input-base.component';
import { sideOfScreen } from '../../../utils';

@Component({
    selector: 'uni-date-picker',
    templateUrl: 'date-picker.component.html',
    styleUrls: ['date-picker.component.scss'],
})
export class UniDatePickerComponent extends UniInputBaseComponent {

    @HostBinding('class.uni-date-picker') componentClass = true;

    @HostBinding('class.uni-date-picker--floating')
    @Input() floating = true;

    @Input() max;
    @Input() min;

    @Input() rangeFrom;
    @Input() rangeTo;

    side = 'left';
    private _opened = false;
    set opened(value: boolean) {
        this._opened = value;
        if (value && this.floating && this.elementRef) {
            this.side = sideOfScreen(this.elementRef.nativeElement);
        }
    }
    get opened() { return this._opened; }

    constructor(private elementRef: ElementRef) { super(); }

    onFocus($event) {
        this.opened = true;
        this.uniFocus.emit($event);
    }
    onBlur($event) {
        this.uniBlur.emit($event);
    }
    onKeyPress(ev: KeyboardEvent, open: boolean) {
        if (ev.code === 'Enter' || ev.key === 'Enter') {
            this.opened = false;
        } else { this.opened = open; }
    }
    onDateChanges(date) {
        this.model = date;
        this.onNgModelChange(date);
    }
    clear() {
        this.onNgModelChange(null);
    }
}
