$(document).ready(function(){
    $("imh").on('click', function(event){
        event.stopPropagation();
        event.stopImmediatePropagation();

        console.log("h");
        $("#modal").show();
        $("#modal-img").attr("src", $(this).attr("src"));
    });
});

$(document).ready(function(){
    $("#modal").on('click', function(){
        $("#modal").hide();
        $("#modal-img").attr("src", "");
    });
});