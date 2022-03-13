//Toggle image and text in what we do section

$(document).ready(function(){
    $("#design-img").click(function(event){
        event.preventDefault();
        $("#design, #design-img").toggle();
        $("#design").click(function (event){
            event.preventDefault();
            $("#design-img, #design").toggle();
        });
    });
    $("#develop-img").click(function(){
        $("#development, #develop-img").toggle();
        $("#development").click(function(){
            $("#develop-img").toggle();
            $("#development").toggle();
        })
    });
});

//Toggle image and text in development column of the what we do section

// $(document).ready(function(){
//     $("#develop-img").click(function(){
//         $("#development, #develop-img").toggle();
//         $("#development").click(function(){
//             $("develop-img, #development").toggle();
//         });
//     });
// });