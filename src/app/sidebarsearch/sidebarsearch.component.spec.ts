import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarsearchComponent } from './sidebarsearch.component';

describe('SidebarsearchComponent', () => {
  let component: SidebarsearchComponent;
  let fixture: ComponentFixture<SidebarsearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SidebarsearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarsearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
