/*
 * jQuery Reveal Plugin 1.0
 * www.ZURB.com
 * Copyright 2010, ZURB
 * Free to use under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
*/
!function(i){i("a[data-reveal-id]").live("click",function(e){e.preventDefault();var n=i(this).attr("data-reveal-id");i("#"+n).reveal(i(this).data())}),i.fn.reveal=function(e){var n={animation:"fadeAndPop",animationspeed:300,closeonbackgroundclick:!0,dismissmodalclass:"close-reveal-modal"},e=i.extend({},n,e);return this.each(function(){function n(){c=!1}function a(){c=!0}var o=i(this),t=parseInt(o.css("top")),s=o.height()+t,c=!1,d=i(".reveal-modal-bg");0==d.length&&(d=i('<div class="reveal-modal-bg" />').insertAfter(o)),o.bind("reveal:open",function(){d.unbind("click.modalEvent"),i("."+e.dismissmodalclass).unbind("click.modalEvent"),c||(a(),"fadeAndPop"==e.animation&&(o.css({top:i(document).scrollTop()-s,opacity:0,visibility:"visible"}),d.fadeIn(e.animationspeed/2),o.delay(e.animationspeed/2).animate({top:i(document).scrollTop()+t+"px",opacity:1},e.animationspeed,n())),"fade"==e.animation&&(o.css({opacity:0,visibility:"visible",top:i(document).scrollTop()+t}),d.fadeIn(e.animationspeed/2),o.delay(e.animationspeed/2).animate({opacity:1},e.animationspeed,n())),"none"==e.animation&&(o.css({visibility:"visible",top:i(document).scrollTop()+t}),d.css({display:"block"}),n())),o.unbind("reveal:open")}),o.bind("reveal:close",function(){c||(a(),"fadeAndPop"==e.animation&&(d.delay(e.animationspeed).fadeOut(e.animationspeed),o.animate({top:i(document).scrollTop()-s+"px",opacity:0},e.animationspeed/2,function(){o.css({top:t,opacity:1,visibility:"hidden"}),n()})),"fade"==e.animation&&(d.delay(e.animationspeed).fadeOut(e.animationspeed),o.animate({opacity:0},e.animationspeed,function(){o.css({opacity:1,visibility:"hidden",top:t}),n()})),"none"==e.animation&&(o.css({visibility:"hidden",top:t}),d.css({display:"none"}))),o.unbind("reveal:close")}),o.trigger("reveal:open"),i("."+e.dismissmodalclass).bind("click.modalEvent",function(){o.trigger("reveal:close")}),e.closeonbackgroundclick&&(d.css({cursor:"pointer"}),d.bind("click.modalEvent",function(){o.trigger("reveal:close")})),i("body").keyup(function(i){27===i.which&&o.trigger("reveal:close")})})}}(jQuery);