/* eslint-disable camelcase */
// eslint-disable-next-line strict
'use strict';

const Product = require('../categories/products.js');

// this.schema = {
//     category_id : { require : true},
//     price : { require : true},
//     weight : { require : true},
//     quantity_in_stock : { require : true},
//   };
// }
describe(' Prodaucts Module' , () =>{
  // eslint-disable-next-line no-unused-vars
  let products;
  beforeEach( () =>{
    products = new Product();
  });
  it(' can post() a new products' , () =>{
    let obj = {
      category_id : 'Test Product',
      price : 5,
      weight : 30,
      quantity_in_stock : 10,
    };
    return products.create(obj)
      .then( record =>{
        Object.keys(obj).forEach(key =>{
          expect(record[key]).toEqual(obj[key]);
        });
      });
  });
  it('can get() a new product' , () =>{
    let obj = {
      category_id : 'Test Product',
      price : 5,
      weight : 30,
      quantity_in_stock : 10,
    };
    return products.create(obj)
      .then( record =>{
        return products.get(record._id)
          .then( product =>{
            Object.keys(obj).forEach( key =>{
              expect(product[0][key]).toEqual(obj[key]);
            });
          });
      });
  });
  it (' can update() a product ' , () =>{
    let obj = {
      category_id : 'Test Product',
      price : 5,
      weight : 30,
      quantity_in_stock : 10,
    };
    return products.get(obj)
      .then( record =>{
        return products.update(record._id , obj)
          .then( product =>{
            Object.keys(obj).forEach( key =>{
              expect(product[key]).toEqual(obj[key]);
            });
          });
      });
  });
  it(' can delete() a product' , () =>{
    let obj = {
      category_id : 'Test Product',
      price : 5,
      weight : 30,
      quantity_in_stock : 10,
    };
    return products.get(obj)
      .then( record =>{
        return products.delete(record._id);
      });
  });
});