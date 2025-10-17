import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonSizes } from './button-sizes';

describe('ButtonSizes', () => {
  let component: ButtonSizes;
  let fixture: ComponentFixture<ButtonSizes>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonSizes]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonSizes);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
