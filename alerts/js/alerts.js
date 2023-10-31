
//Alerta Simple
class CustomAlert {
	constructor(options) {
		this.text = options.text || '';
		this.aceptText = options.aceptText || 'Aceptar';
		this.callback = options.callback || null;
		this.title = options.title || '';
		this.createAlert();
	}

	createAlert() {
		window.parent.parent.parent.$('body').append('<div id="container"></div>');
		window.parent.parent.parent.$('#container').addClass('alert-content');
		window.parent.parent.parent.$('.alert-content').html(`
				<div class="modal" id="alertModal" tabindex="-1">
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

		window.parent.parent.parent.$('#alertModal').modal('show');

		$('#confirmButton').click(() => {

			// var myModal = new 
			window.parent.parent.parent.$('#container').remove();

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
		window.parent.parent.parent.$('body').prepend(`
				<div class="alert alert-${this.color} alert-dismissible fade shadow show" id="flotAlert" role="alert">
					${this.text}
					<button type="button" id="closeBtnFloatAlert" class="btn-close" data-bs-dismiss="alert" aria-label="Close" style="padding: 10px 10px;position: relative;"></button>
				</div>`);

		window.parent.parent.parent.$('#flotAlert').css('position', 'fixed');
		window.parent.parent.parent.$('#flotAlert').css('cursor', 'pointer');
		window.parent.parent.parent.$('#flotAlert').css('z-index', '100000');
		window.parent.parent.parent.$('#flotAlert').css('padding', '1rem');

		if (this.horizontalAlign == 'center') {
			window.parent.parent.parent.$('#flotAlert').css({
				'left': '50%',
				'transform': 'translateX(-50%)'
			});
		} else {
			window.parent.parent.parent.$('#flotAlert').css(`${this.horizontalAlign}`, '10px');
		}

		if (this.verticalAlign == 'center') {
			window.parent.parent.parent.$('#flotAlert').css({
				'top': '50%',
				'transform': 'translateX(-50%)'
			});
		} else {
			window.parent.parent.parent.$('#flotAlert').css(`${this.verticalAlign}`, '50px');
		}

		window.parent.parent.parent.$('#closeBtnFloatAlert').click(() => {
			window.parent.parent.parent.$('#flotAlert').remove();
			if (this.callback != null) {
				this.callback();
			}

			this.execute = false;
		});

		if (this.time != null) {
			setTimeout(() => {
				if (this.execute) {
					window.parent.parent.parent.$('#flotAlert').remove();
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

		this.text = options.text;
		this.aceptText = options.aceptText || 'Aceptar';
		this.declineText = options.declineText || 'Cancelar';
		this.callback = options.callback;

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
		window.parent.parent.parent.$('body').append('<div id="container"></div>');
		window.parent.parent.parent.$('#container').addClass('alert-content');
		window.parent.parent.parent.$('.alert-content').html(`
				<div class="modal" id="alertModal" tabindex="-1">
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

		window.parent.parent.parent.$('#alertModal').modal('show');

		window.parent.parent.parent.$('#confirmButton').click(() => {
			window.parent.parent.parent.$('#container').remove();
			this.callback(true);
		});

		window.parent.parent.parent.$('#canCellButton').click(() => {
			window.parent.parent.parent.$('#container').remove();
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
		window.parent.parent.parent.$('body').append('<div id="container"></div>');
		window.parent.parent.parent.$('#container').addClass('alert-content');
		window.parent.parent.parent.$('.alert-content').html(`
				<div class="modal" id="alertModal" tabindex="-1">
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

		window.parent.parent.parent.$('#alertModal').modal('show');

		var value = '';

		window.parent.parent.parent.$('#inputAlert').change(function () {
			value = $(this).val();
		});

		window.parent.parent.parent.$('#confirmButton').click(() => {
			window.parent.parent.parent.$('#container').remove();
			if (this.callback != null) {
				this.callback(value);
			}
		});

		window.parent.parent.parent.$('#canCellButton').click(() => {
			window.parent.parent.parent.$('#container').remove();
			if (this.onCancel != null) {
				this.onCancel();
			}
		});

	}
}



