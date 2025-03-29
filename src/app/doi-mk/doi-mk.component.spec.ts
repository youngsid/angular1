import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoiMKComponent } from './doi-mk.component';

describe('DoiMKComponent', () => {
  let component: DoiMKComponent;
  let fixture: ComponentFixture<DoiMKComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DoiMKComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DoiMKComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
