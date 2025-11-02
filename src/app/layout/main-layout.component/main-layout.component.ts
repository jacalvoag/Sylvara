import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from '../sidebar.component/sidebar.component';
import { HeaderComponent } from '../header.component/header.component';
import { SidebarService } from '../../core/services/sidebar.service';
import { Observable, Subscription, filter } from 'rxjs';

@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [SidebarComponent, HeaderComponent, RouterOutlet],
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.css']
})
export class MainLayoutComponent implements OnInit, OnDestroy {
  currentPage: string = 'Home';
  private routerSub!: Subscription;

  constructor(
    private sidebarService: SidebarService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.updatePageTitle();
    
    this.routerSub = this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        this.updatePageTitle();
      });
  }

  private updatePageTitle(): void {
    let child = this.route;
    while (child.firstChild) {
      child = child.firstChild;
    }
    this.currentPage = child.snapshot.data['title'] || 'Home';
  }

  ngOnDestroy(): void {
    this.routerSub?.unsubscribe();
  }
}