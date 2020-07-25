import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mobile-menu',
  template: `
    <nav class="white" role="navigation">
      <div class="nav-wrapper container">
        <a id="logo-container" href="#" class="brand-logo">DREAMER</a>
        <ul class="right hide-on-med-and-down">
          <li><a routerLink="/mobiles">Mobiles</a></li>
          <li><a routerLink="/mobiles/Samsung">Samsung</a></li>
          <li><a routerLink="/mobiles/Redmi">Redmi</a></li>
          <li><a routerLink="/vivo">Vivo</a></li>
        </ul>
      </div>
    </nav>
    <router-outlet></router-outlet>
  `,
})
export class MobileMenuComponent {}
