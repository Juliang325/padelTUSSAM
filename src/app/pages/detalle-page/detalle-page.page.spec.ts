import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DetallePagePage } from './detalle-page.page';

describe('DetallePagePage', () => {
  let component: DetallePagePage;
  let fixture: ComponentFixture<DetallePagePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DetallePagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
