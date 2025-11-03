// project-detail.component.ts
import { Component, OnInit, OnDestroy, signal } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Project } from '../../../../core/models/project.model';
import { ProjectService } from '../../../../core/services/project.service';

@Component({
  selector: 'app-project-information',
  templateUrl: './project-information.component.html',
  styleUrl: './project-information.component.css',
  standalone: true,
  imports: [] 
})
export class ProjectDetailComponent implements OnInit, OnDestroy {
  info = signal<Project | null>(null);
  private paramSub!: Subscription;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private projectService: ProjectService
  ) {}

  ngOnInit(): void {
    this.paramSub = this.route.paramMap.subscribe(params => {
      const id = +params.get('id')!;
      if (id) {
        this.loadInfo(id);
      }
    });
  }

  loadInfo(id: number): void {
    this.projectService.getProjectById(id).subscribe({
      next: (data) => this.info.set(data || null),
      error: () => this.info.set(null)
    });
  }

  goBack(): void {
    this.router.navigate(['../'], { relativeTo: this.route });
  }

  ngOnDestroy(): void {
    this.paramSub.unsubscribe();
  }
}