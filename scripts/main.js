$(document).ready(function(){$("#counter").countdown("2018/01/08 19:30:00",function(n){$(this).html(n.strftime("<div><span class='value'>%-D</span><span class='blue-line'></span><span class='unit'>días</div><div><span class='value'>%-H</span><span class='blue-line'></span><span class='unit'>horas</div><div><span class='value'>%-M</span><span class='blue-line'></span><span class='unit'>minutos</div><div><span class='value'>%-S</span><span class='blue-line'></span><span class='unit'>segundos</div>"))}).on("update.countdown",function(n){}).on("finish.countdown",function(n){});var n={width:780,height:550};$(document).on("click",".social-button",function(s){var a=Math.floor(($(window).width()-n.width)/2),i=Math.floor(($(window).height()-n.height)/2),t=window.open($(this).prop("href"),"social","width="+n.width+",height="+n.height+",left="+a+",top="+i+",location=0,menubar=0,toolbar=0,status=0,scrollbars=1,resizable=1");t&&(t.focus(),s.preventDefault())})});