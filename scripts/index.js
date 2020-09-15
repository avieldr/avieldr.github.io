


(function(window, document, undefined)
{
  var image_interest = document.getElementById('interests-container');
  image_interest.addEventListener('mouseover', imageInterestMouseOver, false);
  image_interest.addEventListener('mouseout', imageInterestMouseOut, false);

//   var image_plane = document.getElementById('contact-container');
//   image_plane.addEventListener('mouseenter', imagePlaneMouseOver, false);
//   image_plane.addEventListener('mouseleave', imagePlaneMouseOut, false);
 
})(window, window.document);


function imageInterestMouseOver(event)
{
    event = event || window.event;

    var image = document.getElementById('interests');
    image.src = './resources/icons/interest_color.png'
}

function imageInterestMouseOut(event)
{
  event = event || window.event;

  var image = document.getElementById('interests');
  image.src = './resources/icons/interest.png'
}


// function imagePlaneMouseOver(event)
// {
//     event = event || window.event;

//     var image = document.getElementById('plane');
//     image.src = './resources/icons/plane_move.png'
// }

// function imagePlaneMouseOut(event)
// {
//   event = event || window.event;

//   var image = document.getElementById('plane');
//   image.src = './resources/icons/plane.png'
// }
