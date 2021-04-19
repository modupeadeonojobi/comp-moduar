import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CollectionsRoutingModule } from './collections-routing.module';
import { CollectionsHomeComponent } from './collections-home/collections-home.component';
import { TableComponent } from './table/table.component';
import { TabComponent } from './tab/tab.component';
import { CompaniesComponent } from './companies/companies.component';
import { PartnersComponent } from './partners/partners.component';
import { BioComponent } from './bio/bio.component';


@NgModule({
  declarations: [CollectionsHomeComponent, TableComponent, TabComponent, CompaniesComponent, PartnersComponent, BioComponent],
  imports: [
    CommonModule,
    CollectionsRoutingModule,
    SharedModule
  ],
  exports: []
})
export class CollectionsModule { }
