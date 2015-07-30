jQuery(function() {
    sideMenuActions();
    layoutSettings();
   
    $(document).off("click.dropdown-menu")
});
function sideMenuActions() {
    $("#menu-toggler").on("click", function () {
        $("#sidebar").toggleClass("display");
        $(this).toggleClass("display");
        return false
    });

    var isOpen = false;

    $("#sidebar-collapse").on("click", function() {
        $("#sidebar").toggleClass("menu-min");
        $(this.firstChild).toggleClass("glyphicon-chevron-right");

        isOpen = $("#sidebar").hasClass("menu-min");
        if (isOpen) {
            $(".open > .submenu").removeClass("open")
        }
    });

    $(".nav-list .dropdown-toggle").each(function() {
        var subMenu = $(this).next().get(0);
        $(this).on("click", function() {
            if (isOpen) {
                return false
            }
            $(".open > .submenu").each(function() {
                if (this != subMenu && !$(this.parentNode).hasClass("active")) {
                    $(this).slideUp(200).parent().removeClass("open")
                }
            });
            $(subMenu).slideToggle(200).parent().toggleClass("open");
            return false
        })
    })
}


function layoutSettings() {
    
    $("#settings_btn").on("click", function() {
        $(this).toggleClass("open");
        $("#settings_box").toggleClass("open")
    });

    $("#settings_header").removeAttr("checked").on("click", function() {
        if (this.checked) {
            $(".navbar.navbar-inverse").addClass("navbar-fixed-top");
            $(document.body).addClass("navbar-fixed")
        } else {
            $(".navbar.navbar-inverse").removeClass("navbar-fixed-top");
            $(document.body).removeClass("navbar-fixed");
            if ($("#settings_sidemenu").get(0).checked) {
                $("#settings_sidemenu").click()
            }
        }
    });
    $("#settings_sidemenu").removeAttr("checked").on("click", function() {
        if (this.checked) {
            $("#sidebar").addClass("fixed");
            if (!$("#settings_header").get(0).checked) {
                $("#settings_header").click()
            }
        } else {
            $("#sidebar").removeClass("fixed")
        }
    });
}
;
