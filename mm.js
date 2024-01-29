async function getDetails(){
    const urlParams= new URLSearchParams(window.location.search);
   
    const id=urlParams.get('id');
    const  request=await  axios.get(`https://dummyjson.com/products/${id}`);
    
    const data=request.data;
   
   
    const { title,category ,description,price,images}= data;
  
    console.log(data);
  document.querySelector("h2").textContent= title;
 
  document.querySelector(".category").textContent=category;
  document.querySelector(".dec").textContent=description;
  document.querySelector(".price").textContent+= price + "$";
  const resault =images.map(function(e){
    return `
    <div class="swiper-slide">
   <img src=" ${e}" />
     </div>`;
    }).join('');
    document.querySelector(".swiper-wrapper").innerHTML=resault;
    const swiper = new Swiper('.swiper', {
        // Optional parameters
        direction: 'horizontal' ,
        loop: true,
      
        // If we need pagination
        pagination: {
          el: '.swiper-pagination',
        },
      
        // Navigation arrows
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      
        // And if we need scrollbar
        scrollbar: {
          el: '.swiper-scrollbar',
        },
      });
 
  

   }
   getDetails();