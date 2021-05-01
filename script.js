const menu = [
    {
      id: 1,
      title: "Tteokbokki",
      category: "Korea",
      price: 10.99,
      img:
        "https://twoplaidaprons.com/wp-content/uploads/2020/09/tteokbokki-top-down-view-of-tteokbokki-in-a-bowl-500x500.jpg",
      desc: `Spicy rice cakes, serving with fish cake.`,
    },
    {
      id: 2,
      title: "Chicken Ramen",
      category: "Japan",
      price: 7.99,
      img:
        "https://www.forkknifeswoon.com/wp-content/uploads/2014/10/simple-homemade-chicken-ramen-fork-knife-swoon-01.jpg",
      desc: `Chicken noodle soup, serving with vegetables such as soy bean, green onion. In an optional you can ask for egg. `,
    },
    {
      id: 3,
      title: "Bibimbap",
      category: "Korea",
      price: 8.99,
      img:
        "https://dwellbymichelle.com/wp-content/uploads/2020/05/DWELL-bibimbap.jpg",
      desc: `Boiling vegetables, serving with special hot sauce`,
    },
    {
      id: 4,
      title: "Dan Dan Mian",
      category: "China",
      price: 5.99,
      img:
        "https://www.savingdessert.com/wp-content/uploads/2019/02/Dan-Dan-Noodles-10.jpg",
      desc: `Dan dan noodle, serving with green onion `,
    },
    {
      id: 5,
      title: "Yangzhou Fried Rice",
      category: "China",
      price: 12.99,
      img:
        "https://salu-salo.com/wp-content/uploads/2013/02/Yangzhou-Fried-Rice1.jpg",
      desc: `Yangzhou style fried rice, serving with bean and pickles `,
    },
    {
      id: 6,
      title: "Onigiri",
      category: "Japan",
      price: 9.99,
      img:
        "https://www.manusmenu.com/wp-content/uploads/2017/08/Onigiri-3-1-of-1.jpg",
      desc: `Rice Sandwich, serving with soy sauce`,
    },
    {
      id: 7,
      title: "Jajangmyeon",
      category: "Korea",
      price: 15.99,
      img:
        "https://www.curiouscuisiniere.com/wp-content/uploads/2020/04/Jajangmyeon-Korean-Noodles-in-Black-Bean-Sauce5.1200H-720x540.jpg",
      desc: `Black bean sauce noodle, serving with green onion `,
    },
    {
      id: 8,
      title: "Ma Yi Shang Shu",
      category: "China",
      price: 12.99,
      img:
        "https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/F688C2F6-86EC-46C4-B9C7-A6BA01DF7437/Derivates/32E3E72A-F786-406D-AF7F-B30980A9AC6C.jpg",
      desc: `Hot pepper sauce noodle, serving with soy bean and onion`,
    },
    {
      id: 9,
      title: "Doroyaki",
      category: "Japan",
      price: 3.99,
      img:
        "https://www.justonecookbook.com/wp-content/uploads/2011/10/Dorayaki-New-500x400.jpg",
      desc: `Red bean paste dessert, serving with honey.`,
    },
  ];

  
let divDom=document.querySelector("#primaryDiv")

//Create a function to get meals
let getFood=(menu)=>{
    
    for(let i=0;i<menu.length;i++){
      let img=menu[i].img; 
      let title=menu[i].title;
      let price=menu[i].price;
      let desc=menu[i].desc;

      //Create elements
      let divMenu=document.createElement("div")
      let imgMenu=document.createElement("img")
      let divInfo=document.createElement("div")
      let divTitle=document.createElement("div")
      let h4Title=document.createElement("h4")
      let h4Price=document.createElement("h4")
      let divText=document.createElement("div")

      //Set attributes
      divMenu.setAttribute("class","menu-items col-lg-6 col-sm-12")
      imgMenu.setAttribute("src",img)
      imgMenu.setAttribute("class","photo")
      divInfo.setAttribute("class","menu-info")
      divTitle.setAttribute("class","menu-title")
      divText.setAttribute("class","menu-text")

      //Assaign values
      h4Title.innerText=title;
      h4Price.innerText=price;
      divText.innerText=desc;

      //Insert title and price divTitle 
      divTitle.append(h4Title)
      divTitle.append(h4Price)

      //Append elements
      divDom.append(divMenu)
      divMenu.append(imgMenu)
      divMenu.append(divInfo)
      divInfo.append(divTitle)
      divInfo.append(divText)

}}

//Create buttons
let btnAll=document.createElement("button")
let btnJapan=document.createElement("button")
let btnKorea=document.createElement("button")
let btnChina=document.createElement("button")

//Name the buttons 
btnAll.innerText="All"
btnJapan.innerText="Japan"
btnKorea.innerText="Korea"
btnChina.innerText="China"

//Set attributes
btnAll.setAttribute("class","btn btn-outline-dark btn-item",)
btnAll.setAttribute("data-id","all")
btnJapan.setAttribute("class","btn btn-outline-dark btn-item")
btnJapan.setAttribute("data-id","japan")
btnKorea.setAttribute("class","btn btn-outline-dark btn-item")
btnKorea.setAttribute("data-id","korea")
btnChina.setAttribute("class","btn btn-outline-dark btn-item")
btnChina.setAttribute("data-id","china")

//Insert buttons into related div
let divBtn=document.querySelector("#div-btn")
divBtn.append(btnAll)
divBtn.append(btnJapan)
divBtn.append(btnKorea)
divBtn.append(btnChina)

//Filter menu by category
let japan=menu.filter(item => item.category =="Japan")
let korea=menu.filter(item => item.category =="Korea")
let china=menu.filter(item => item.category =="China")

getFood(menu)

let buttons=document.querySelectorAll("button")

for(let i=0;i<buttons.length;i++){
  buttons[i].addEventListener("click",(e)=>{
      divDom.innerHTML="";
      if(buttons[i].innerHTML == "All" ){
          getFood(menu)
      }if(buttons[i].innerHTML == "Japan" ){
        getFood(japan)
      }if(buttons[i].innerHTML == "Korea" ){
        getFood(korea)
      }if(buttons[i].innerHTML == "China" ){
        getFood(china)
    }
  })
}
