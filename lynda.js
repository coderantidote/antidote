
var $=jQuery.noConflict();
var t = 2;
if (t === 1) {
  $('body').before("<div class='translate-plugin'>"+atob('PGRpdiBpZD0iZ29vZ2xlX3RyYW5zbGF0ZV9lbGVtZW50Ij48L2Rpdj4KPHNjcmlwdD4gCmZ1bmN0aW9uIGdvb2dsZVRyYW5zbGF0ZUVsZW1lbnRJbml0KCkgewogIG5ldyBnb29nbGUudHJhbnNsYXRlLlRyYW5zbGF0ZUVsZW1lbnQoewogICAgcGFnZUxhbmd1YWdlOiAnZW4nCiAgfSwgJ2dvb2dsZV90cmFuc2xhdGVfZWxlbWVudCcpOwp9Cjwvc2NyaXB0Pgo8c2NyaXB0IHNyYz0iaHR0cHM6Ly90cmFuc2xhdGUuZ29vZ2xlLmNvbS90cmFuc2xhdGVfYS9lbGVtZW50LmpzP2NiPWdvb2dsZVRyYW5zbGF0ZUVsZW1lbnRJbml0Ij48L3NjcmlwdD4g')+"</div>");
} else if (t === 2) {
  $('body').before("<div class='translate-plugin'>"+atob('PGRpdiBpZD0ieXRXaWRnZXQiPjwvZGl2PjxzY3JpcHQgc3JjPSJodHRwczovL3RyYW5zbGF0ZS55YW5kZXgubmV0L3dlYnNpdGUtd2lkZ2V0L3YxL3dpZGdldC5qcz93aWRnZXRJZD15dFdpZGdldCZwYWdlTGFuZz1lbiZ3aWRnZXRUaGVtZT1kYXJrJmF1dG9Nb2RlPWZhbHNlIiB0eXBlPSJ0ZXh0L2phdmFzY3JpcHQiPjwvc2NyaXB0Pg==')+"</div>");
}
$('body').before("<button id='btn-hide' class='watch-now-cta btn btn-primary ga notranslate'>Hide</button>");
$('body').before("<button id='btn-show' class='watch-now-cta btn btn-primary ga notranslate'>Show</button>");
$("#btn-show").click(function(){
        $(".translate-plugin").show();
        $(".goog-te-banner-frame").show();
      });
      $("#btn-hide").click(function(){
        $(".translate-plugin").hide();
        $(".goog-te-banner-frame").hide();
      });
/* 
 Translate Automation
*/
$(document).on("DOMSubtreeModified", ".mejs-captions-text", function() {
  $(".trnssub").remove();
  $(".mejs-captions-text").hide();
  $(".mejs-captions-text").before("<b style='padding-left:4px;color:white;' class='trnssub'>" + $('.transcript.ga.current').text() + "<br /></b>");
  
});
 
