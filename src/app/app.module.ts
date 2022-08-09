import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { DefaultStrategyComponent } from './components/default.component';
import { PushStrategyComponent } from './components/onpush.component';
import { DisplayComponent } from './components/display.component';
import { EditorComponent } from './components/editor.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [
    AppComponent,
    DefaultStrategyComponent,
    PushStrategyComponent,
    DisplayComponent,
    EditorComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
