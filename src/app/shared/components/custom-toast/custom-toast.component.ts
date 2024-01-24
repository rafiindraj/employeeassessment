import { CommonModule } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatIconModule } from '@angular/material/icon';
import { ToastService } from 'src/app/core/services/toastr.service';
import { MAT_SNACK_BAR_DATA } from '@angular/material/snack-bar';

@Component({
  selector: 'app-custom-toast',
  templateUrl: './custom-toast.component.html',
  styleUrls: ['./custom-toast.component.scss']
})
export class CustomToastComponent {
  type: 'success' | 'neutral' | 'error';
    message: string;

    constructor(
        @Inject(MAT_SNACK_BAR_DATA) public data: any
    ) {
        console.log('custom toast data: ', this.data);
        this.type = this.data.type;
        this.message = this.data.message;
    }
}
