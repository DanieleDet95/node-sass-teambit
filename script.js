$(document).ready( function (){

  // Al click visualizzare o nascondere il sotto menu 
  $('li.sotto').click( function(){
    $(this).find('.sotto_menu').toggleClass('nascosto');
  });

});
