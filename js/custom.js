/* Set the width of the side navigation to 250px and the left margin of the page content to 250px */
function openNav() {
  document.getElementById("sidenav").style.width = "250px";
}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
function closeNav() {
  document.getElementById("sidenav").style.width = "0";
}


$(document).ready(function() {
  $('.dropbtn').on('click', function() {
    $('.dropdown-content').toggleClass('show');
  });
});