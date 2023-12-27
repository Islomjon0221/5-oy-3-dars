const block = document.getElementById("block");
const button = document.getElementById("btn");

let data = [
    {
        rec: 1,
    Name: "Acura",
    img: "./img/Acura.jpg"
},

{
    rec: 2,
    Name: "Astonmartin",
    img: "./img/AstonMartin.jpg"
},

{
    rec: 3,
    Name: "Audi",
    img: "./img/Audi.jpg"
},

{
    rec: 4,
    Name: "Bently",
    img: "./img/Bently.jpg"
},

{
    rec: 5,
    Name: "Lexsus",
    img: "./img/Lexsus.jpg"
},
]

let rand = Math.trunc(Math.random()* 5);
let dot = data[rand];

let a = dot.rec;
let b = dot.Name;
let c = dot.img;

button.addEventListener("click", function(){
const img = document.createElement('img')
img.setAttribute("id", `${a}`)
img.setAttribute("class", `${b}`)
img.setAttribute("src", `${c}`)
block.appendChild(img)
img.style.marginLeft = "130px"
const gift = document.createElement('h3')
gift.setAttribute("class", "car2")
gift.innerText = "Sizning yutug'ingiz";
gift.style.fontSize = "30px"
gift.style.textAlign = "center"
block.appendChild(gift)
console.log(block)
})

// Ishga tushurganingizda ctrl + R qilib brauzerda yangilang bo'lmasa tagidan yana buzib rasm chiqarib qo'yadi