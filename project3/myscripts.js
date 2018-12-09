    
    $('.menu-btn').on('click', function(e) {
        e.preventDefault();
        $(this).toggleClass('menu-btn_active');
        $('.menu').toggleClass('menu_active');
    });





    $(document).ready(function() {
        $("#click1").click(function() {
            $(".myClass1").toggleClass("hide");
            $("#click1 .hoverTitle").toggleClass("hoverTitleBold");

            if ($('#2').hasClass('hide')) {} else {
                $("#2").toggleClass("hide");
                $("#click2 .hoverTitle").toggleClass("hoverTitleBold");
            }

            if ($('#3').hasClass('hide')) {} else {
                $("#3").toggleClass("hide");
                $("#click3 .hoverTitle").toggleClass("hoverTitleBold");
            }

        });
    });

    $(document).ready(function() {
        $("#click2").click(function() {
            $(".myClass2").toggleClass("hide");
            $("#click2 .hoverTitle").toggleClass("hoverTitleBold");

            if ($('#1').hasClass('hide')) {} else {
                $("#1").toggleClass("hide");
                $("#click1 .hoverTitle").toggleClass("hoverTitleBold");
            }

            if ($('#3').hasClass('hide')) {} else {
                $("#3").toggleClass("hide");
                $("#click3 .hoverTitle").toggleClass("hoverTitleBold");
            }

        });
    });

    $(document).ready(function() {
        $("#click3").click(function() {
            $(".myClass3").toggleClass("hide");
            $("#click3 .hoverTitle").toggleClass("hoverTitleBold");

            if ($('#2').hasClass('hide')) {} else {
                $("#2").toggleClass("hide");
                $("#click2 .hoverTitle").toggleClass("hoverTitleBold");
            }

            if ($('#1').hasClass('hide')) {} else {
                $("#1").toggleClass("hide");
                $("#click1 .hoverTitle").toggleClass("hoverTitleBold");
            }


        });
    });