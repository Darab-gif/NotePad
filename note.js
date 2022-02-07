var input=document.getElementById("input");
var note=document.querySelector(".note");

function myAdd(){

    if(input.value == ""){
        alert("write something...")
    }
    else{
    note.innerHTML += `<div class='taskName'>
       <span class='task'>
            ${document.querySelector('#input').value}
       </span>
       
            <button class='del'>Delete</button>
            <button class='edit'>Edit</button>
        
    </div>`;

  var del = document.querySelectorAll(".del");
    for(let k=0; k < del.length; k++){
        del[k].onclick=function(){
            var d= this.parentElement;
            d.style.display='none';
        }
    }

    /*var edit=document.querySelectorAll('.edit');
    for(let k=0; k < edit.length; k++){
        edit[k].onclick=function(){
            var ed=this.

        }
    }*/
}
}
