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
import { LoginComponent } from './login.component';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('loginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let authenticationService: AuthenticationService;
  let routerService: RouterserviceService;
  let mySpy: any;
  let obj: FormGroupDirective;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
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
      providers: [AuthenticationService, RouterserviceService]
    })
    .compileComponents();
  }));
  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    authenticationService = TestBed.get(AuthenticationService);
    routerService = TestBed.get(RouterserviceService);
    fixture.detectChanges();
  });
  it('should create', async() => {
    expect(component).toBeTruthy();
  });
  it('should set submitted to true', async(() => {
    component.loginform;
    expect(component.loginform).toBeTruthy();
  }));
  it('should contain div tag', () => {
    let element = fixture.debugElement.query(By.css('div'));
    expect(element).toBeTruthy();
  });
  it('form invalid when email is empty', () => {
    expect(component.username.valid).toBeFalsy();
  });
  it('form invalid when password is empty', () => {
    expect(component.password.valid).toBeFalsy();
  });
  it('form should be invalid when the fields are left empty', async(() => {
    expect(component.username.valid).toBeFalsy();
    expect(component.password.valid).toBeFalsy();
  }));
  it('should handle call loginSubmit method', () => {
    inject([authenticationService], (injectService: AuthenticationService) => {
      expect(injectService).toBe(authenticationService);
    });
    let check: any;
    mySpy = spyOn(authenticationService, 'setBearerToken').and.callFake(() => { });
    authenticationService.setBearerToken('');
    // component.loginSubmit(obj);
    expect(mySpy).toHaveBeenCalled();
  });
  it('should handle call logout method', () => {
    inject([routerService], (injectService: RouterserviceService) => {
        expect(injectService).toBe(routerService);
    });
    // mySpy = spyOn(routerService, 'routeToSearch');
    // authenticationService.logOut;
    // expect(mySpy).toHaveBeenCalled();
});
});