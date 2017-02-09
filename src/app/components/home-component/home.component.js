"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var HomePage = (function () {
    function HomePage() {
    }
    return HomePage;
}());
HomePage = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'HomePage',
        templateUrl: "home.component.html",
        styles: ["\n        .home {\n            border: 1px solid #97d2ba;\n            padding: 20px;\n        }\n        .divider {\n            margin: 40px 10px;\n            border-bottom: 1px solid #97d2ba;\n        }\n    "]
    })
], HomePage);
exports.HomePage = HomePage;
//# sourceMappingURL=home.component.js.map