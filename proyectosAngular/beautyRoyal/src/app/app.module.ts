import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';

import { SlideComponent } from './components/slide/slide.component';
import { TablaComponent } from './components/tabla/tabla.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { BotonComponent } from './components/boton/boton.component';
import { AlbumComponent } from './components/album/album.component';
import { ComponentsComponent } from './components/components.component';
import { ModalComponent } from './components/modal/modal.component';
import { PedidosComponent } from './components/pedidos/pedidos.component';
import { AngularFireModule } from "@angular/fire";
import { environment  } from "../environments/environment";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    SlideComponent,
    TablaComponent,
    HeaderComponent,
    FooterComponent,
    BotonComponent,
    AlbumComponent,
    ComponentsComponent,
    ModalComponent,
    PedidosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
