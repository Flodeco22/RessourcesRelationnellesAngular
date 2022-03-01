import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TestPageComponent } from './test-page/test-page.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LastResourcesListComponent } from './last-resources-list/last-resources-list.component';

@NgModule({
  declarations: [
    AppComponent,
    TestPageComponent,
    HeaderComponent,
    FooterComponent,
    LastResourcesListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
