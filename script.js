$(function(){
    $("#btn").click(function(){
        $("#change").html('<a href="https://www.e-typing.ne.jp/">must</a>');
    });

    $("#hover").hover(
        function(){
            $("h2").fadeOut();
        },
        function(){
            $("h2").fadeIn();
        }
    );
})