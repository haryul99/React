$(document).ready(function(){
 $('.gnb > ul > li').hover(function(){
     $(this).find('.subnav').stop().slideDown('fast');
 },function(){
     $(this).find('.subnav').stop().slideUp('fast');
      
      });
$(function(){
          alert('이제 되니?')
         });