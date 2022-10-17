$(document).ready(function(){
    $(".expandable-img").on('click', function(event){
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

//Change site background image based on date
/*function setBackgroundImage()
{
    var today = new Date();
    var season = "";

    switch(today.getMonth())
    {
        case 0: //Jan
        case 1: //Feb
            season = "winter";
            break;
        case 2: //Mar
        case 3: //Apr
        case 4: //May
            season = "spring";
            break;
        case 5: //Jun
        case 6: //Jul
        case 7: //Aug
            season = "summer";
            break;
        case 8: //Sep
        case 10: //Nov
            season = "autumn";
            break;
        case 9: //Oct
            season = "halloween";
            break;
        case 11: //Dec
            season = "xmas";
            break;
    }

    document.body.style.backgroundImage = "url('/site/images/backgrounds/'" + season + "'.png')";
}*/

function closeModalImageViewer()
{
    document.getElementById("modal-img").src = "";
    document.getElementById("modal").style.display = "none";
}