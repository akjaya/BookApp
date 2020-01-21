// import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';
// import { FavouriteComponent } from './favourite.component';
// import { ReactiveFormsModule, FormGroupDirective } from '@angular/forms';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { MatToolbarModule } from '@angular/material/toolbar';
// import { MatIconModule } from '@angular/material/icon';
// import { MatTooltipModule } from '@angular/material/tooltip';
// import { HttpClientModule } from '@angular/common/http';
// import { FormsModule } from '@angular/forms';
// import { MatFormFieldModule } from '@angular/material/form-field';
// import { MatInputModule } from '@angular/material/input';
// import { MatButtonModule, MatSnackBar, MatSnackBarModule } from '@angular/material';
// import { MatPaginatorModule } from '@angular/material/paginator';
// import { MatCardModule } from '@angular/material/card';
// import { MatButtonToggleModule } from '@angular/material/button-toggle';
// import { MatDialogModule } from '@angular/material';
// import { By } from '@angular/platform-browser';
// import { RouterTestingModule } from '@angular/router/testing';
// import { AuthenticationService } from 'src/app/authentication.service';
// import { HttpClientTestingModule } from '@angular/common/http/testing';
// import { RouterserviceService } from 'src/app/routerservice.service';
// import { NavbarComponent } from '../navbar/navbar.component';
// import{FooterComponent} from '../footer/footer.component';

// import { BrowserModule } from '@angular/platform-browser';
// import { NgModule } from '@angular/core';
// import { AppRoutingModule } from '../app-routing.module';
// import { AppComponent } from '../app.component';
// import { LoginComponent } from '../login/login.component';
// import { RegisterComponent } from '../register/register.component';
// import { DashboardComponent } from '../dashboard/dashboard.component';
// import { Routes, RouterModule } from '@angular/router';
// import { HTTP_INTERCEPTORS } from '@angular/common/http';
//  import {NgxPaginationModule} from 'ngx-pagination';
// import { RatingModule } from 'ng-starrating';
// import { HomeComponent } from '../home/home.component';
// import { EditComponent } from '../edit/edit.component';
// import { SearchComponent } from '../search/search.component';
// import { RecommendationComponent } from '../recommendations/recommendation.component';
// import { MyrecommendationComponent } from '../my-recommendation/myrecommendation.component';
// import { AuthorComponent } from '../author/author.component';
// import { GoogleApisService } from '../google-apis.service';
// import { LoginguardGuard } from '../login.guard';

// import {MatCheckboxModule} from '@angular/material/checkbox';
// import { SearchresultsComponent } from '../searchresults/searchresults.component';
// import {DialogComponent} from '../dialog/dialog.component';
// import { Dialog1Component } from '../dialog1/dialog1.component';
// import { CommentComponent } from '../comment/comment.component';
// import { BookDetailsComponent } from '../book-details/book-details.component';
// import { InternalService } from '../internal.service';
// import { AuthInterceptorService } from '../auth-interceptor.service';




// describe('FavoriteComponent', () => {
//   let favcomponent: FavouriteComponent;
//   let fixture: ComponentFixture<FavouriteComponent>;
//   let authService: AuthenticationService;
//   let routerService: RouterserviceService;
//   let mySpy: any;
//   let obj: FormGroupDirective;
//   beforeEach(async(() => {
//     TestBed.configureTestingModule({
//         declarations: [FavouriteComponent,NavbarComponent,DialogComponent,Dialog1Component,CommentComponent,BookDetailsComponent,
//           SearchresultsComponent,FooterComponent,DashboardComponent,AuthorComponent,LoginComponent,MyrecommendationComponent,
//           RecommendationComponent,SearchComponent,EditComponent,HomeComponent,AppComponent,AppRoutingModule,RegisterComponent],
//         imports: [ReactiveFormsModule,
//             BrowserAnimationsModule,
//             MatButtonToggleModule,
//             FormsModule,
//             RouterTestingModule,
//             MatCardModule,
//             MatFormFieldModule,
//             HttpClientModule,
//             MatInputModule,
//             MatPaginatorModule,
//             ReactiveFormsModule,
//             MatButtonModule,
//             ReactiveFormsModule,
//             MatSnackBarModule,
//             HttpClientTestingModule,
//             MatIconModule,
//             MatTooltipModule,
//             MatDialogModule,
//             MatCheckboxModule,
//             RatingModule,
//             NgxPaginationModule,
//             RouterModule ,
//             NgModule,
//             BrowserModule
//         ],
//         providers: [AuthenticationService, RouterserviceService,AuthInterceptorService,InternalService, GoogleApisService,SearchComponent]
//     })
//         .compileComponents();
//       }));

//       beforeEach(() => {
//         fixture = TestBed.createComponent(FavouriteComponent);
//         favcomponent = fixture.componentInstance;
//         authService = TestBed.get(AuthenticationService);
//         routerService = TestBed.get(RouterserviceService);
//         fixture.detectChanges();
//       });
//       it('should create', async() => {
//         expect(favcomponent).toBeTruthy();
//       });

//       // it('should contain div tag', () => {
//       //   let element = fixture.debugElement.query(By.css('div'));
//       //   expect(element).toBeTruthy();
//       // });
// // it('should contain h1 tag', () => {
// //   let element = fixture.debugElement.query(By.css('h1'));
// //   expect(element).toBeTruthy();
// // });
// // it('form should be invalid when the fields are left empty', async(() => {
// //     expect(favcomponent.deleteFromFavourites(bk.id,bk.bookId,bk.username)).toBeTruthy();
// // }));
// // it('should contain mat card tag', () => {
// //   let element = fixture.debugElement.query(By.css('mat-card-content'));
// //   expect(element).toBeTruthy();
// // });
// });
