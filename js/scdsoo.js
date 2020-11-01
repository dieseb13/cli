

var info = document.getElementById("jsonObject");

var generador = document.getElementById("mybutton");
var bvipAddress = document.getElementById("vipAddress");
var baddYmas = document.getElementById("todoYmas");
var bperfilWeb = document.getElementById('perfilWeb');
var burlFilter = document.getElementById('urlFilter');


var inicio = document.getElementById("inicio");
var cli = document.getElementById("command_line");
var final = document.getElementById("final");

generador.onclick= (datos);
bvipAddress.onclick= (fVipAddress);
baddYmas.onclick= (addYmas);
bperfilWeb.onclick= (fWebFilfer);
burlFilter.onclick= (furlFilter);

function datos ()
{
	var datosJson =JSON.parse(info.textContent);
	inicio.innerHTML = "config user local"
	for (var dieseb of datosJson)
		{
		cli.innerHTML  = cli.innerHTML + "edit " + dieseb.user +"<br />"+" set type password" +"<br />"+" set passwd  " + dieseb.pass +"<br />" + "next "  +"<br />"
		}
final.innerHTML = "end"
}
//Generar VIP Address
function fVipAddress ()
{
	var datosJson =JSON.parse(info.textContent);
		inicio.innerHTML = "config firewall vip"
	for (var dieseb of datosJson)
		{
		cli.innerHTML = cli.innerHTML + "edit "+ dieseb.name +  "<br />" + "set extip " + dieseb.externalIp + "<br />" +   "set extintf any" +"<br />" + "set portforward enable" +"<br />" +"set mappedip  " + dieseb.internalIp + "<br />" +"set protocol "+ dieseb.tcpUdp +  "<br />" +  "set extport " + dieseb.portExt + "<br />" + "set mappedport " + dieseb.portIn + "<br />" + " next"+ "<br />"
		}
		final.innerHTML = "end"
}
//Todo lo demas
function addYmas ()
{
	var datosJson =JSON.parse(info.textContent);
		inicio.innerHTML = "config firewall address"
	for (var dieseb of datosJson)
	{
		cli.innerHTML = cli.innerHTML + dieseb.id1 +" "+ dieseb.id2 +"<br />"+ dieseb.id3 +"<br />"+ dieseb.id4 +" "+ dieseb.id5 +"<br />"+ dieseb.id6 +"<br />" //+ dieseb.id7 +"<br />" + dieseb.id8 +"<br />"+ dieseb.id9 +"<br />"+ dieseb.id10 +"<br />"
	}
	final.innerHTML = "end"
}
//Creacion de perfiles WEB
function fWebFilfer ()
{
	var datosJson =JSON.parse(info.textContent);
		inicio.innerHTML = "config webfilter profile"		+"<br /> "+		"edit CAMBIAR-POR-NOMBRE-DEL-FILTRO"		+"<br /> "+		"        set inspection-mode flow-based"		+"<br /> "+		"        config ftgd-wf"		+"<br /> "+		"      	unset options"		+"<br /> "+		"        config filters"		+"<br /> "+

		"<br /> "+ "delete 1"		+"<br /> "+ "delete 2"		+"<br /> "+ "delete 3"		+"<br /> "+ "delete 4"		+"<br /> "+ "delete 5"		+"<br /> "+ "delete 6"		+"<br /> "+ "delete 7"		+"<br /> "+ "delete 8"		+"<br /> "+ "delete 9"		+"<br /> "+ "delete 10"		+"<br /> "+ "delete 11"		+"<br /> "+ "delete 12"		+"<br /> "+ "delete 13"		+"<br /> "+ "delete 14"		+"<br /> "+ "delete 15"		+"<br /> "+ "delete 16"		+"<br /> "+ "delete 17"		+"<br /> "+ "delete 18"		+"<br /> "+ "delete 19"	+"<br /> "+ "delete 20"		+"<br /> "+ "delete 21"		+"<br /> "+ "delete 22"		+"<br /> "+ "delete 23"		+"<br /> "+ "delete 24"		+"<br /> "+ "delete 25"		+"<br /> "+ "delete 26"		+"<br /> "+ "delete 27"		+"<br /> "+ "delete 28"		+"<br /> "+ "delete 29"		+"<br /> "+ "delete 30"

	for (var dieseb of datosJson)
	{
		cli.innerHTML = cli.innerHTML + dieseb.id1 +"<br /> "+ dieseb.id2 +" "+ dieseb.id3 +"<br />"+ dieseb.id4 +" "+ dieseb.id5 +"<br />"+ dieseb.id6 +"<br />" //+ dieseb.id7 +"<br />" + dieseb.id8 +"<br />"+ dieseb.id9 +"<br />"+ dieseb.id10 +"<br />"
	}
	final.innerHTML = "end"
}

//furlFilter
function furlFilter ()
{
	var datosJson =JSON.parse(info.textContent);
		inicio.innerHTML =
		"config webfilter urlfilter"+"<br /> "+
		 "edit 0"+"<br /> "+
		 "set name ***Nombre-Del-Perfil***"+"<br /> "+
		 "config entries"



	for (var dieseb of datosJson)
	{
	cli.innerHTML  = cli.innerHTML + "edit 0" + "<br />"+" set url " + dieseb.name+"<br />"+" set type  " + dieseb.type +"<br />" + "set action " + dieseb.action +"<br />"+ "next"+"<br />"
	}
	final.innerHTML = "end" + "<br />"+"end"
}
