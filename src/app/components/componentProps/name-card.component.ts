import { Component } from "@angular/core";

@Component({
    // moduleId: module.id,
    selector: "namecard",
    templateUrl: "name-card.component.html",
    inputs: ["firstName", "lastName"]
})
export class NameCardComponent {
    // свойство
    firstName: string;

    // закрытое поле
    private _lastName: string;

    // getter для получения значения закрытого поля _lastName
    get lastName(): string { // название такое же как и у свойства
        return this._lastName;
    }

    // setter для установки значения закрытому полю _lastName
    set lastName(value: string) { // название такое же как и у свойства
        this._lastName = value + ' - модификатор';
    }

    get fullName(): string {
        return this.firstName + " " + this.lastName;
    }

    changeName(): void {
        this.firstName = 'Petya';
        console.log('Name changed');
    }
}
