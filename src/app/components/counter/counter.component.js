"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// import { Component, Input } from '@angular/core';
var core_1 = require("@angular/core");
var CounterComponent = (function () {
    function CounterComponent() {
        // Можно не писать inputs: ['name', 'counterValue'] - а использовать такую конструкцию:
        // @Input() name: string = "default name";
        // @Input() counterValue: number = 2;
        this.name = "default name";
        this.counterValue = 2;
    }
    CounterComponent.prototype.oneMore = function () {
        this.counterValue = this.counterValue + 3;
    };
    return CounterComponent;
}());
CounterComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'counter',
        template: "<div class=\"counter\" (click)=\"oneMore()\">{{ name + ' - ' + counterValue }}</div>",
        styles: ["\n        .counter {\n            display: inline-block;\n            font-size: 16px;\n            font-weight: normal;\n            margin: 10px;\n            background: #f9d39c;\n            border: 2px solid #949eda;\n            border-radius: 2px;\n            padding: 10px;\n        }\n    "],
        inputs: ['name', 'counterValue']
    })
], CounterComponent);
exports.CounterComponent = CounterComponent;
//# sourceMappingURL=counter.component.js.map