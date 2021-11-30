
 $(document).ready(function () {
   $(document).click(function () {
        $('.navbar-collapse').collapse('hide');
   });
 });

 function myFunction() {
  var nnb = document.getElementsByClassName("nav-text");
  var nf = document.getElementsByClassName("navbar");
  var x = document.getElementsByClassName("footer-link");
  var y = document.getElementsByClassName("calll");
  var z = document.getElementsByClassName("ttt");
  var dm = document.getElementsByClassName("fa-moon");
  var rl = document.getElementsByClassName("collapse");
  var i;
  var element = document.body;
  element.classList.toggle("dark-mode");
  for (i = 0; i < x.length; i++) {
    x[i].classList.toggle("flc");
  }
  nf[0].classList.toggle("nf");
  rl[0].classList.toggle("rl");
  y[0].classList.toggle("flc");
  z[0].classList.toggle("tttdm");
  nnb[0].classList.toggle("mm");
  dm[0].classList.toggle("flc");
 }
