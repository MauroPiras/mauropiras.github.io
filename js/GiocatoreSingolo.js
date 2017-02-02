var controlloComputer = false;
var esito = false;
var turno = 'o';
var riquadro;
var procedi = true;
function assegnaRiquadro(event) 
{
	if(controllo!=true)
	{
		if($("#"+$(event.target).attr("id")).text()=="")
		{
			if (procedi){
				procedi = false;
				contatore+=1;
				$("#"+$(event.target).attr("id")).text('o');
				controlloRighe();
				controlloColonne();
				controllaDiagonali();
				setTimeout(function(){
					turnoComputer(event);
				},500);
			}
		}
	}	
}

function inserimentoCasuale()
{
	var indice = Math.floor((Math.random()*9)+1);
	if($("#"+indice).text()=="")
	{
		esito=true;
		$("#"+indice).text('x');	
	}
}
function assegnaVincintore()
{
	if (turno=='o')
	{
		vincitore="Giocatore 1!";
	}
	else
	{
		vincitore="Computer!";
	}
}


function controlla1e2(tipo)
{
	if(!(controlloComputer))
	{	
		if ($('#1').text()==tipo && $('#2').text()==tipo)
		{
			controlloComputer=true;
			riquadro = 3;
			if($("#"+riquadro).text()!="")
				controlloComputer=false;
		}
	}
}

function controlla2e3(tipo)
{
	if(!(controlloComputer))
	{	
		if ($('#2').text()==tipo && $('#3').text()==tipo)
		{
			controlloComputer=true;
			riquadro = 1;
			if($("#"+riquadro).text()!="")
				controlloComputer=false;
		}
	}
}

function controlla1e3(tipo)
{
	if(!(controlloComputer))
	{	
		if ($('#1').text()==tipo && $('#3').text()==tipo)
		{
			controlloComputer=true;
			riquadro = 2;
			if($("#"+riquadro).text()!="")
				controlloComputer=false;
		}
	}
}

function controlla4e5(tipo)
{
	if(!(controlloComputer))
	{	
		if ($('#4').text()==tipo && $('#5').text()==tipo)
		{
			controlloComputer=true;
			riquadro = 6;
			if($("#"+riquadro).text()!="")
				controlloComputer=false;
		}
	}
}

function controlla5e6(tipo)
{
	if(!(controlloComputer))
	{	
		if ($('#5').text()==tipo && $('#6').text()==tipo)
		{
			controlloComputer=true;
			riquadro = 4;
			if($("#"+riquadro).text()!="")
				controlloComputer=false;
		}
	}
}

function controlla4e6(tipo)
{
	if(!(controlloComputer))
	{	
		if ($('#4').text()==tipo && $('#6').text()==tipo)
		{
			controlloComputer=true;
			riquadro = 5;
			if($("#"+riquadro).text()!="")
				controlloComputer=false;
		}
	}
}

function controlla7e8(tipo)
{
	if(!(controlloComputer))
	{	
		if ($('#7').text()==tipo && $('#8').text()==tipo)
		{
			controlloComputer=true;
			riquadro = 9;
			if($("#"+riquadro).text()!="")
				controlloComputer=false;
		}
	}
}

function controlla8e9(tipo)
{
	if(!(controlloComputer))
	{	
		if ($('#8').text()==tipo && $('#9').text()==tipo)
		{
			controlloComputer=true;
			riquadro = 7;
			if($("#"+riquadro).text()!="")
				controlloComputer=false;
		}
	}
}

function controlla7e9(tipo)
{
	if(!(controlloComputer))
	{	
		if ($('#7').text()==tipo && $('#9').text()==tipo)
		{
			controlloComputer=true;
			riquadro = 8;
			if($("#"+riquadro).text()!="")
				controlloComputer=false;
		}
	}
}



function controlla1e4(tipo)
{
	if(!(controlloComputer))
	{	
		if ($('#1').text()==tipo && $('#4').text()==tipo)
		{
			controlloComputer=true;
			riquadro = 7;
			if($("#"+riquadro).text()!="")
				controlloComputer=false;
		}
	}
}

function controlla4e7(tipo)
{
	if(!(controlloComputer))
	{	
		if ($('#4').text()==tipo && $('#7').text()==tipo)
		{
			controlloComputer=true;
			riquadro = 1;
			if($("#"+riquadro).text()!="")
				controlloComputer=false;
		}
	}
}

function controlla1e7(tipo)
{
	if(!(controlloComputer))
	{	
		if ($('#1').text()==tipo && $('#7').text()==tipo)
		{
			controlloComputer=true;
			riquadro = 4;
			if($("#"+riquadro).text()!="")
				controlloComputer=false;
		}
	}
}

function controlla2e5(tipo)
{
	if(!(controlloComputer))
	{	
		if ($('#2').text()==tipo && $('#5').text()==tipo)
		{
			controlloComputer=true;
			riquadro = 8;
			if($("#"+riquadro).text()!="")
				controlloComputer=false;
		}
	}
}

function controlla5e8(tipo)
{
	if(!(controlloComputer))
	{	
		if ($('#5').text()==tipo && $('#8').text()==tipo)
		{
			controlloComputer=true;
			riquadro = 2;
			if($("#"+riquadro).text()!="")
				controlloComputer=false;
		}
	}
}

function controlla2e8(tipo)
{
	if(!(controlloComputer))
	{	
		if ($('#2').text()==tipo && $('#8').text()==tipo)
		{
			controlloComputer=true;
			riquadro = 5;
			if($("#"+riquadro).text()!="")
				controlloComputer=false;
		}
	}
}

