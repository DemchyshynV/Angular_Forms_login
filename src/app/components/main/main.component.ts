import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {IAuth} from '../../interfaces';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  username: string;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    const {username} = this.router.getCurrentNavigation().extras.state as Partial<IAuth>;
    this.username = username;
  }

  ngOnInit(): void {
  }


}
