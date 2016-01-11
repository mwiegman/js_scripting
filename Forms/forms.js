//Meredith Wiegman
//September 27, 2015

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
      userName: "required",
      password: "required",     
      //require password and passwordConfirm fields to be equivalent 
      passwordConfirm: {
        required: true,
        equalTo: "#password"
      },
      referred: "required",
      //require referredBy select box if yes radio button is selected
      referredBy: {
        required: "#yes:checked"
      },
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
      userName: "Please enter a user name.",
      password: "Please enter a password.",
      passwordConfirm: {
        required: "Please confirm your password.",
        equalTo: "Passwords must match."
      },
      referred: "Please select an option.",
      referredBy: "Please select an option"    
    },    
    //set error message placement for radio button group
    errorPlacement: function(error, element) {
    if (element.attr("name") == "referred")
      error.appendTo("#referredLabel");
    else
        error.insertAfter(element);
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

//show or hide referred by select group depending on whether
// "yes" or "no" is selected
var yes = $("#yes");
var no = $("#no");
yes.click(function() {
  $("#referred_by").removeClass("hide");
});
no.click(function() {
  $("#referred_by").addClass("hide");
});

//remove errors and highlight on form reset
$("#reset").click(function() {
  $("div").removeClass("has-error");
  $("div").removeClass("has-success");
  $(".error").remove();
});
});