import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LowercaseComponent } from './lowercase/lowercase.component';
import { CurrencyComponent } from './currency/currency.component';
import { DecimalComponent } from './decimal/decimal.component';
import { PercentComponent } from './percent/percent.component';
import { DateComponent } from './date/date.component';
import { SliceComponent } from './slice/slice.component';
import { JsonComponent } from './json/json.component';
import { EchoPipe } from './echo.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [LowercaseComponent, CurrencyComponent, DecimalComponent, PercentComponent, DateComponent, SliceComponent, JsonComponent,
                 EchoPipe],
  exports: [LowercaseComponent, CurrencyComponent, DecimalComponent, PercentComponent, DateComponent, SliceComponent, JsonComponent,
            EchoPipe]
})
export class PipeSamplesModule { }
