
let bagItemObjects;
onLoad();
function onLoad(){
  loadBagItemsObjects();
  displBagItems();
}

function loadBagItemsObjects(){
  console.log(bagItems);
  bagItemObjects=bagItems.map(itemId=>{
    for(let i=0;i<items.length;i++)
    {
      if(itemId===items[i].id)
      {
        return items[i];
      }
    }
  });
  console.log(bagItemObjects);
}

function displBagItems(){
  
  let containerElement=document.querySelector('.bag-items-container');
  let innerHTML='';
  bagItemObjects.forEach(bagItem => {
    innerHTML += generateItemHtml(bagItem);
    
  });
  containerElement.innerHTML=innerHTML;

  //containerElement.innerHTML;
  
}

function generateItemHtml(item){
  return `
  <div class="bag-item-container">
            <div class="item-left-part">
              <img src="${item.image}" class="bag-item-img">
            </div>
            <div class="item-right-part">
               <div class="company">${item.company}</div>
               <div class="item-name">${item.item_name}</div>
               <div class="price-container">
                <span class="current-price">Rs ${item.current_price}</span>
                <span class="original-price">Rs ${item.original_price}</span>
                <span class="discount-percentage">Rs. ${item.discount_price}</span>
               </div>
               <div class="return-period">
                <span class="return-period-days">${item.return_period}</span>
               </div>
               <div class="delivery-details">
                Delivery boy
                <span class="delivery-details-days">${item.delivery_date}</span>
               </div>
            </div>

            <div class="remove-from-cart">X</div>
          </div>`;

}