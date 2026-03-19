const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask(){

    //if the input box is empty and the user tries to add something, the user must receive an alert that tells them to write something before it can be added
    if(inputBox.value ===''){
        alert("You must write something!");
    }
    else{
        //if the input box is filled and you click add , the following must happen
       //create an html element of type li meaning create a list element that will hold what the user has added and store it in the li element
        let li = document.createElement("li");
        
        //in that li element what must be shown is what the user has added to the list
        li.innerHTML = inputBox.value;

        //take that list elemnt and add it to the listContainer element
        listContainer.appendChild(li);

        //now to create the cross element that will be near the list item
        //createElement("span") → creates a new HTML <span> element in memory.
        let span = document.createElement("span");
        span.innerHTML ="\u00d7"; //a nd that element will be represented by a cross
        li.appendChild(span);//append the cross to the list item that has been added
    }

    //after add in the inputted text to the list , clear the input box 
    inputBox.value="";
    saveData();//we must call this function everytime we add a new list item so we can save it to the local storage
    //the .value element in javascript is used to get the value of an html elements
}
   
//add the functionality to ensure that when the cross * is clicked the task disappears
//the list container holds all the tasks
listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){ // it will check if we have clicked on a li element

        //if the user did click on a li element it chould check it and cancel it out
        e.target.classList.toggle("checked");
        saveData();//call it here too
    }
    //it will check if what was clicked is a span and if it is , it willdelete the parent element , which is the input in the list container, it will delete the task
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
}, false);


//create a function that will make sure that when the browser is refreshed the list items must still remain
function saveData(){
    //this will make sure that whatever is in the listContainer remains even when the browser changes
    
    //it will be stored in a variable called data
    localStorage.setItem("data",listContainer.innerHTML);

    //we can now get the information using the getItem data
}

//create a function that will get all the data that has already been storedin the local storage
function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();
