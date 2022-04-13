/**
 * for import of SLJQLib library in main.js file
 * use includeJs() function
 */

includeJs("/SLJQLib.js");

/**
 * Usage of The SLJQLib Library
 * for testing performance of functions in Library.
 */

console.log($('h1').html());

$('h2').on('click',function (){
    alert("Tag is Clicked!");
})

$('h3').hide();

$('h4').attr('class','Hello World');


