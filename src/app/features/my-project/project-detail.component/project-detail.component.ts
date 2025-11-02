import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { Project } from '../../../core/models/project.model';
import { ProjectService } from '../../../core/services/project.service';

@Component({
  selector: 'app-project-detail.component',
  imports: [],
  templateUrl: './project-detail.component.html',
  styleUrl: './project-detail.component.css',
})
export class ProjectDetailComponent {

  projectId: number | null = null;
  private paramSub!: Subscription;
  info: Project | null = null;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private projectService: ProjectService,
  ) {}

  ngOnInit(): void {
    // ESCUCHA CAMBIOS EN LOS PARÁMETROS
    this.paramSub = this.route.paramMap.subscribe(params => {
      this.projectId = +params.get('id')! || null;
      console.log('Proyecto actual:', this.projectId);

    });
    this.loadInfo()
    


  }

  loadInfo(): void{
      this.projectService.getProjectById(this.projectId!).subscribe({
        next: (data) =>{
          this.info = data!;
      },
      error: (err) =>{
        console.log('gg')
      }
    }

    )
    
  }

  goBack(): void {
    this.router.navigate(['../'], { relativeTo: this.route });
  }

  ngOnDestroy(): void {
    this.paramSub.unsubscribe(); // Evita memory leak
  }
}
