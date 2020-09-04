import { Component } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';

import { citiesTableData } from '../../../@core/data/cities-table';

@Component({
  selector: 'ngx-smart-table',
  templateUrl: './Cities-table.component.html',
  styleUrls: ['./Cities-table.component.scss'],
})
export class citiesTableComponent {

  settings = {
    add: {
      addButtonContent: '<i class="nb-plus"></i>',
      createButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    edit: {
      editButtonContent: '<i class="nb-edit"></i>',
      saveButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    delete: {
      deleteButtonContent: '<i class="nb-trash"></i>',
      confirmDelete: true,
    },
    columns: {
      country: {
        title: 'country',
        type: 'string',
      },
      name: {
        title: 'name',
        type: 'string',
      },
      lat: {
        title: 'lat',
        type: 'number',
      },
      lng: {
        title: 'lng',
        type: 'number',
      },
    },
  };

  source: LocalDataSource = new LocalDataSource();

  constructor(private service: citiesTableData) {
    const data = this.service.getDataofcities();
    this.source.load(data);
  }

  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }
}
