(function($) {
  $.fn.useAnimateCSS = function(type) {
        this.addClass(type + " animated");
        return this;
  };
  $.fn.removeAnimateCSS = function(type) {
        this.removeClass(type + " animated");
        return this;
  };
  $.fn.animateOnScroll = function(options) {
      $(this).each(function(i){
        var $this = $(this);
        var settings = $.extend({
          type: "fadeInUp",
          trigger: $(this),
          offset: 0
        },options);
        $this.css("visibility","hidden");
        function animateIfScroll(){
           if(settings.trigger.offset().top - window.innerHeight + settings.offset < $(window).scrollTop()){
             $this.css("visibility","visible");
             $this.useAnimateCSS(settings.type);
           }
           return $this;
        };
        $(document).scroll(function(){
           animateIfScroll();
        });
        animateIfScroll();
      });
  };
}( jQuery ));
