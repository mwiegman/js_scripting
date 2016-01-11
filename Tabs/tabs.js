//Meredith Wiegman
//Nov. 17, 2015

$(document).ready(function() {
//Hide all divs on page load.
  $('.content').hide();

//Display tab's corresponding div tag when clicked and highlight currently displayed tab.
  $('a[href$="1"]').click(
    function() {
    $('.content').hide();
    $('li').removeClass('active');
    $('#panel1').show();
    $(this).parent().addClass('active');
    return false;
  });

  $('a[href$="2"]').click(
    function() {
    $('.content').hide();
    $('li').removeClass('active');
    $('#panel2').show();
    $(this).parent().addClass('active');
    return false;
  });
  
  $('a[href$="3"]').click(
    function() {
    $('.content').hide();
    $('li').removeClass('active');
    $('#panel3').show();
    $(this).parent().addClass('active');
    return false;
  });

  $('a[href$="4"]').click(
    function() {
    $('.content').hide();
    $('li').removeClass('active');
    $('#panel4').show();
    $(this).parent().addClass('active');
    return false;
  });
  
});