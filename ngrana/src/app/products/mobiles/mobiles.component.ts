import { Component, OnInit } from '@angular/core';

import { MOBPARTS } from './mock';
import { MobParts } from './mob-parts';
@Component({
  selector: 'app-mobiles',
  templateUrl: './mobiles.component.html',
})
export class MobilesComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  num: number = 169;

  mobParts: MobParts[] = MOBPARTS;

  calcProds() {
    let sum = 0;

    for (let mobPart of this.mobParts) {
      sum = sum + mobPart.inStock;
    }

    return sum;
  }

  upQuantity(mobPart) {
    if (mobPart.Quantity < mobPart.inStock) mobPart.quantity++;
  }

  downQuantity(mobPart) {
    if (mobPart.Quantity != 0) mobPart.quantity--;
  }

  catchVal(event) {
    // console.clear();

    console.log('event :', event);
  }
}
