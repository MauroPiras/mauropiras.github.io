var contatore = 0;
var controllo = false;
var vincitore = "n";

$(document).ready(function()
{
	var modalità ="";
	for(var i=0;i<(document.location.href).length;i++)
	{
		if (document.location.href.charAt(i-1)=="=")
		{
			var assegna=true;
		}
		if (assegna)
			modalità += document.location.href.charAt(i);
	}
	if (modalità == "true")
	{
		$('#container').append('<script type="text/javascript" src="js/GiocatoreSingolo.js"></script>');
		$('article h2 b').text("Partita in corso");
	}
	else if (modalità == "false")
	{
		$('#container').append('<script type="text/javascript" src="js/GiocatoreMultiplayer.js"></script>');
		$('article h2 b').text("Turno : Giocatore 1!");
	}
	$('.cella').click(function(event){
		assegnaRiquadro(event);
	});
});

function Rinizia() {
	location.reload();
}

function giocoFinito()
{
	if (vincitore=="n"){
		$('article h2 b').text("Gioco Finito in parità!");
	}
	else
	{
		if(vincitore=="Giocatore 1!")
		{
			$('article h2').text("Vincitore : Giocatore 1!");
			$('table').css("border","4px solid blue");
		}
		else
		{
			$('article h2').text("Vincitore : " + vincitore);
			$('table').css("border","4px solid red");	
		}
	}
	$('article h3').append("<div id='rinizia-gioco'> <button id='rinizia' class='btn btn-primary btn-lg active' onclick='Rinizia()'> Rinizia Partita </button> </div>");
}

function controlloRighe()
{
	if($('#1').text()=='o' && $('#2').text()=='o' && $('#3').text()=='o' || $('#1').text()=='x' && $('#2').text()=='x' && $('#3').text()=='x') 
	{
		controllo = true;
		assegnaVincintore();
		giocoFinito();
	}
	if($('#4').text()=='o' && $('#5').text()=='o' && $('#6').text()=='o' || $('#4').text()=='x' && $('#5').text()=='x' && $('#6').text()=='x') 
	{
		controllo = true;
		assegnaVincintore();
		giocoFinito();
	}

	if($('#7').text()=='o' && $('#8').text()=='o' && $('#9').text()=='o' || $('#7').text()=='x' && $('#8').text()=='x' && $('#9').text()=='x')
	{
		controllo = true;
		assegnaVincintore();
		giocoFinito();
	}
}

function controlloColonne()
{
	if($('#1').text()=='o' && $('#4').text()=='o' && $('#7').text()=='o' || $('#1').text()=='x' && $('#4').text()=='x' && $('#7').text()=='x') {
		controllo = true;
		assegnaVincintore();
		giocoFinito();
	}

	if($('#2').text()=='o' && $('#5').text()=='o' && $('#8').text()=='o' || $('#2').text()=='x' && $('#5').text()=='x' && $('#8').text()=='x') {
		controllo = true;
		assegnaVincintore();
		giocoFinito();
	}

	if(($('#3').text()=='o' && $('#6').text()=='o' && $('#9').text()=='o') || ($('#3').text()=='x' && $('#6').text()=='x' && $('#9').text()=='x')) {
		controllo = true;
		assegnaVincintore();
		giocoFinito();
	}
}

function controllaDiagonali()
{
	if($('#1').text()=="o" && $('#5').text()=="o" && $('#9').text()=="o" || $('#1').text()=="x" && $('#5').text()=="x" && $('#9').text()=="x") {
		controllo = true;
		assegnaVincintore();
		giocoFinito();
	}
	if(($('#3').text()=="o" && $('#5').text()=="o" && $('#7').text()=="o") || ($('#3').text()=="x" && $('#5').text()=="x" && $('#7').text()=="x")) {
		controllo = true;
		assegnaVincintore();
		giocoFinito();
	}
}