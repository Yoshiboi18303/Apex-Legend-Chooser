import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LegendChooserComponent } from './legend-chooser/legend-chooser.component';
import { WeaponComboChooserComponent } from './weapon-combo-chooser/weapon-combo-chooser.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    LegendChooserComponent,
    WeaponComboChooserComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
