import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConnectedBackComponent } from './product';

describe('ConnectedBackComponent', () => {
  let component: ConnectedBackComponent;
  let fixture: ComponentFixture<ConnectedBackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConnectedBackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConnectedBackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
