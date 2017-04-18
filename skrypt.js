var tabelaobiektow = [];
var sort = [];
function zespoly() 
{
	var zespoly = ["Jagiellonia Białystok","Legia Warszawa","Lechia Gdańsk","Lech Poznań","Wisła Kraków","Korona Kielce","Wisła Płock",
				   "KGHM Zagłębie Lubin","Pogoń Szczecin","BRUK-BET Termalica Nieciecza","Śląsk Wrocław","Piast Gliwice","Arka Gdynia","Cracovia",
				   "Ruch Chorzów","Górnik Łęczna"];

	var podmiana;
	for(var i=0;i<=15;i++)
	{
		tabelaobiektow[i] = {nazwa:zespoly[i],punkty:0, zwyciestwa:0, remisy:0, porazki:0, gole:0, stracone:0};
	}
}

function sortowanie()
{
	for(var i=0;i<=15;i++)
	{
		sort[i] = tabelaobiektow[i];
	}
	
	for(var i=0;i<=15;i++)
	{
		for(var j=0;j<=14;j++)
		{
			if(sort[j+1].punkty>sort[j].punkty)
			{
			var c = sort[j];
			sort[j] = sort[j+1];
			sort[j+1] = c;
			}
		}
	}
	
	for(var i=0;i<=15;i++)
	{
		alert(sort[i].punkty);
	}
}