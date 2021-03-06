import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LargeFilledSymbolsComponent } from './large-filled-symbols.component';
import {ArchwizardModule} from 'ng2-archwizard';

@NgModule({
  imports: [
    CommonModule,
    ArchwizardModule
  ],
  declarations: [LargeFilledSymbolsComponent],
  exports: [LargeFilledSymbolsComponent]
})
export class LargeFilledSymbolsModule { }
