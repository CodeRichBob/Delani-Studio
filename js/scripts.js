$(document).ready(function(){
    $("#design-img").click(function(event){
        event.preventDefault();
        $("#design, #design-img").toggle();
        $("#design").click(function (event){
            event.preventDefault();
            $("#design-img, #design").toggle();
        });
    });
});