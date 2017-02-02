var turno='o';
function assegnaRiquadro(event)
{
	if(controllo!=true){
		if($("#"+$(event.target).attr("id")).text()=="")
		{
			contatore+=1;
			$("#"+$(event.target).attr("id")).html(turno);
			if (turno=='o'){
				turno='x';
				$('article h2 b').text("Turno : Giocatore 2!");
			}
			else { 
				turno='o';
				$('article h2 b').text("Turno : Giocatore 1!");
			} 
		}
	}
	controlloRighe();
	controllaDiagonali();
	controlloColonne();
	if (contatore==9) 
	{
		if(vincitore == "n")
			giocoFinito();
	}
};

function assegnaVincintore()
{
	if (turno=='o')
	{
		vincitore="Giocatore 2!";
	}
	else
	{
		vincitore="Giocatore 1!";
	}
}