function controlla3e6(tipo)
{
	if(!(controlloComputer))
	{	
		if ($('#3').text()==tipo && $('#6').text()==tipo)
		{
			controlloComputer=true;
			riquadro = 9;
			if($("#"+riquadro).text()!="")
				controlloComputer=false;
		}
	}
}

function controlla6e9(tipo)
{
	if(!(controlloComputer))
	{	
		if ($('#6').text()==tipo && $('#9').text()==tipo)
		{
			controlloComputer=true;
			riquadro = 3;
			if($("#"+riquadro).text()!="")
				controlloComputer=false;
		}
	}
}

function controlla3e9(tipo)
{
	if(!(controlloComputer))
	{	
		if ($('#3').text()==tipo && $('#9').text()==tipo)
		{
			controlloComputer=true;
			riquadro = 6;
			if($("#"+riquadro).text()!="")
				controlloComputer=false;
		}
	}
}


function controlla1e5(tipo)
{
	if(!(controlloComputer))
	{	
		if ($('#1').text()==tipo && $('#5').text()==tipo)
		{
			controlloComputer=true;
			riquadro = 9;
			if($("#"+riquadro).text()!="")
				controlloComputer=false;
		}
	}
}

function controlla5e9(tipo)
{
	if(!(controlloComputer))
	{	
		if ($('#5').text()==tipo && $('#9').text()==tipo)
		{
			controlloComputer=true;
			riquadro = 1;
			if($("#"+riquadro).text()!="")
				controlloComputer=false;
		}
	}
}

function controlla1e9(tipo)
{
	if(!(controlloComputer))
	{	
		if ($('#1').text()==tipo && $('#9').text()==tipo)
		{
			controlloComputer=true;
			riquadro = 5;
			if($("#"+riquadro).text()!="")
				controlloComputer=false;
		}
	}
}

function controlla3e5(tipo)
{
	if(!(controlloComputer))
	{	
		if ($('#3').text()==tipo && $('#5').text()==tipo)
		{
			controlloComputer=true;
			riquadro = 7;
			if($("#"+riquadro).text()!="")
				controlloComputer=false;
		}
	}
}

function controlla5e7(tipo)
{
	if(!(controlloComputer))
	{	
		if ($('#5').text()==tipo && $('#7').text()==tipo)
		{
			controlloComputer=true;
			riquadro = 3;
			if($("#"+riquadro).text()!="")
				controlloComputer=false;
		}
	}
}

function controlla3e7(tipo)
{
	if(!(controlloComputer))
	{	
		if ($('#3').text()==tipo && $('#7').text()==tipo)
		{
			controlloComputer=true;
			riquadro = 5;
			if($("#"+riquadro).text()!="")
				controlloComputer=false;
		}
	}
}

function turnoComputer(event) {

			if(!(controllo))
			{
				turno = 'x';
				controlla1e2('x');
				controlla1e3('x');
				controlla1e4('x');
				controlla1e7('x');
				controlla1e5('x');
				controlla1e9('x');
				controlla2e3('x');
				controlla2e5('x');
				controlla2e8('x');
				controlla3e6('x');
				controlla3e5('x');
				controlla3e7('x');
				controlla3e9('x');
				controlla4e5('x');
				controlla4e6('x');
				controlla4e7('x');
				controlla5e6('x');
				controlla5e8('x');
				controlla5e7('x');
				controlla6e9('x');
				controlla7e8('x');
				controlla7e9('x');
				controlla8e9('x');
				if(controlloComputer)
				{
					$('#'+riquadro).text('x');
				}
				if(!(controlloComputer))
				{
					switch($(event.target).attr("id"))
					{
						case '1':
							controlla1e2('o');
							controlla1e3('o');
							controlla1e4('o');
							controlla1e7('o');
							controlla1e5('o');
							controlla1e9('o');
							break;
						case '2':
							controlla1e2('o');
							controlla2e3('o');
							controlla2e5('o');
							controlla2e8('o');
							break;
						case '3':
							controlla2e3('o');
							controlla1e3('o');
							controlla3e7('o');
							controlla3e6('o');
							controlla3e9('o');
							controlla3e5('o');
							break;
						case '4':
							controlla4e5('o');
							controlla4e6('o');
							controlla4e7('o');
							controlla1e4('o');
							break;
						case '5':
							controlla5e6('o');
							controlla5e8('o');
							controlla5e9('o');
							controlla5e7('o');
							controlla4e5('o');
							controlla3e5('o');
							controlla2e5('o');
							controlla1e5('o');
							break;
						case '6':
							controlla6e9('o');
							controlla5e6('o');
							controlla4e6('o');
							controlla3e6('o');
							break;
						case '7':
							controlla7e8('o');
							controlla7e9('o');
							controlla5e7('o');
							controlla4e7('o');
							controlla3e7('o');
							controlla1e7('o');
							break;
						case '8':
							controlla8e9('o');
							controlla7e8('o');
							controlla5e8('o');
							controlla2e8('o');
							break;
						case '9':
							controlla8e9('o');
							controlla7e9('o');
							controlla6e9('o');
							controlla5e9('o');
							controlla3e9('o');
							controlla1e9('o');
							break;
					}
					if($("#"+riquadro).text()=="")
					{
						if (controlloComputer) 
							$('#'+riquadro).text('x');
						else
						{
							while (!(esito)) 
							{
								inserimentoCasuale();
							}
						}
					}
					else
					{
						while (!(esito)) 
						{
							if(contatore<9)
							{
								inserimentoCasuale();
							}
							else
							{
								esito=true;
								giocoFinito();
							}
						}
					}
					esito=false;
					contatore+=1;
					controlloComputer=false;
				}
				if (contatore==9) 
				{
					giocoFinito();
				}
				controlloRighe();
				controlloColonne();
				controllaDiagonali();
				turno='o';
				procedi = true;
			}
}