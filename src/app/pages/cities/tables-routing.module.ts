import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TablesComponent } from './tables.component';
import { citiesTableComponent } from './Cities-table/Cities-table.Component';

const routes: Routes = [{
  path: '',
  component: TablesComponent,
  children: [
    {
      path: 'Cities-table',
      component: citiesTableComponent,
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TablesRoutingModule { }

export const routedComponents = [
  TablesComponent,
  citiesTableComponent,
];
