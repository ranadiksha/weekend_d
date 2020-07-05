import { Component } from '@angular/core';

@Component({
  selector: 'app-start',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  styles: [
    `
      .title {
        color: green;
      }
    `,
  ],
})
export class FirstComponent {
  title = 'Angular Welcomes You.!';

  mobParts = [
    {
      id: 1001,
      name: 'Mobile Screen 1',
      inStock: 0,
      prodColor: 'red',
      veg: true,
    },

    {
      id: 1002,
      name: 'Mobile Screen 2',
      inStock: 15,
      prodColor: 'green',

      veg: false,
    },

    {
      id: 1003,
      name: 'Mobile Screen 3',
      inStock: 50,
      prodColor: 'blue',
      veg: true,
    },
  ];
}

/*

<body text="blue" *ngFor=" " >
for-of
*/
