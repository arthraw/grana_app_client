import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  name: string = '';
  email: string = '';
  password: string = '';
  confirmPassword: string = '';
  showPassword: boolean = false;

  handleSubmit(event: Event) {
    event.preventDefault();

    if (this.password !== this.confirmPassword) {
      alert('Passwords do not match!');
    }
  }

  togglePassword() {
    this.showPassword = !this.showPassword;
  }
}