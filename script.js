
var edit1;
var input1=document.getElementsByClassName('divs');
var d1;

let flex0=document.getElementsByClassName('flex0')
let flexdiv=document.getElementById('flexdiv')
function add() {
    document.getElementById("add").style.display = "block";
}
function edit() {
    document.getElementById("edit").style.display = "block";
}
function input()
{
    let ip1=document.getElementById('ip1');
    let ip2=document.getElementById('ip2');
    add1(ip1,ip2);
}
function add1(ip1,ip2)
{
    
    if(ip1.value!==""&&ip1.value!=='undefined')
    {
    let divnew=document.createElement("div")
    document.body.appendChild(divnew)
    divnew.setAttribute("class","divs");
    divnew.innerHTML+=(`
    <h3>${ip1.value}</h3>
<p>
${ip2.value}
</p>
    <button id="flexDone" onclick="done(event)">Done</button>
    <button id="flexdlt" onclick="done(event)"> Delete</button>
    <button id="flexedt" onclick="editnew(event)">Edit</button>
</div>`)

document.getElementById('add').style.display="none";
ip1.value=null;
ip2.value=null;
}
else{
alert("type anything")
}
}

function closeBox() {
    document.getElementById("add").style.display = "none";
    document.getElementById("edit").style.display = "none";
}
function editnew(event)
{
    let edip1=document.getElementById('edip1');
    let edip2=document.getElementById('edip2');
    edit1=((event.target).parentElement)
    var e1txt=(edit1.children[0]);
    var a=(edip1.value=e1txt.textContent);
    var e2txt=(edit1.children[1])
    var b=(edip2.value=e2txt.textContent);
    document.getElementById('edit').style.display="block";
    
}
function remove()
{
    edit1.remove();
} 
function done(event)
{
    d1=((event.target).parentElement);
    d1.remove()
}
function edt()
{
    var ip1=document.getElementById('edip1').value;
    var ip2=document.getElementById('edip2').value;
    if(ip1!==""&&ip1!=='undefined')
    {
    let divnew=document.createElement("div")
    document.body.appendChild(divnew)
    divnew.setAttribute("class","divs");
    divnew.innerHTML+=(`
    <h3>${ip1}</h3>
<p>
${ip2}
</p>
    <button id="flexDone" onclick="done(event)">Done</button>
    <button id="flexdlt" onclick="done(event)"> Delete</button>
    <button id="flexedt" onclick="editnew(event)">Edit</button>
</div>`)

document.getElementById('edit').style.display="none";
remove();
ip1=null;
ip2=null;

    }
    else
    {
        alert("type any message ");
        document.getElementById('edit').style.display="block";
    }
    }
