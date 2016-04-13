/**
 * main.js
 * Archivo principal de javascript
 * Actua como controlador entre intefaz y objetos de matter.js
 */

/* Función para control de la gravedad */
function showGravityValue(newValue){
	document.getElementById("range").innerHTML=newValue;
	engine.world.gravity.y = newValue;	
}

/* Función para control del tiempo */
function showTimeScaleValue(newValue){	
 	document.getElementById("timescale").innerHTML=newValue;
	engine.timing.timeScale = newValue;	
}

/* Función para control de la constante de elasticidad del resorte izquierdo */
function showStiffnessValueLeft(newValue){	
 	document.getElementById("stiffnessLeft").innerHTML=newValue;
	spring1.stiffness = newValue;	
}

/* Función para control de la constante de elasticidad del resorte derecho */
function showStiffnessValueRight(newValue){	
 	document.getElementById("stiffnessRight").innerHTML=newValue;
	spring2.stiffness = newValue;	
}

/* Función para control de la masa de la caja */
function showMassValueBox(newValue){	
 	document.getElementById("massBox").innerHTML=newValue;
	//Body.setMass(box,newValue);
	box.mass = newValue;	
}

/* Función para control de la masa del círculo */
function showMassValueCircle(newValue){	
 	document.getElementById("massBall").innerHTML=newValue;
	Body.setMass(ball,newValue);
}