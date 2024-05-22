  function tooggleVisibility(elementID){

   let elementSelector= document.querySelector(elementID);
   elementSelector.classList.toggle('read-text');

}

let btn= document.querySelector('.btn')
let nameUp= document.querySelector('#username')
let email= document.querySelector('#emailuser')
let userDate= document.querySelector('#userdate')
let time= document.querySelector('#usertime')
let userSelect= document.querySelector('#userselect')
let merror= document.querySelector('.error-box');
let correctBox= document.querySelector('.correct-box')

let userDetails = [];
// if (localStorage.getItem("info") != null) {
//   userDetails = JSON.parse(localStorage.getItem("info"));
// }

btn.addEventListener('click', function(){
  dataUp()
 
})

function dataUp(){
 
    let user={
      userName:nameUp.value,
      emailUp: email.value,
      dateUser:userDate.value,
      userTime:time.value,
      selectPerson:userSelect.value
    };
    userDetails.push(user);
    localStorage.setItem("info", JSON.stringify(userDetails));
    console.log(userDetails);
    emptyData()

}
function emptyData(){
  if(nameUp.value=="" || email.value=="" || userDate.value=="" || time.value=="" || userDate.value=="" || userSelect==""){
 merror.classList.replace('d-none', 'd-block')
 return false;
}
  else{
    merror.classList.replace('d-block', 'd-none');
    correctBox.classList.replace('d-none', 'd-block');
    return true;
}
}


// window.addEventListener('scroll', function(){
//   let windowScroll=window.scrollTo //      نزل قد ايهuser قولي 
// let section=document.querySelector('.navbar')
// let typeSection=document.getElementById('type-of-tourism') // عاوز اعرف بعد السكشن عن توب قد ايه 
// let type=typeSection.scrollTop


//  if(windowScroll > typeSection){
//    section.style.backgroundColor='black'
//  }
//  else{
//    section.style.backgroundColor='transparent'
//  }

// })


