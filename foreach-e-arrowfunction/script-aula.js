// const imgs = document.querySelectorAll('img');
// imgs.forEach(function(imgsItem) {
//     console.log(imgsItem)
// })

// console.log(imgs)

// const titulo = document.getElementsByClassName('titulo');

// const titulosArrayLike = Array.from(titulo);

// titulosArrayLike.forEach(function(titulo){
//     console.log(titulo)
// })


//  console.log(titulo);


const imgs = document.querySelectorAll('img');

imgs.forEach((img, index) => {
    console.log(img, index)
} )
console.log(imgs)

imgs.forEach(item => console.log(item));

let i = 0;
imgs.forEach(() => console.log(i++));
