var currentFeature = 'basic'; /* We need to track which feature is currently active */


function featureHandler (ev){
	selectedFeature = $(this).parent().attr('id').substr(15); /* extract selected feature name from id attr of parent */
	
	$('.recipe_feature_body').slideUp(); 
	
	//User clicked on currently selected feature
	if (selectedFeature == currentFeature) {
		currentFeature = 'basic'
		return;
	}
	
	$('#recipe_feature_'+selectedFeature+' > .recipe_feature_body').slideDown();
	
	currentFeature = selectedFeature;
	
}


//It should wait until entire page is loaded
$(document).ready(function(){
	
	$('.recipe_feature_name').on('click', featureHandler);
	
});