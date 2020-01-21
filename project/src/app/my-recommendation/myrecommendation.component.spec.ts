import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyrecommendationComponent } from './myrecommendation.component';

describe('MyrecommendationComponent', () => {
  let component: MyrecommendationComponent;
  let fixture: ComponentFixture<MyrecommendationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyrecommendationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyrecommendationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});
