const socket = io('http://localhost:8000');
const memberNameElement = document.getElementById("memberName");
memberNameElement.innerText = sessionStorage.name;
const memberName = memberNameElement.innerText;
const list_ul = document.getElementById('myUL');
let trainerTasks = new Array(), adminTasks = new Array(), memberTasks = new Array();
let initialLoad = new XMLHttpRequest();
initialLoad.open('post','/member/initial-todo-load',true);
initialLoad.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
initialLoad.onload = function(){
  if(this.status === 200){
    {
    //   console.log("type:",typeof(this.responseText))
    // console.log("response:",this.response);
    // console.log("type only:",typeof(this.response))
    // console.log("json",JSON.parse(this.responseText)[0])
    let listArr = JSON.parse(this.responseText);
    for(let i = 0;i<listArr.length;i++){
      if(listArr[i].writer == 'admin'){
        adminTasks.push(i);
      }
      else if(listArr[i].writer == 'trainer'){
        trainerTasks.push(i);
      }
      else{
        memberTasks.push(i);
      }
    }
    console.log("listArr",listArr[1].task)
    console.log('memberTasks',memberTasks)
    for(let i =0;i<adminTasks.length;i++){
      addingTasks(adminTasks[i],listArr);
    }
    for(let i =0;i<trainerTasks.length;i++){
      addingTasks(trainerTasks[i],listArr);
    }
    for(let i =0;i<memberTasks.length;i++){
      addingTasks(memberTasks[i],listArr);
    }
  }
}
else{
    console.log("Some error occured")
}
}
console.log("NMSE",memberName);
let params = {"name": memberName}
initialLoad.send(`name=${memberName}`);

function addingTasks(index,listArr){
  var li = document.createElement("li");
      var inputValue = listArr[index].task;
      var t = document.createTextNode(inputValue);
      li.appendChild(t);
      document.getElementById("myUL").appendChild(li);
      var span = document.createElement("span");
      var txt = document.createTextNode("\u00D7");
      span.className = "close";
      span.appendChild(txt);
      li.appendChild(span);
      console.log(memberName);
      for (let j = 0; j < close.length; j++) {
        close[j].onclick = function() {
          var div = this.parentElement;
          task = div.innerText;
          console.log("tas");
          task = task.slice(0,task.length-2);
          div.style.display = "none";
          socket.emit('removeTask',memberName,task);
          for(let k=0;k<task.length;k++){
            console.log(task[k]);
          }
        }
      }
      if(listArr[index].state=='complete'){
        console.log(listArr[index].state)
        li.click();
      }
}

// Create a "close" button and append it to each list item
var myNodelist = document.getElementsByTagName("li");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("span");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
var i,task;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    task = div.innerText;
    console.log("tas");
    task = task.slice(0,task.length-2);
    div.style.display = "none";
    socket.emit('removeTask',memberName,task);
    for(let i=0;i<task.length;i++){
      console.log(task[i]);
    }
  }
}

// Add a "checked" symbol when clicking on a list item
var list = document.getElementById("myUL")
list.addEventListener('click', function(e) {
  if(e.target && e.target.nodeName == "LI") {
    console.log(e.target.id + " was clicked");
    e.target.classList.toggle('checked');
        let task = e.target.innerText;
        socket.emit('flipState',memberName, task.slice(0,task.length -2));
      }
    });
    
    // Create a new list item when clicking on the "Add" button
    function newElement() {
      var li = document.createElement("li");
      var inputValue = document.getElementById("myInput").value;
      socket.emit('addTask',memberName,inputValue,'member');
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("You must write something!");
  } else {
    document.getElementById("myUL").appendChild(li);
  }
  document.getElementById("myInput").value = "";
  
  var span = document.createElement("span");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);
  
  console.log(memberName);
  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      task = div.innerText;
      console.log("tas");
      task = task.slice(0,task.length-2);
      div.style.display = "none";
      socket.emit('removeTask',memberName,task);
      for(let i=0;i<task.length;i++){
        console.log(task[i]);
      }
    }
  }
}