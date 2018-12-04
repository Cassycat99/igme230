/* Don't use <script> tags in a linked js file! */

/*          
<label for="content-menu">Select a file to load:</label>
<select name="content-menu" id="choose-content">
<option value="content1.txt">Your Name</option>
<option value="content2.txt">Course Info</option>
</select>
*/


let content = ("content1.txt")  // sets default content1 element

$("#content").load(content);   // loads content element with content.text1

$("#content-menu").change(function() {
    content = $(this).val();
$("#content").load(content); 
});

/*
let verse = ("verse 3-4.txt")  // sets default verse element
$("#verse-choose").val(verse); // changes menu option to default
$("#selectedverse").load(verse);   // retrieves only default element

$("#verse-choose").change(function() {
verse = $(this).val();
$("#selectedverse").load(verse); 
*/

