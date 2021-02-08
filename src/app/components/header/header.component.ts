import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {AuthService} from '../../services';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isAuthenticate: boolean;
  @Input()
  username: string;

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private authService: AuthService) {
  }

  ngOnInit(): void {
  }

  login(): void {
    this.router.navigate(['auth']);
  }

  register(): void {
    this.router.navigate(['auth', 'register']);

  }
}
