import { Component, SimpleChange } from "@angular/core";

@Component({
    // moduleId: module.id,
    selector: "sample3",
    templateUrl: "sample3.component.html",
    inputs: ["name", "value"]
})
export class Sample3Component {
    name: string;
    value: number;


    // changes - массив свойств
    // ngOnChanges(changes: SimpleChanges) {
        // changes.prop contains the old and the new value...
    // }

    // { [propertyName: string]: SimpleChange } - массив с строковыми ключами и значением типа SimpleChange
    ngOnChanges(changes: { [propertyName: string]: SimpleChange }) {

        console.log('CHANGES: ', changes);

        // let msgArray: string[] = []
        //
        // for (let propName in changes) {
        //     msgArray.push(`property = ${propName}, current value = ${changes[propName].currentValue}, previous value = ${changes[propName].previousValue}`)
        // }
        //
        // console.log(msgArray.join("; "));
    }
}
