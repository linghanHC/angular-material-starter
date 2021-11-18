import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { SimpleformComponent } from './simpleform/simpleform.component';

@NgModule({
  declarations: [SimpleformComponent],
  imports: [SharedModule],
  exports: [SharedModule],
})
export class AppFormsModule {}
