import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { DeliveryPageComponent } from './delivery-page/delivery-page.component';
import { ShippingPageComponent } from './shipping-page/shipping-page.component';
import { ReviewPageComponent } from './review-page/review-page.component';
import { PaymentPageComponent } from './payment-page/payment-page.component';

@NgModule({
  declarations: [
    DeliveryPageComponent,
    ShippingPageComponent,
    ReviewPageComponent,
    PaymentPageComponent,
  ],
  imports: [SharedModule],
  exports: [
    DeliveryPageComponent,
    ShippingPageComponent,
    ReviewPageComponent,
    PaymentPageComponent,
    SharedModule,
  ],
})
export class AppFormsModule {}
