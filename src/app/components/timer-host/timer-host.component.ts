import { Component } from '@angular/core';

@Component({
    selector: 'timer-host',
    template: `
            <div>
            
                <h3>Timer 1</h3>
                <!-- подписываемся на событие tick от дочернего элемента -->
                <timer (tick)="tickHandler1($event)"></timer>
                
                <h3>Timer 2</h3>
                <!-- подписываемся на событие tick от дочернего элемента -->
                <timer interval="2000" (tick)="tickHandler2($event)"></timer>
                
            </div>
    `
})
export class TimerHostComponent {

    tickHandler1(value) {
        console.log("Tick Hanlder 1 - " + value);
    }

    tickHandler2(value) {
        console.log("Tick Hanlder 2 - " + value);
    }

}