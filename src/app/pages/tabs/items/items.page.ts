import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Storage } from '@capacitor/storage';

@Component({
  selector: 'app-items',
  templateUrl: './items.page.html',
  styleUrls: ['./items.page.scss'],
})
export class ItemsPage implements OnInit {
  id: any;
  items: any[] = [];
  data: any = {};
  cartData: any = {};
  storedData: any = {}; // no category declaration here

  allItems = [
    {
      itemId: '1',
      itemName: 'Chicken Gizzards',
      itemDesc: 'Portion of gizzards',
      itemPrice: '7',
      itemRating: '3.5',
      itemImage: 'https://jsonformatter.org/img/tom-cruise.jpg',
      catId: '1',
    },
    {
      itemId: '2',
      itemName: 'Chicky Fill',
      itemDesc: 'Chicken Fillet + Chips',
      itemPrice: '20',
      itemRating: '3.5',
      itemImage: 'https://jsonformatter.org/img/tom-cruise.jpg',
      catId: '1',
    },
    {
      itemId: '3',
      itemName: '3 Wings',
      itemDesc: '3 Wings only',
      itemPrice: '25',
      itemRating: '3.5',
      itemImage: 'https://jsonformatter.org/img/tom-cruise.jpg',
      catId: '1',
    },
    {
      itemId: '4',
      itemName: '3 Wings Meal',
      itemDesc: '3 Wings + Chips',
      itemPrice: '30',
      itemRating: '3.5',
      itemImage: 'https://jsonformatter.org/img/tom-cruise.jpg',
      catId: '1',
    },
    {
      itemId: '5',
      itemName: '4 Wings Meal',
      itemDesc: '3 Wings + Pap + 2 Sides',
      itemPrice: '50',
      itemRating: '3.5',
      itemImage: 'https://jsonformatter.org/img/tom-cruise.jpg',
      catId: '1',
    },
    {
      itemId: '6',
      itemName: '8 Wings Meal',
      itemDesc: '8 Wings + Chips',
      itemPrice: '70',
      itemRating: '3.5',
      itemImage: 'https://jsonformatter.org/img/tom-cruise.jpg',
      catId: '1',
    },
    {
      itemId: '7',
      itemName: '1/4 Chicken Chips',
      itemDesc: 'Quarter Chicken + Chips',
      itemPrice: '35',
      itemRating: '3.5',
      itemImage: 'https://jsonformatter.org/img/tom-cruise.jpg',
      catId: '1',
    },
    {
      itemId: '8',
      itemName: '1/4 Chicken Meal',
      itemDesc: '1/4 Chicken + Pap + 2 Sides',
      itemPrice: '40',
      itemRating: '3.5',
      itemImage: 'https://jsonformatter.org/img/tom-cruise.jpg',
      catId: '1',
    },
    {
      itemId: '9',
      itemName: 'Half Chicken',
      itemDesc: 'Half Chicken only',
      itemPrice: '50',
      itemRating: '3.5',
      itemImage: 'https://jsonformatter.org/img/tom-cruise.jpg',
      catId: '1',
    },
    {
      itemId: '10',
      itemName: 'Half Chicken + Chips',
      itemDesc: 'Half Chicken + portion of chips',
      itemPrice: '55',
      itemRating: '3.5',
      itemImage: 'https://jsonformatter.org/img/tom-cruise.jpg',
      catId: '1',
    },
    {
      itemId: '11',
      itemName: 'Half Chicken Meal',
      itemDesc: 'Half Chicken + Pap + 2 Sides',
      itemPrice: '60',
      itemRating: '3.5',
      itemImage: 'https://jsonformatter.org/img/tom-cruise.jpg',
      catId: '1',
    },
    {
      itemId: '12',
      itemName: 'Full Chicken',
      itemDesc: 'Full Chicken only',
      itemPrice: '100',
      itemRating: '3.5',
      itemImage: 'https://jsonformatter.org/img/tom-cruise.jpg',
      catId: '1',
    },
    {
      itemId: '13',
      itemName: 'Full Chicken + Chips',
      itemDesc: 'Full Chicken + Portion of Chips',
      itemPrice: '120',
      itemRating: '3.5',
      itemImage: 'https://jsonformatter.org/img/tom-cruise.jpg',
      catId: '1',
    },
    {
      itemId: '14',
      itemName: 'Full Chicken Meal',
      itemDesc: 'Full Chicken + Pap + 2 Sides',
      itemPrice: '130',
      itemRating: '3.5',
      itemImage: 'https://jsonformatter.org/img/tom-cruise.jpg',
      catId: '1',
    },
    {
      itemId: '15',
      itemName: 'Oxtail Meal',
      itemDesc: 'Oxtail + Liver + Pap + 2 Sides',
      itemPrice: '35',
      itemRating: '3.5',
      itemImage: 'https://jsonformatter.org/img/tom-cruise.jpg',
      catId: '2',
    },
    {
      itemId: '16',
      itemName: 'Steak Chippa',
      itemDesc: 'Steak + Chips',
      itemPrice: '50',
      itemRating: '3.5',
      itemImage: 'https://jsonformatter.org/img/tom-cruise.jpg',
      catId: '2',
    },
    {
      itemId: '17',
      itemName: 'Steak Zilla',
      itemDesc: 'Steak + Pap + 2 Sides',
      itemPrice: '60',
      itemRating: '3.5',
      itemImage: 'https://jsonformatter.org/img/tom-cruise.jpg',
      catId: '2',
    },
    {
      itemId: '18',
      itemName: 'High Steaks',
      itemDesc: 'Steak + Wors + Pap + 2 Sides',
      itemPrice: '70',
      itemRating: '3.5',
      itemImage: 'https://jsonformatter.org/img/tom-cruise.jpg',
      catId: '2',
    },
    {
      itemId: '19',
      itemName: 'Single Dag',
      itemDesc: 'Dagwood with single Beef patty + chips',
      itemPrice: '25',
      itemRating: '3.5',
      itemImage: 'https://jsonformatter.org/img/tom-cruise.jpg',
      catId: '3',
    },
    {
      itemId: '20',
      itemName: 'Double Dag',
      itemDesc: 'Dagwood with double Beef patty + chips',
      itemPrice: '35',
      itemRating: '3.5',
      itemImage: 'https://jsonformatter.org/img/tom-cruise.jpg',
      catId: '3',
    },
    {
      itemId: '21',
      itemName: 'Triple Dag',
      itemDesc: 'Dagwood with triple Beef patty + chips',
      itemPrice: '45',
      itemRating: '3.5',
      itemImage: 'https://jsonformatter.org/img/tom-cruise.jpg',
      catId: '3',
    },
    {
      itemId: '22',
      itemName: 'Single Burg',
      itemDesc: 'Burger with single beef patty + chips',
      itemPrice: '25',
      itemRating: '3.5',
      itemImage: 'https://jsonformatter.org/img/tom-cruise.jpg',
      catId: '3',
    },
    {
      itemId: '23',
      itemName: 'Double Burg',
      itemDesc: 'Burger with double beef patty + chips',
      itemPrice: '30',
      itemRating: '3.5',
      itemImage: 'https://jsonformatter.org/img/tom-cruise.jpg',
      catId: '3',
    },
    {
      itemId: '24',
      itemName: 'Triple Burg',
      itemDesc: 'Burger with triple beef patty + chips',
      itemPrice: '40',
      itemRating: '3.5',
      itemImage: 'https://jsonformatter.org/img/tom-cruise.jpg',
      catId: '3',
    },
    {
      itemId: '25',
      itemName: 'Burg Zilla',
      itemDesc: 'Burger with triple beef patty + russian + chips',
      itemPrice: '50',
      itemRating: '3.5',
      itemImage: 'https://jsonformatter.org/img/tom-cruise.jpg',
      catId: '3',
    },
    {
      itemId: '26',
      itemName: 'Meat Me',
      itemDesc: '1/4 chicken, Wors, Pap + 2 sides',
      itemPrice: '55',
      itemRating: '3.5',
      itemImage: 'https://jsonformatter.org/img/tom-cruise.jpg',
      catId: '4',
    },
    {
      itemId: '27',
      itemName: 'Chicky Chow',
      itemDesc: '1/4 chicken, 3 Wings, Pap + 2 Sides',
      itemPrice: '60',
      itemRating: '3.5',
      itemImage: 'https://jsonformatter.org/img/tom-cruise.jpg',
      catId: '4',
    },
    {
      itemId: '28',
      itemName: 'Pap',
      itemDesc: 'Portion of Pap',
      itemPrice: '15',
      itemRating: '3.5',
      itemImage: 'https://jsonformatter.org/img/tom-cruise.jpg',
      catId: '5',
    },
    {
      itemId: '29',
      itemName: 'Chakalaka',
      itemDesc: 'Portion of Chakalaka',
      itemPrice: '10',
      itemRating: '3.5',
      itemImage: 'https://jsonformatter.org/img/tom-cruise.jpg',
      catId: '5',
    },
    {
      itemId: '30',
      itemName: 'Coleslaw',
      itemDesc: 'Portion of Coleslaw',
      itemPrice: '10',
      itemRating: '3.5',
      itemImage: 'https://jsonformatter.org/img/tom-cruise.jpg',
      catId: '5',
    },
    {
      itemId: '31',
      itemName: 'Chips',
      itemDesc: 'Portion of Chips',
      itemPrice: '25',
      itemRating: '3.5',
      itemImage: 'https://jsonformatter.org/img/tom-cruise.jpg',
      catId: '5',
    },
    {
      itemId: '32',
      itemName: 'Bun Rolls',
      itemDesc: 'Fresh Buns each',
      itemPrice: '5',
      itemRating: '3.5',
      itemImage: 'https://jsonformatter.org/img/tom-cruise.jpg',
      catId: '5',
    },
    {
      itemId: '33',
      itemName: 'Green Salad',
      itemDesc: 'Fresh vegetables salad',
      itemPrice: '30',
      itemRating: '3.5',
      itemImage: 'https://jsonformatter.org/img/tom-cruise.jpg',
      catId: '5',
    },
    {
      itemId: '34',
      itemName: 'Doritos / Lays / Simba',
      itemDesc: '125g Crisps',
      itemPrice: '25',
      itemRating: '3.5',
      itemImage: 'https://jsonformatter.org/img/tom-cruise.jpg',
      catId: '6',
    },
    {
      itemId: '35',
      itemName: 'Biscuits',
      itemDesc: 'Munchies',
      itemPrice: '9',
      itemRating: '3.5',
      itemImage: 'https://jsonformatter.org/img/tom-cruise.jpg',
      catId: '6',
    },
    {
      itemId: '36',
      itemName: 'Apple',
      itemDesc: 'Apple a day keeps the doc away',
      itemPrice: '4',
      itemRating: '3.5',
      itemImage: 'https://jsonformatter.org/img/tom-cruise.jpg',
      catId: '7',
    },
    {
      itemId: '37',
      itemName: 'Orange',
      itemDesc: 'Your source of Vitamin C',
      itemPrice: '9',
      itemRating: '3.5',
      itemImage: 'https://jsonformatter.org/img/tom-cruise.jpg',
      catId: '7',
    },
    {
      itemId: '38',
      itemName: 'Grapes',
      itemDesc: 'Nature\'s goodness in a bunch',
      itemPrice: '20',
      itemRating: '3.5',
      itemImage: 'https://jsonformatter.org/img/tom-cruise.jpg',
      catId: '7',
    },
    {
      itemId: '39',
      itemName: 'Banana',
      itemDesc: 'Everyday essentials',
      itemPrice: '3',
      itemRating: '3.5',
      itemImage: 'https://jsonformatter.org/img/tom-cruise.jpg',
      catId: '7',
    },
    {
      itemId: '40',
      itemName: 'Energy Drink',
      itemDesc: 'Your shot of energy in a can',
      itemPrice: '12',
      itemRating: '3.5',
      itemImage: 'https://jsonformatter.org/img/tom-cruise.jpg',
      catId: '8',
    },
    {
      itemId: '41',
      itemName: 'Buddy Coke',
      itemDesc: '440ml cold drink assorted flavours',
      itemPrice: '15',
      itemRating: '3.5',
      itemImage: 'https://jsonformatter.org/img/tom-cruise.jpg',
      catId: '8',
    },
    {
      itemId: '42',
      itemName: '2lt Cold Drink',
      itemDesc: '2lt cold drink assorted flavours',
      itemPrice: '30',
      itemRating: '3.5',
      itemImage: 'https://jsonformatter.org/img/tom-cruise.jpg',
      catId: '8',

    },
    {
      itemId: '43',
      itemName: 'Ice Cream',
      itemDesc: 'Delicious flavours',
      itemPrice: '10',
      itemRating: '3.5',
      itemImage: 'https://jsonformatter.org/img/tom-cruise.jpg',
      catId: '9',
    },
    {
      itemId: '44',
      itemName: 'Fruit Salad',
      itemDesc: 'Mixed Fruits Freshly Made',
      itemPrice: '30',
      itemRating: '3.5',
      itemImage: 'https://jsonformatter.org/img/tom-cruise.jpg',
      catId: '9',
    },

  ];

