
function mouseClick(evn){
	mouseX = evn.clientX;
	mouseY = evn.clientY;
	MOUSE_LOCATION_X = mouseX - CANVAS.offsetLeft;
	MOUSE_LOCATION_Y = mouseY - CANVAS.offsetTop;
	COLOR_CHANGE = (COLOR_CHANGE+1)%5;
	var colorArray = ['9CABB9','667079','303539','A6B6C5','86939F'];
	console.log(COLOR_CHANGE);
	CONTEXT.fillStyle=colorArray[COLOR_CHANGE];

	
	growCircle = setInterval(function(){drawCircle(MOUSE_LOCATION_X,MOUSE_LOCATION_Y,i);i++;},10);
	var i = 0.5;
	//draw a circle


}

	function drawCircle(x,y,size)
	{
	CONTEXT.beginPath();
	CONTEXT.arc(x, y, size, 0, Math.PI*2, true); 
	CONTEXT.closePath();
	CONTEXT.fill();
	}

function mouseRelease(evn)
{
	clearInterval(growCircle);
}

