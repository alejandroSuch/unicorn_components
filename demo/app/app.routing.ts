import { ButtonsComponent } from './buttons/buttons.component';
import { ChartsComponent } from './charts/charts.component';
import { ContainersComponent } from './containers/containers.component';
import { DataComponent } from './data/data.component';
import { FormsComponent } from './forms/forms.component';
import { ModuleWithProviders } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TypoComponent } from './typo/typo.component';
import { UtilsComponent } from './utils/utils.component';

export const appRoutingProviders: any[] = [];

export const appRouting: ModuleWithProviders = RouterModule.forRoot([

    { path: '', redirectTo: 'typo', pathMatch: 'full' },
    { path: 'typo', component: TypoComponent },
    { path: 'containers', component: ContainersComponent },
    { path: 'buttons', component: ButtonsComponent },
    { path: 'forms', component: FormsComponent },
    { path: 'charts', component: ChartsComponent },
    { path: 'data', component: DataComponent },
    { path: 'utils', component: UtilsComponent },

]);
