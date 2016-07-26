$(document).ready(function() {
      

      $("li").on('click',function () {
          $("li").removeClass("active");
          $(this).addClass('active');
      });

      $(".form-control").on('click',function () {
           $(".form-group a i").addClass("active");
      });

      $('input').on('click',function () {
          var ck_id_item = $(this).attr("id");
          var ck_item="";
          if($(this).attr("checked") == 'checked') { 
            $(".filter_active").show();
            ck_item=$('label[for='+ck_id_item+']').text();
            $(".filter_active ul").before('<li><i class="fa fa-times"></i><div class="filter_item"><span>Назначение </span><br>'+ck_item+'</div></li>');
         }
      });

     $('a').on('click', function(){
          $('.filter_active').children('li').remove();
          $(':checkbox').prop('checked', true);
         $(".filter_active").hide();
      });  
     

    $(".helptel").fancybox({
     
    });

    $("#cena").fancybox({
      
    });
       $("#obracu").fancybox({
      
    });
 var owl = $("#slider1");
 owl.owlCarousel({
      items : 4,
      itemsDesktopSmall : [900,4], // betweem 900px and 601px
      itemsTablet: [600,1] //2 items between 600 and 0
  });

 $(".next").click(function(){
    owl.trigger('owl.next');
  })
  $(".prev").click(function(){
    owl.trigger('owl.prev');
  })
  $(".play").click(function(){
    owl.trigger('owl.play',1000); //owl.play event accept autoPlay speed as second parameter
  })
  $(".stop").click(function(){
    owl.trigger('owl.stop');
  })
 });