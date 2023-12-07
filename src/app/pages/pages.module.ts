import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { PagesRoutes } from './pages.routing.module';
import { MaterialModule } from '../material.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { NgApexchartsModule } from 'ng-apexcharts';
// icons
import { TablerIconsModule } from 'angular-tabler-icons';
import * as TablerIcons from 'angular-tabler-icons/icons';
import { AppDashboardComponent } from './dashboard/dashboard.component';
import {ChambreComponent} from "../chambre/chambre.component";
import {AppModule} from "../app.module";

@NgModule({
    declarations: [AppDashboardComponent, ChambreComponent],
    imports: [
        CommonModule,
        MaterialModule,
        FormsModule,
        NgApexchartsModule,
        RouterModule.forChild(PagesRoutes),
        TablerIconsModule.pick(TablerIcons),
        ReactiveFormsModule,
        AppModule,
    ],
  exports: [TablerIconsModule],
})
export class PagesModule {}
