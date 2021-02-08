import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {AuthService} from '../../../services';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  form: FormGroup;

  constructor(private authService: AuthService) {
  }

  ngOnInit(): void {
    this.form = new FormGroup({
      username: new FormControl(''),
      password: new FormControl(''),
      re_password: new FormControl('')
    }, [this.passwordValidator.bind(this)]);
  }

  passwordValidator(form: FormGroup): { passError: boolean } | null {
    const password = form.controls.password;
    const rePassword = form.controls.re_password;
    if (password.value !== rePassword.value) {
      return {passError: true};
    }
    return null;
  }

  register(form: FormGroup): void {
    console.log(form);
  }
}
