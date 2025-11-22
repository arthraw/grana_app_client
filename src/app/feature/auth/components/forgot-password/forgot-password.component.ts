import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-forgot-password',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent {
  email: string = '';
  isSubmitted: boolean = false;

  handleSubmit(event: Event): void {
    event.preventDefault();
    console.log('Recuperar senha:', { email: this.email });
    this.isSubmitted = true;
  }

  tryAnotherEmail(): void {
    this.isSubmitted = false;
    this.email = '';
  }
}