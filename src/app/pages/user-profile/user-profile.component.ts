import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
  form: any = {
    name: "",
  };

  constructor() { }

  ngOnInit() {
  }

  onSubmit(): void {
    const { name } = this.form;

    // this.authService.login(email, password).subscribe({
    //   next: data => {
    //     this.storageService.saveUser(data.token, data.user);
    //     this.isLoginFailed = false;
    //     this.isLoggedIn = true;
    //     this.reloadPage();
    //   },
    //   error: err => {
    //     console.log(err);
    //     this.errorMessage = err.error;
    //     this.isLoginFailed = true;
    //   }
    // });
  }

}
