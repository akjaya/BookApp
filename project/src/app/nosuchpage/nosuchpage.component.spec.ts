import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NosuchpageComponent } from './nosuchpage.component';

describe('NosuchpageComponent', () => {
  let component: NosuchpageComponent;
  let fixture: ComponentFixture<NosuchpageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NosuchpageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NosuchpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});
