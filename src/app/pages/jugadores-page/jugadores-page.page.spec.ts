import { ComponentFixture, TestBed } from '@angular/core/testing';
import { JugadoresPagePage } from './jugadores-page.page';

describe('JugadoresPagePage', () => {
  let component: JugadoresPagePage;
  let fixture: ComponentFixture<JugadoresPagePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(JugadoresPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
