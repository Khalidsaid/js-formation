$(document).ready(function(){
	$('.backIcon').on('click', function(){
		window.history.back();
	});

	function validateRequired($elem){
		if ($elem.attr('data-required')=="true"){
			if($elem.is('input[type=text]')){
    			if ($elem.val() == "") {
    				showError($elem, 'Required');
    				return false;
    			}
    		} else if($elem.is('input[type=radio]') || $elem.is('input[type=checkbox]')) {
    			var nbChecked = $('input[name='+$elem.attr('name')+']:checked').length;
    			if (nbChecked<1) {
    				showError($elem, 'Required');
    				return false;
    			}
    		}
		}
		return true;
	}

	function validateFormat($elem){
		var validation = $elem.attr('data-validation');
    	var value = $elem.val();
    	if (value && validation) {
    		if (validation == 'mail'){
    			var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,6})$/;
    			if(reg.test(value) == false) {
    				showError($elem, 'Not a mail');
    				return false;
    			}
    		}
    		if (validation == 'number') {
    			if (!(!isNaN(parseFloat(value)) && isFinite(value))){
    				showError($elem, 'Not a number');
    				return false;
    			}
    		}
    	}
    	return true;
	}

	function showError($elem, errorMsg){
		var $fieldset = $elem.closest('fieldset');
		$fieldset.addClass('error');
		if ($fieldset.find('.errorMsg').length==0){
			$fieldset.append('<div class="errorMsg">'+errorMsg+'</div>');
		}
	}
	function cleanErrors($form){
		$form.find('.error').removeClass('error');
		$form.find('div.errorMsg').remove();

	}

	$(document.getElementsByTagName('form')).submit(function(event){

		var $this = $(this);
		cleanErrors($this);

		$this.find('input').each(function(index){
			var $elem = $(this);
			if (!(validateRequired($elem) && validateFormat($elem))){
				event.preventDefault();
			}	
		});
	});
});