  categories = [
    {
      catId: '1',
      catName: 'Chicken',
      photo: '../../../../assets/images/categories/chicken1.jpg',
    },
    {
      catId: '2',
      catName: 'Beef',
      photo: '../../../../assets/images/categories/beef2.jpg',
    },
    {
      catId: '3',
      catName: 'Burgers',
      photo: '../../../../assets/images/categories/burger.jpg',
    },
    {
      catId: '4',
      catName: 'Combos',
      photo: '../../../../assets/images/categories/combo.jpg',
    },
    {
      catId: '5',
      catName: 'Extras',
      photo: '../../../../assets/images/categories/combo.jpg',
    },
    {
      catId: '6',
      catName: 'Snacks',
      photo: '../../../../assets/images/categories/snacks3.jpg',
    },
    {
      catId: '7',
      catName: 'Fruits',
      photo: '../../../../assets/images/categories/fruits.jpg',
    },
    {
      catId: '8',
      catName: 'Drinks',
      photo: '../../../../assets/images/categories/drinks3.jpg',
    },
    {
      catId: '9',
      catName: 'Dessert',
      photo: '../../../../assets/images/categories/dessert.jpg',
    },
  ];

  constructor(
    private navCtrl: NavController,
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(paramMap => {
      console.log('data: ', paramMap);
      if (!paramMap.has('catId')) {
        this.navCtrl.back();
        return;
      }
      this.id = paramMap.get('catId');
      console.table('id: ', this.id);
      this.getItems();
    });
  }

  getCart() {
    return Storage.get({key: 'cart'});
  }

  async getItems() {
    this.data = {};

      const data: any = this.categories.filter(x => x.catId === this.id);
      this.data = data[0];
      this.items = this.allItems.filter(x => x.catId === this.id);
      console.table('category: ', this.data);
  }

    quantityPlus(index) {
      try {
        console.log(this.items[index]);
        if (!this.items[index].quantity || this.items[index].quantity === 0) {
          this.items[index].quantity = 1;
          this.calculate();
        } else {
          this.items[index].quantity += 1;
          this.calculate();
        }
      } catch (e) {
        console.log(e);
      }
    }

  quantityMinus(index) {
    if(this.items[index].quantity !== 0) {
      this.items[index].quantity -= 1;
    } else {
      this.items[index].quantity = 0;
    }
    this.calculate();
  }

  calculate() {
  }

}

