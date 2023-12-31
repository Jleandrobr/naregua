import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatBadgeModule} from '@angular/material/badge';
import {MatMenuModule} from '@angular/material/menu';
import {LayoutModule} from './layout/layout.module';
import {HttpClientModule} from '@angular/common/http';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MensagemService} from './shared/services/mensagem.service';
import {IMensagem} from './shared/modelo/IMensagem';
import {FirestoreModule} from './firestore/firestore.module';
import {SalaoModule} from "./salao/salao.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatIconModule,
    MatBadgeModule,
    MatMenuModule,
    LayoutModule,
    SalaoModule,
    HttpClientModule,
    MatSnackBarModule,
    FirestoreModule,
  ],
  providers: [
    {
      provide: IMensagem,
      useClass: MensagemService
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
