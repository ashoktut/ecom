import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  specials: any[] = []; //for promotions
  categories: any[] = []; //for categories of items

  constructor() {}

  ngOnInit() {
    this.specials = [
      { special: '../../../../assets/images/specials/specials1.jpg' },
      { special: '../../../../assets/images/specials/specials2.jpg' },
      { special: '../../../../assets/images/specials/specials3.jpg' },
    ];

    this.categories = [
      {
        catId: '1',
        catName: 'Chicken',
        photo: '../../../../assets/categories/chicken2.jpg',
        items: [
          'Chicken Gizzards',
          'Chicky Fill',
          '3 Wings',
          '3 Wings Meal',
          '4 Wings Meal',
          '8 Wings Meal',
          '1/4 Chicken Chips',
          '1/4 Chicken Meal',
          'Half Chicken',
          'Half Chicken + Chips',
          'Half Chicken Meal',
          'Full Chicken',
          'Full Chicken + Chips',
          'Full Chicken Meal',
        ],
      },
      {
        catId: '2',
        catName: 'Beef',
        photo: '../../../../assets/categories/beef2.jpg',
        items: [
            'Oxtail Meal',
            'Steak Chippa',
            'Steak Zilla',
            'High Steaks',
          ],
        },
      {
        catId: '3',
        catName: 'Burgers',
        photo: '../../../../assets/categories/extras2.jpg',
        items:  [
          'Single Dag',
          'Double Dag',
          'Triple Dag',
          'Single Burg',
          'Double Burg',
          'Triple Burg',
          'Burg Zilla',
          ],
        },
      {
        catId: '4',
        catName: 'Combos',
        photo: '../../../../assets/categories/extras1.jpg',
        items: [
          'Meat Me',
          'Chicky Chow',
        ],
        },
      {
        catId: '5',
        catName: 'Extras',
        photo: '../../../../assets/categories/extras2.jpg',
        items: [
          'Pap',
          'Chakalaka',
          'Coleslaw',
          'Chips',
          'Bun Rolls',
          'Green Salad',
          ],
        },
      {
        catId: '6',
        catName: 'Snacks',
        photo: '../../../../assets/categories/snacks3.jpg',
        items: [
          'Doritos / Lays / Simba',
          'Biscuits',
          ],
        },
      {
        catId: '7',
        catName: 'Fruits',
        photo: '../../../../assets/categories/drinks2.jpg',
        items: [
            'Apple',
            'Orange',
            'Grapes',
            'Banana',
          ],
        },
      {
        catId: '8',
        catName: 'Drinks',
        photo: '../../../../assets/categories/drinks2.jpg',
        items: [
            'Energy Drink',
            'Buddy Coke',
            '2lt Cold Drink',
          ],
        },
      {
        catId: '9',
        catName: 'Dessert',
        photo: '../../../../assets/categories/drinks1.jpg',
        items: [
          'Ice Cream',
          'Fruit Salad',
          '2lt Cold Drink',
            ],
        },
    ];
  }
}
