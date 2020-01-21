import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';
import {  By } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule, FormGroupDirective } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthenticationService } from '../authentication.service';
import { RouterserviceService } from '../routerservice.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import {MatDialogModule} from '@angular/material/dialog';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatIconModule} from '@angular/material/icon';
import { LoginComponent } from '../login/login.component';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { SearchComponent } from '../search/search.component';

import { NavbarComponent } from '../navbar/navbar.component';
import { SearchresultsComponent } from '../searchresults/searchresults.component';
import { FooterComponent } from '../footer/footer.component';
import { CommentComponent } from './comment.component';

describe('commentComponent', () => {
  let component: CommentComponent;
  let fixture: ComponentFixture<CommentComponent>;
  let authenticationService: AuthenticationService;
  let routerService: RouterserviceService;
  let mySpy: any;
  let obj: FormGroupDirective;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavbarComponent,SearchComponent,SearchresultsComponent,FooterComponent ,CommentComponent],
      imports: [ReactiveFormsModule,
        BrowserAnimationsModule,
        MatIconModule,
        FormsModule,
        RouterTestingModule,
        MatFormFieldModule,
        HttpClientModule,
        MatInputModule,
        MatPaginatorModule,
        ReactiveFormsModule,
        MatButtonModule,
        MatCardModule,
        ReactiveFormsModule,
        MatDialogModule,
        MatSnackBarModule,
        HttpClientTestingModule
      ],
      providers: [AuthenticationService, RouterserviceService,SearchComponent]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommentComponent);
    component = fixture.componentInstance;
    authenticationService = TestBed.get(AuthenticationService);
    routerService = TestBed.get(RouterserviceService);
    fixture.detectChanges();
  });
  it('should create', async() => {
    expect(component).toBeTruthy();
  });
  it('should contain section tag', () => {
    let element = fixture.debugElement.query(By.css('section'));
    expect(element).toBeTruthy();
  });
  // it('should contain div tag', () => {
  //   let element = fixture.debugElement.query(By.css('div'));
  //   expect(element).toBeTruthy();
  // });
  // it('should contain h2 tag', () => {
  //   let element = fixture.debugElement.query(By.css('h2'));
  //   expect(element).toBeTruthy();
  // });
  // it('should contain <mat-card> tag', () => {
  //   let element = fixture.debugElement.query(By.css('<mat-card>'));
  //   expect(element).toBeTruthy();
  // });
  it('should contain h3 tag', () => {
    let element = fixture.debugElement.query(By.css('h3'));
    expect(element).toBeTruthy();
  });
});
