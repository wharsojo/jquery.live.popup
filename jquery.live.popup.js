/*
 * jQuery.livePopup 0.6.1 - jQuery plugin to show popup (modal, dialog)
 *
 * http://wharsojo.wordpress.com/jquery-plugin-live-popup/
 * http://docs.$.com/Plugins/livePopup
 *
 * Copyright (c) 2009 
 *   Widi Harsojo (http://wharsojo.wordpress.com)
 *
 * Dual licensed under the GPL (http://www.gnu.org/licenses/gpl.html)
 * and MIT (http://www.opensource.org/licenses/mit-license.php) licenses.
 *
 * $Date: 2009-08-19 $
 */
 (function($){
  
  timerResize = function(){
    var b=$(window);
    var o=$('div.pop-up-background');
    o.css({width:  b.width()+'px',
           height: b.height()+'px'});
  };
  
  var t;
  eventResize = function(){
    if(t)clearTimeout(t);
       t = setTimeout(timerResize, 100);
  }
  
  jQuery.fn.popup= function(){
    var q=this.eq(0);
    q.css( {marginTop:  (- q.outerHeight()/2)+'px',
            marginLeft: (- q.outerWidth() /2)+'px'} ).show();
    if(q.hasClass('modal'))$('div.pop-up-background').show();
  }
  
  $(function(){
    $('body').append('<div class="pop-up-background"></div>');
    $(window).resize(eventResize);
    timerResize();
    
    var d1="<table cellspacing='0' cellpadding='0' border='0' width='100%' height='100%' class='pop-up-dialog'>" +
           "<tr><td class='top-left'></td><td class='top'></td><td class='top-right'></td></tr>" +
           "<tr><td class='left'></td><td class='inner'>";
    var d2="</td><td class='right'></td></tr>" +
           "<tr><td class='bottom-left'></td><td class='bottom'></td><td class='bottom-right'></td></tr>" +
           "</table>";
      
    var b=$('body');
    $('.pop-up.dialog').each(function(){
      var q=$(this);
      q.html([d1,q.html(),d2].join(''));
    });
    
    $('.pop-up-show').live('click',function(e){
      $($(this).attr('pop')).popup();
    });
    
    $('.pop-up-hide').live('click',function(e){
      $(this).parents('.pop-up').hide();
      $('div.pop-up-background').hide();
    });
  });
  
})(jQuery);
