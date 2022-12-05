const socket = io('http://localhost:8000');

const form = document.getElementById('send-container');

const messageSend = document.getElementById('messageSend');
const messageContainer = document.querySelector('.container');
memberNameElement = document.getElementById("memberName")
const userName = memberNameElement.innerText;
const titleIdElement = document.getElementById("topicId");
const titleId = titleIdElement.innerText;
console.log(typeof(title));
form.addEventListener('click',()=>{
    // e.preventDefault();
    console.log("kjdfkajf");
    const message = messageSend.value;
    append(`You : ${message}`,'right');
    socket.emit('send',message,titleId)
    messageSend.value = ""
})
const append = (message , position)=>{
    const messageElemet = document.createElement('div');
    messageElemet.innerText = message;
    // messageElemet.classList.add(position);
    messageElemet.classList.add('message')
    messageElemet.classList.add(position)
    messageContainer.append(messageElemet)

}
socket.emit('new-user-joined',userName,titleId)

socket.on('user-joined',data=>{
    append(`${data} joined`,'center');
})

socket.on('receive',data=>{
    append(`${data.name}:   ${data.message}`,'left')
})

socket.on('load',res=>{
    for(let i = 0;i<res.length;i++){
        if(res[i]['userName']==userName){
            append(`${res[i]['userName']}:${res[i]['message']}`,'right');
        }
        else{
            append(`${res[i]['userName']}:${res[i]['message']}`,'left');
        }
    }
})

// // Create a "close" button and append it to each list item
// var myNodelist = document.getElementsByTagName("li");
// var i;
// for (i = 0; i < myNodelist.length; i++) {
//   var span = document.createElement("span");
//   var txt = document.createTextNode("\u00D7");
//   span.className = "close";
//   span.appendChild(txt);
//   myNodelist[i].appendChild(span);
// }

// // Click on a close button to hide the current list item
// var close = document.getElementsByClassName("close");
// var i;
// for (i = 0; i < close.length; i++) {
//   close[i].onclick = function() {
//     var div = this.parentElement;
//     div.style.display = "none";
//   }
// }

// // Add a "checked" symbol when clicking on a list item
// var list = document.getElementById("myUL")
// list.addEventListener('click', function(e) {
//     if(e.target && e.target.nodeName == "LI") {
//         console.log(e.target.id + " was clicked");
//         e.target.classList.toggle('checked');
//     }
// });

// // Create a new list item when clicking on the "Add" button
// function newElement() {
//   var li = document.createElement("li");
//   var inputValue = document.getElementById("myInput").value;
//   var t = document.createTextNode(inputValue);
//   li.appendChild(t);
//   if (inputValue === '') {
//     alert("You must write something!");
//   } else {
//     document.getElementById("myUL").appendChild(li);
//   }
//   document.getElementById("myInput").value = "";

//   var span = document.createElement("span");
//   var txt = document.createTextNode("\u00D7");
//   span.className = "close";
//   span.appendChild(txt);
//   li.appendChild(span);

//   for (i = 0; i < close.length; i++) {
//     close[i].onclick = function() {
//       var div = this.parentElement;
//       div.style.display = "none";
//     }
//   }
// }