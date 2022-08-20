/* ===date from classroom raw date=== */
const data = [
    {
      img: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1587&q=80",
      name: "Air",
      brand: "Nike",
      price: "120.00 $",
      sizes: ["37", "38", "39"],
    },
    {
      img: "https://images.unsplash.com/photo-1584735174965-48c48d7edfde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1587&q=80",
      name: "Dunk High Pro",
      brand: "Nike",
      price: "150.00 $",
      sizes: ["37", "38", "39", "40", "42"],
    },
    {
        img: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1598&q=80",
        name: "Old Skool",
        brand: "Vans",
        price: "50.00 $",
        sizes: ["37"],
      },
      {
        img: "https://images.unsplash.com/photo-1606890658317-7d14490b76fd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1664&q=80",
        name: "Summer Party",
        brand: "Nike",
        price: "100.00 $",
        sizes: ["42", "43", "44", "45", "46"],
      },
    {
        img: "https://images.unsplash.com/photo-1560769629-975ec94e6a86?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
        name: "Retro",
        brand: "Adidas",
        price: "149.00 $",
        sizes: ["39", "40"],
    },
    {
        img: "https://images.unsplash.com/photo-1528701800487-ba01fea498c0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
        name: "Fancy Doc",
        brand: "Crocs",
        price: "79.00 $",
        sizes: ["37", "38", "39", "40", "41", "42"],
    },
    {
        img: "https://images.unsplash.com/photo-1541597455068-49e3562bdfa4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
        name: "Classic",
        brand: "Reebok",
        price: "99.00 $",
        sizes: ["43", "44", "45", "46"],
    },
    {
        img: "https://images.unsplash.com/photo-1628429437853-40ec8ebe3386?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80",
        name: "Jungle",
        brand: "New Balance",
        price: "110.00 $",
        sizes: ["39", "40", "41", "42"],
    },
    {
        img: "https://images.unsplash.com/photo-1604163546180-039a1781c0d2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
        name: "Essentials",
        brand: "Errant",
        price: "120.00 $",
        sizes: ["41","42", "43", "44", "45", "46"],
    },
    {
        img: "https://images.unsplash.com/photo-1571216332002-282dce467b32?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
        name: "Très chic",
        brand: "Nike",
        price: "150.00 $",
        sizes: ["45", "46"],
    },
    {
        img: "https://images.unsplash.com/photo-1542601600647-3a722a90a76b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=706&q=80",
        name: "Plastic Revolution",
        brand: "Adidas",
        price: "180.00 $",
        sizes: ["37", "38", "39", "40"],
    },
    {
        img: "https://images.unsplash.com/photo-1644001992668-3b9ed080533a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
        name: "Sporty",
        brand: "Asics",
        price: "90.00 $",
        sizes: ["41","42", "43", "44"],
    }
   
];
/* create new arrivals div */
const product = document.querySelector(".product");
data.forEach(item=>{
    const box= document.createElement("div");
    box.className="box";
    product.appendChild(box);
    const image= document.createElement("img");
    image.setAttribute("src",item.img);
    box.appendChild(image);
    const name= document.createElement("p");
    name.innerText=item.name;
    box.appendChild(name);
    const price= document.createElement("p");
    price.innerText=item.price;
    box.appendChild(price);
    //try add some  click function to show shoes brand and size, first add arrow 
    const arrow= document.createElement("img");
    arrow.className="arrow";
    arrow.setAttribute("src","./assets/img/arrow.svg");
    box.appendChild(arrow);
    console.log(arrow);
    /* ===what happed if user click=== */
    arrow.addEventListener("click",(event)=>{
        event.preventDefault();
         arrow.classList.toggle("active"); 

        if(hiddenInfo.style.display="none"){
            arrow.style.transform="rotate(180deg)";
            arrow.style.transition="1s";
            hiddenInfo.style.display="block";
        }else if(hiddenInfo.style.display="block"){
            arrow.style.transform="rotate(180deg)";
            arrow.style.transition="1s";
            hiddenInfo.style.display="none";
        };
       
       /*  hiddenInfo.style.display="block"; */
    });
    // fuction hidden and show brand if customer click arrow 
    const hiddenInfo= document.createElement("div");
    hiddenInfo.className="hiddenInfo";
    const brand= document.createElement("p");
    brand.innerText=item.brand;
    hiddenInfo.appendChild(brand);
    hiddenInfo.style.display="none";
    box.appendChild(hiddenInfo);
  
});
// function cookie Overlay
const modal= document.querySelector("#modal");
const submit = document.querySelector("#submit");
submit.addEventListener("click",()=>{
    modal.style.display="none";
    document.cookie="username=Quing; expires=Thu,18 Dec 2023 12:00:00 UTC; path=/";
});