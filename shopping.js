const clos=(e)=>{
    let t= document.querySelector(".sum")
    let u= e.parentElement.parentElement.querySelector(".product-qty")
    let p= e.parentElement.parentElement.querySelector(".unit")
    t.innerHTML = t.innerHTML - (u.innerHTML * p.innerHTML )
    e.parentElement.parentElement.remove()
}
const Avis=(e) =>{
    let like= e.parentElement.querySelector(".fa-heart")
    if(like.style.color !== "red")
    like.style.color = "red"
    else like.style.color = "black"
    
}
const plus=(e)=>{
    console.log(e.parentElement)
    let k=e.parentElement.querySelector(".product-qty")
    console.log(k)
    k.innerText = parseInt(k.innerText) + 1
}
const minus=(e)=>{
    let b=e.parentElement.querySelector(".product-qty")
    if(b.innerText >0)
    b.innerText = parseInt(b.innerText) - 1 
 }
 const sumPlus = (e) =>{
     let unit = e.parentElement.parentElement.querySelector(".unit")
     let t = document.querySelector(".sum")
     t.innerText = parseInt(t.innerText)+ parseInt(unit.innerText)
     console.log(t)
 }
 const sumMinus = (e) =>{
     let unit = e.parentElement.parentElement.querySelector(".unit")
     let t = document.querySelector(".sum")
     t.innerText = parseInt(t.innerText) - parseInt(unit.innerText)
     console.log(t)
 }
