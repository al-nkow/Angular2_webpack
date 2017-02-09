// Класс AppModule - точка входа в данное приложение 
// Angular модуль - класс с декоратором NgModule
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser"); // приложение выполняется в браузере
var router_1 = require("@angular/router"); // модуль для маршрутизации
var app_component_1 = require("./app.component");
var hello_world_list_component_1 = require("./hello-world-list/hello-world-list.component");
var my_element_component_1 = require("./my-element/my-element.component");
var home_component_1 = require("./components/home-component/home.component");
var counter_component_1 = require("./components/counter/counter.component");
var timer_component_1 = require("./components/timer/timer.component");
var timer_host_component_1 = require("./components/timer-host/timer-host.component");
var name_card_component_1 = require("./components/componentProps/name-card.component");
var name_card_host_component_1 = require("./components/componentProps/name-card-host.component");
var message_box_component_1 = require("./components/messages/message-box.component");
var message_box_host_component_1 = require("./components/messages/message-box-host.component");
var sample3_component_1 = require("./components/ngOnChanges/sample3.component");
var sample3_host_component_1 = require("./components/ngOnChanges/sample3-host.component");
// подключаем модуль
var two_way_binding_sample_module_1 = require("./two-way-databinding/two-way-binding-sample.module");
var simple_service_module_1 = require("./simpleService/simple-service.module");
// @NgModule - декоратор, который определяет данные для создаваемого модуля.
// Для того чтобы приложение могло выполняться в браузере, текущий модуль (корневой модуль)
// должен выполнить импорт модуля BrowserModule взятого из @angular/platform-browser 
// Задача BrowserModule зарегистрировать основные сервис провайдеры приложения, 
// а также добавить общие директивы такие как ngIf, ngFor и т.д.
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            router_1.RouterModule.forRoot([
                { path: "home", component: home_component_1.HomePage },
                { path: "list1", component: hello_world_list_component_1.HelloWorldListComponent },
                { path: "list2", component: my_element_component_1.MyElement },
                { path: "", redirectTo: "home", pathMatch: "full" } // открывается при запуске приложения
            ]),
            two_way_binding_sample_module_1.TwoWayBindingSamplesModule,
            simple_service_module_1.SimpleServiceModule
        ],
        // в declarations нужно перечислить все созданные компоненты, директивы, сервисы
        declarations: [
            app_component_1.AppComponent,
            hello_world_list_component_1.HelloWorldListComponent,
            my_element_component_1.MyElement,
            home_component_1.HomePage,
            counter_component_1.CounterComponent,
            timer_component_1.TimerComponent,
            timer_host_component_1.TimerHostComponent,
            name_card_component_1.NameCardComponent,
            name_card_host_component_1.NameCardHostComponent,
            message_box_component_1.MessageBoxComponent,
            message_box_host_component_1.MessageBoxHostComponent,
            sample3_component_1.Sample3Component,
            sample3_host_component_1.Sample3HostComponent
        ],
        bootstrap: [app_component_1.AppComponent] // компонент с которого начинается отображение приложения
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map