import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviecompComponent } from './moviecomp.component';

describe('MoviecompComponent', () => {
  let component: MoviecompComponent;
  let fixture: ComponentFixture<MoviecompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MoviecompComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MoviecompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
