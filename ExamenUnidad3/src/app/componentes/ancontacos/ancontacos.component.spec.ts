import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AncontacosComponent } from './ancontacos.component';

describe('AncontacosComponent', () => {
  let component: AncontacosComponent;
  let fixture: ComponentFixture<AncontacosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AncontacosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AncontacosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
