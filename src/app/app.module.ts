import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getDatabase, provideDatabase} from '@angular/fire/database';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule, 
    IonicModule.forRoot(), 
    AppRoutingModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)), // Esta línea utiliza la configuración de environment.firebase
    provideDatabase(() => getDatabase()),
    provideFirebaseApp(() => initializeApp({  // Esta línea reemplaza con tu configuración personalizada
      "apiKey": "AIzaSyA5_16-UCUNoKvZR5m395N72BuJ_HsUJeE",
      "authDomain": "dianoche-d6209.firebaseapp.com",
      "projectId": "dianoche-d6209",
      "storageBucket": "dianoche-d6209.appspot.com",
      "messagingSenderId": "167876506913",
      "appId": "1:167876506913:web:543481c6ed7fbbfd157a60"
    })),
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
