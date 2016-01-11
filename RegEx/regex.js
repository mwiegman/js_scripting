//Meredith Wiegman
//October 4, 2015

//form validation using jquery validation plugin
//<http://jqueryvalidation.org/>

$(document).ready(function() {

  //add ssn validation method 
  $.validator.addMethod('SocialSecurity',
      function (value) { 
          return validSSN(value) || value == "";
      }, 'Please enter a valid social security number.'
  );

  //ssn validation function
  //ssn regular expression found at
  //http://www.codeproject.com/Articles/651609/Validating-Social-Security-Numbers-through-Regular
  function validSSN(value) {      
      var regex = /^(?!219-09-9999|078-05-1120)(?!666|000|9\d{2})\d{3}([ \-]?)(?!00)\d{2}([ \-]?)(?!0{4})\d{4}$/;
      if (!regex.test(value)) {
          return false;
      }
      return true;
  }

  //validate selected form
  $("#myForm").validate({  
   //set required fields  
    rules: {
      ssn: {
        required: true,
        SocialSecurity: true
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

//remove errors and highlights on form reset
$("#reset").click(function() {
  $("div").removeClass("has-error");
  $("div").removeClass("has-success");
  $(".error").remove();
});

});

