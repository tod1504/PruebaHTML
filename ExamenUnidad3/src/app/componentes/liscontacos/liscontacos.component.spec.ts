import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LiscontacosComponent } from './liscontacos.component';

describe('LiscontacosComponent', () => {
  let component: LiscontacosComponent;
  let fixture: ComponentFixture<LiscontacosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LiscontacosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LiscontacosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
