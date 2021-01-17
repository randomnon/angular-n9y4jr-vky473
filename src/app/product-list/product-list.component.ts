import { Component } from '@angular/core';

import { products } from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products = products;

  share() {
    window.alert('hello {first_name}, {myname} from {myco}, we havent met and I wanted to introduce myself if thats ok!');
  }
  onNotify() {
    window.alert('You will be notified when the product goes on sale');
  }

}




/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/