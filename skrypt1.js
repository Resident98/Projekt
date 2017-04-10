<script>
	function rozpocznijSezon(){
	var zespoly=["Lech Poznań", "Legia Warszawa", "Wisła Kraków", "Górnik Zabrze", "Śląsk Wrocław", "GKS Katowice"];
	//1 kolejka
	zespoly.sort(function(a, b){return 0.5 - Math.random()});
	document.getElementById("1").innerHTML=zespoly[0];
	document.getElementById("2").innerHTML=zespoly[1];
	document.getElementById("3").innerHTML=zespoly[2];
	document.getElementById("4").innerHTML=zespoly[3];
	document.getElementById("5").innerHTML=zespoly[4];
	document.getElementById("6").innerHTML=zespoly[5];
	//2 kolejka
	zespoly.sort(function(a, b){return 0.5 - Math.random()});
	document.getElementById("7").innerHTML=zespoly[0];
	document.getElementById("8").innerHTML=zespoly[1];
	document.getElementById("9").innerHTML=zespoly[2];
	document.getElementById("10").innerHTML=zespoly[3];
	document.getElementById("11").innerHTML=zespoly[4];
	document.getElementById("12").innerHTML=zespoly[5];
	//3 kolejka
	zespoly.sort(function(a, b){return 0.5 - Math.random()});
	document.getElementById("13").innerHTML=zespoly[0];
	document.getElementById("14").innerHTML=zespoly[1];
	document.getElementById("15").innerHTML=zespoly[2];
	document.getElementById("16").innerHTML=zespoly[3];
	document.getElementById("17").innerHTML=zespoly[4];
	document.getElementById("18").innerHTML=zespoly[5];
	//4 kolejka
	zespoly.sort(function(a, b){return 0.5 - Math.random()});
	document.getElementById("19").innerHTML=zespoly[0];
	document.getElementById("20").innerHTML=zespoly[1];
	document.getElementById("21").innerHTML=zespoly[2];
	document.getElementById("22").innerHTML=zespoly[3];
	document.getElementById("23").innerHTML=zespoly[4];
	document.getElementById("24").innerHTML=zespoly[5];
	}
