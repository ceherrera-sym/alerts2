class CustomAlert {
    constructor(options) {
        this.text = options.text || '';
        this.aceptText = options.aceptText || 'Aceptar';
        this.callback = options.callback || null;
        this.title = options.title || '';
        this.createAlert();
    }

    createAlert() {
        var parentBody = window.parent.document.body;
        $(parentBody).append('<div id="container"></div>');
        $('#container', parentBody).addClass('alert-content');
        $('.alert-content', parentBody).html(`
            <div class="modal" id="miModal" tabindex="-1">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title">${this.title}</h5>
                        </div>
                        <div class="modal-body">
                            <p>${this.text}.</p>
                        </div>
                        <div class="modal-footer">
                            <button type="button" id="confirmButton" class="btn btn-primary" data-bs-dismiss="modal">${this.aceptText}</button>
                        </div>
                    </div>
                </div>
            </div>`
        );

        var myModal = new window.parent.bootstrap.Modal(document.getElementById('miModal'));
        myModal.show();

        $('#confirmButton', parentBody).click(() => {
            $('.alert-content', parentBody).hide('slow');
            $('#container', parentBody).html('');
            $('#container', parentBody).remove();

            if (this.callback != null) {
                this.callback();
            }
        });
    }
}


	class CustomFlotAlert {
		constructor(options) {
			this.color = options.color || 'info';
			this.text = options.text || '';
			this.time = options.time || null;
			this.verticalAlign = options.verticalAlign || 'top';
			this.horizontalAlign = options.horizontalAlign || 'left';
			this.callback = options.callback || null;
			this.execute = true;
	
			this.createAlert();
		}
	
		createAlert() {
			$('body').prepend(`
				<div class="alert alert-${this.color} alert-dismissible fade shadow show" id="flotAlert" role="alert">
					${this.text}
					<button type="button" id="closeBtnFloatAlert" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
				</div>`);
			
			$('#flotAlert').css('position', 'fixed');
			$('#flotAlert').css('cursor', 'pointer');
			$('#flotAlert').css('z-index', '20000000');
			if (this.horizontalAlign == 'center') {
				$('#flotAlert').css({
					'left': '50%',
					'transform': 'translateX(-50%)'
				});
			} else {
				$('#flotAlert').css(`${this.horizontalAlign}`, '10px');
			}
			
			if (this.verticalAlign == 'center') {
				$('#flotAlert').css({
					'top': '50%',
					'transform': 'translateX(-50%)'
				});
			} else {
				$('#flotAlert').css(`${this.verticalAlign}`, '50px');
			}
	
			$('#closeBtnFloatAlert').click(() => {
				$('#flotAlert').remove();
				if (this.callback != null) {
					this.callback();
				}
	
				this.execute = false;
			});
	
			if (this.time != null) {
				setTimeout(() => {
					if (this.execute) {
						$('#flotAlert').remove();
						if (this.callback != null) {
							this.callback();
						}
					}
				}, this.time);
			}
		}
	}
	
	class CustomConfirm {
		constructor(options) {
			this.title = options.title || '';
			this.text = options.text;
			this.aceptText = options.aceptText || 'Aceptar';
			this.declineText = options.declineText || 'Cancelar';
			this.callback = options.callback ;
	
			if (this.callback != null) {
				this.createConfirm();
			} else {
				new CustomAlert({
					text: 'Función de Callback no definida',
           			aceptText: 'Aceptar',
				});
			}
		}
	
		createConfirm() {
			$('body').append('<div id="container"></div>');
			$('#container').addClass('alert-content');
			$('.alert-content').html(`
				<div class="modal" id="miModal" tabindex="-1">
					<div class="modal-dialog">
						<div class="modal-content">
							<div class="modal-header">
								<h5 class="modal-title">${this.title}</h5>
							</div>
							<div class="modal-body">
								<p>${this.text}.</p>
							</div>
							<div class="modal-footer">
								<button type="button" id="confirmButton" class="btn btn-primary" data-bs-dismiss="modal">${this.aceptText}</button>
								<button type="button" id="canCellButton" class="btn btn-danger" data-bs-dismiss="modal">${this.declineText}</button>
							</div>
						</div>
					</div>
				</div>`
			);
	
			var myModal = new bootstrap.Modal(document.getElementById('miModal'));
			myModal.toggle();
	
			$('#confirmButton').click(() => {
				$('#container').remove();
				this.callback(true);
			});

			$('#canCellButton').click(() => {
				$('#container').remove();
				this.callback(false);
			});
		}
		
	}
	

	class CustomInput {
		constructor(options) {
			this.title = options.title || '';
			this.text = options.text || '';
			this.type = options.type || 'text';
			this.aceptText = options.aceptText || 'Aceptar';
			this.declineText = options.declineText || 'Cancelar';
			this.callback = options.callback || null;
			this.onCancel = options.onCancel || null;
	
			this.createInput();
		}
	
		createInput() {
			$('body').append('<div id="container"></div>');
			$('#container').addClass('alert-content');
			$('.alert-content').html(`
				<div class="modal" id="miModal" tabindex="-1">
					<div class="modal-dialog">
						<div class="modal-content">
							<div class="modal-header">
								<h5 class="modal-title">${this.title}</h5>
							</div>
							<div class="modal-body">
								<div class="form-group"> 
								<label for="exampleInputEmail1">` + this.text + `</label>
								<input type="` + this.type + `" class="form-control" id="inputAlert"> 
							</div> 
							</div>
							<div class="modal-footer">
								<button type="button" id="confirmButton" class="btn btn-primary" data-bs-dismiss="modal">${this.aceptText}</button>
								<button type="button" id="canCellButton" class="btn btn-danger" data-bs-dismiss="modal">${this.declineText}</button>
							</div>
						</div>
					</div>
				</div>`
			);

			var myModal = new bootstrap.Modal(document.getElementById('miModal'));
			myModal.toggle();
	
			var value = '';
	
			$('#inputAlert').change(function(){
				value = $(this).val();
			});
	
			$('#confirmButton').click(() => {
				$('#container').remove();
				if (this.callback != null) {
					this.callback(value);
				}
			});
	
			$('#canCellButton').click(() => {
				$('#container').remove();
					if (this.onCancel != null) {
					this.onCancel();
				}
			});
	
		}
	}
	