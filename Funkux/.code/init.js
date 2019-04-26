function generate() {
var spielfeld=document.getElementById('spielfeld');
i=0;
g=0;
while(i<12){
spielfeld.innerHTML+="<div name='zeile' style='position:absolute;width:50px;height:600px;top:0px;left:"+(i*50)+"px'></div>";
g=0;
while(g<12){
	document.getElementsByName('zeile')[i].innerHTML+="<div name='spalte"+i+"' style='position:absolute;width:50px;height:50px;left:0px;top:"+g*50+"px'></div>";
	g++;
	}
i++;
}
i=0;
g=0;
while(i<12){
g=0;
while(g<12){
	document.getElementsByName('spalte'+i)[g].style.borderStyle="solid";
	document.getElementsByName('spalte'+i)[g].innerHTML=i+"|"+g;
	g++;
	}
i++;
}
}
