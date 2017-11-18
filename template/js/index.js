// $('.carousel.carousel-slider').carousel({fullWidth: true});
// $(document).ready(function(){
//     $('.slider').slider();
//   });
$(document).ready(function(){
    $('#modal1').modal();
    $('#modalEvents').modal();
    $('#create').modal();
    $('#Edit').modal();
    $('#delete').modal();
    $(".dropdown-button").dropdown(
      {
        belowOrigin: true
      }
    );
    $('ul.tabs').tabs();

    $('.scrollspy').scrollSpy();
    $(".button-collapse").sideNav();
    $('.datepicker').pickadate({
      selectMonths: true, // Creates a dropdown to control month
      selectYears: 15, // Creates a dropdown of 15 years to control year,
      today: 'Today',
      clear: 'Clear',
      close: 'Ok',
      closeOnSelect: false // Close upon selecting a date,
    });
  
  });