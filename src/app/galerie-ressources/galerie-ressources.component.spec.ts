import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GalerieRessourcesComponent } from './galerie-ressources.component';

describe('GalerieRessourcesComponent', () => {
  let component: GalerieRessourcesComponent;
  let fixture: ComponentFixture<GalerieRessourcesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GalerieRessourcesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GalerieRessourcesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
