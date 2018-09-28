var currentFeature = 'basic';


function featureHandler (ev){
	selectedFeature = $(this).parent().attr('id').substr(15);
	
	if (selectedFeature == currentFeature) {
		$('.recipe_feature_body').slideUp();
		currentFeature = 'basic'
		return;
	}
	
	$('.recipe_feature_body').slideUp();
	$('#recipe_feature_'+selectedFeature+' > .recipe_feature_body').slideDown();
	
	currentFeature = selectedFeature;
	
}



$(document).ready(function(){
	
	$('.recipe_feature_name').on('click', featureHandler);
	
});