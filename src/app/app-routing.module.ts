import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlankComponent } from './layouts/blank/blank.component';
import { FullComponent } from './layouts/full/full.component';
import {ChambreComponent} from "./chambre/chambre.component";
import {AddChambreComponent} from "./add-chambre/add-chambre.component";
import {UpdateChambreComponent} from "./update-chambre/update-chambre.component";
import {DeleteChambreComponent} from "./delete-chambre/delete-chambre.component";
import {StatComponent} from "./Stat/stat.component";

const routes: Routes = [
  {
    path: '',
    component: FullComponent,
    children: [
      {
        path: '',
        redirectTo: '/Chambre',
        pathMatch: 'full',
      },

      {path:'Chambre',component:ChambreComponent},
      {path:'Chambre/add',component:AddChambreComponent},
      {path:'Chambre/update/:id',component:UpdateChambreComponent},
      { path:'Chambre/delete/:id', component: DeleteChambreComponent},
        { path:'Chambre/stat', component: StatComponent},
    ],

  },

{
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full',
      },

      {
        path: 'dashboard',
        loadChildren: () =>
          import('./pages/pages.module').then((m) => m.PagesModule),
      },
      {
        path: 'addChambre',
        redirectTo: '/add-chambre',
        pathMatch: 'full',
      },

      {
        path: 'ui-components',
        loadChildren: () =>
          import('./pages/ui-components/ui-components.module').then(
            (m) => m.UicomponentsModule
          ),
      },
      {
        path: 'extra',
        loadChildren: () =>
          import('./pages/extra/extra.module').then((m) => m.ExtraModule),
  },
  {
    path: '',
    component: BlankComponent,
    children: [
      {
        path: 'authentication',
        loadChildren: () =>
          import('./pages/authentication/authentication.module').then(
            (m) => m.AuthenticationModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
