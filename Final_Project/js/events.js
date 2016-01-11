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
      }
    },
    //set error messages
    messages: {
      firstName: "Please enter your first name.",
      lastName: "Please enter your last name.",
      email: "Please enter an email address.",
      emailConfirm: {
        required: "Please confirm your email address.",
        equalTo: "Email addresses must match."
      }    
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
  
  document.getElementById('event1').onmouseover = function() {
    document.getElementById('popup1').style.display = 'block';
  }
  document.getElementById('event1').onmouseout = function() {
    document.getElementById('popup1').style.display = 'none';
  }

  document.getElementById('event2').onmouseover = function() {
    document.getElementById('popup2').style.display = 'block';
  }
  document.getElementById('event2').onmouseout = function() {
    document.getElementById('popup2').style.display = 'none';
  }

  document.getElementById('event3').onmouseover = function() {
    document.getElementById('popup3').style.display = 'block';
  }
  document.getElementById('event3').onmouseout = function() {
    document.getElementById('popup3').style.display = 'none';
  }  

  document.getElementById('event4').onmouseover = function() {
    document.getElementById('popup4').style.display = 'block';
  }
  document.getElementById('event4').onmouseout = function() {
    document.getElementById('popup4').style.display = 'none';
  }

});