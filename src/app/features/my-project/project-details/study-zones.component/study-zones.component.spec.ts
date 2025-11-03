import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudyZonesComponent } from './study-zones.component';

describe('StudyZonesComponent', () => {
  let component: StudyZonesComponent;
  let fixture: ComponentFixture<StudyZonesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StudyZonesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudyZonesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
