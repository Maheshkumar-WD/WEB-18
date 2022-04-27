

let data = JSON.parse(localStorage.getItem("investorsData"));

data.forEach(function (ele){
  console.log(ele);


  var cards = document.querySelector(".cards");


var cardEle = document.createElement("div");
cardEle.setAttribute("class","card");
cards.append(cardEle);
var imgDiv = document.createElement('div');
imgDiv.setAttribute("class","img_container");
cardEle.append(imgDiv);

var imgEle = document.createElement("img");
imgEle.setAttribute("src",ele.img);

var nameEle = document.createElement("h1");
nameEle.innerText = ele.name;

var roleEle = document.createElement("p");
roleEle.innerText = ele.role;

var comp_imgEle = document.createElement("img");
comp_imgEle.setAttribute("src",ele.companyImg);
imgDiv.append(imgEle);
cardEle.append(nameEle,roleEle,comp_imgEle);


 });



// var cards = document.querySelector(".cards");


// var cardEle = document.createElement("div");
// cardEle.setAttribute("class","card");
// cards.append(cardEle);
// var imgDiv = document.createElement('div');
// imgDiv.setAttribute("class","img_container");
// cardEle.append(imgDiv);

// var imgEle = document.createElement("img");
// imgEle.setAttribute("src",data.img);

// var nameEle = document.createElement("h1");
// nameEle.innerText = data.name;

// var roleEle = document.createElement("p");
// roleEle.innerText = data.role;

// var comp_imgEle = document.createElement("img");
// comp_imgEle.setAttribute("src",data.companyImg);
// imgDiv.append(imgEle);
// cardEle.append(nameEle,roleEle,comp_imgEle);



// }