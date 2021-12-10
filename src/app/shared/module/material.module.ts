import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MatTabsModule} from '@angular/material/tabs';
import {MatCardModule} from '@angular/material/card';
import {MatSelectModule} from '@angular/material/select';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatDialogModule} from '@angular/material/dialog';
import {MatTableModule} from '@angular/material/table';
import {MatSortModule} from '@angular/material/sort';
import {MatPaginatorModule} from '@angular/material/paginator';
@NgModule({
  declarations: [],
  imports: [
    CommonModule,MatSelectModule,MatProgressSpinnerModule,
    MatFormFieldModule,MatDialogModule,MatTableModule,MatSortModule,
    MatInputModule,MatPaginatorModule,
    MatButtonModule,
    MatDatepickerModule,MatCheckboxModule,MatSidenavModule,
    MatNativeDateModule,MatToolbarModule,MatIconModule,MatListModule,MatTabsModule,MatCardModule
  ],
  exports:[
    MatFormFieldModule,MatSelectModule,MatProgressSpinnerModule,
    MatInputModule,MatDialogModule,MatTableModule,MatSortModule,
    MatButtonModule,MatPaginatorModule,
    MatDatepickerModule,MatCheckboxModule,MatSidenavModule,
    MatNativeDateModule,MatToolbarModule,MatIconModule,MatListModule,MatTabsModule,MatCardModule
  ]
})
export class MaterialModule { }
