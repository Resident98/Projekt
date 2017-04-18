var tabelaobiektow = [];
var gole=[];
var kolejka = 1;
function zespoly() 
{
	var zespoly = ["Jagiellonia Białystok","Legia Warszawa","Lechia Gdańsk","Lech Poznań","Wisła Kraków","Korona Kielce","Wisła Płock",
				   "KGHM Zagłębie Lubin","Pogoń Szczecin","BRUK-BET Termalica Nieciecza","Śląsk Wrocław","Piast Gliwice","Arka Gdynia","Cracovia",
				   "Ruch Chorzów","Górnik Łęczna"];

	for(var i=0;i<=15;i++)
	{
		tabelaobiektow[i] = {nazwa:zespoly[i],punkty:0, zwyciestwa:0, remisy:0, porazki:0, gole:0, stracone:0};
	}
}

function rozegrajKolejke()
{
	//1 kolejka
	if(kolejka==1)
	{
		//Losowanie goli
		for(var i=0; i<=15; i++)
		{
			gole[i]=Math.floor(Math.random()*6);
		}
		for(var j=0; j<=14; j=j+2)
		{
		if(gole[j]>gole[j+1])
		{
			tabelaobiektow[j].punkty=3;
			tabelaobiektow[j+1].punkty=0;
			tabelaobiektow[j].zwyciestwa=1;
			tabelaobiektow[j].remisy=0;
			tabelaobiektow[j].porazki=0;
			tabelaobiektow[j].gole=gole[j];
			tabelaobiektow[j].stracone=gole[j+1];
			tabelaobiektow[j+1].zwyciestwa=0;
			tabelaobiektow[j+1].remisy=0;
			tabelaobiektow[j+1].porazki=1;
			tabelaobiektow[j+1].gole=gole[j+1];
			tabelaobiektow[j+1].stracone=gole[j];
		}else if(gole[j]<gole[j+1])
		{
			tabelaobiektow[j+1].punkty=3;
			tabelaobiektow[j].punkty=0;
			tabelaobiektow[j+1].zwyciestwa=1;
			tabelaobiektow[j+1].remisy=0;
			tabelaobiektow[j+1].porazki=0;
			tabelaobiektow[j+1].gole=gole[j+1];
			tabelaobiektow[j+1].stracone=gole[j];
			tabelaobiektow[j].zwyciestwa=0;
			tabelaobiektow[j].remisy=0;
			tabelaobiektow[j].porazki=1;
			tabelaobiektow[j].gole=gole[j];
			tabelaobiektow[j].stracone=gole[j+1];
		}else if(gole[j]==gole[j+1])
		{
			tabelaobiektow[j].punkty=1;
			tabelaobiektow[j+1].punkty=1;
			tabelaobiektow[j].zwyciestwa=0;
			tabelaobiektow[j].remisy=1;
			tabelaobiektow[j].porazki=0;
			tabelaobiektow[j+1].zwyciestwa=0;
			tabelaobiektow[j+1].remisy=1;
			tabelaobiektow[j+1].porazki=0;
			tabelaobiektow[j].gole=gole[j];
			tabelaobiektow[j+1].gole=gole[j+1];
			tabelaobiektow[j].stracone=gole[j+1];
			tabelaobiektow[j+1].stracone=gole[j];
		}
		}
		for(var i=1;i<=16;i++)
		{
		//Wyświetlenie na stronie
		document.getElementById("dr-"+i).innerHTML=tabelaobiektow[i-1].nazwa;
		document.getElementById("pkt-"+i).innerHTML=tabelaobiektow[i-1].punkty;
		document.getElementById("z-"+i).innerHTML=tabelaobiektow[i-1].zwyciestwa;
		document.getElementById("r-"+i).innerHTML=tabelaobiektow[i-1].remisy;
		document.getElementById("p-"+i).innerHTML=tabelaobiektow[i-1].porazki;
		document.getElementById("b-"+i).innerHTML=tabelaobiektow[i-1].gole + ":" + tabelaobiektow[i-1].stracone;
		//Mecze
		document.getElementById("m-"+i).innerHTML=1;
		}
	}
	if(kolejka==2)
	{
		for(var i=0; i<=15; i++)
		{
			gole[i]=Math.floor(Math.random()*6);
		}
		for(var j=0; j<=12; j=j+4)
		{
			if(gole[j]>gole[j+2])
			{
				tabelaobiektow[j].punkty=tabelaobiektow[j].punkty+3;
				tabelaobiektow[j+2].punkty=tabelaobiektow[j+2].punkty+0;
				tabelaobiektow[j].zwyciestwa=tabelaobiektow[j].zwyciestwa+1;
				tabelaobiektow[j].remisy=tabelaobiektow[j].remisy+0;
				tabelaobiektow[j].porazki=tabelaobiektow[j].porazki+0;
				tabelaobiektow[j].gole=tabelaobiektow[j].gole+gole[j];
				tabelaobiektow[j].stracone=tabelaobiektow[j].stracone+gole[j+2];
				tabelaobiektow[j+2].zwyciestwa=tabelaobiektow[j+2].zwyciestwa+0;
				tabelaobiektow[j+2].remisy=tabelaobiektow[j+2].remisy+0;
				tabelaobiektow[j+2].porazki=tabelaobiektow[j+2].porazki+1;
				tabelaobiektow[j+2].gole=tabelaobiektow[j+2].gole+gole[j+2];
				tabelaobiektow[j+2].stracone=tabelaobiektow[j+2].stracone+gole[j];
			}else if(gole[j]<gole[j+2])
			{
				tabelaobiektow[j+2].punkty=tabelaobiektow[j+2].punkty+3;
				tabelaobiektow[j].punkty=tabelaobiektow[j].punkty+0;
				tabelaobiektow[j+2].zwyciestwa=tabelaobiektow[j+2].zwyciestwa+1;
				tabelaobiektow[j+2].remisy=tabelaobiektow[j+2].remisy+0;
				tabelaobiektow[j+2].porazki=tabelaobiektow[j+2].porazki+0;
				tabelaobiektow[j+2].gole=tabelaobiektow[j+2].gole+gole[j+2];
				tabelaobiektow[j+2].stracone=tabelaobiektow[j+2].stracone+gole[j];
				tabelaobiektow[j].zwyciestwa=tabelaobiektow[j].zwyciestwa+0;
				tabelaobiektow[j].remisy=tabelaobiektow[j].remisy+0;
				tabelaobiektow[j].porazki=tabelaobiektow[j].porazki+1;
				tabelaobiektow[j].gole=tabelaobiektow[j].gole+gole[j];
				tabelaobiektow[j].stracone=tabelaobiektow[j].stracone+gole[j+2];
			}else if(gole[j]==gole[j+2])
			{
				tabelaobiektow[j].punkty=tabelaobiektow[j].punkty+1;
				tabelaobiektow[j+2].punkty=tabelaobiektow[j+2].punkty+1;
				tabelaobiektow[j].zwyciestwa=tabelaobiektow[j].zwyciestwa+0;
				tabelaobiektow[j].remisy=tabelaobiektow[j].remisy+1;
				tabelaobiektow[j].porazki=tabelaobiektow[j].porazki+0;
				tabelaobiektow[j+2].zwyciestwa=tabelaobiektow[j+2].zwyciestwa+0;
				tabelaobiektow[j+2].remisy=tabelaobiektow[j+2].remisy+1;
				tabelaobiektow[j+2].porazki=tabelaobiektow[j+2].porazki+0;
				tabelaobiektow[j].gole=tabelaobiektow[j].gole+gole[j];
				tabelaobiektow[j+2].gole=tabelaobiektow[j+2].gole+gole[j+2];
				tabelaobiektow[j].stracone=tabelaobiektow[j].stracone+gole[j+2];
				tabelaobiektow[j+2].stracone=tabelaobiektow[j+2].stracone+gole[j];
			}
		}
		for(var k=1; k<=14; k=k+4)
		{
			if(gole[k]>gole[k+2])
			{
				tabelaobiektow[k].punkty=tabelaobiektow[k].punkty+3;
				tabelaobiektow[k+2].punkty=tabelaobiektow[k+2].punkty+0;
				tabelaobiektow[k].zwyciestwa=tabelaobiektow[k].zwyciestwa+1;
				tabelaobiektow[k].remisy=tabelaobiektow[k].remisy+0;
				tabelaobiektow[k].porazki=tabelaobiektow[k].porazki+0;
				tabelaobiektow[k].gole=tabelaobiektow[k].gole+gole[k];
				tabelaobiektow[k].stracone=tabelaobiektow[k].stracone+gole[k+2];
				tabelaobiektow[k+2].zwyciestwa=tabelaobiektow[k+2].zwyciestwa+0;
				tabelaobiektow[k+2].remisy=tabelaobiektow[k+2].remisy+0;
				tabelaobiektow[k+2].porazki=tabelaobiektow[k+2].porazki+1;
				tabelaobiektow[k+2].gole=tabelaobiektow[k+2].gole+gole[k+2];
				tabelaobiektow[k+2].stracone=tabelaobiektow[k+2].stracone+gole[k];
			}else if(gole[k]<gole[k+2])
			{
				tabelaobiektow[k+2].punkty=tabelaobiektow[k+2].punkty+3;
				tabelaobiektow[k].punkty=tabelaobiektow[k].punkty+0;
				tabelaobiektow[k+2].zwyciestwa=tabelaobiektow[k+2].zwyciestwa+1;
				tabelaobiektow[k+2].remisy=tabelaobiektow[k+2].remisy+0;
				tabelaobiektow[k+2].porazki=tabelaobiektow[k+2].porazki+0;
				tabelaobiektow[k+2].gole=tabelaobiektow[k+2].gole+gole[k+2];
				tabelaobiektow[k+2].stracone=tabelaobiektow[k+2].stracone+gole[k];
				tabelaobiektow[k].zwyciestwa=tabelaobiektow[k].zwyciestwa+0;
				tabelaobiektow[k].remisy=tabelaobiektow[k].remisy+0;
				tabelaobiektow[k].porazki=tabelaobiektow[k].porazki+1;
				tabelaobiektow[k].gole=tabelaobiektow[k].gole+gole[k];
				tabelaobiektow[k].stracone=tabelaobiektow[k].stracone+gole[k+2];
			}else if(gole[k]==gole[k+2])
			{
				tabelaobiektow[k].punkty=tabelaobiektow[k].punkty+1;
				tabelaobiektow[k+2].punkty=tabelaobiektow[k+2].punkty+1;
				tabelaobiektow[k].zwyciestwa=tabelaobiektow[k].zwyciestwa+0;
				tabelaobiektow[k].remisy=tabelaobiektow[k].remisy+1;
				tabelaobiektow[k].porazki=tabelaobiektow[k].porazki+0;
				tabelaobiektow[k+2].zwyciestwa=tabelaobiektow[k+2].zwyciestwa+0;
				tabelaobiektow[k+2].remisy=tabelaobiektow[k+2].remisy+1;
				tabelaobiektow[k+2].porazki=tabelaobiektow[k+2].porazki+0;
				tabelaobiektow[k].gole=tabelaobiektow[k].gole+gole[k];
				tabelaobiektow[k+2].gole=tabelaobiektow[k+2].gole+gole[k+2];
				tabelaobiektow[k].stracone=tabelaobiektow[k].stracone+gole[k+2];
				tabelaobiektow[k+2].stracone=tabelaobiektow[k+2].stracone+gole[k];
			}
		}
		for(var i=1;i<=16;i++)
		{
		//Wyświetlenie na stronie
		document.getElementById("dr-"+i).innerHTML=tabelaobiektow[i-1].nazwa;
		document.getElementById("pkt-"+i).innerHTML=tabelaobiektow[i-1].punkty;
		document.getElementById("z-"+i).innerHTML=tabelaobiektow[i-1].zwyciestwa;
		document.getElementById("r-"+i).innerHTML=tabelaobiektow[i-1].remisy;
		document.getElementById("p-"+i).innerHTML=tabelaobiektow[i-1].porazki;
		document.getElementById("b-"+i).innerHTML=tabelaobiektow[i-1].gole + ":" + tabelaobiektow[i-1].stracone;
		//Mecze
		document.getElementById("m-"+i).innerHTML=2;
		}
	}
	if(kolejka==1)
	{
		kolejka=2;
	}else if(kolejka==2)
	{
		kolejka=3;
	}
}