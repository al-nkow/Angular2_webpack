"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
// директива ngStyle должна была бы быть импортирована в приложение через BrowserModule,
// которая включена в CommonModule где ngStyle определена.
// наш модуль сам по себе не импортирует CommonModule
// поэтому нужно сделать это принудительно:
var common_1 = require("@angular/common");
var forms_1 = require("@angular/forms"); // для ngModel
var index_1 = require("./index");
var TwoWayBindingSamplesModule = (function () {
    function TwoWayBindingSamplesModule() {
    }
    return TwoWayBindingSamplesModule;
}());
TwoWayBindingSamplesModule = __decorate([
    core_1.NgModule({
        imports: [common_1.CommonModule, forms_1.FormsModule],
        // чтобы у других модулей был доступ к компонентам внутри этого модуля
        // нужно эти компоненты экспортировать
        exports: [index_1.CalcComponent, index_1.SampleNgModelComponent],
        declarations: [index_1.CalcComponent, index_1.SampleNgModelComponent]
    })
], TwoWayBindingSamplesModule);
exports.TwoWayBindingSamplesModule = TwoWayBindingSamplesModule;
//# sourceMappingURL=two-way-binding-sample.module.js.map