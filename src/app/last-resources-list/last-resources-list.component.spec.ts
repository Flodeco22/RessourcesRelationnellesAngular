import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LastResourcesListComponent } from './last-resources-list.component';

describe('LastResourcesListComponent', () => {
  let component: LastResourcesListComponent;
  let fixture: ComponentFixture<LastResourcesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LastResourcesListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LastResourcesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
