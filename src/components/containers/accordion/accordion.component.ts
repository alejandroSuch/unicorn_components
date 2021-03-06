import { AfterViewInit, Component, ContentChildren, EventEmitter, Input, Output, QueryList, HostBinding } from '@angular/core';

import { UniAccordionItemComponent } from './item/item.component';

@Component({
    selector: 'uni-accordion',
    templateUrl: 'accordion.component.html',
    styleUrls: ['accordion.component.scss'],
})
export class UniAccordionComponent implements AfterViewInit {

    @HostBinding('class.uni-accordion') componentClass = true;
    @Input() mode: 'single' | 'multiple' | number = 'multiple';
    @Output() collapsedChange = new EventEmitter<{ index: number, value: boolean }>();
    @ContentChildren(UniAccordionItemComponent) items: QueryList<UniAccordionItemComponent>;

    ngAfterViewInit() {
        this.initItems();
        this.items.changes.subscribe(
            () => this.initItems()
        );

    }

    initItems() {
        this.items.forEach(
            (item, i) => item.collapsedChange.subscribe(v => this.onCollapsedChange(item, i, v))
        );
    }

    private onCollapsedChange(item: UniAccordionItemComponent, index: number, value: boolean) {
        this.collapsedChange.emit({ index, value });
        if (this.mode === 'multiple') { return item.collapsed = value; }
        if (this.mode === 'single' && value === false) {
            this.items.forEach(
                (it, i) => it.collapsed = i === index ? false : true
            );
        }
    }

}
