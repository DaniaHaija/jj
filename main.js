 async function getData(){
   const request=await axios.get("https://dummyjson.com/products");
  const data= await request.data;
  const product =data.products;
  const resault=product.map(function(e){
    return `
    <div class="product">
    <h2>${e.title}</h2>
   <img src="${e.thumbnail}"/>
    <p>${e.brand}</p>
    <p>${e.price}$</p>
    <a href=" details.html?id=${e.id}">details</a>
    </div>`;
 
  }).join('')
  document.querySelector(".products").innerHTML+=resault;
  
 }
   
 getData();