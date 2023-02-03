import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TheFirstPageComponent } from './the-first-page.component';

describe('TheFirstPageComponent', () => {
  let component: TheFirstPageComponent;
  let fixture: ComponentFixture<TheFirstPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TheFirstPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TheFirstPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
