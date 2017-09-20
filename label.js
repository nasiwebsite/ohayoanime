<script type='text/javascript'>
//<![CDATA[
$(window).on('hashchange', function(e){

$(".ty_remove .tylabel_remove").each(function(){var e=$(this).text();if(e.substr(0,10).match("ty")){e=e.replace("ty_","");$(this).html('<div class="mytype"><span class="ty">'+e+"</span></div>")}$(".mytype").parent(".tylabel_remove").replaceWith(function(){return $(this).contents()});$(".ty_remove").replaceWith(function(){return $(this).contents()})});
$(".tylabel_remove").remove()


$(".st_remove .stlabel_remove").each(function(){var e=$(this).text();if(e.substr(0,10).match("st")){e=e.replace("st_","");$(this).html('<div class="status"><span class="st">'+e+"</span></div>")}$(".status").parent(".stlabel_remove").replaceWith(function(){return $(this).contents()});$(".st_remove").replaceWith(function(){return $(this).contents()})});
$(".stlabel_remove").remove()

$(".se_remove .selabel_remove").each(function(){var e=$(this).text();if(e.substr(0,10).match("se"))
{e=e.replace("se_"," ");$(this).html('<div class="season"><span class="se">'+e+"</span></div>")}$(".season").parent(".selabel_remove").replaceWith(function(){return $(this).contents()});
$(".se_remove").replaceWith(function(){return $(this).contents()})});
$(".selabel_remove").remove()

$(".ge_remove .gelabel_remove").each(function(){var e=$(this).text();if(e.substr(0,10).match("ge"))
{e=e.replace("ge_"," ");$(this).html('<div class="genre"><span class="ge">'+e+"</span></div>")}$(".genre").parent(".gelabel_remove").replaceWith(function(){return $(this).contents()});
$(".ge_remove").replaceWith(function(){return $(this).contents()})});
$(".gelabel_remove").remove()


$(".labelkita a").each(function(){var e=$(this).text();if(e.substr(0,10).match("se")){e=e.replace("se_","");
$(this).html("<div class='coba'>"+e+"</div>");$(".coba").parent("a").remove()}});

$(".labelkita a").each(function(){var e=$(this).text();if(e.substr(0,10).match("ty")){e=e.replace("ty_","");
$(this).html("<div class='coba'>"+e+"</div>");$(".coba").parent("a").remove()}});

$(".labelkita a").each(function(){var e=$(this).text();if(e.substr(0,10).match("st")){e=e.replace("st_","");
$(this).html("<div class='coba'>"+e+"</div>");$(".coba").parent("a").remove()}});

$(".labelkita a").each(function(){var e=$(this).text();if(e.substr(0,10).match("gn")){e=e.replace("gn_","");
$(this).html(e);$(".labelkita").parent("a").push()}});
});


$(".ty_remove .tylabel_remove").each(function(){var e=$(this).text();if(e.substr(0,10).match("ty")){e=e.replace("ty_","");$(this).html('<div class="mytype"><span class="ty">'+e+"</span></div>")}$(".mytype").parent(".tylabel_remove").replaceWith(function(){return $(this).contents()});$(".ty_remove").replaceWith(function(){return $(this).contents()})});
$(".tylabel_remove").remove()


$(".st_remove .stlabel_remove").each(function(){var e=$(this).text();if(e.substr(0,10).match("st")){e=e.replace("st_","");$(this).html('<div class="status"><span class="st">'+e+"</span></div>")}$(".status").parent(".stlabel_remove").replaceWith(function(){return $(this).contents()});$(".st_remove").replaceWith(function(){return $(this).contents()})});
$(".stlabel_remove").remove()

$(".se_remove .selabel_remove").each(function(){var e=$(this).text();if(e.substr(0,10).match("se")){e=e.replace("se_"," ");$(this).html('<div class="season"><span class="se">'+e+"</span></div>")}$(".season").parent(".selabel_remove").replaceWith(function(){return $(this).contents()});
$(".se_remove").replaceWith(function(){return $(this).contents()})});
$(".selabel_remove").remove()

$(".ge_remove .gelabel_remove").each(function(){var e=$(this).text();if(e.substr(0,10).match("ge")){e=e.replace("ge_"," ");$(this).html('<div class="genre"><span class="ge">'+e+"</span></div>")}$(".genre").parent(".gelabel_remove").replaceWith(function(){return $(this).contents()});
$(".ge_remove").replaceWith(function(){return $(this).contents()})});
$(".gelabel_remove").remove()


$(".labelkita a").each(function(){var e=$(this).text();if(e.substr(0,10).match("se")){e=e.replace("se_","");
$(this).html("<div class='coba'>"+e+"</div>");$(".coba").parent("a").remove()}});

$(".labelkita a").each(function(){var e=$(this).text();if(e.substr(0,10).match("ty")){e=e.replace("ty_","");
$(this).html("<div class='coba'>"+e+"</div>");$(".coba").parent("a").remove()}});

$(".labelkita a").each(function(){var e=$(this).text();if(e.substr(0,10).match("st")){e=e.replace("st_","");
$(this).html("<div class='coba'>"+e+"</div>");$(".coba").parent("a").remove()}});

$(".labelkita a").each(function(){var e=$(this).text();if(e.substr(0,10).match("gn")){e=e.replace("gn_","");
$(this).html(e);$(".labelkita").parent("a").push()}});

//]]>

  </script>