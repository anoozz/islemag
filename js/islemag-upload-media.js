function media_upload(button_class) {

	jQuery('body').on('click', button_class, function(e) {
		var button_id ='#'+jQuery(this).attr('id');
		var display_field = jQuery(this).parent().children('input.custom_media_url:text');
		var _custom_media = true;

		wp.media.editor.send.attachment = function(props, attachment){

			if ( _custom_media  ) {
				if(typeof display_field != 'undefined'){
					switch(props.size){
						case 'full':
							display_field.val(attachment.sizes.full.url);
                            display_field.trigger('change');
							break;
						case 'medium':
							display_field.val(attachment.sizes.medium.url);
                            display_field.trigger('change');
							break;
						case 'thumbnail':
							display_field.val(attachment.sizes.thumbnail.url);
                            display_field.trigger('change');
						case 'islemag_ad_125':
							display_field.val(attachment.sizes.islemag_ad_125.url);
														display_field.trigger('change');
						case 'islemag_leaderboard':
							display_field.val(attachment.sizes.islemag_leaderboard.url);
														display_field.trigger('change');
						case 'islemag_3_1_rectangle':
							display_field.val(attachment.sizes.islemag_3_1_rectangle.url);
														display_field.trigger('change');
						case 'islemag_medium_rectangle':
							display_field.val(attachment.sizes.islemag_medium_rectangle.url);
														display_field.trigger('change');
						case 'islemag_half_page':
							display_field.val(attachment.sizes.islemag_half_page.url);
														display_field.trigger('change');
						case 'islemag_square_pop_up':
							display_field.val(attachment.sizes.islemag_square_pop_up.url);
														display_field.trigger('change');
						case 'islemag_vertical_rectangle':
							display_field.val(attachment.sizes.islemag_vertical_rectangle.url);
														display_field.trigger('change');
							break;
						default:
							display_field.val(attachment.url);
                            display_field.trigger('change');
					}
				}
				_custom_media = false;
			} else {
				return wp.media.editor.send.attachment( button_id, [props, attachment] );
			}
		}
		wp.media.editor.open(button_class);
		window.send_to_editor = function(html) {

		}
		return false;
	});
}

jQuery(document).ready(function($) {
  media_upload(".upload_image_button");
});
