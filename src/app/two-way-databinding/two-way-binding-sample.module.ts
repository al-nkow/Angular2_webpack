import { NgModule } from "@angular/core";

// директива ngStyle должна была бы быть импортирована в приложение через BrowserModule,
// которая включена в CommonModule где ngStyle определена.
// наш модуль сам по себе не импортирует CommonModule
// поэтому нужно сделать это принудительно:
import { CommonModule } from "@angular/common";

import { FormsModule } from "@angular/forms"; // для ngModel
import { CalcComponent, SampleNgModelComponent } from "./index";

@NgModule({
    imports: [CommonModule, FormsModule],
    // чтобы у других модулей был доступ к компонентам внутри этого модуля
    // нужно эти компоненты экспортировать
    exports: [CalcComponent, SampleNgModelComponent],
    declarations: [CalcComponent, SampleNgModelComponent]
})
export class TwoWayBindingSamplesModule {

}