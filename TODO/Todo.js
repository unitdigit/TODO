//creating a new itemlist everytime the user clicks on the Add button
function newelement() 
{
	
	var input = document.createElement("li");
	var inputValue = document.getElementById("addItem").value;
	var x = document.createTextNode(inputValue); 
	input.appendChild(x);
	input.innerHTML+= '<img class ="close" src="circle-close-128.png"/>';
	document.getElementById('mylist').appendChild(input);
	var clear = document.getElementById('list');
	clear.reset();
	var close = document.getElementsByClassName("close");
    var i;
      for (i = 0; i < close.length; i++) 
      {
        close[i].onclick = function() 
        {
          var div = this.parentElement;
          div.style.display = "none";
        }
      }
	 return false;
}
