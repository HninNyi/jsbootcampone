//UI
const form= document.querySelector('#task-form');
const taskinput=document.querySelector("#task");
const filter =document.querySelector('#filter');
const tasklist = document.querySelector('.collection');
const clearbtn= document.querySelector(".clear-task");

// Event Listener
//add task event
form.addEventListener('submit',addtask);
//add remove task event
tasklist.addEventListener('click',removetask);
// clear task event 
clearbtn.addEventListener('click',cleartasks);
//filter task event 
filter.addEventListener('keyup',filtertask);

//DOM load event
document.addEventListener('DOMContentLoaded',gettasks);

//Clear all tasks from local storage
clearbtn.addEventListener('click',cleartasksfromlocalstorage);




function addtask(e){
    // console.log("hrllo");

    if(taskinput.value === ''){
        window.alert("Add a task");
    }else{
        
    // create li Element
    const li = document.createElement('li');
    //  add class
    li.className="collection-item";
    //create text node and append child
    li.appendChild(document.createTextNode(taskinput.value));

    const link = document.createElement('a');
    // add class
    link.className="delete-item secondary-content";
    //add icon
    link.innerHTML=`<i class="far fa-trash-alt"></i>`;

    // append link to li
    li.appendChild (link);

    // append li to ul
    tasklist.appendChild(li);
    
    //Store in localStorage
    storetaskinlocalstorage(taskinput.value);

    }


    e.preventDefault();
}

//remove task
function removetask(e){
    // console.log(e.target);

    // console.log(e.target.parentElement);

    if(e.target.parentElement.classList.contains('delete-item')){
        if(confirm("Are u sure?")){
            e.target.parentElement.parentElement.remove();
        }
        
    }

    //remove task from local sstorage
    removetaskfromlocalstorage(e.target.parentElement.parentElement);

}

// clear all tasks
 function cleartasks(e){
    //  console.log("cleafr");

    // method 1
    // tasklist.innerHTML=``;

    //method 2
    // console.log(tasklist.firstChild);

    let x=0;
    const litems = document.querySelectorAll('li');
    while(x<tasklist.childElementCount){
        tasklist.removeChild(tasklist.firstChild);
    }

    while(tasklist.firstChild){
        tasklist.removeChild(tasklist.firstChild);
    }

 }

 //filter tasks 
 function filtertask(e){
    // console.log("hey");
    const filter = e.target.value.toLowerCase();

    const tasks = document.querySelectorAll('.collection-item');

    tasks.forEach(function(task){
        const item = task.firstChild.textContent.toLowerCase();
        if(item.indexOf(filter) != -1){
            task.style.display="block";
        }else{
            task.style.display="none";
        }
    });
 }

//to store task in local storage
function storetaskinlocalstorage(task){
    let tasks;
    if(localStorage.getItem('tasks') === null){
        tasks=[];

    }else{
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }
    tasks.push(task);

    localStorage.setItem('tasks',JSON.stringify(tasks));

}

//Get tasks from local storage 
function gettasks(){
    let tasks;
    if(localStorage.getItem('tasks') ===  null){
        tasks=[];
    }else{
        tasks=JSON.parse(localStorage.getItem('tasks'));

    }
    tasks.forEach(function(task){
        //create li element
        const li = document.createElement('li');
        //add class
        li.className='collection-item';
        //create text node and paaend to li
        li.appendChild(document.createTextNode(task));

        //create link element
        const link = document.createElement('a');
        //add class
        link.className='delete-item secondary-content';
        //add icon
        link.innerHTML=`<i class="far fa-trash-alt"></i>`;
        //append link to li
        li.appendChild(link);

        //append li to ul
        tasklist.appendChild(li);
    });
}

// gettasks();

//Remove Task from Local Storage
function removetaskfromlocalstorage(taskitem){
    // console.log(taskitem);

    let tasks;
    if(localStorage.getItem('tasks')===null){
        tasks = [];
    }else{
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }

    tasks.forEach(function(task,index){
        if(taskitem.textContent === task){
            //delete 1 item from array with current index 
            tasks.splice(index,1);
        }
    });

    localStorage.setItem('tasks',JSON.stringify(tasks));

}


// Clear tasks from local Storage
function cleartasksfromlocalstorage(){
    localStorage.clear();
}