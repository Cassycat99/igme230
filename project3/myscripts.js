    /*This function is used to create the navigation interaction on every page*/
    ///$('.menu-btn').on('click', function(e) {
       // e.preventDefault(); /*prevents error*/
       // $(this).toggleClass('menu-btn_active'); /*changes class*/
       // $('.menu').toggleClass('menu_active'); /*changes class*/
    //});
    

    $('.menu-btn').on('click', function(e) {
        console.log("fired");
        e.preventDefault();
        $(this).toggleClass('menu-btn_active');
        $('.menu').toggleClass('menu_active');
    });




    /*If a project is selected, that project's content will no longer have a hide class on*/
    /*Selecting a different project will hide the first one*/
    /*hoverTitleBold changes the hoverTitle to bold to know which project is currently selected*/
    $(document).ready(function() {
        $("#click1").click(function() { /*event handler*/
            $(".myClass1").toggleClass("hide");  /*changes class*/
            $("#click1 .hoverTitle").toggleClass("hoverTitleBold"); /*changes bold text*/

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

    /*repeat of above but project 2*/
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

/*repeat of above but project 3*/
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