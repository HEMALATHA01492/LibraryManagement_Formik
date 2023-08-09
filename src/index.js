import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';


let books=[
  {
  id:1,
  title:"The Famous Five",
  image:"https://www.99booksstore.com/uploaded_files/product/427400655.webp",
  author:"Sree",  
  edition:1,
  pages:"210"
},
{
  id:2,
  title:"Golden Fairy Tales",
  image:"https://rukminim2.flixcart.com/image/850/1000/ke4kjgw0/regionalbooks/t/n/r/children-story-books-world-famous-golden-fairy-tales-original-imafuv95m8ghh2ha.jpeg?q=90",
  author:"Varshika",
  edition:1,
  pages:"400"

},
{
  id:3,
  title:"Jungle Stories",
  image:"https://images.meesho.com/images/products/118683521/z5kwc_512.jpg",
  author:"Nivin",
  edition:1,
  pages:"337"

},
{
  id:4,
  title:"Jungle Book",
  image:"https://5.imimg.com/data5/SELLER/Default/2021/2/SA/IQ/HS/49559104/img-20210211-121925-1000x1000.jpg",
  author:"Rohini",
  edition:2,
  pages:"100"

},
{
  id:6,
  title:"Panchatantra",
  image:"https://images.meesho.com/images/products/252615569/8hdsi_512.webp",
  author:"Lakshan",
  edition:3,
  pages:"200"

}
]


ReactDOM.createRoot(document.getElementById('root')).render(<App books={books}/>);
