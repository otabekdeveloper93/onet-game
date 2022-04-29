const onet = [];

for (let i = 0; i < 4; i++) {
    for (let j = 0; j < pokemons.length; j++) {
        let obj = {
            x: j,
            y: i,
            img: pokemons[j]
        }
        onet.push(obj)
    }
}
for (let i = 0; i < 60; i++) {
    const idx1 = Math.floor(Math.random() * onet.length);
    const idx2 = Math.floor(Math.random() * onet.length);
    const temp = onet[idx1];
    onet[idx1] = onet[idx2];
    onet[idx2] = temp;
}
for (let i = 0; i < onet.length; i++) {
    console.log(onet[i]);
}


const list = document.querySelector('.ul');

onet.forEach((items) => {
  let li = document.createElement('li');
  li.className = "li";
  li.innerHTML = `
    <div class = "itembek" id="${items.img.id}">
        <img src="${items.img.img}">
    </div>
    ` 
  list.appendChild(li);
})

const itemList = document.querySelectorAll('.itembek');

itemList.forEach((item) => {
    
    item.addEventListener('click', ()=>{
        item.classList.add('clicked');
        itemList.forEach(el =>{
            el.addEventListener('click', (e)=> {
                if(item.id !== "click" && el.id !=="click"){
                    if(item.id === el.id) {
                        item.classList.add('d-none');
                        item.id = "click";
                        e.target.parentElement.classList.add('d-none');
                        e.target.parentElement.id = "click";
                    }else 
                    if(item.id !== el.id){
                        item.classList.remove('clicked');
                        item.classList.remove('d-none');
                        e.target.parentElement.classList.remove('d-none');
                    }
                }
            })
        })
    })
});

// //////////////
// const liaray = [];

// for (let i = 0; i < array.length; i++) {
//     for (let j = 0; j < array[i].length; j++) {
//         let li = document.createElement('li');
//         li.className = `li ${array[i][j].x} ${array[i][j].y}`;
//         list.appendChild(li);
//         if(array[i][j].img) {
//             li.id = array[i][j].id;
//             onet.push(array[i][j])
//         }
//     }
    
// }


// const libek = document.querySelectorAll('.li');
// libek.forEach(item => {
//     if(item.id) {
//         liaray.push(item)
//     }
// });

// for (let i = 0; i < 80; i++) {
//     const idx1 = Math.floor(Math.random() * liaray.length);
//     const idx2 = Math.floor(Math.random() * liaray.length);
//     const temp = liaray[idx1];
//     liaray[idx1] = liaray[idx2];
//     liaray[idx2] = temp;
// }

// for(let i = 0; i < 60; i++){
//     let liItem = document.createElement('div');
//     liItem.className = 'itembek';
//     liItem.innerHTML = `<img src="${onet[i].img}">`
//     liaray[i].appendChild(liItem)
// }

// const itemList = document.querySelectorAll('.itembek');

// itemList.forEach(item => {
//     item.addEventListener('click', ()=>{
//         let xItem;
//         let yItem;
//         if(item.parentElement.classList[2] === undefined){
//         xItem = item.parentElement.classList[1];
//         yItem = item.parentElement.classList[1];
//         }
//         else{
//         xItem = item.parentElement.classList[1];
//         yItem = item.parentElement.classList[2];      
//         }
//         console.log(xItem,yItem);
//         item.classList.add('clicked');
//         itemList.forEach(el =>{
//             el.addEventListener('click', ()=>{
//                 let Itemx;
//                 let Itemy;
//                 if(el.parentElement.classList[2] === undefined){
//                     Itemx = el.parentElement.classList[1];
//                     Itemy = el.parentElement.classList[1];
//                 }
//                 else{
//                     Itemx = el.parentElement.classList[1];
//                     Itemy = el.parentElement.classList[2];      
//                 }
//                 console.log(Itemx,Itemy);
//                 if()
//                 // for (let i = 0; i < array.length; i++) {
//                 //     for (let j = 0; j < array[i].length; j++) {
//                 //         if(array[i][0] == ) {
                            
//                 //         }
//                 //     }
                    
//                 // } 
//             })
//         })
//     })
// });


