import { Component, EventEmitter, Output, Input } from '@angular/core';

@Component({
    selector: 'timer',
    template: `
            <div>
                <b>{{currentValue}}</b>
                <span>  -  </span>
                <button (click)="start()">Start</button>
                <button (click)="stop()">Stop</button>
            </div>
    `,
    styles: [`
        :host { 
            display: block;
            padding: 10px;
            border: 1px solid #ec7235;
            border-radius: 2px;
            background: #ffe4d2;
        }
        button {
            cursor: pointer;
        }
    `]
})
export class TimerComponent {

    private intervalObject: any;
    private currentValue: number = 0;

    @Input() interval: number = 1000; // по умолчанию 1000

    @Output() tick: EventEmitter<string> = new EventEmitter();
    // создали излучатель события - отправлять данные будем типа string

    start() {
        if (this.intervalObject) return;
        this.intervalObject = setInterval(() => { this.callback() }, this.interval);
    }

    stop() {
        if(!this.intervalObject) return;
        clearInterval(this.intervalObject);
        this.intervalObject = false;
    }

    private callback() {
        this.currentValue++;
        let data: string = 'Сработало событие tick - ' + this.currentValue;
        this.tick.emit(data); // запускаем событие и передаем в нем data
    }
}