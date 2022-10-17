$(document).ready(function(){
    $(".expandable-img").on('click', function(event){
        event.stopPropagation();
        event.stopImmediatePropagation();

        console.log("h");
        $("#modal").show();
        $("#modal-img").attr("src", $("img", this).attr("src"));
    });
});

$(document).ready(function(){
    $("#modal").on('click', function(){
        $("#modal").hide();
        $("#modal-img").attr("src", "");
    });
});