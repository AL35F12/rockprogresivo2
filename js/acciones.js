// JavaScript Document
var panel='<div data-role="panel" id="mipanel" data-display="push"><div class="panel-content" align="center"><h2>MAS BANDAS</h2><div data-role="controlgroup"><a data-role="button" href="#rock" id="boton1">Thousand Foot Krutch</a><a data-role="button" href="#king" id="boton2">Insite</a><a data-role="button" href="#tmv" id="boton3">Omar Rodriguez Lopez</a><a data-role="button" href="#zmq" id="boton4">Acerca de</a><a data-rel="close" data-role="button" data-theme="a" data-icon="delete" data-inline="true">Cerrar</a><p>Visita:</p></div></div></div>';

    $(document).on('pagebeforecreate','[data-role="page"]',function(){
		if($(this).find('[data-role=panel]').length===0)
		{$('[data-role=header]').before(panel);}
				
		
		
		
	});//before create
	
$(document).ready(function(e){
	

   $('#logo img').tap(function(e){		
	 $.mobile.navigate( "#principal" );
	});
	document.addEventListener("deviceready",function(){
  
   $('#B_Beep').tap(function(){
    navigator.notification.beep(1);
  });
 },false); //deviceready


});//ready