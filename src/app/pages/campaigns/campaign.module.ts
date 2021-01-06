import { NgModule } from '@angular/core';

import { ThemeModule } from '../../@theme/theme.module';
import { CampaignRoutingModule, routedComponents } from './campaign-routing.module';
import { MatTableModule } from '@angular/material/table';
import { CdkTableModule } from '@angular/cdk/table';
import { MatSortModule, MatIconModule, MatCheckboxModule } from '@angular/material';
import { MatButtonModule } from '@angular/material';
import { MatPaginatorModule } from '@angular/material';
import { NbCardModule, NbIconModule } from '@nebular/theme';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StatusCardComponent } from './status-card/status-card.component';


@NgModule({
  imports: [
    ThemeModule,
    NbCardModule,
    CampaignRoutingModule,
    MatTableModule,
    CdkTableModule,
    MatSortModule,
    MatButtonModule,
    MatPaginatorModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
    NbIconModule,
    MatCheckboxModule
  ],
  declarations: [
    ...routedComponents,
    StatusCardComponent
  ],
})
export class CampaignModule { }
