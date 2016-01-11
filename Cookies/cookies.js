//Meredith Wiegman
// October 13, 2015
var today = new Date();
var expiry = new Date(today.getTime() + 30 * 24 * 3600 * 1000); // plus 30 days

//function to set cookie value and expiration
  function setCookie(name, value)
  {
    document.cookie=name + "=" + encodeURIComponent(value) + ";expires=" + expiry.toGMTString();
  }
//function to store cookie values
   function storeValues(form)  
  {
    setCookie("firstName", form.firstName.value);
    setCookie("lastName", form.lastName.value);
    setCookie("email", form.email.value);
    setCookie("userName", form.userName.value);   
    return true;
  }
//function to retrieve cookie values
  function getCookie(name)
  {
    var re = new RegExp(name + "=([^;]+)");
    var value = re.exec(document.cookie);
    return (value != null) ? decodeURIComponent(value[1]) : null;
  }
//display cookie values in form fields
  if(firstName = getCookie("firstName")) document.myForm.firstName.value = firstName;
  if(lastName = getCookie("lastName")) document.myForm.lastName.value = lastName;
  if(email = getCookie("email")) document.myForm.email.value = email;
  if(userName = getCookie("userName")) document.myForm.userName.value = userName;
//function to set cookie experation to previous date
  var expired = new Date(today.getTime() - 24 * 3600 * 1000); // less 24 hours
  function deleteCookie(name)
  {
    document.cookie=name + "=null;expires=" + expired.toGMTString(); 
  }
//function to delete cookies
  function clearCookies()
  {
    deleteCookie("firstName");
    deleteCookie("lastName");
    deleteCookie("email"); 
    deleteCookie("userName");
    deleteCookie("pageHit");   
    alert('Your cookies have been deleted!');
  }
//function to count number of form submits
  function submitCount() {
 
    var now = new Date();
    var expireDate = new Date();
    expireDate.setMonth(expireDate.getMonth()+6);
     
    var hitCt = parseInt(cookieVal("pageHit"));
    hitCt++;  
  
    document.cookie = "pageHit=" + hitCt + ";expires=" + expireDate.toGMTString(); 
  
    var outMsg = "You have submitted this form " + hitCt + " times.";
 
    document.getElementById("cookieData").innerHTML = outMsg;

    function cookieVal(cookieName) {
      var thisCookie = document.cookie.split("; ");
  
      for (var i=0; i<thisCookie.length; i++) {
          if (cookieName == thisCookie[i].split("=")[0]) {
          return thisCookie[i].split("=")[1];
          }
      }
      return 0;
    }    
}