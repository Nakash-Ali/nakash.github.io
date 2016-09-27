$(document).ready(function(){
 
    $("[rel='tooltip']").tooltip();    
 
    $('#hover-cap-4col .thumbnail').hover(
        function(){
            $(this).find('.caption').slideDown(250);
        },
        function(){
            $(this).find('.caption').slideUp(250);
        }
    );    
 
});        