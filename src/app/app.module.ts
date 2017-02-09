// Класс AppModule - точка входа в данное приложение
// Angular модуль - класс с декоратором NgModule
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'; // приложение выполняется в браузере
import { RouterModule } from '@angular/router'; // модуль для маршрутизации

import { AppComponent }  from './app.component';
import { HelloWorldListComponent }  from './hello-world-list/hello-world-list.component';
import { MyElement }  from './my-element/my-element.component';
import { HomePage }  from './components/home-component/home.component';
import { CounterComponent }  from './components/counter/counter.component';
import { TimerComponent }  from './components/timer/timer.component';
import { TimerHostComponent }  from './components/timer-host/timer-host.component';
import { NameCardComponent }  from './components/componentProps/name-card.component';
import { NameCardHostComponent }  from './components/componentProps/name-card-host.component';
import { MessageBoxComponent }  from './components/messages/message-box.component';
import { MessageBoxHostComponent }  from './components/messages/message-box-host.component';
import { Sample3Component }  from './components/ngOnChanges/sample3.component';
import { Sample3HostComponent }  from './components/ngOnChanges/sample3-host.component';

// подключаем модуль
import { TwoWayBindingSamplesModule } from './two-way-databinding/two-way-binding-sample.module';
import { SimpleServiceModule } from './simpleService/simple-service.module';

// @NgModule - декоратор, который определяет данные для создаваемого модуля.
// Для того чтобы приложение могло выполняться в браузере, текущий модуль (корневой модуль)
// должен выполнить импорт модуля BrowserModule взятого из @angular/platform-browser
// Задача BrowserModule зарегистрировать основные сервис провайдеры приложения,
// а также добавить общие директивы такие как ngIf, ngFor и т.д.

@NgModule({ // с помощью ngModule превращаем обычный класс в модуль angular2
    imports:      [ // какие другие модули потребуются для работы приложения
        BrowserModule,
        RouterModule.forRoot([
            {path: 'home', component: HomePage},
            {path: 'list1', component: HelloWorldListComponent},
            {path: 'list2', component: MyElement},
            {path: '', redirectTo: 'home', pathMatch: 'full'} // открывается при запуске приложения
            // pathMatch: "full" - значит активировать, только если полный адрес
        ]),
        TwoWayBindingSamplesModule, // подключаем модуль
        SimpleServiceModule
    ],
    // в declarations нужно перечислить все созданные компоненты, директивы, сервисы
    declarations: [
        AppComponent, // корневой компонент данного приложения
        HelloWorldListComponent,
        MyElement,
        HomePage,
        CounterComponent,
        TimerComponent,
        TimerHostComponent,
        NameCardComponent,
        NameCardHostComponent,
        MessageBoxComponent,
        MessageBoxHostComponent,
        Sample3Component,
        Sample3HostComponent
    ],
    bootstrap:    [ AppComponent ]  // компонент с которого начинается отображение приложения
})

export class AppModule { }
