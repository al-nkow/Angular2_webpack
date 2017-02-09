"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var TimerHostComponent = (function () {
    function TimerHostComponent() {
    }
    TimerHostComponent.prototype.tickHandler1 = function (value) {
        console.log("Tick Hanlder 1 - " + value);
    };
    TimerHostComponent.prototype.tickHandler2 = function (value) {
        console.log("Tick Hanlder 2 - " + value);
    };
    return TimerHostComponent;
}());
TimerHostComponent = __decorate([
    core_1.Component({
        selector: 'timer-host',
        template: "\n            <div>\n            \n                <h3>Timer 1</h3>\n                <!-- \u043F\u043E\u0434\u043F\u0438\u0441\u044B\u0432\u0430\u0435\u043C\u0441\u044F \u043D\u0430 \u0441\u043E\u0431\u044B\u0442\u0438\u0435 tick \u043E\u0442 \u0434\u043E\u0447\u0435\u0440\u043D\u0435\u0433\u043E \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u0430 -->\n                <timer (tick)=\"tickHandler1($event)\"></timer>\n                \n                <h3>Timer 2</h3>\n                <!-- \u043F\u043E\u0434\u043F\u0438\u0441\u044B\u0432\u0430\u0435\u043C\u0441\u044F \u043D\u0430 \u0441\u043E\u0431\u044B\u0442\u0438\u0435 tick \u043E\u0442 \u0434\u043E\u0447\u0435\u0440\u043D\u0435\u0433\u043E \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u0430 -->\n                <timer interval=\"2000\" (tick)=\"tickHandler2($event)\"></timer>\n                \n            </div>\n    "
    })
], TimerHostComponent);
exports.TimerHostComponent = TimerHostComponent;
//# sourceMappingURL=timer-host.component.js.map