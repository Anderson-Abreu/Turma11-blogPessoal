
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscriber } from 'rxjs';
import { SubjectSubscriber } from 'rxjs/internal/Subject';
import { User } from '../model/user';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {
  user: User = new User()
  senha: string

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {

  }

  conferirSenha(event: any) {
    this.senha = event.target.value

  }

  cadastrar() {
    if (this.senha === this.user.senha) {
      this.authService.cadastrar(this.user).subscribe((resp: User) => {
        this.user = resp
      })
      this.router.navigate(['/login'])
    } else {
      alert('Senhas não conferem')
    }


  }

}
