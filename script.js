let b = document.querySelector('.window');



function mypPopClick(){
    b.style.visibility = 'visible';
    b.style.opacity = '1';
    b.style.transition = 'all 0.7s ease-out 0s';
}
function mypPopClose(){
    b.style.visibility = 'hidden';
    b.style.opacity = '0';
}

/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}