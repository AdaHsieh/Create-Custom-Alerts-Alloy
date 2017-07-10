function showDialog()
{
	$.dialog.show();
}
function doClick(e){
    
    if(e.index === 2){
 	Ti.API.info('The cancel button was clicked');
 	}
 	else if (e.index === 1){
 	Ti.API.info('The help button was clicked');
 }

};
$.index.open();