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

import { NavbarComponent } from './navbar.component';
import { SearchresultsComponent } from '../searchresults/searchresults.component';
import{FooterComponent} from '../footer/footer.component';


describe('navbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;
  let authenticationService: AuthenticationService;
  let routerService: RouterserviceService;
  let mySpy: any;
  let obj: FormGroupDirective;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavbarComponent,SearchComponent,SearchresultsComponent,FooterComponent ],
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
    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    authenticationService = TestBed.get(AuthenticationService);
    routerService = TestBed.get(RouterserviceService);
    fixture.detectChanges();
  });
  it('should create', async() => {
    expect(component).toBeTruthy();
  });
  it('should contain nav tag', () => {
    let element = fixture.debugElement.query(By.css('nav'));
    expect(element).toBeTruthy();
  });
  it('should contain div tag', () => {
    let element = fixture.debugElement.query(By.css('div'));
    expect(element).toBeTruthy();
  });
  it('should contain button tag', () => {
    let element = fixture.debugElement.query(By.css('button'));
    expect(element).toBeTruthy();
  });
  it('should contain span tag', () => {
    let element = fixture.debugElement.query(By.css('span'));
    expect(element).toBeTruthy();
  });
  it('should contain ul tag', () => {
    let element = fixture.debugElement.query(By.css('ul'));
    expect(element).toBeTruthy();
  });
});
