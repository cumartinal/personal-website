// Contains all the functions that make the website change when scrolling
window.onscroll = function() {
                    changeNavBar();
                  };

// Changes the navbar aspect after scrolling down
function changeNavBar() {
  // Getting view dimensions, just in case I change my mind
  var viewheight = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);

  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("navbar").className = "navbarscroll";
    document.getElementById("navlink").className = "navlinkscroll";
    document.getElementById("navlink2").className = "navlinkscroll";
    document.getElementById("navlink3").className = "navlinkscroll";

  } else {
    document.getElementById("navbar").className = "";
    document.getElementById("navlink").className = "";
    document.getElementById("navlink2").className = "";
    document.getElementById("navlink3").className = "";
  }
}