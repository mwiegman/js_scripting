//Meredith Wiegman
//October 13, 2015

//form validation using jquery validation plugin
//<http://jqueryvalidation.org/>
$(document).ready(function() {
   $("#myForm").validate({  
   //set required fields  
    rules: {
      firstName: "required",
      lastName: "required",
      email: {
        required: true,
        email: true
      },
      //require email and emailConfirm fields to be equivalent
      emailConfirm: {
        required: true,
        equalTo: "#email"
      },
      userName: "required"      
    },
    //set error messages
    messages: {
      firstName: "Please enter your first name.",
      lastName: "Please enter your last name.",
      email: "Please enter an email address.",
      emailConfirm: {
        required: "Please confirm your email address.",
        equalTo: "Email addresses must match."
      },
      userName: "Please enter a user name."         
    },    
    //toggle error and success css styles
    highlight: function(element) {
        $(element).parent().addClass("has-error");
    },
    unhighlight: function(element) {
        $(element).parent().removeClass("has-error");
    },
    success: function(element) {
        $(element).parent().addClass("has-success");
      }
   });

//remove errors and highlight on form reset
$("#reset").click(function() {
  $("div").removeClass("has-error");
  $("div").removeClass("has-success");
  $(".error").remove();
});
});