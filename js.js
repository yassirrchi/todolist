let addbutton=document.getElementById('addbtn');
let txtinpt=document.getElementById('txtinput');
let tskfield=document.getElementById('tasksfield');
let addaud=document.getElementById('addaudio');
let rmaud=document.getElementById('removeaudio');
let todo;
var newtask;
if(localStorage.getItem("todoapp")===null)
todo=[];
else
todo=JSON.parse(localStorage.getItem("todoapp"));    
//

//
addbutton.addEventListener('click',function(){
if(txtinpt.value!=""){
newtask=document.createElement('li');
newtask.innerHTML=txtinpt.value;
todo.push(txtinpt.value);
localStorage.setItem("todoapp",JSON.stringify(todo));
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


});
var a=document.querySelector('ul');

a.addEventListener('dblclick',clickevent);

function clickevent(e){
var vb=e.target.innerHTML;
todo.splice(todo.indexOf(vb),1); 
tskfield.removeChild(e.target);  
rmaud.play();
//here


localStorage.setItem("todoapp",JSON.stringify(todo));
};
window.onload=function(){
if(localStorage.getItem("todoapp")!=null){
todo=JSON.parse(localStorage.getItem("todoapp"));  
var i;

for(i=0;i<todo.length;i++)
{newtask=document.createElement('li');
 newtask.innerHTML=todo[i];
 tskfield.appendChild(newtask);

}

}
};