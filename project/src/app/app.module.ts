import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import{FooterComponent} from './footer/footer.component'
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthenticationService } from './authentication.service';
import { RouterserviceService } from './routerservice.service';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
 import {NgxPaginationModule} from 'ngx-pagination';
// import { MatCardModule } from '@angular/material';
import { RatingModule } from 'ng-starrating';
import {MatDialogModule} from '@angular/material/dialog';
import { HomeComponent } from './home/home.component';
import { EditComponent } from './edit/edit.component';
import { SearchComponent } from './search/search.component';
import { RecommendationComponent } from './recommendations/recommendation.component';
import { MyrecommendationComponent } from './my-recommendation/myrecommendation.component';
import { FavouriteComponent } from './favourites/favourite.component';
import { AuthorComponent } from './author/author.component';
import { GoogleApisService } from './google-apis.service';
import { LoginguardGuard } from './login.guard';
//for mat card
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatIconModule} from '@angular/material/icon';
import { SearchresultsComponent } from './searchresults/searchresults.component';
import {DialogComponent} from '../app/dialog/dialog.component'
import { NavbarComponent } from './navbar/navbar.component';
import { Dialog1Component } from './dialog1/dialog1.component';
import { CommentComponent } from './comment/comment.component';
import { BookDetailsComponent } from './book-details/book-details.component';
import { InternalService } from './internal.service';
import { AuthInterceptorService } from './auth-interceptor.service';
import { NosuchpageComponent } from './nosuchpage/nosuchpage.component';





const routes: Routes = [
    {path: 'login', component:  LoginComponent },
    {path:'register',component:  RegisterComponent},
    {path: 'author', component:  AuthorComponent},
    
    {path: 'edit', component:  EditComponent},
    {path: 'favourites', component:  FavouriteComponent},
    {path: 'home', component:  HomeComponent},
    {path: '', component:HomeComponent},
    {path: 'myrecommendation', component:  MyrecommendationComponent},
    {path: 'recommendations', component:  RecommendationComponent},
    {path: 'search', component:  SearchComponent} ,
    {path:'navbar',component:NavbarComponent}  ,
    {path:'comment',component:CommentComponent} ,
    {path:'bookDetails',component:BookDetailsComponent},
    {path:'**',component:NosuchpageComponent}
 ];
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    HomeComponent,
    EditComponent,
    SearchComponent,
    RecommendationComponent,
    MyrecommendationComponent,
    FavouriteComponent,
    AuthorComponent,
    SearchresultsComponent,
    DialogComponent,
    NavbarComponent,
    Dialog1Component,
    CommentComponent,
    BookDetailsComponent,
    FooterComponent,
    NosuchpageComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule, 
    FormsModule ,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    MatDialogModule,
    NgxPaginationModule,
    RatingModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    //---- for mat card-------
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatCheckboxModule ,
    MatIconModule,
    MatSnackBarModule
       // For registration 
    // MdCardModule
    
  ],
  entryComponents:[DialogComponent,Dialog1Component],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass:AuthInterceptorService , multi: true },
    
    
    AuthenticationService,RouterserviceService,GoogleApisService, LoginguardGuard,InternalService,SearchComponent],
  bootstrap: [AppComponent]})
export class AppModule { }

