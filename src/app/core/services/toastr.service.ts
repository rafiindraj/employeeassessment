import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { CustomToastComponent } from '../../shared/components/custom-toast/custom-toast.component';

@Injectable({
    providedIn: 'root'
})
export class ToastService {

    constructor(
        private _snackBar: MatSnackBar
    ) { }

    openSnackBar(type: 'success' | 'neutral' | 'error', message: string, horizontalPosition: MatSnackBarHorizontalPosition = 'center', verticalPosition: MatSnackBarVerticalPosition = 'bottom', duration: number = 3000) {
        this._snackBar.openFromComponent(CustomToastComponent, {
            data: {
                type: type,
                message: message
            },
            panelClass: [ type === 'success' ? 'success-snackbar-background' : type === 'neutral' ? 'neutral-snackbar-background' : 'error-snackbar-background', 'rounded'],
            horizontalPosition: horizontalPosition,
            verticalPosition: verticalPosition,
            duration: duration
        });
    }
}
