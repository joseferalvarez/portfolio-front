import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LabsPage } from './labs-page';

describe('LabsPage', () => {
  let component: LabsPage;
  let fixture: ComponentFixture<LabsPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LabsPage],
    }).compileComponents();

    fixture = TestBed.createComponent(LabsPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
