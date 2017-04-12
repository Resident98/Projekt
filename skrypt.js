var tabelaobiektow = [];
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

function kolejka()
{
 // mecze miedzy zespołami na sztywno bo szef mówi że nie mamy wiedzy
}