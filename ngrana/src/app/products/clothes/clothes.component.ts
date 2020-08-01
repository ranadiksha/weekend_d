import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clothes',
  templateUrl: './clothes.component.html',
  styles: [],
})
export class ClothesComponent {
  num: any;
  constructor(private activatedRoute: ActivatedRoute) {
    activatedRoute.paramMap.subscribe((res) => {
      console.log('res :', res.get('vacation'));
      this.num = res.get('vacation');
    });
  }
}
