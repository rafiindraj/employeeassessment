import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { provideAnimations } from '@angular/platform-browser/animations';
import { Router } from '@angular/router';
import { ToastrModule, ToastrService, provideToastr } from 'ngx-toastr';
import { ToastService } from 'src/app/core/services/toastr.service';

@Component({
  selector: 'app-login-register',
  standalone: true,
  templateUrl: './login-register.component.html',
  styleUrls: ['./login-register.component.scss'],
  imports: [ReactiveFormsModule, FormsModule, CommonModule, ToastrModule],
  // providers: [ToastService]
})
export class LoginRegisterComponent {
  loginForm: FormGroup;
  isLogin: boolean = false;
  submitted = false;


  constructor(private fb: FormBuilder, private toastService: ToastrService, private router: Router) {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required,]
    });
  }

  ngOnInit(): void {
    // Initialize the form with validators

  }

  get formControl() {
    return this.loginForm.controls;
  }

  onSubmit(): void {
    // Handle form submission
    if (this.loginForm.valid) {
      const username = this.loginForm.value.username
      const password = this.loginForm.value.password
      if (username === 'Admin' && password === 'Admin') {
        debugger
        // Login successful
        this.isLogin = true;

        // Store isLogin in localStorage
        localStorage.setItem('isLogin', 'true');

        // Navigate to another page (e.g., home page)
        this.toastService.success('Login Success')
        this.router.navigate(['/dashboard']);
      } else {
        // Login failed
        this.isLogin = false;

        // Show an error message or perform other actions
        this.toastService.error('Login Failed')
      }

      // Perform login logic or API call here
      console.log('Username:', username);
      console.log('Password:', password);
    }
  }
}
