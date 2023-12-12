import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PartidospagePage } from './partidospage.page';

describe('PartidospagePage', () => {
  let component: PartidospagePage;
  let fixture: ComponentFixture<PartidospagePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PartidospagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
