$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:3
        },
        600:{
            items:6
        },
        1000:{
            items:8
        }
    }
})

$('.video').click(function(){
    var idVideo = $(this).data('id');
    var video = $('#video_'+idVideo).html();
    $('#modal_video').html(video);
    $('main').css("display", "none")
    $('header').css("display", "none")
  });

fechar = () =>{
    $('main').css("display", "block")
    $('header').css("display", "block")
    $('#modal_video').css("display", "none")
    $('#modal_video').attr("src","");
}