import {Injectable} from "@angular/core";
import {ITEMS} from "./mock-items";
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import {Product} from '../model/product';

@Injectable()
export class ItemService {
  private items: any;
  private productList = this.afDatabase.list<Product>('bin4ry-81521/product')

  constructor(private afDatabase: AngularFireDatabase) {
    this.items = ITEMS;
    //this.items2 = afDatabase.list('/Shop 1/product').valueChanges()
  }

  getAll() {
    return this.items;
  }

  getProduct(){
    return this.productList
  }

  addProduct(product: Product) {
    return this.productList.push(product);
  }

  updateNote(product: Product) {
    return this.productList.update(product.id, product);
  }

  removeNote(product: Product) {
    return this.productList.remove(product.id);
  }

  getByCategory(catId) {
    let items = [];

    for (let i = 0; i < ITEMS.length; i++) {
      if (ITEMS[i].category_id == catId) {
        items.push(ITEMS[i]);
      }
    }

    return items;
  }

  getItem(id) {
    for (var i = 0; i < this.items.length; i++) {
      if (this.items[i].id === parseInt(id)) {
        return this.items[i];
      }
    }
    return null;
  }

  addItem(item){
    
  }


  remove(item) {
    this.items.splice(this.items.indexOf(item), 1);
  }
}
