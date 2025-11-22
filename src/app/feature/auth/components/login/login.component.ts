import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AuthService } from '../../services/auth_service';
import { toast } from 'ngx-sonner';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  showPassword: boolean = false;
  errorMessage: string = '';
  sucessMessage: string = '';

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  handleSubmit(event: Event) {
    event.preventDefault();

    if (!this.email || !this.password) {
      this.errorMessage = 'Preencha todos os campos';
      toast.error(this.errorMessage, {
          description: 'Tente novamente mais tarde.',
          duration: 4000
      });
      return;
    }

    if (!this.authService.validateEmail(this.email)) {
      this.errorMessage = 'Email inválido';
      toast.error(this.errorMessage, {
          description: 'Tente novamente mais tarde.',
          duration: 4000
      });
      return;
    }

    this.authService.login({
      email: this.email,
      password: this.password
    }).subscribe({
      next: (response) => {
        toast.success('Sucesso!', {
          description: 'Bem vindo de volta!',
          duration: 4000,
          onAutoClose: () => { 
            this.router.navigate(['/dashboard']);
          },
        });
        
        this.router.navigate(['/dashboard']);
      },
      error: (error) => {
        this.errorMessage = 'Erro ao realizar login';
        this.sucessMessage = '';
        console.error('Error:', error);

        toast.error('Erro ao tentar autenticar.', {
          description: 'Tente novamente mais tarde.',
          duration: 4000
        });


      }
    });
  }


  logOut() {
    this.authService.logout().subscribe({
      next: (response) => {
        this.sucessMessage = 'Logout realizado com sucesso!';
        this.errorMessage = '';
        console.log('Response:', response);
      },
      error: (error) => {
        this.errorMessage = 'Erro ao realizar logout';
        this.sucessMessage = '';
        console.error('Error:', error);
      }
    });
  }
  togglePassword() {
    this.showPassword = !this.showPassword;
  }
}