// Event listner for toggle switch to change the theme
$("input").click(function() {
    var check_state = document.getElementById("themeswitch").checked; //State of the switch

    if (check_state == true) {       
        $(".darktheme").addClass("lighttheme");                 // Light theme 
    }
    else {  
        $(".lighttheme").removeClass("lighttheme");             // Dark theme
    }
})