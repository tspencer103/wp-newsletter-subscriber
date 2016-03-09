jQuery(document).ready(function($){
	$('#subscriber-form').submit(function(e){
		e.preventDefault();

		// Serialize Form
		var subscriberData = $('#subscriber-form').serialize();

		// Submit Form
		$.ajax({
			type: 'post',
			url: $('#subscriber-form').attr('action'),
			data: subscriberData
		}).done(function(response){
			// If Success
			$('#form-msg').removeClass('error');
			$('#form-msg').addClass('success');

			// Set Message Text
			$('#form-msg').text(response);

			// Clear Fields
			$('#name').val('');
			$('#email').val('');
		}).fail(function(data){
			// If Error
			$('#form-msg').removeClass('success');
			$('#form-msg').addClass('error');

			if(data.responseText !== ''){
				// Set Message Text
				$('#form-msg').text(data.responseText);
			} else {
				$('#form-msg').text('Message Was Not Sent');
			}

		});
	});
});