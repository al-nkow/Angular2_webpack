import { Component } from '@angular/core';

@Component({
    // moduleId: module.id,
    selector: 'HomePage',
    templateUrl: "home.component.html",
    styles: [`
        .home {
            border: 1px solid #97d2ba;
            padding: 20px;
        }
        .divider {
            margin: 40px 10px;
            border-bottom: 1px solid #97d2ba;
        }
    `]
})
export class HomePage {

}
