
// eslint-disable-next-line strict
'use strict';

// eslint-disable-next-line no-undef
module.exports = exports = {};

var fileContents = '';

// eslint-disable-next-line no-undef
exports.readFile = (file, cb) => {
  if (file.match(/bad/i)) {
    cb('Invalid File');
  }
  else {
    // eslint-disable-next-line no-undefined
    // eslint-disable-next-line no-undef
    // eslint-disable-next-line no-undefined
    cb(undefined, Buffer.from(fileContents));
  }
};

// eslint-disable-next-line no-undef
exports.writeFile = (file, buffer, cb) => {
  if (file.match(/bad/i)) {
    cb('Invalid File');
  }
  else {
    fileContents = buffer;
    // eslint-disable-next-line no-undefined
    cb(undefined, true);
  }
};