import { Component, OnInit } from '@angular/core';
import { Project } from '../../../../core/models/project.model';
import { ProjectService } from '../../../../core/services/project.service';
import { RouterOutlet, RouterLinkWithHref, Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HostListener } from '@angular/core';
import { filter } from 'rxjs';

@Component({
  selector: 'app-study-zones',
  imports: [],
  templateUrl: './study-zones.component.html',
  styleUrl: './study-zones.component.css',
  standalone: true,
})
export class StudyZonesComponent {

}
