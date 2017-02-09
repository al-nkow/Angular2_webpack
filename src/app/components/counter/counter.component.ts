// import { Component, Input } from '@angular/core';
import { Component } from '@angular/core';

@Component({
    // moduleId: module.id,
    selector: 'counter',
    template: `<div class="counter" (click)="oneMore()">{{ name + ' - ' + counterValue }}</div>`,
    styles: [`
        .counter {
            display: inline-block;
            font-size: 16px;
            font-weight: normal;
            margin: 10px;
            background: #f9d39c;
            border: 2px solid #949eda;
            border-radius: 2px;
            padding: 10px;
        }
    `],
    inputs: ['name', 'counterValue']
})
export class CounterComponent {

    // Можно не писать inputs: ['name', 'counterValue'] - а использовать такую конструкцию:
    // @Input() name: string = "default name";
    // @Input() counterValue: number = 2;

    name: string = "default name";
    counterValue: number = 2;

    public oneMore(): void {
        this.counterValue = this.counterValue + 3;
    }

}
