import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { ButtonsComponent } from './buttons/buttons.component';
import { ChartsComponent } from './charts/charts.component';
import { ContainersComponent } from './containers/containers.component';
import { DataComponent } from './data/data.component';
import { FormsComponent } from './forms/forms.component';
import { HttpModule } from '@angular/http';
import { ModalContentComponent } from './modal-content/modal-content.component';
import { NgModule } from '@angular/core';
import { TypoComponent } from './typo/typo.component';
import { UnicornComponentsModule } from '../../index';
import { UtilsComponent } from './utils/utils.component';
import { appRouting } from './app.routing';

@NgModule({
    declarations: [
        AppComponent,
        TypoComponent,
        ContainersComponent,
        ButtonsComponent,
        FormsComponent,
        DataComponent,
        ChartsComponent,
        UtilsComponent,
        ModalContentComponent
    ],
    imports: [
        UnicornComponentsModule.forRoot(),
        BrowserModule,
        HttpModule,
        appRouting
    ],
    entryComponents: [
        ModalContentComponent,
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule { }
