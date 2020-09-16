(function(window, document, undefined)
{
    setTimeout(
        function(){
     
           $('#outer_anim_container').replaceWith($('#content_container'));
           $('#content_container').fadeIn(3000);
     
        },
        3000
     );
 
})(window, window.document);


// $(window).load(function(){
//     setTimeout(
//      function(){
  
//         $('#outer_anim_container').replaceWith($('#content_container'));
//         $('#content_container').show();
  
//      },
//      6000
//   );
//     });