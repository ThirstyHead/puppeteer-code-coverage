body{
  background-color: tan;
}

button{
  font-size: 1.2em;
  border-radius: 6px;
  margin-bottom: 1em;
  box-shadow: 1px 1px 5px black;
}

caption{
  font-size: 1.2em;
  font-weight: bold;
  padding-bottom: 1em;
}

/* dialog polyfill */
dialog + .backdrop{
  background-color: rgba(0, 0, 0, 0.8);
}

main{
  padding: 2em;
}

.cart{
  flex: 0 0 15%;
  visibility: hidden;
  background-color: #ccc;
  padding: 1em;
  font-family: sans-serif;
  text-align: center;
}

.cart table{
  width: 100%;
  border-collapse: collapse;
}

.cart thead td{
  padding-bottom: 1em;
  font-weight: bold;
  text-align: left;
}

.cart tbody{
  font-style: italic;
  text-align: left;
}

.cart .cart-total, .item-total{  
  text-align: right;
}

#checkout-dialog{
  height: 75%;
  width: 50%;
}

#checkout-dialog::backdrop{
  background-color: rgba(0, 0, 0, 0.8);
}

.container{
  display: flex;
}


#checkout-dialog button{
  font-size: 0.5em;
  border-radius: 6px;
  margin-bottom: 1em;
  box-shadow: 1px 1px 5px black;
}

#checkout-dialog header{
  padding: 0.25em;
  margin-bottom: 1em;
}

.dialog-body{
  max-height: 75%;
  overflow-y: auto;
}

.item{
  display: none;
  background-color: white;
  border-radius: 6px;
  width: 12em;
  height: 11em;
  padding: 1em;
  margin: 1em;
  text-align: center;
  cursor: pointer;
  user-select: none;
  -webkit-user-select: none;
}

.item img{
  height: 75%;
  object-fit: contain;
  border-radius: 6px;
  border: 1px solid #ccc;
  user-select: none;
  -webkit-user-select: none;
}

.item input[type='checkbox']{
  display: none;
}

.item input[type='checkbox']:checked ~ p{
  font-weight: bold;
  font-style: italic;
  color: green;
}

.item input[type='checkbox']:checked ~ p::after{
  content: ' \02713 ';
  /* HTML entity for &check; in hex */
  /* https://dev.w3.org/html5/html-author/charref */
}

.item .price::before{
  content: '';
  display: block;
}

.show{
  display: inline-block;
}

.sidebar{
  width: 20%;
}

.switch-field label {
  display: block;
  width: 5em;
  background-color: #ccc;
  text-align: center;
  padding: 1em;
  font-family: sans-serif;
  user-select: none;
  -webkit-user-select: none;
  cursor: pointer;
}

.switch-field input:checked + label {
  background-color: #A5DC86;
}

.switch-field input[type='radio']{
  display: none;
}

.visible {
  visibility: visible;
}
