// Определение компонента app.component

// импорт декоратора Component из модуля @angular/core
// с помощью Component мы можем создавать компоненты angular2
import { Component } from '@angular/core';

// Применение декоратора Component для класса AppComponent
// Декоратор используется для присвоения метаданных для класса AppComponent
@Component({
    selector: 'app',                       // Селектор, который определяет какой элемент DOM дерева будет представлять компонент.
    // template: '<h1>My First Angular App!</h1>' // HTML разметка определяющая представление текущего компонента
    templateUrl: './app.component.html',
    styleUrls: ["./app.component.css"]
})
export class AppComponent { } // Класс определяющий поведение компонента
