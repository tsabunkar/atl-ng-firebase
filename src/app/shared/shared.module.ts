import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextboxComponent } from './components/textbox/textbox.component';
import { MaterialModule } from './modules/material.module';

@NgModule({
  declarations: [TextboxComponent],
  imports: [CommonModule, MaterialModule],
  exports: [MaterialModule]
})
export class SharedModule {}
