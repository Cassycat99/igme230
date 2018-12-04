/* Don't use <script> tags in a linked js file! */

/*          
<label for="content-menu">Select a file to load:</label>
<select name="content-menu" id="choose-content">
<option value="content1.txt">Your Name</option>
<option value="content2.txt">Course Info</option>
</select>
*/


let verse = ("content1.txt")  // sets default verse element
$("#content-menu").val(verse); // changes menu option to default
$("#choose-content").load(verse);   // retrieves only default element

$("#content-menu").change(function() {
verse = $(this).val();
$("#choose-content").load(verse); 
});