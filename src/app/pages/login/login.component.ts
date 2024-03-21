import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoadingService } from 'src/app/services/loading/loading.service';
import { LoginService } from 'src/app/services/login/login.service';
import { ToastService } from 'src/app/services/toast/toast.service';
import { UserService } from 'src/app/services/user/user.service';
import { ValidatorService } from 'src/app/services/validator/validator.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent extends ValidatorService {

  loginForm: FormGroup = new FormGroup({
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  })

  constructor(private router: Router,
    private userService: UserService,
    private loginService: LoginService,
    private loadingService: LoadingService,
    public toastService: ToastService) {
    super();
  }

  ngOnInit(): void {
  }

  login() {
    this.toastService.clear();
    let email = this.loginForm.get('email').value;
    email = email.trim().toLowerCase().replace(/\s/g, '');
    this.loginForm.get('email').setValue(email);

    this.loginForm.get('email').setErrors(this.validateEmail(this.loginForm.get('email')));

    if (this.loginForm.invalid) {
      this.toastService.show('Formulário inválido. Verifique os campos marcados.', {
        classname: 'toast-alert not-logged-user'
      })
      return
    }

    this.loadingService.setLoadingState(true);
    this.loginService.login(this.loginForm.value).subscribe(async (login: { msg: string, token: string }) => {
      localStorage.setItem('esp_tkn', login.token);
      await this.userService.setLoggedUser();
      this.loadingService.setLoadingState(false);
      this.router.navigate(['/wines']);
    }, error => {
      this.toastService.show(error, {
        classname: 'toast-danger toast not-logged-user'
      })

      this.loadingService.setLoadingState(false);
    });

  }


  password_show_hide() {
    var x: any = document.getElementById("password");
    var show_eye = document.getElementById("show_eye");
    var hide_eye = document.getElementById("hide_eye");
    hide_eye.classList.remove("d-none");
    if (x.type === "password") {
      x.type = "text";
      show_eye.style.display = "none";
      hide_eye.style.display = "block";
    } else {
      x.type = "password";
      show_eye.style.display = "block";
      hide_eye.style.display = "none";
    }
  }

}
