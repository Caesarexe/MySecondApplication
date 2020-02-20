import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { errorRoute } from './layouts/error/error.route';
import { navbarRoute } from './layouts/navbar/navbar.route';
import { DEBUG_INFO_ENABLED } from 'app/app.constants';
import { ProductsComponent } from 'app/products/products.component';
import { ContactComponent } from 'app/contact/contact.component';
import { AboutComponent } from 'app/about/about.component';

import { UserRouteAccessService } from 'app/core/auth/user-route-access-service';

const LAYOUT_ROUTES = [navbarRoute, ...errorRoute];

@NgModule({
  imports: [
    RouterModule.forRoot(
      [
        {
          path: 'admin',
          data: {
            authorities: ['ROLE_ADMIN']
          },
          canActivate: [UserRouteAccessService],
          loadChildren: () => import('./admin/admin-routing.module').then(m => m.AdminRoutingModule)
        },
        {
          path: 'products',
          component: ProductsComponent
        },
        {
          path: 'contact',
          component: ContactComponent
        },
        {
          path: 'about',
          component: AboutComponent
        },
        ...LAYOUT_ROUTES
      ],
      { enableTracing: DEBUG_INFO_ENABLED }
    )
  ],
  exports: [RouterModule]
})
export class MyAppAppRoutingModule {}
