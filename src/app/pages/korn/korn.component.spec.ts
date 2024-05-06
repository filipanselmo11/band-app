import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KornComponent } from './korn.component';

describe('KornComponent', () => {
  let component: KornComponent;
  let fixture: ComponentFixture<KornComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KornComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(KornComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
