$(function(){
    $('[data-toggle="tooltip"]').tooltip();
  });

$('#clickMe').click(function(){
    $('#submit').removeClass('disabled','btn-dark');
    $('#submit').addClass('btn-primary');
    $('#submit').tooltip('disable');
});

