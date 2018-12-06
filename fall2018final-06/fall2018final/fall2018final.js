
$(".mainmenu").click(function () { //event handler
    $(this).next(".submenu").slideToggle(); //toggles hide/show
});





let content = ("article0.txt")
$("article").load(content);


function radioClicked() {
	content = this.value;
    $("article").load(content);
   // $("article").load("article1.txt");
}

//document.addEventListener("click", radioClicked);

//$(document).ready(function(){
//    $("article").load("article1.txt");
//}




let val =  0;
$("#clickme").click(function() {
    $('#count').html(function(i, val) { return +val+1 });
})
                   
                   
//let currentVal = 0;
//function buttonClicked(){
//	"#count".innerHTML = currentVal;
//	}
//button.addEventListener("click", buttonClicked);


/*
            <h2>Click a Button to Change the Article</h2>
            <form>
                <input type="radio" name="content" value="article1.txt">Article 1<br>
                <input type="radio" name="content" value="article2.txt">Article 2
            </form>
            */

/*
<div id="colorform">
	<legend>Choose your favorite color!</legend>
	<p><input type="radio" name="colorGroup" value="red" /> Red</p>
	<p><input type="radio" name="colorGroup" value="green" /> Green</p>
	<p><input type="radio" name="colorGroup" value="blue" /> Blue</p>
	<p><button id="colorButton" type="button">Submit</button></p>
	<p id="info"></p>
</div>


let radioQ = document.querySelectorAll('#colorform > p > input');
let textBox = document.querySelector('#colorform > #info');
let legend = document.querySelector('#colorform > legend');

function radioClicked() {
    textBox.innerHTML = "You have selected the color " + this.value;
	currentVal = this.value;
}

for(let i = 0; i < radioQ.length; i++){
	radioQ[i].addEventListener("click", radioClicked);
}

let button = document.querySelector('#colorform > p> button');
let currentVal;
function buttonClicked(){
	textBox.innerHTML = "Your FINAL CHOICE is " + currentVal;
	legend.style.color = currentVal;
	}

button.addEventListener("click", buttonClicked);
*/