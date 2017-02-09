"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var MyElement = (function () {
    function MyElement() {
    }
    MyElement.prototype.clickItem = function () {
        console.log('Click my button!');
    };
    return MyElement;
}());
MyElement = __decorate([
    core_1.Component({
        selector: 'my-element',
        template: "\n            <span class=\"my-element\" (click)=\"clickItem()\">\n                My First Custom Component\n            </span>\n    ",
        styles: ["\n        .my-element { \n            display: inline-block;\n            padding: 10px 20px;\n            border-radius: 2px;\n            background: #289895;\n            font-size: 14px;\n            color: #ffffff;\n            cursor: pointer;\n        }\n        .my-element:hover {\n            background: #36b5b2;\n        }\n    "]
    })
], MyElement);
exports.MyElement = MyElement;
//# sourceMappingURL=my-element.component.js.map