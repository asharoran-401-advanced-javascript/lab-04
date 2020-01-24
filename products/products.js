/* eslint-disable camelcase */
// eslint-disable-next-line strict
'use strict';

const DataModel = require('../models/file-data-model.js');

// eslint-disable-next-line no-unused-vars
class Product extends DataModel{
  constructor(){
    super();
    this.schema = {
      category_id : { require : true},
      price : { require : true},
      weight : { require : true},
      quantity_in_stock : { require : true},
    };
  }
}
module.exports = Product;
