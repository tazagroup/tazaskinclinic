import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CauhinhComponent } from './cauhinh.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CauhinhChitietComponent } from './cauhinh-chitiet/cauhinh-chitiet.component';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatDialogModule,
    RouterModule.forChild([
      {
        path: '', component: CauhinhComponent,
        children: [{
          path: ':slug', component: CauhinhChitietComponent
        }]   
      }
    ])
  ],
  declarations: [CauhinhComponent,CauhinhChitietComponent]
})
export class CauhinhModule { }
