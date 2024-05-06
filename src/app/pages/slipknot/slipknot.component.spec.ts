import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlipknotComponent } from './slipknot.component';

describe('SlipknotComponent', () => {
  let component: SlipknotComponent;
  let fixture: ComponentFixture<SlipknotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SlipknotComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SlipknotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
