$(document).ready(function () {
    $("#navbardrop").click(function () {
        $("#dropitem").slideToggle("5000");
    });

    $(".offerhead").click(function () {
        $("#cardgroup").slideToggle("5000");
    });
    //popup
    $(".popupform").click(function () {
        console.log('in');
        openPopup($(this).attr('data-Popup'));

    });

    function openPopup(popupName) {

        $('.' + popupName).fadeIn();
    }

    function closeAllPopup() {
        console.log('out');
        $('.popup').fadeOut();
    }

    $(".closex").click(function () {

        closeAllPopup();

    });
   
});

function largename(){
    document.getElementById("medname").className = "newStyle";
};
function largetext(){
    document.getElementById("swattention").className = "attention";
};
function previewmsg(){
    document.getElementById("previewmsg").innerHTML = "before click on submit button pls. check details";
};
function samesubmitmsg(){
    document.getElementById("previewmsg").innerHTML = "";
};

