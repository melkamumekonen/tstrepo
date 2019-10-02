// //$(document).ready(function () { // once the document is loaded then load our code
// })

// $("h1").css("color","red");  // change text color of h1 element in JQuery
// $("h1").css("color"); // returns the value of css property 
// $("h1").addClass("big"); //add class to element in selector
// $("h1").removeClass("big");//remove class to element in selector
// $("h1").toggleClass("big");//toggle class to element in selector
// $("h1").hasClass("big");//query about class in element
// $(selector).text(textString); // set text of html element
// $(selector).text(); // get text of html element
// $(selector).html(htmlString); // add html in element
// $(selector).html(); // get html of element
// $(selector).attr(attributeName, value); // set attribute of element;
// $(selector).attr(attributeName); // get attribute of element
// $(selector).removeAttr(attributeName);// remove attribute

// $("button").click(function (e) { // bind event handler to mouse click for all the buttons
//     alert("Clicked");
// });

// $(document).keydown(function (e) { // bind key press event handler to all document
//    $("h1").text(e.key);
// });

// $(selector).on(events, function () {// bind event handlers to certain event type 
    
// });

// $(selector).before(content); // add content before the element(s) in selector
// $(selector).after(content);// add content after the element(s) in selector
// $(selector).prepend(content);//add content after the opening tag of  element(s) in selector (before the content of the selector)
// $(selector).append(content);//add content before the closing tag of  element(s) in selector (after the content of the selector)

$("button").click(function (e) { // bind event handler to mouse click for all the buttons
    $("h1").slideUp(1000).slideDown(1000).animate({opacity : 0.5,fontSize : "10rem"});
});
// $(selector).slideDown();
