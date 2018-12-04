/* Don't use <script> tags in a linked js file! */

/*          
<label for="content-menu">Select a file to load:</label>
<select name="content-menu" id="choose-content">
<option value="content1.txt">Your Name</option>
<option value="content2.txt">Course Info</option>
</select>
*/


let content = ("content1.txt")  // sets default content1 element

$("content").load(content);   // retrieves only default element

$("#content-menu").change(function() {
    content = $(this).val();
$("#choose-content").load(content); 
});





