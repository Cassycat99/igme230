/* Don't use <script> tags in a linked js file! */

/*          
<label for="content-menu">Select a file to load:</label>
<select name="content-menu" id="choose-content">
<option value="content1.txt">Your Name</option>
<option value="content2.txt">Course Info</option>
</select>
*/


let content = ("content1.txt")  // sets default content1 element

$("#content").load(content); // loads content element with content.text1
//$("#choose-content").val("Your Name");  //changes menu option
console.log(content);
console.log("hi");


$("#choose-content").change(function() {
    content = $(this).val();
$("#content").load(content); 
console.log(content);
console.log("change occured");
});

/*
let verse = ("verse 3-4.txt")  // sets default verse element
$("#verse-choose").val(verse); // changes menu option to default
$("#selectedverse").load(verse);   // retrieves only default element

$("#verse-choose").change(function() {
verse = $(this).val();
$("#selectedverse").load(verse); 
*/







/*
<nav>

<div class="menubox">
    <p class="menuitem">Menu Item 1</p>
    <ul class="submenu">
        <li>Sub Item 1a</li>
        <li>Sub Item 1b</li>
    </ul>
</div>

<div class="menubox">
    <p class="menuitem">Menu Item 2</p>
    <ul class="submenu">
        <li>Sub Item 2a</li>
        <li>Sub Item 2b</li>
    </ul>
</div>
</nav>*/



$(".submenu").hide(1000); //hide on load

$(".menubox").click(function () {
    $(".submenu").toggle(1000); //change to hidden
});



/*
<body>
    <button id="show">Show</button>
    <button id="hide">Hide</button>

    <div id="navpanel">
        <ul> 
            <li>Link 1</li>
            <li>Link 2</li>
            <li>Link 3</li>
        </ul>
    </div>

    <script>

    $("#hide").click(function () {
        $("#navpanel").hide(1500);
    });

    $("#show").click(function () {
        $("#navpanel").show(10);
    });
    
    
    </script>*/