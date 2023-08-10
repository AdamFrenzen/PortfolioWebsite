import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GreatWaveComponent } from './great-wave.component';

describe('GreatWaveComponent', () => {
  let component: GreatWaveComponent;
  let fixture: ComponentFixture<GreatWaveComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GreatWaveComponent]
    });
    fixture = TestBed.createComponent(GreatWaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
