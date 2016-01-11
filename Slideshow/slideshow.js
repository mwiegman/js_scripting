//Meredith Wiegman
//Nov. 3, 2015

window.onload = initAll;

var currImg = 0;
//Caption text array
var captionText = [
  "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo aliquam praesentium impedit ad quaerat maxime, obcaecati nobis fugiat inventore cum! Sint nulla culpa eius nesciunt, totam eaque accusantium eligendi, necessitatibus.",
  "Temporibus doloremque illum, neque, dolor ut quam labore possimus quisquam adipisci quas qui provident optio. Exercitationem suscipit corporis minus in. Nostrum, sequi?",
  "Voluptatem aspernatur ipsa error illum. Quis eos corporis vero ex accusantium et perspiciatis incidunt quae numquam, corrupti ducimus impedit soluta fugit, id.",
  "Dolorem vero fuga suscipit incidunt facere molestiae dolorum ipsam voluptatum repellendus, eos beatae pariatur ratione mollitia ducimus. Laudantium illum qui provident quidem.",
  "Odio dicta possimus quasi, dolorem adipisci dolore consequatur. Sunt nulla adipisci eligendi earum repudiandae numquam, dolores commodi ex itaque praesentium. Soluta, temporibus."  
];
//Title text array
var titleText = [
  "Lorem ipsum dolor sit amet",
  "Temporibus doloremque illum",
  "Voluptatem aspernatur ipsa error illum",
  "Dolorem vero fuga suscipit incidunt",
  "Odio dicta possimus quasi"
];

function initAll() {
  //Set initial image caption and title
  document.getElementById("imgText").innerHTML = captionText[0];
  document.getElementById("titleText").innerHTML = titleText[0];
  //Previous and next navigation buttons
  document.getElementById("prevLink").onclick = function() {
    newSlide(-1);
  }
  document.getElementById("nextLink").onclick = function() {
    newSlide(1);
  }
}
//function to change image
function newSlide(direction) {
  var imgCt = captionText.length;
  //loop images
  currImg = currImg + direction;
  if (currImg < 0) {
    currImg = imgCt-1;
  }
  if (currImg == imgCt) {
    currImg = 0;
  }
  //display next image
  document.getElementById("slideshow").src = "Images/Image" + currImg + ".jpg";
  //display image caption
  document.getElementById("imgText").innerHTML = captionText[currImg];
  //display image title
  document.getElementById("titleText").innerHTML = titleText[currImg];
}