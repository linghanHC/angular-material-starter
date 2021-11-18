import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { RoutePath } from './forms/route-path.enum';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { AppFormsModule } from './forms/app-forms.module';
// TODO ReviewPageComponent ... are in and exported from  AppFormsModule, but I still need to import it explicityly, why? to resolve
import { ReviewPageComponent } from './forms/review-page/review-page.component';
import { ShippingPageComponent } from './forms/shipping-page/shipping-page.component';
import { PaymentPageComponent } from './forms/payment-page/payment-page.component';
import { DeliveryPageComponent } from './forms/delivery-page/delivery-page.component';

const routes: Routes = [
  { path: '', component: LandingpageComponent },
  { path: 'about', component: AboutComponent },
  { path: RoutePath.delivery, component: DeliveryPageComponent },
  // TODO
  // { path: RoutePath.shipping, component: ShippingPageComponent, canActivate: [CanActivateForms] },
  // { path: RoutePath.payment, component: PaymentPageComponent, canActivate: [CanActivateForms] },
  { path: RoutePath.shipping, component: ShippingPageComponent },
  { path: RoutePath.payment, component: PaymentPageComponent },
  {
    path: RoutePath.review,
    component: ReviewPageComponent,
  },
];

@NgModule({
  imports: [AppFormsModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
