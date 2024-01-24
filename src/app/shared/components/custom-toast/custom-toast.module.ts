import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomToastComponent } from './custom-toast.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatIconModule } from '@angular/material/icon';
import { ToastService } from 'src/app/core/services/toastr.service';

@NgModule({
  declarations: [
    CustomToastComponent
  ],
  imports: [
    CommonModule,
    MatSnackBarModule,
    MatIconModule
  ],
  providers: [
    ToastService
  ]
})
export class CustomToastModule { }