import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { HttpClientModule }    from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { ShowDetailComponent } from './show-detail/show-detail.component';
import { ShowDetailDescriptionComponent } from './show-detail-description/show-detail-description.component';
import { ShowDetailCastComponent } from './show-detail-cast/show-detail-cast.component';
import { ShowDetailEpisodesComponent } from './show-detail-episodes/show-detail-episodes.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    ShowDetailComponent,
    ShowDetailDescriptionComponent,
    ShowDetailCastComponent,
    ShowDetailEpisodesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
