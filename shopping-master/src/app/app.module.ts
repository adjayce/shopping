import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ProductComponent } from './product/product';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { UserService } from './user.service';
import { MusicsService } from './musics.service';
import { CartService } from './cart.service';
import { RegisterComponent } from './register/register.component';
import { MusicListComponent } from './music-list/music-list.component';
import { MusicDetailComponent } from './music-detail/music-detail.component';
import { CartComponent } from './cart/cart.component';
import { QuantityComponent } from './cart/quantity/quantity.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    NavComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    MusicListComponent,
    MusicDetailComponent,
    CartComponent,
    QuantityComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'product',
        component: ProductComponent
      },
      {
        path:'login',
        component:LoginComponent
      },
      {
        path: 'register',
        component: RegisterComponent
      },
      {
        path: 'music-list',
        component: MusicListComponent
      },
      {
        path: 'music-detail/:id',
        component: MusicDetailComponent
      },
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      }
    ])
  ],
  providers: [
    UserService,
    MusicsService,
    CartService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
