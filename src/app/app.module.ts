import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LegendChooserComponent } from './legend-chooser/legend-chooser.component';

@NgModule({
  declarations: [
    AppComponent,
    LegendChooserComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
