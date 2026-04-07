import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tateti } from './tateti';

describe('Tateti', () => {
  let component: Tateti;
  let fixture: ComponentFixture<Tateti>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Tateti],
    }).compileComponents();

    fixture = TestBed.createComponent(Tateti);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
