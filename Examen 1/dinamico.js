var miMapa = false;
var miIngles = false;
var miOferta = 1;

function normal()
{
	document.getElementById('miBody').style.background = "#fff";
	document.getElementById('miNavBar').style.background = "#f6f6f6";
	document.getElementById('titulo').style.color = "#000";
	document.getElementById('parrafo1').style.color = "#000";
	document.getElementById('t1').style.color = "#000";
	document.getElementById('p1').style.color = "#000";
	document.getElementById('consulta').style.color = "#000";
	document.getElementById('yaTienes').style.color = "#000";
	document.getElementById('numeroT').style.color = "#000";
	document.getElementById('fecha').style.color = "#000";


	document.getElementById('t2').style.color = "#000";
	document.getElementById('p2').style.color = "#000";


	document.getElementById('t3').style.color = "#000";
	document.getElementById('p3').style.color = "#000";


	document.getElementById('t4').style.color = "#000";
	document.getElementById('p4').style.color = "#000";
	
	var botones = document.getElementsByTagName('a');
	
	
	for(var i = 0; i < botones.length; i++)
	{
		if(botones[i].id == "boton")
		{
			botones[i].style.background = "#f6f6f6";
			botones[i].style.color = "#000";
			
		}
		else
		{
			botones[i].style.color = "#000";
			botones[i].style.background = "#fff";
		}
	
	}

	
}

function dark()
{
	document.getElementById('miBody').style.background = "#000";
	document.getElementById('miNavBar').style.background = "#000";
	document.getElementById('titulo').style.color = "#fff";
	document.getElementById('parrafo1').style.color = "#fff";
	document.getElementById('t1').style.color = "#fff";
	document.getElementById('p1').style.color = "#fff";
	document.getElementById('consulta').style.color = "#fff";
	document.getElementById('yaTienes').style.color = "#fff";
	document.getElementById('numeroT').style.color = "#fff";
	document.getElementById('fecha').style.color = "#fff";


	document.getElementById('t2').style.color = "#fff";
	document.getElementById('p2').style.color = "#fff";

	document.getElementById('t3').style.color = "#fff";
	document.getElementById('p3').style.color = "#fff";


	document.getElementById('t4').style.color = "#fff";
	document.getElementById('p4').style.color = "#fff";
	
	
	var botones = document.getElementsByTagName('a');
	
	for(var i = 0; i < botones.length; i++)
	{
		botones[i].style.background = "#000";
		botones[i].style.color = "#fff";
	}
	
}