</script>
function pilka(){
	//Kolejne kolejki
	var klikniecia = document.getElementById("przycisk").value;
	document.getElementById("klik").innerHTML=klikniecia;
	var lech=0;
	var legia=0;
	var wroclaw=0;
	var zabrze=0;
	var wisla=0;
	var gks=0;
	//Losowanie liczb
	//1 kolejka
	if(klikniecia==1)
	{
		var a = Math.floor(Math.random()*6);
			document.getElementById('Lech1').innerHTML=a;
		var c = Math.floor(Math.random()*6);
			document.getElementById('Legia1').innerHTML=c;
		var e = Math.floor(Math.random()*6);
			document.getElementById('Wroclaw1').innerHTML=e;
		var g = Math.floor(Math.random()*6);
			document.getElementById('Zabrze1').innerHTML=g;
		var i = Math.floor(Math.random()*6);
			document.getElementById('Wisla1').innerHTML=i;
		var k = Math.floor(Math.random()*6);
			document.getElementById('GKS1').innerHTML=k;
	}
	//2 kolejka
	if(klikniecia==2)
	{
		var b = Math.floor(Math.random()*6);
			document.getElementById('Lech2').innerHTML=b;
		var d = Math.floor(Math.random()*6);
			document.getElementById('Legia2').innerHTML=d;
		var f = Math.floor(Math.random()*6);
			document.getElementById('Wroclaw2').innerHTML=f;
		var h = Math.floor(Math.random()*6);
			document.getElementById('Zabrze2').innerHTML=h;
		var j = Math.floor(Math.random()*6);
			document.getElementById('Wisla2').innerHTML=j;
		var l = Math.floor(Math.random()*6);
			document.getElementById('GKS2').innerHTML=l;
	}
	//3 kolejka
	if(klikniecia==3)
	{
		var a2 = Math.floor(Math.random()*6);
			document.getElementById('Lech3').innerHTML=a2;
		var b2 = Math.floor(Math.random()*6);
			document.getElementById('Legia3').innerHTML=b2;
		var c2 = Math.floor(Math.random()*6);
			document.getElementById('Wroclaw3').innerHTML=c2;
		var d2 = Math.floor(Math.random()*6);
			document.getElementById('Zabrze3').innerHTML=d2;
		var e2 = Math.floor(Math.random()*6);
			document.getElementById('Wisla3').innerHTML=e2;
		var f2 = Math.floor(Math.random()*6);
			document.getElementById('GKS3').innerHTML=f2;
	}
	//Punktacja
	//1 kolejka
		if(a>c)
		{
			var lech1=3;
			var legia1=0;
		}else if(a<c)
		{
			var lech1=0;
			var legia1=3;
		}else if(a==c)
		{
			var lech1=1;
			var legia1=1;
		}
		if(k>g)
		{
			var gks1=3;
			var zabrze1=0;
		}else if(k<g)
		{
			var gks1=0;
			var zabrze1=3;
		}else if(k==g)
		{
			var gks1=1;
			var zabrze1=1;
		}
		if(e>i)
		{
			var wroclaw1=3;
			var wisla1=0;
		}else if(e<i)
		{
			var wroclaw1=0;
			var wisla1=3;
		}else if(e==i)
		{
			var wroclaw1=1;
			var wisla1=1;
		}
	//2 kolejka
		if(j>d)
		{
			var wisla2=3;
			var legia2=0;
		}else if(j<d)
		{
			var wisla2=0;
			var legia2=3;
		}else if(j==d)
		{
			var wisla2=1;
			var legia2=1;
		}
		if(h>f)
		{
			var zabrze2=3;
			var wroclaw2=0;
		}else if(h<f)
		{
			var zabrze2=0;
			var wroclaw2=3;
		}else if(h==f)
		{
			var zabrze2=1;
			var wroclaw2=1;
		}
		if(b>l)
		{
			var lech2=3;
			var gks2=0;
		}else if(b<l)
		{
			var lech2=0;
			var gks2=3;
		}else if(b==l)
		{
			var lech2=1;
			var gks2=1;
		}
	//3 kolejka
		if(d2>a2)
		{
			var zabrze3=3;
			var lech3=0;
		}else if(d2<a2)
		{
			var zabrze3=0;
			var lech3=3;
		}else if(d2==a2)
		{
			var zabrze3=1;
			var lech3=1;
		}
		if(f2>e2)
		{
			var gks3=3;
			var wisla3=0;
		}else if(f2<e2)
		{
			var gks3=0;
			var wisla3=3;
		}else if(f2==e2)
		{
			var gks3=1;
			var wisla3=1;
		}
		if(c2>b2)
		{
			var wroclaw3=3;
			var legia3=0;
		}else if(c2<b2)
		{
			var wroclaw3=0;
			var legia3=3;
		}else if(c2==b2)
		{
			var wroclaw3=1;
			var legia3=1;
		}
	//Dodawanie wyników + sortowanie i wyświetlanie
	//1 kolejka
		if(klikniecia==1)
		{
			lech=lech1;
			legia=legia1;
			wroclaw=wroclaw1;
			zabrze=zabrze1;
			wisla=wisla1;
			gks=gks1;
			var points = [lech + "pkt Lech Poznań", legia + "pkt Legia Warszawa", wroclaw + "pkt Śląsk Wrocław", zabrze + "pkt Górnik Zabrze", wisla + "pkt Wisła Kraków", gks + "pkt GKS Katowice"];
			points.sort();
			points.reverse();
			document.getElementById("demo1").innerHTML = points[0];
			document.getElementById("demo2").innerHTML = points[1];
			document.getElementById("demo3").innerHTML = points[2];
			document.getElementById("demo4").innerHTML = points[3];
			document.getElementById("demo5").innerHTML = points[4];
			document.getElementById("demo6").innerHTML = points[5];
		//2 kolejka
		}else if(klikniecia==2) 
		{
			lech=lech1+lech2;
			legia=legia1+legia2;
			wroclaw=wroclaw1+wroclaw2;
			zabrze=zabrze1+zabrze2;
			wisla=wisla1+wisla2;
			gks=gks1+gks2;
			var points = [lech + "pkt Lech Poznań", legia + "pkt Legia Warszawa", wroclaw + "pkt Śląsk Wrocław", zabrze + "pkt Górnik Zabrze", wisla + "pkt Wisła Kraków", gks + "pkt GKS Katowice"];
			points.sort();
			points.reverse();
			document.getElementById("demo1").innerHTML = points[0];
			document.getElementById("demo2").innerHTML = points[1];
			document.getElementById("demo3").innerHTML = points[2];
			document.getElementById("demo4").innerHTML = points[3];
			document.getElementById("demo5").innerHTML = points[4];
			document.getElementById("demo6").innerHTML = points[5];
		//3 kolejka
		}else if(klikniecia==3)
		{
			document.getElementById("wynik").innerHTML="Punktacja GKS: "+ "1. kolejka:"+gks1+" "+"2.kolejka:" +gks2+" "+"3. kolejka:" + gks3;
			lech=lech1+lech2+lech3;
			legia=legia1+legia2+legia3;
			wroclaw=wroclaw1+wroclaw2+wroclaw3;
			zabrze=zabrze1+zabrze2+zabrze3;
			wisla=wisla1+wisla2+wisla3;
			gks=gks1+gks2+gks3;
			var points = [lech + "pkt Lech Poznań", legia + "pkt Legia Warszawa", wroclaw + "pkt Śląsk Wrocław", zabrze + "pkt Górnik Zabrze", wisla + "pkt Wisła Kraków", gks + "pkt GKS Katowice"];
			points.sort();
			points.reverse();
			document.getElementById("demo1").innerHTML = points[0];
			document.getElementById("demo2").innerHTML = points[1];
			document.getElementById("demo3").innerHTML = points[2];
			document.getElementById("demo4").innerHTML = points[3];
			document.getElementById("demo5").innerHTML = points[4];
			document.getElementById("demo6").innerHTML = points[5];
		}
	//Kolejne kroki
		if(klikniecia==1)
		{
		przycisk.value = 2;
		}else if(klikniecia==2)
		{
		przycisk.value = 3;
		}
	}
</script>