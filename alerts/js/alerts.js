

class Alerts{
	flotAlert(color,colorText,text,time,verticalAlign,horizontalAlign,callbak){
		var defaultTime = 2000;
		
		if (time != null)  defaultTime = time;
		$('body').prepend('<div id="flotAlert"><div></div></div>');
		$('#flotAlert').css('background',color);
		$('#flotAlert').css('color',colorText);
		$('#flotAlert').css('position','fixed');
		$('#flotAlert').css('cursor','pointer');
		$('#flotAlert').css(''+horizontalAlign,'10px')
		$('#flotAlert').css(''+verticalAlign,'50px')
		$('#flotAlert div').text(text);
		$('#flotAlert').show('slow');
		
		setTimeout(function() { 
			$('#flotAlert').hide('slow');
	       	$('#flotAlert').remove();
			if (callbak != null){
				callbak();
			}
	    }, defaultTime);
		
	}
	//Alerta Simple
	alert(container,text,aceptText,callbak){
		
		$(container).addClass('alert-content');

		if ($('html').height() < $(window).height()) {
			$('.alert-content').height($(window).height());
		} else {
			$('.alert-content').height($('html').height());
		}
		$('.alert-content').html('' +
				'<div class="alert-alert " style="display:none"> ' +
 					'<div class="modal-content"> ' +
 						'<div class="modal-body">' + text + '</div> ' +
						'<div class="modal-footer"> ' +
 						 	 '<button id="confirmButton" type="button" class="btn btn-sm btn-primary ">' + aceptText + '</button> ' +
						'</div> ' +
					'</div> ' +
				'</div> ');		
						
		$('.alert-alert').show('fast');		
	
		$(document).ready(function(){ 
			$('#confirmButton').click(function (){
				$('.alert-alert').hide('slow');		
				$(container).html('');
				$(container).removeAttr('style');
				$(container).removeAttr('class');
			
				if (callbak != null){
					callbak();
				}
			})
		})				

		$(window).resize(function(){ 
			if ($('html').height() < $(window).height()) {
				$('.alert-content').height($(window).height());
			} else {
				$('.alert-content').height($('html').height());
			}
		});// End resize

	}
	//Fin alerta simple
	//Inica confirm
	confirm(container,text,aceptText,declineText,callbak){
		if (callbak != null) {
			
			$(container).addClass('alert-content');
			if ($('html').height() < $(window).height()) {
				$('.alert-content').height($(window).height());
			} else {
				$('.alert-content').height($('html').height());
			}
			$('.alert-content').append('' +
					'<div class="alert-alert " style="display:none"> ' +
		 				'<div class="modal-content "> ' +
		 					'<div class="modal-body">' + text + '</div> ' +
							'<div class="modal-footer"> ' +
		 					 	 '<button id="confirmButton" type="button" class="btn btn-sm btn-primary ">' + aceptText + '</button> ' +
		 					 	 '<button id="canCellButton" type="button" class="btn btn-outline-secondary btn-sm ">' + declineText + '</button> ' +
							'</div> ' +
						'</div> ' +
					'</div> ');
						
			$('.alert-alert').show('fast');		
			
			$(document).ready(function(){ 
				$('#confirmButton').click(function (){
					$('.alert-alert').hide('slow');		
					$(container).html('');
					$(container).height('0px');
					callbak(true);
				});
				
				$('#canCellButton').click(function (){
					$('.alert-alert').hide('slow');		
					$(container).html('');
					$(container).height('0px');
					callbak(false);
				});

				$(window).resize(function(){ 
					if ($('html').height() < $(window).height()) {
						$('.alert-content').height($(window).height());
					} else {
						$('.alert-content').height($('html').height());
					}
				});// End resize
			})
		} else {
			this.alert(container,'Funcion Callbak no definida','Aceptar');
		}
	}
	//termina confirm
	//Input
	input(container,text,type,aceptText,declineText,callbak){
		var defaultType = 'text'; 
		
		if (type != null) defaultType = type;
		
		$(container).addClass('alert-content');
		if ($('html').height() < $(window).height()) {
			$('.alert-content').height($(window).height());
		} else {
			$('.alert-content').height($('html').height());
		}
		$('.alert-content').append('' +
				'<div class="alert-alert " style="display:none"> ' +
					'<div class="modal-content "> ' +
						'<div class="modal-body">' +  
							'<div class="form-group"> '+
						    	'<label for="exampleInputEmail1">' + text + '</label>' +
 						    	'<input type="' + defaultType + '" class="form-control" id="test"> ' +
						 	'</div> ' +						
						'</div> ' +						
						'<div class="modal-footer"> ' +
						 	 '<button id="confirmButton" type="button" class="btn btn-sm btn-primary ">' + aceptText + '</button> ' +
		 				 	 '<button id="canCellButton" type="button" class="btn btn-outline-secondary btn-sm">' + declineText + '</button> ' +
						'</div> ' +
					'</div> ' +
				'</div> ');
						
		$('.alert-alert').show('fast');		
			
		$(document).ready(function(){ 
			var value = '';
			$('#test').change(function(){
				value =	$(this).val();
			});
		
			$('#confirmButton').click(function (){
				$('.alert-alert').hide('slow');		
				$(container).html('');
				$(container).height('0px');
				if (callbak != null){
					callbak(value);
				}
			});
				
			$('#canCellButton').click(function (){
				$('.alert-alert').hide('slow');		
				$(container).html('');
				$(container).height('0px');
			})

			$(window).resize(function(){ 
				if ($('html').height() < $(window).height()) {
					$('.alert-content').height($(window).height());
				} else {
					$('.alert-content').height($('html').height());
				}
			});// End resize
		});
			
	}
	
}

