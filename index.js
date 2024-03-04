// EXAMPLE 1 - Convert an Object to a Query String in JavaScript

const obj = {
  page: 2,
  limit: 10,
  filter: 'js',
};

const result = '?' + new URLSearchParams(obj).toString();
console.log(result); // 👉️ "?page=2&limit=10&filter=js"

// ------------------------------------------------------------------

// // EXAMPLE 2 - Convert an Object to a Query String using Object.keys()

// const obj = {
//   page: 2,
//   limit: 10,
//   filter: 'js',
// };

// const str =
//   '?' +
//   Object.keys(obj)
//     .map(key => {
//       return `${key}=${encodeURIComponent(obj[key])}`;
//     })
//     .join('&');

// console.log(str); // 👉️ "?page=2&limit=10&filter=js"

// ------------------------------------------------------------------

// // EXAMPLE 3 - Convert a Query String to an Object in JavaScript

// const queryString = '?page=3&filter=js';

// const obj = new URLSearchParams(queryString);

// // ✅ Get query parameters from the object
// console.log(obj.get('page')); // 👉️ "3"
// console.log(obj.get('filter')); // 👉️ "js"

// // ✅ Check if object contains query parameter
// console.log(obj.has('page')); // 👉️ true
// console.log(obj.has('test')); // 👉️ false

// // ✅ Set new query parameters on the object
// obj.set('limit', 10);
// console.log(obj.get('limit')); // 👉️ "10"

// // ✅ Get the Query String equivalent of the object
// // 👇️ "page=3&filter=js&limit=10"
// console.log(obj.toString());

// ------------------------------------------------------------------

// // EXAMPLE 4 - Converting the URLSearchParams object to a native JS Object

// // ✅ If you have Query String
// const queryString = '?page=3&filter=js';
// const obj1 = Object.fromEntries(
//   new URLSearchParams(queryString),
// );

// // 👇️ {page: '3', filter: 'js'}
// console.log(obj1);

// ----------------------------------------------------

// // ✅ If you have entire URL
// const url = new URL('https://example.com?page=3&filter=js');
// const obj2 = Object.fromEntries(new URLSearchParams(url.search));

// // 👇️ {page: '3', filter: 'js'}
// console.log(obj2);
