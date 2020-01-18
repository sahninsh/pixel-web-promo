    $(document).ready(function(){
      $(".hamburger").click(function(){
        $(".bar1").toggleClass("bar1--ac");
        $(".bar2").toggleClass("bar2--ac");
        $(".bar3").toggleClass("bar3--ac");
        $(".sidepanel").toggleClass("side--ac");
        $(".hamburger").toggleClass("ham--ac");
        $(".bar").toggleClass("bar--ac");
      });
      $(".b1").on("click",function(){
        $("body,html").animate({scrollTop : $(".b-1").offset().top + 10},1000);
      });
      $(window).scroll(function(){

        if ( $(document).scrollTop() > $(".land").offset().top && $(document).scrollTop() < $(".b1").offset().top  ){
          $(".bar").removeClass("black");
        }
        if ( $(document).scrollTop() > $(".b-1").offset().top -60){
          $(".bar").addClass("black");
          $(".line1").css({
            "width" : "14vw"
          });
        }
        if ( $(document).scrollTop() > $(".b-2").offset().top ){
          $(".bar").removeClass("black");
          $(".line2").css({
            "width" : "12vw"
          });
        }
        if ( $(document).scrollTop() > $(".b-3").offset().top ){
          $(".bar").addClass("black");
          $(".line3").css({
            "width" : "14vw"
          });
        }
        if ( $(document).scrollTop() > $(".b-4").offset().top ){
          $(".bar").removeClass("black");
          $(".line4").css({
            "width" : "12vw"
          });
        }
        if ( $(document).scrollTop() > $(".b-5").offset().top ){
          $(".bar").addClass("black");
          $(".line5").css({
            "width" : "16vw"
          });
        }
        if ( $(document).scrollTop() > $(".b-6").offset().top ){
          $(".bar").removeClass("black");
          $(".line6").css({
            "width" : "13vw"
          });
        }
        if ( $(document).scrollTop() > $(".media").offset().top ){
          $(".bar").addClass("black");
        }


      });
      $(".s1").on("click", function(){
        $("body,html").animate({ scrollTop : $(".land").offset().top + 10},1000);
      });
      $(".s2").on("click", function(){
        $("body,html").animate({ scrollTop : $(".b-1").offset().top + 10},1000);
      });
      $(".s3").on("click", function(){
        $("body,html").animate({ scrollTop : $(".b-2").offset().top + 10 },1000);
      });
      $(".s4").on("click", function(){
        $("body,html").animate({ scrollTop : $(".b-3").offset().top + 10 },1000);
      });
      $(".s5").on("click", function(){
        $("body,html").animate({ scrollTop : $(".b-4").offset().top  + 10},1000);
      });
      $(".s6").on("click", function(){
        $("body,html").animate({ scrollTop : $(".b-5").offset().top + 10},1000);
      });
      $(".s7").on("click", function(){
        $("body,html").animate({ scrollTop : $(".b-6").offset().top  + 10},1000);
      });
      $(".s8").on("click", function(){
        $("body,html").animate({ scrollTop : $(".media").offset().top + 10 },1000);
      });

      $(".whte").on("click", function(){
        $(".pixel-c").attr("src","pixel.png");
      });
      $(".bleck").on("click", function(){
        $(".pixel-c").attr("src","pixel-bl.png");
      });
      $(".ble").on("click", function(){
        $(".pixel-c").attr("src","pixel.png");
      });
      $(".yellow").on("click", function(){
        $(".pixel-c").attr("src","pixel-bl.png");
      });
   

    });