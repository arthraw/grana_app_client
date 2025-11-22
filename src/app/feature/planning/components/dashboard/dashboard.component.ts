import { Component } from '@angular/core';
import { AuthService } from 'src/app/feature/auth/services/auth.service';
import { toast } from 'ngx-sonner';
import { Router } from '@angular/router';

@Component({
  selector: 'components',
  imports: [],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent {
  
  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  logOut() {
    this.authService.logout().subscribe({
      next: (response) => {
        console.log('Response:', response);
        toast.info('Até logo!.', {
          duration: 4000,
          onAutoClose: () => { 
            this.router.navigate(['/auth/login']);
          },
        });
      },
      error: (error) => {
        toast.error('Erro ao tentar sair.', {
          description: 'Aguarde e tente novamente.',
          duration: 4000
        });
      }
    });
  }
}
