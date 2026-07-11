const productsContainer = document.getElementById("products");
const btnMen = document.getElementById("btn-men");
const btnWomen = document.getElementById("btn-women");
const btnKids = document.getElementById("btn-kids");

fetch("https://cdn.shopify.com/s/files/1/0564/3685/0790/files/multiProduct.json")
  .then(response => response.json())
  .then(data => {
    console.log(data);
    categories = data.categories; 
    displayProduct("Women");        
  });

  let categories = [];

  const activeImg = (index, imgNo) => {
    const img1 = document.getElementById(`img1-${index}`);
    const img2 = document.getElementById(`img2-${index}`);

    if (imgNo === 1) {
        img1.style.display = "block";
        img2.style.display = "none";
    } else {
        img1.style.display = "none";
        img2.style.display = "block";
    }
  }

const displayProduct = (category) => {
    // console.log(category);

    // fetch("https://cdn.shopify.com/s/files/1/0564/3685/0790/files/multiProduct.json")
    //     .then(response => response.json())
    //     .then(data => {
    //     displayProduct(data.categories[0].category_products)
    // });


    // productsContainer.appendChild("div");

    productsContainer.innerHTML = "";



    const selectedCategory = categories.find(eachItem=> eachItem.category_name === category);

    selectedCategory.category_products.forEach((element , index)=> {
        console.log(element);

        const per = Math.round(( Number(element.price) / Number(element.compare_at_price))*100);

        const card = document.createElement("div");
         card.classList.add("product-card");
            card.innerHTML = `
                        <div class="img-div">
                        <img id="img1-${index}" src="${element.image}" alt="Image not available">
                        <img id="img2-${index}" src="${element.second_image}" alt="Image not available" style="display : none">
                        </div>
                        <br/>
                        <div class="img-inner-div">
                            <button onclick="activeImg(${index}, 1)" class="img-btn"></button>
                            <button  onclick="activeImg(${index}, 2)" class="img-btn"></button>
                        </div>
                        
                        <br/>
                        <div>
                            <h3>${element.title}</h3>
                            <p>${element.vendor}</p>
                        </div>
                        <div>
                           <p>Rs.${element.price}/-</p>
                            <p style="text-decoration : line-through ; color : #D3D3D3;">Rs.${element.compare_at_price}/-</p>
                            <p style="color : red;">${per}% OFF</p>
                       </div>                        
                        <br/>                   
                    <button class="btn">Add to Cart</button>
        `;

        productsContainer.appendChild(card);

    });
    
}


// btnMen.addEventListener("click", ()=>{
//     displayProduct('Men');
// });

// btnMen.addEventListener("click", ()=>{
//     displayProduct('Women');
// });

// btnMen.addEventListener("click", ()=>{
//     displayProduct('Men');
// });


