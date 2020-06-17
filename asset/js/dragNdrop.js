
const contentWrap = document.querySelector(".js-content-wrap");
let dragged;
let targeted;

// function handleDragEnd(e){
//     console.log(e.target);
// }

const handleDragOver = (e) => {
    e.preventDefault();
    // console.log(e.target)
    if(e.target.classList.contains("js-list-item")){
        targeted = e;
    }
}

// function handleDragOver(e){
//     e.preventDefault();
//     // console.log(e.target)
//     if(e.target.classList.contains("js-list-item")){
//         targeted = e;
//     }
// }

const handleDragStart = (e) => {
    dragged = e;
    e.dataTransfer.setData("text/plain", e.target.id);
}

// function handleDragStart(e){
//     dragged = e;
//     e.dataTransfer.setData("text/plain", e.target.id);
// }

const handleDrop = (e) => {
    console.log(e.target);
    if(e.target.classList[0] === "js-list-item-wrap"){
        const dropzone = e.target.querySelector(".js-lists-wrap");
        const id = e.dataTransfer.getData('text');
        const draggableElement = document.getElementById(id);

        dropzone.appendChild(draggableElement);
        e.dataTransfer.clearData();
    }else if(e.target.classList.contains("js-list-item")){
        const temp = dragged.target.innerHTML;

        dragged.target.innerHTML = targeted.target.innerHTML
        targeted.target.innerHTML = temp;
    }
}

// function handleDrop(e){
//     console.log(e.target);
//     if(e.target.classList[0] === "js-list-item-wrap"){
//         const dropzone = e.target.querySelector(".js-lists-wrap");
//         const id = e.dataTransfer.getData('text');
//         const draggableElement = document.getElementById(id);

//         dropzone.appendChild(draggableElement);
//         e.dataTransfer.clearData();
//     }else if(e.target.classList.contains("js-list-item")){
//         const temp = dragged.target.innerHTML;

//         dragged.target.innerHTML = targeted.target.innerHTML
//         targeted.target.innerHTML = temp;
//     }
// }

const triggerDragAndDrop = () => {
    contentWrap.addEventListener("dragstart", handleDragStart, false);
    contentWrap.addEventListener("dragover", handleDragOver, false);
    contentWrap.addEventListener("drop", handleDrop, false);
}

// function triggerDragAndDrop(){
//     contentWrap.addEventListener("dragstart", handleDragStart, false);
//     contentWrap.addEventListener("dragover", handleDragOver, false);
//     contentWrap.addEventListener("drop", handleDrop, false);
// }

init = () => {
    triggerDragAndDrop();
}

init();