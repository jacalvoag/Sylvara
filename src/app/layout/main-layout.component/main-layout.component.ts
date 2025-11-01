import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from '../sidebar.component/sidebar.component';
import { HeaderComponent } from '../header.component/header.component';
import { SidebarService } from '../../core/services/sidebar.service';
import { Observable } from 'rxjs';
import { OnInit } from '@angular/core';

@Component({

  imports: [SidebarComponent, HeaderComponent, RouterOutlet],
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.css']
})
export class MainLayoutComponent implements OnInit {
  collapsed$: Observable<boolean>;

  constructor(private sidebarService: SidebarService) {
    this.collapsed$ = this.sidebarService.collapsed$;
  }

  ngOnInit(): void {}
}