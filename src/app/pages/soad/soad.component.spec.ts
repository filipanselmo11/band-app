import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoadComponent } from './soad.component';

describe('SoadComponent', () => {
  let component: SoadComponent;
  let fixture: ComponentFixture<SoadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SoadComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SoadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
