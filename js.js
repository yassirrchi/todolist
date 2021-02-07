let addbutton=document.getElementById('addbtn');
let txtinpt=document.getElementById('txtinput');
let tskfield=document.getElementById('tasksfield');
let addaud=document.getElementById('addaudio');
let rmaud=document.getElementById('removeaudio');
addbutton.addEventListener('click',function(){
if(txtinpt.value!=""){
var newtask=document.createElement('li');
newtask.innerHTML='📝' + txtinpt.value;
localStorage.setItem("task",newtask.innerHTML);
txtinpt.value='';

addaud.play();
tskfield.appendChild(newtask);
newtask.addEventListener('dblclick', function(){
tskfield.removeChild(newtask);
rmaud.play();



});

}
else
alert('must enter a character');


})