
const addListBtns = document.querySelectorAll(".js-add-list");
const titleList = document.querySelectorAll(".js-list-title");

const handleInputSubmit = (e) => {
    const targetTitle = e.target.parentNode;
    const text = targetTitle.querySelector("span");
    const inputTarget = e.target;
    // console.log(e.keyCode);
    
    if(e.keyCode === 13) { // when you press enter
        text.innerHTML = inputTarget.value;
        text.style.display = "block";
        inputTarget.style.display = "none";
        // console.log(inputTarget);
    }else if(e.keyCode === 27) { // when you press esc
        inputTarget.value = text.innerHTML;
        text.style.display = "block";
        inputTarget.style.display = "none";
    }else{
        return;
    }
}

// function handleInputSubmit(e){
//     const targetTitle = e.target.parentNode;
//     const text = targetTitle.querySelector("span");
//     const inputTarget = e.target;
//     // console.log(e.keyCode);
    
//     if(e.keyCode === 13) { // when you press enter
//         text.innerHTML = inputTarget.value;
//         text.style.display = "block";
//         inputTarget.style.display = "none";
//         // console.log(inputTarget);
//     }else if(e.keyCode === 27) { // when you press esc
//         inputTarget.value = text.innerHTML;
//         text.style.display = "block";
//         inputTarget.style.display = "none";
//     }else{
//         return;
//     }
// }

const handleInputTitle = (e) => {
    const targetTitle = e.target.parentNode;
    const text = targetTitle.querySelector("span");
    const input = targetTitle.querySelector(".js-input-title");

    // console.log(targetTitle);
    // console.log(text);

    input.style.display = "block";
    text.style.display = "none"
    input.focus();
    input.onkeydown = handleInputSubmit;
}

// function handleInputTitle(e){
//     const targetTitle = e.target.parentNode;
//     const text = targetTitle.querySelector("span");
//     const input = targetTitle.querySelector(".js-input-title");

//     // console.log(targetTitle);
//     // console.log(text);

//     input.style.display = "block";
//     text.style.display = "none"
//     input.focus();
//     input.onkeydown = handleInputSubmit;
// }

const paintListCard = (element) => {
    const cardsItem = document.querySelectorAll(".js-list-item");
    const cardsCnt = cardsItem.length;
    const itemWrap = element.querySelector(".js-list-wrap ul");
    const txtArea = element.querySelector(".js-txt-area");
    // const listLength = itemWrap.querySelectorAll("li").length;
    // console.log(itemWrap);
    // const listItems = element.querySelectorAll(".js-list-item");
    // console.log(listItems);
    // console.log(txt === "");
    console.dir(txtArea);
    const li = document.createElement("li");
    li.id = `${cardsCnt + 1}`;
    li.className = "js-list-item list-item";
    li.innerHTML = `<button><span>${txtArea.value}</span></button>`
    li.setAttribute("draggable", "true");
    if(txtArea.value !== ""){
        itemWrap.appendChild(li);
        txtArea.value = "";
        triggerDragAndDrop();
    }else{
        return;
    }
}

// function paintListCard(element){
//     const cardsItem = document.querySelectorAll(".js-list-item");
//     const cardsCnt = cardsItem.length;
//     const itemWrap = element.querySelector(".js-list-wrap ul");
//     const txtArea = element.querySelector(".js-txt-area");
//     // const listLength = itemWrap.querySelectorAll("li").length;
//     // console.log(itemWrap);
//     // const listItems = element.querySelectorAll(".js-list-item");
//     // console.log(listItems);
//     // console.log(txt === "");
//     console.dir(txtArea);
//     const li = document.createElement("li");
//     li.id = `${cardsCnt + 1}`;
//     li.className = "js-list-item list-item";
//     li.innerHTML = `<button><span>${txtArea.value}</span></button>`
//     li.setAttribute("draggable", "true");
//     if(txtArea.value !== ""){
//         itemWrap.appendChild(li);
//         txtArea.value = "";
//         triggerDragAndDrop();
//     }else{
//         return;
//     }
// }

const handleAddList = (e) => {
    const listWrap = e.target.parentNode.parentNode;
    const inputWrap = e.target.parentNode;
    const listForm = inputWrap.querySelector(".js-txt-form");
    // const txtArea = listForm.querySelector(".js-txt-area");
    const cancle = listForm.querySelector(".js-cancle");
    const addList = inputWrap.querySelector(".js-add-list");
    const addBtn = inputWrap.querySelector(".js-add-btn");
    // console.log(listForm);
    // console.log(txtArea);
    // this.style.display = "none";
    listForm.style.display = "block";

    cancle.onclick = function(){
        addList.style.display = "inline-block";
        listForm.style.display = "none";
    }


    addBtn.onclick = function(){
        paintListCard(listWrap);
    }
}

// function handleAddList(e){
//     const listWrap = e.target.parentNode.parentNode;
//     const inputWrap = e.target.parentNode;
//     const listForm = inputWrap.querySelector(".js-txt-form");
//     // const txtArea = listForm.querySelector(".js-txt-area");
//     const cancle = listForm.querySelector(".js-cancle");
//     const addList = inputWrap.querySelector(".js-add-list");
//     const addBtn = inputWrap.querySelector(".js-add-btn");
//     // console.log(listForm);
//     // console.log(txtArea);
//     this.style.display = "none";
//     listForm.style.display = "block";

//     cancle.onclick = function(){
//         addList.style.display = "inline-block";
//         listForm.style.display = "none";
//     }


//     addBtn.onclick = function(){
//         paintListCard(listWrap);
//     }
// }

const startClickEventListener = () => {
    addListBtns.forEach(addList => {
        addList.addEventListener("click", handleAddList);
    });
}

// function startClickEventListener(){
//     addListBtns.forEach(addList => {
//         addList.addEventListener("click", handleAddList);
//     });
// }

init = () => {
    startClickEventListener();
    console.log(titleList);
    titleList.forEach(title => {
        title.addEventListener("click", handleInputTitle);
    });
}

// function init(){
//     startClickEventListener();
//     console.log(titleList);
//     titleList.forEach(title => {
//         title.addEventListener("click", handleInputTitle);
//     });
// }

init();