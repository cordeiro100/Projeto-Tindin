import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HotToastService } from '@ngneat/hot-toast';
import { User } from 'src/app/models/user';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  email: string;
  password: string;
  formLogin: FormGroup;

  constructor(
    private loginService: LoginService,
    private formBuilder: FormBuilder,
    private router: Router,
    private toast: HotToastService
  ) {}

  ngOnInit(): void {
    this.formLogin = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }

  userModel = new User('', '');
  mensagem = '';

  logar() {
    this.loginService
      .login(this.userModel)
      .pipe(
        this.toast.observe({
          success: 'Logado com sucesso',
          loading: 'Logando...',
          error: 'Email ou senha errado',
        })
      )
      .subscribe(
        (response) => {
          this.router.navigateByUrl('/logado');
        },
        (respostaErro) => {
          this.mensagem = respostaErro.error;
          console.log(this.mensagem);
        }
      );
  }
}
