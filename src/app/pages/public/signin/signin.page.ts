import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastService } from 'src/app/services/toast/toast.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.page.html',
  styleUrls: ['./signin.page.scss'],
})
export class SigninPage implements OnInit {

  current_year: number = new Date().getFullYear();

  signin_form: FormGroup;
  submit_attempt: boolean = false;

  constructor(
    private authService: AuthService,
    private loadingController: LoadingController,
    private formBuilder: FormBuilder,
    private toastService: ToastService,
    private router: Router
  ) { }

  ngOnInit() {

    // Setup form
    this.signin_form = this.formBuilder.group({
      email: ['', Validators.compose([Validators.email, Validators.required])],
      password: ['', Validators.compose([Validators.minLength(6), Validators.required])]
    });


    this.signin_form.get('email').setValue('lionel.traore@mail.com');
    this.signin_form.get('password').setValue('123456');
  }

  // Se connecter
  async signIn() {

    this.submit_attempt = true;

    // Si email ou mot de passe vide
    if (this.signin_form.value.email == '' || this.signin_form.value.password == '') {
      this.toastService.presentToast('Error', 'Veuillez saisir votre adresse e-mail et votre mot de passe', 'top', 'danger', 2000);

    } else {

      const loading = await this.loadingController.create({
        cssClass: 'default-loading',
        message: '<p>Connexion...</p><span>Veuillez patienter.</span>',
        spinner: 'crescent'
      });
      await loading.present();


      // Fake timeout
      setTimeout(async () => {
        // Sign in success
        await this.router.navigate(['/home']);
        loading.dismiss();
      }, 2000);

    }
  }

}
