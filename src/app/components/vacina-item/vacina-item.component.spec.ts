import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VacinaItemComponent } from './vacina-item.component';

describe('VacinaItemComponent', () => {
  let component: VacinaItemComponent;
  let fixture: ComponentFixture<VacinaItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VacinaItemComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VacinaItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
