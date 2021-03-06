import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { SharedModule, UserData, ConferenceData } from '@shared';
import { CoreModule } from './@core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        SharedModule,
        CoreModule.forRoot(),
    ],
    declarations: [AppComponent],
    providers: [UserData, ConferenceData],
    bootstrap: [AppComponent],
})
export class AppModule {}
