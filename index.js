/*var colors = ['#00e6e6','#ff1a8c']*/

colors=['#FFCE00','#037584','#007849','#262228']

currentColor = 0;

$('li').each(function(i){
	this.style.backgroundColor = colors[currentColor];
	currentColor++;
});

$('#researchbutton').click(function() {
	$('#researchpage').toggle('slow',function(){
		return false;
	});
	return false;
});        

$('#projectbutton').click(function() {
	$('#projectpage').toggle('slow',function(){
		return false;
	});
	return false;
});        

$('#aboutbutton').click(function() {
	$('#aboutpage').toggle('slow',function(){
		return false;
	});
	return false;
});        

$('#contactbutton').click(function() {
	$('#contactpage').toggle('slow',function(){
		return false;
	});
	return false;
});        


