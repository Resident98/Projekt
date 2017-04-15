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
		//Mecz 1 i 2 zespolu
		if(gole[0]>gole[1])
		{
			tabelaobiektow[0].punkty=3;
			tabelaobiektow[1].punkty=0;
			tabelaobiektow[0].zwyciestwa=1;
			tabelaobiektow[0].remisy=0;
			tabelaobiektow[0].porazki=0;
			tabelaobiektow[0].gole=gole[0];
			tabelaobiektow[0].stracone=gole[1];
			tabelaobiektow[1].zwyciestwa=0;
			tabelaobiektow[1].remisy=0;
			tabelaobiektow[1].porazki=1;
			tabelaobiektow[1].gole=gole[1];
			tabelaobiektow[1].stracone=gole[0];
		}else if(gole[0]<gole[1])
		{
			tabelaobiektow[1].punkty=3;
			tabelaobiektow[0].punkty=0;
			tabelaobiektow[1].zwyciestwa=1;
			tabelaobiektow[1].remisy=0;
			tabelaobiektow[1].porazki=0;
			tabelaobiektow[1].gole=gole[1];
			tabelaobiektow[1].stracone=gole[0];
			tabelaobiektow[0].zwyciestwa=0;
			tabelaobiektow[0].remisy=0;
			tabelaobiektow[0].porazki=1;
			tabelaobiektow[0].gole=gole[0];
			tabelaobiektow[0].stracone=gole[1];
		}else if(gole[0]==gole[1])
		{
			tabelaobiektow[0].punkty=1;
			tabelaobiektow[1].punkty=1;
			tabelaobiektow[0].zwyciestwa=0;
			tabelaobiektow[0].remisy=1;
			tabelaobiektow[0].porazki=0;
			tabelaobiektow[1].zwyciestwa=0;
			tabelaobiektow[1].remisy=1;
			tabelaobiektow[1].porazki=0;
			tabelaobiektow[0].gole=gole[0];
			tabelaobiektow[1].gole=gole[1];
			tabelaobiektow[0].stracone=gole[1];
			tabelaobiektow[1].stracone=gole[0];
		}
		//Mecz 3 i 4 zespolu
		if(gole[2]>gole[3])
		{
			tabelaobiektow[2].punkty=3;
			tabelaobiektow[3].punkty=0;
			tabelaobiektow[2].zwyciestwa=1;
			tabelaobiektow[2].remisy=0;
			tabelaobiektow[2].porazki=0;
			tabelaobiektow[2].gole=gole[2];
			tabelaobiektow[2].stracone=gole[3];
			tabelaobiektow[3].zwyciestwa=0;
			tabelaobiektow[3].remisy=0;
			tabelaobiektow[3].porazki=1;
			tabelaobiektow[3].gole=gole[3];
			tabelaobiektow[3].stracone=gole[2];
		}else if(gole[2]<gole[3])
		{
			tabelaobiektow[3].punkty=3;
			tabelaobiektow[2].punkty=0;
			tabelaobiektow[3].zwyciestwa=1;
			tabelaobiektow[3].remisy=0;
			tabelaobiektow[3].porazki=0;
			tabelaobiektow[3].gole=gole[3];
			tabelaobiektow[3].stracone=gole[2];
			tabelaobiektow[2].zwyciestwa=0;
			tabelaobiektow[2].remisy=0;
			tabelaobiektow[2].porazki=1;
			tabelaobiektow[2].gole=gole[2];
			tabelaobiektow[2].stracone=gole[3];
		}else if(gole[2]==gole[3])
		{
			tabelaobiektow[2].punkty=1;
			tabelaobiektow[3].punkty=1;
			tabelaobiektow[2].zwyciestwa=0;
			tabelaobiektow[2].remisy=1;
			tabelaobiektow[2].porazki=0;
			tabelaobiektow[3].zwyciestwa=0;
			tabelaobiektow[3].remisy=1;
			tabelaobiektow[3].porazki=0;
			tabelaobiektow[2].gole=gole[2];
			tabelaobiektow[3].gole=gole[3];
			tabelaobiektow[2].stracone=gole[3];
			tabelaobiektow[3].stracone=gole[2];
		}
		//Mecz 5 i 6 zespolu
		if(gole[4]>gole[5])
		{
			tabelaobiektow[4].punkty=3;
			tabelaobiektow[5].punkty=0;
			tabelaobiektow[4].zwyciestwa=1;
			tabelaobiektow[4].remisy=0;
			tabelaobiektow[4].porazki=0;
			tabelaobiektow[4].gole=gole[4];
			tabelaobiektow[4].stracone=gole[5];
			tabelaobiektow[5].zwyciestwa=0;
			tabelaobiektow[5].remisy=0;
			tabelaobiektow[5].porazki=1;
			tabelaobiektow[5].gole=gole[5];
			tabelaobiektow[5].stracone=gole[4];
		}else if(gole[4]<gole[5])
		{
			tabelaobiektow[5].punkty=3;
			tabelaobiektow[4].punkty=0;
			tabelaobiektow[5].zwyciestwa=1;
			tabelaobiektow[5].remisy=0;
			tabelaobiektow[5].porazki=0;
			tabelaobiektow[5].gole=gole[5];
			tabelaobiektow[5].stracone=gole[4];
			tabelaobiektow[4].zwyciestwa=0;
			tabelaobiektow[4].remisy=0;
			tabelaobiektow[4].porazki=1;
			tabelaobiektow[4].gole=gole[4];
			tabelaobiektow[4].stracone=gole[5];
		}else if(gole[4]==gole[5])
		{
			tabelaobiektow[4].punkty=1;
			tabelaobiektow[5].punkty=1;
			tabelaobiektow[4].zwyciestwa=0;
			tabelaobiektow[4].remisy=1;
			tabelaobiektow[4].porazki=0;
			tabelaobiektow[5].zwyciestwa=0;
			tabelaobiektow[5].remisy=1;
			tabelaobiektow[5].porazki=0;
			tabelaobiektow[4].gole=gole[4];
			tabelaobiektow[5].gole=gole[5];
			tabelaobiektow[4].stracone=gole[5];
			tabelaobiektow[5].stracone=gole[4];
		}
		//Mecz 7 i 8 zespolu
		if(gole[6]>gole[7])
		{
			tabelaobiektow[6].punkty=3;
			tabelaobiektow[7].punkty=0;
			tabelaobiektow[6].zwyciestwa=1;
			tabelaobiektow[6].remisy=0;
			tabelaobiektow[6].porazki=0;
			tabelaobiektow[6].gole=gole[6];
			tabelaobiektow[6].stracone=gole[7];
			tabelaobiektow[7].zwyciestwa=0;
			tabelaobiektow[7].remisy=0;
			tabelaobiektow[7].porazki=1;
			tabelaobiektow[7].gole=gole[7];
			tabelaobiektow[7].stracone=gole[6];
		}else if(gole[6]<gole[7])
		{
			tabelaobiektow[7].punkty=3;
			tabelaobiektow[6].punkty=0;
			tabelaobiektow[7].zwyciestwa=1;
			tabelaobiektow[7].remisy=0;
			tabelaobiektow[7].porazki=0;
			tabelaobiektow[7].gole=gole[7];
			tabelaobiektow[7].stracone=gole[6];
			tabelaobiektow[6].zwyciestwa=0;
			tabelaobiektow[6].remisy=0;
			tabelaobiektow[6].porazki=1;
			tabelaobiektow[6].gole=gole[6];
			tabelaobiektow[6].stracone=gole[7];
		}else if(gole[6]==gole[7])
		{
			tabelaobiektow[6].punkty=1;
			tabelaobiektow[7].punkty=1;
			tabelaobiektow[6].zwyciestwa=0;
			tabelaobiektow[6].remisy=1;
			tabelaobiektow[6].porazki=0;
			tabelaobiektow[7].zwyciestwa=0;
			tabelaobiektow[7].remisy=1;
			tabelaobiektow[7].porazki=0;
			tabelaobiektow[6].gole=gole[6];
			tabelaobiektow[7].gole=gole[7];
			tabelaobiektow[6].stracone=gole[7];
			tabelaobiektow[7].stracone=gole[6];
		}
		//Mecz 9 i 10 zespolu
		if(gole[8]>gole[9])
		{
			tabelaobiektow[8].punkty=3;
			tabelaobiektow[9].punkty=0;
			tabelaobiektow[8].zwyciestwa=1;
			tabelaobiektow[8].remisy=0;
			tabelaobiektow[8].porazki=0;
			tabelaobiektow[8].gole=gole[8];
			tabelaobiektow[8].stracone=gole[9];
			tabelaobiektow[9].zwyciestwa=0;
			tabelaobiektow[9].remisy=0;
			tabelaobiektow[9].porazki=1;
			tabelaobiektow[9].gole=gole[8];
			tabelaobiektow[9].stracone=gole[9];
		}else if(gole[8]<gole[9])
		{
			tabelaobiektow[9].punkty=3;
			tabelaobiektow[8].punkty=0;
			tabelaobiektow[9].zwyciestwa=1;
			tabelaobiektow[9].remisy=0;
			tabelaobiektow[9].porazki=0;
			tabelaobiektow[9].gole=gole[9];
			tabelaobiektow[9].stracone=gole[8];
			tabelaobiektow[8].zwyciestwa=0;
			tabelaobiektow[8].remisy=0;
			tabelaobiektow[8].porazki=1;
			tabelaobiektow[8].gole=gole[8];
			tabelaobiektow[8].stracone=gole[9];
		}else if(gole[8]==gole[9])
		{
			tabelaobiektow[8].punkty=1;
			tabelaobiektow[9].punkty=1;
			tabelaobiektow[8].zwyciestwa=0;
			tabelaobiektow[8].remisy=1;
			tabelaobiektow[8].porazki=0;
			tabelaobiektow[9].zwyciestwa=0;
			tabelaobiektow[9].remisy=1;
			tabelaobiektow[9].porazki=0;
			tabelaobiektow[8].gole=gole[8];
			tabelaobiektow[9].gole=gole[9];
			tabelaobiektow[8].stracone=gole[9];
			tabelaobiektow[9].stracone=gole[8];
		}
		//Mecz 11 i 12 zespolu
		if(gole[10]>gole[11])
		{
			tabelaobiektow[10].punkty=3;
			tabelaobiektow[11].punkty=0;
			tabelaobiektow[10].zwyciestwa=1;
			tabelaobiektow[10].remisy=0;
			tabelaobiektow[10].porazki=0;
			tabelaobiektow[10].gole=gole[10];
			tabelaobiektow[10].stracone=gole[11];
			tabelaobiektow[11].zwyciestwa=0;
			tabelaobiektow[11].remisy=0;
			tabelaobiektow[11].porazki=1;
			tabelaobiektow[11].gole=gole[11];
			tabelaobiektow[11].stracone=gole[10];
		}else if(gole[10]<gole[11])
		{
			tabelaobiektow[11].punkty=3;
			tabelaobiektow[10].punkty=0;
			tabelaobiektow[11].zwyciestwa=1;
			tabelaobiektow[11].remisy=0;
			tabelaobiektow[11].porazki=0;
			tabelaobiektow[11].gole=gole[11];
			tabelaobiektow[11].stracone=gole[10];
			tabelaobiektow[10].zwyciestwa=0;
			tabelaobiektow[10].remisy=0;
			tabelaobiektow[10].porazki=1;
			tabelaobiektow[10].gole=gole[10];
			tabelaobiektow[10].stracone=gole[11];
		}else if(gole[10]==gole[11])
		{
			tabelaobiektow[10].punkty=1;
			tabelaobiektow[11].punkty=1;
			tabelaobiektow[10].zwyciestwa=0;
			tabelaobiektow[10].remisy=1;
			tabelaobiektow[10].porazki=0;
			tabelaobiektow[11].zwyciestwa=0;
			tabelaobiektow[11].remisy=1;
			tabelaobiektow[11].porazki=0;
			tabelaobiektow[10].gole=gole[10];
			tabelaobiektow[11].gole=gole[11];
			tabelaobiektow[10].stracone=gole[11];
			tabelaobiektow[11].stracone=gole[10];
		}
		//Mecz 13 i 14 zespolu
		if(gole[12]>gole[13])
		{
			tabelaobiektow[12].punkty=3;
			tabelaobiektow[13].punkty=0;
			tabelaobiektow[12].zwyciestwa=1;
			tabelaobiektow[12].remisy=0;
			tabelaobiektow[12].porazki=0;
			tabelaobiektow[12].gole=gole[12];
			tabelaobiektow[12].stracone=gole[13];
			tabelaobiektow[13].zwyciestwa=0;
			tabelaobiektow[13].remisy=0;
			tabelaobiektow[13].porazki=1;
			tabelaobiektow[13].gole=gole[13];
			tabelaobiektow[13].stracone=gole[12];
		}else if(gole[12]<gole[13])
		{
			tabelaobiektow[13].punkty=3;
			tabelaobiektow[12].punkty=0;
			tabelaobiektow[13].zwyciestwa=1;
			tabelaobiektow[13].remisy=0;
			tabelaobiektow[13].porazki=0;
			tabelaobiektow[13].gole=gole[13];
			tabelaobiektow[13].stracone=gole[12];
			tabelaobiektow[12].zwyciestwa=0;
			tabelaobiektow[12].remisy=0;
			tabelaobiektow[12].porazki=1;
			tabelaobiektow[12].gole=gole[12];
			tabelaobiektow[12].stracone=gole[13];
		}else if(gole[12]==gole[13])
		{
			tabelaobiektow[12].punkty=1;
			tabelaobiektow[13].punkty=1;
			tabelaobiektow[12].zwyciestwa=0;
			tabelaobiektow[12].remisy=1;
			tabelaobiektow[12].porazki=0;
			tabelaobiektow[13].zwyciestwa=0;
			tabelaobiektow[13].remisy=1;
			tabelaobiektow[13].porazki=0;
			tabelaobiektow[12].gole=gole[12];
			tabelaobiektow[13].gole=gole[13];
			tabelaobiektow[12].stracone=gole[13];
			tabelaobiektow[13].stracone=gole[12];
		}
		//Mecz 15 i 16 zespolu
		if(gole[14]>gole[15])
		{
			tabelaobiektow[14].punkty=3;
			tabelaobiektow[15].punkty=0;
			tabelaobiektow[14].zwyciestwa=1;
			tabelaobiektow[14].remisy=0;
			tabelaobiektow[14].porazki=0;
			tabelaobiektow[14].gole=gole[14];
			tabelaobiektow[14].stracone=gole[15];
			tabelaobiektow[15].zwyciestwa=0;
			tabelaobiektow[15].remisy=0;
			tabelaobiektow[15].porazki=1;
			tabelaobiektow[15].gole=gole[15];
			tabelaobiektow[15].stracone=gole[14];
		}else if(gole[14]<gole[15])
		{
			tabelaobiektow[15].punkty=3;
			tabelaobiektow[14].punkty=0;
			tabelaobiektow[15].zwyciestwa=1;
			tabelaobiektow[15].remisy=0;
			tabelaobiektow[15].porazki=0;
			tabelaobiektow[15].gole=gole[15];
			tabelaobiektow[15].stracone=gole[14];
			tabelaobiektow[14].zwyciestwa=0;
			tabelaobiektow[14].remisy=0;
			tabelaobiektow[14].porazki=1;
			tabelaobiektow[14].gole=gole[14];
			tabelaobiektow[14].stracone=gole[15];
		}else if(gole[14]==gole[15])
		{
			tabelaobiektow[14].punkty=1;
			tabelaobiektow[15].punkty=1;
			tabelaobiektow[14].zwyciestwa=0;
			tabelaobiektow[14].remisy=1;
			tabelaobiektow[14].porazki=0;
			tabelaobiektow[15].zwyciestwa=0;
			tabelaobiektow[15].remisy=1;
			tabelaobiektow[15].porazki=0;
			tabelaobiektow[14].gole=gole[14];
			tabelaobiektow[15].gole=gole[15];
			tabelaobiektow[14].stracone=gole[15];
			tabelaobiektow[15].stracone=gole[14];
		}
		//Wyświetlenie na stronie
		//1 druzyna
		document.getElementById("dr-1").innerHTML=tabelaobiektow[0].nazwa;
		document.getElementById("pkt-1").innerHTML=tabelaobiektow[0].punkty;
		document.getElementById("z-1").innerHTML=tabelaobiektow[0].zwyciestwa;
		document.getElementById("r-1").innerHTML=tabelaobiektow[0].remisy;
		document.getElementById("p-1").innerHTML=tabelaobiektow[0].porazki;
		document.getElementById("b-1").innerHTML=tabelaobiektow[0].gole + ":" + tabelaobiektow[0].stracone;
		//2 druzyna
		document.getElementById("dr-2").innerHTML=tabelaobiektow[1].nazwa;
		document.getElementById("pkt-2").innerHTML=tabelaobiektow[1].punkty;
		document.getElementById("z-2").innerHTML=tabelaobiektow[1].zwyciestwa;
		document.getElementById("r-2").innerHTML=tabelaobiektow[1].remisy;
		document.getElementById("p-2").innerHTML=tabelaobiektow[1].porazki;
		document.getElementById("b-2").innerHTML=tabelaobiektow[1].gole + ":" + tabelaobiektow[1].stracone;
		//3 druzyna
		document.getElementById("dr-3").innerHTML=tabelaobiektow[2].nazwa;
		document.getElementById("pkt-3").innerHTML=tabelaobiektow[2].punkty;
		document.getElementById("z-3").innerHTML=tabelaobiektow[2].zwyciestwa;
		document.getElementById("r-3").innerHTML=tabelaobiektow[2].remisy;
		document.getElementById("p-3").innerHTML=tabelaobiektow[2].porazki;
		document.getElementById("b-3").innerHTML=tabelaobiektow[2].gole + ":" + tabelaobiektow[2].stracone;
		//4 druzyna
		document.getElementById("dr-4").innerHTML=tabelaobiektow[3].nazwa;
		document.getElementById("pkt-4").innerHTML=tabelaobiektow[3].punkty;
		document.getElementById("z-4").innerHTML=tabelaobiektow[3].zwyciestwa;
		document.getElementById("r-4").innerHTML=tabelaobiektow[3].remisy;
		document.getElementById("p-4").innerHTML=tabelaobiektow[3].porazki;
		document.getElementById("b-4").innerHTML=tabelaobiektow[3].gole + ":" + tabelaobiektow[3].stracone;
		//5 druzyna
		document.getElementById("dr-5").innerHTML=tabelaobiektow[4].nazwa;
		document.getElementById("pkt-5").innerHTML=tabelaobiektow[4].punkty;
		document.getElementById("z-5").innerHTML=tabelaobiektow[4].zwyciestwa;
		document.getElementById("r-5").innerHTML=tabelaobiektow[4].remisy;
		document.getElementById("p-5").innerHTML=tabelaobiektow[4].porazki;
		document.getElementById("b-5").innerHTML=tabelaobiektow[4].gole + ":" + tabelaobiektow[4].stracone;
		//6 druzyna
		document.getElementById("dr-6").innerHTML=tabelaobiektow[5].nazwa;
		document.getElementById("pkt-6").innerHTML=tabelaobiektow[5].punkty;
		document.getElementById("z-6").innerHTML=tabelaobiektow[5].zwyciestwa;
		document.getElementById("r-6").innerHTML=tabelaobiektow[5].remisy;
		document.getElementById("p-6").innerHTML=tabelaobiektow[5].porazki;
		document.getElementById("b-6").innerHTML=tabelaobiektow[5].gole + ":" + tabelaobiektow[5].stracone;
		//7 druzyna
		document.getElementById("dr-7").innerHTML=tabelaobiektow[6].nazwa;
		document.getElementById("pkt-7").innerHTML=tabelaobiektow[6].punkty;
		document.getElementById("z-7").innerHTML=tabelaobiektow[6].zwyciestwa;
		document.getElementById("r-7").innerHTML=tabelaobiektow[6].remisy;
		document.getElementById("p-7").innerHTML=tabelaobiektow[6].porazki;
		document.getElementById("b-7").innerHTML=tabelaobiektow[6].gole + ":" + tabelaobiektow[6].stracone;
		//8 druzyna
		document.getElementById("dr-8").innerHTML=tabelaobiektow[7].nazwa;
		document.getElementById("pkt-8").innerHTML=tabelaobiektow[7].punkty;
		document.getElementById("z-8").innerHTML=tabelaobiektow[7].zwyciestwa;
		document.getElementById("r-8").innerHTML=tabelaobiektow[7].remisy;
		document.getElementById("p-8").innerHTML=tabelaobiektow[7].porazki;
		document.getElementById("b-8").innerHTML=tabelaobiektow[7].gole + ":" + tabelaobiektow[7].stracone;
		//9 druzyna
		document.getElementById("dr-9").innerHTML=tabelaobiektow[8].nazwa;
		document.getElementById("pkt-9").innerHTML=tabelaobiektow[8].punkty;
		document.getElementById("z-9").innerHTML=tabelaobiektow[8].zwyciestwa;
		document.getElementById("r-9").innerHTML=tabelaobiektow[8].remisy;
		document.getElementById("p-9").innerHTML=tabelaobiektow[8].porazki;
		document.getElementById("b-9").innerHTML=tabelaobiektow[8].gole + ":" + tabelaobiektow[8].stracone;
		//10 druzyna
		document.getElementById("dr-10").innerHTML=tabelaobiektow[9].nazwa;
		document.getElementById("pkt-10").innerHTML=tabelaobiektow[9].punkty;
		document.getElementById("z-10").innerHTML=tabelaobiektow[9].zwyciestwa;
		document.getElementById("r-10").innerHTML=tabelaobiektow[9].remisy;
		document.getElementById("p-10").innerHTML=tabelaobiektow[9].porazki;
		document.getElementById("b-10").innerHTML=tabelaobiektow[9].gole + ":" + tabelaobiektow[9].stracone;
		//11 druzyna
		document.getElementById("dr-11").innerHTML=tabelaobiektow[10].nazwa;
		document.getElementById("pkt-11").innerHTML=tabelaobiektow[10].punkty;
		document.getElementById("z-11").innerHTML=tabelaobiektow[10].zwyciestwa;
		document.getElementById("r-11").innerHTML=tabelaobiektow[10].remisy;
		document.getElementById("p-11").innerHTML=tabelaobiektow[10].porazki;
		document.getElementById("b-11").innerHTML=tabelaobiektow[10].gole + ":" + tabelaobiektow[10].stracone;
		//12 druzyna
		document.getElementById("dr-12").innerHTML=tabelaobiektow[11].nazwa;
		document.getElementById("pkt-12").innerHTML=tabelaobiektow[11].punkty;
		document.getElementById("z-12").innerHTML=tabelaobiektow[11].zwyciestwa;
		document.getElementById("r-12").innerHTML=tabelaobiektow[11].remisy;
		document.getElementById("p-12").innerHTML=tabelaobiektow[11].porazki;
		document.getElementById("b-12").innerHTML=tabelaobiektow[11].gole + ":" + tabelaobiektow[11].stracone;
		//13 druzyna
		document.getElementById("dr-13").innerHTML=tabelaobiektow[12].nazwa;
		document.getElementById("pkt-13").innerHTML=tabelaobiektow[12].punkty;
		document.getElementById("z-13").innerHTML=tabelaobiektow[12].zwyciestwa;
		document.getElementById("r-13").innerHTML=tabelaobiektow[12].remisy;
		document.getElementById("p-13").innerHTML=tabelaobiektow[12].porazki;
		document.getElementById("b-13").innerHTML=tabelaobiektow[12].gole + ":" + tabelaobiektow[12].stracone;
		//14 druzyna
		document.getElementById("dr-14").innerHTML=tabelaobiektow[13].nazwa;
		document.getElementById("pkt-14").innerHTML=tabelaobiektow[13].punkty;
		document.getElementById("z-14").innerHTML=tabelaobiektow[13].zwyciestwa;
		document.getElementById("r-14").innerHTML=tabelaobiektow[13].remisy;
		document.getElementById("p-14").innerHTML=tabelaobiektow[13].porazki;
		document.getElementById("b-14").innerHTML=tabelaobiektow[13].gole + ":" + tabelaobiektow[13].stracone;
		//15 druzyna
		document.getElementById("dr-15").innerHTML=tabelaobiektow[14].nazwa;
		document.getElementById("pkt-15").innerHTML=tabelaobiektow[14].punkty;
		document.getElementById("z-15").innerHTML=tabelaobiektow[14].zwyciestwa;
		document.getElementById("r-15").innerHTML=tabelaobiektow[14].remisy;
		document.getElementById("p-15").innerHTML=tabelaobiektow[14].porazki;
		document.getElementById("b-15").innerHTML=tabelaobiektow[14].gole + ":" + tabelaobiektow[14].stracone;
		//16 druzyna
		document.getElementById("dr-16").innerHTML=tabelaobiektow[15].nazwa;
		document.getElementById("pkt-16").innerHTML=tabelaobiektow[15].punkty;
		document.getElementById("z-16").innerHTML=tabelaobiektow[15].zwyciestwa;
		document.getElementById("r-16").innerHTML=tabelaobiektow[15].remisy;
		document.getElementById("p-16").innerHTML=tabelaobiektow[15].porazki;
		document.getElementById("b-16").innerHTML=tabelaobiektow[15].gole + ":" + tabelaobiektow[15].stracone;
		//Mecze
		document.getElementById("m-1").innerHTML=1;
		document.getElementById("m-2").innerHTML=1;
		document.getElementById("m-3").innerHTML=1;
		document.getElementById("m-4").innerHTML=1;
		document.getElementById("m-5").innerHTML=1;
		document.getElementById("m-6").innerHTML=1;
		document.getElementById("m-7").innerHTML=1;
		document.getElementById("m-8").innerHTML=1;
		document.getElementById("m-9").innerHTML=1;
		document.getElementById("m-10").innerHTML=1;
		document.getElementById("m-11").innerHTML=1;
		document.getElementById("m-12").innerHTML=1;
		document.getElementById("m-13").innerHTML=1;
		document.getElementById("m-14").innerHTML=1;
		document.getElementById("m-15").innerHTML=1;
		document.getElementById("m-16").innerHTML=1;
	}
}