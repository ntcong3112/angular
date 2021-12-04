import { Component, OnInit } from '@angular/core';
import { Product } from './product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  products: Product[] = [
    {
      id: 1,
      name: 'Blue denim shirt',
      color: 'Blue',
      size: 'M',
      price: 17.99,
      quantity: 2,
      imgURL: '/assets/1.jpg',
    },
    {
      id: 2,
      name: 'White denim shirt',
      color: 'White',
      size: 'L',
      price: 14.99,
      quantity: 3,
      imgURL: '/assets/2.jpg',
    },
    {
      id: 3,
      name: 'White hoodie',
      color: 'white',
      size: 'XL',
      price: 25.99,
      quantity: 3,
      imgURL: '/assets/3.jpg',
    },
  ];

  numberItem: number = 0;
  total: number = 0;
  totalDiscount = 0;

  ngOnInit() {
    this.updateTotal();
  }

  updateTotal() {
    this.numberItem = 0;

    this.total = 0;
    this.products.forEach((product: Product) => {
      let total = +this.numberItem + +product.quantity;
      // console.log(total);
      this.numberItem = total;
      this.total += product.quantity * product.price;
    });
    this.total -= this.totalDiscount;
  }

  updateQuantity(data: { quantity: any; id: any }) {
    const product = this.products.find((p) => p.id == data.id);
    if (product) {
      product.quantity = data.quantity.value || 0;
    }
    this.updateTotal();
  }
  updateDiscount(discount: any) {
    // alert(discount.value);
    if (discount.value.toLowerCase() == 'helloworld') {
      let t = 0;
      this.products.forEach((product: Product) => {
        let total = +this.numberItem + +product.quantity;
        t += product.quantity * product.price;
      });
      this.totalDiscount = t / 10;
      this.updateTotal();
    }
  }

  removeProduct(productId: any) {
    const newProduct = this.products.filter(
      (product) => product.id !== productId
    );
    this.products = newProduct;
  }
}
