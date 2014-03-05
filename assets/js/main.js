/*! 
 *  Written for: ?
 *  Author: @IkantamCorp - @ElmahdiMahmoud
 *  Further changes: @author
 *  Updated: 10.02.14
 */
 (function($) { 
 $(document).ready(function() { 
	
 	/* ############[ placeholder ]############ */
	$('.ie8 [placeholder], .ie9 [placeholder]').focus(function() {
		var input = $(this);
		if (input.val() == input.attr('placeholder')) {
			input.val('');
			input.removeClass('placeholder');
		}
	}).blur(function() {
		var input = $(this);
		if (input.val() == '' || input.val() == input.attr('placeholder')) {
			input.addClass('placeholder');
			input.val(input.attr('placeholder'));
		}
	}).blur().parents('form').submit(function() {
		$(this).find('[placeholder]').each(function() {
			var input = $(this);
			if (input.val() == input.attr('placeholder')) {
				input.val('');
			}
		})
	});

 }); //end doc ready
})(jQuery); 

