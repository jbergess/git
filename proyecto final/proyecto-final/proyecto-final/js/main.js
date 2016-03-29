function showGravityValue(newValue){
	document.getElementById("range").innerHTML=newValue;
	engine.world.gravity.y = newValue;	
}

function showStiffnessValue(newValue){	
	/**	aqui le meti la variable que viene de el control , pero no se bien a cual variable de engine.world deberia controlar...**/
 	document.getElementById("stiffness").innerHTML=newValue;
	spring1.stiffness = newValue;	
}