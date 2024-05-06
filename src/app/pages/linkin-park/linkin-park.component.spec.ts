import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkinParkComponent } from './linkin-park.component';

describe('LinkinParkComponent', () => {
  let component: LinkinParkComponent;
  let fixture: ComponentFixture<LinkinParkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LinkinParkComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LinkinParkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
