import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from '../sidebar.component/sidebar.component';
import { HeaderComponent } from '../header.component/header.component';
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
  let route = this.route;
  const titles: string[] = [];

  while (route.firstChild) {
    route = route.firstChild;
    if (route.snapshot.data['title']) {
      titles.push(route.snapshot.data['title']);
    }
  }

  this.currentPage = titles.join(' > ') || 'Home';
}

  ngOnDestroy(): void {
    this.routerSub?.unsubscribe();
  }
}