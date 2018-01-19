import { Component } from '@angular/core';
import { UniOption } from '../../../index';

@Component({
    selector: 'app-forms',
    templateUrl: 'forms.component.html',
})
export class FormsComponent {

    inputModel
    selectModel
    selectModel2
    radioModel
    checkboxModel
    toggleModel
    sliderModel
    sliderRangeModel
    image

    manyOptions: UniOption[] = [
        new UniOption({ value: 1, label: 'Option 1' }),
        new UniOption({ value: 2, label: 'Option 2' }),
        new UniOption({ value: 3, label: 'Option 3' }),
        new UniOption({ value: 4, label: 'Option 4' }),
        new UniOption({ value: 5, label: 'Option 5' }),
        new UniOption({ value: 11, label: 'Option 11' }),
        new UniOption({ value: 12, label: 'Option 12' }),
        new UniOption({ value: 13, label: 'Option 13' }),
        new UniOption({ value: 14, label: 'Option 14' }),
        new UniOption({ value: 15, label: 'Option 15' }),
        new UniOption({ value: 21, label: 'Option 21' }),
        new UniOption({ value: 22, label: 'Option 22' }),
        new UniOption({ value: 23, label: 'Option 23' }),
        new UniOption({ value: 24, label: 'Option 24' }),
        new UniOption({ value: 25, label: 'Option 25' }),
        new UniOption({ value: 31, label: 'Option 31' }),
        new UniOption({ value: 32, label: 'Option 32' }),
        new UniOption({ value: 33, label: 'Option 33' }),
        new UniOption({ value: 34, label: 'Option 34' }),
        new UniOption({ value: 35, label: 'Option 35' }),
        new UniOption({ value: 41, label: 'Option 41' }),
        new UniOption({ value: 42, label: 'Option 42' }),
        new UniOption({ value: 43, label: 'Option 43' }),
        new UniOption({ value: 44, label: 'Option 44' }),
        new UniOption({ value: 45, label: 'Option 45' }),
        new UniOption({ value: 51, label: 'Option 51' }),
        new UniOption({ value: 52, label: 'Option 52' }),
        new UniOption({ value: 53, label: 'Option 53' }),
        new UniOption({ value: 54, label: 'Option 54' }),
        new UniOption({ value: 55, label: 'Option 55' })
    ];

}
