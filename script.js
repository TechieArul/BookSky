var bg = document.querySelector(".background")
var add_book_form = document.querySelector(".input_form")
var item_containner = document.querySelector(".item_containner")

function open_add_book(){
    bg.style.display = "block"
    add_book_form.style.display = "block"
}

function close_bg(){
    bg.style.display = "none"
    add_book_form.style.display = "none"

}

function del_book(event){
    event.target.parentElement.remove()

}

function add_book(){
    var book_name = document.getElementById("book_name").value
    var book_des = document.getElementById("book_des").value

    var new_item = document.createElement("div")
    new_item.setAttribute("class","item")

    new_item.innerHTML= `<h2>${book_name}</h2>
    <p>${book_des}</p>
    <button class="del_item" onclick="del_book(event)" >Delete book</button>`

    item_containner.append(new_item)

    bg.style.display = "none"
    add_book_form.style.display = "none"
}