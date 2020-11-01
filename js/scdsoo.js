var info = document.getElementById("jsonObject");

var generador = document.getElementById("mybutton");
var bvipAddress = document.getElementById("vipAddress");
var baddYmas = document.getElementById("todoYmas");

var inicio = document.getElementById("inicio");
var cli = document.getElementById("command_line");
var final = document.getElementById("final");

generador.onclick= (datos);
bvipAddress.onclick= (fVipAddress);
baddYmas.onclick= (addYmas)

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
		cli.innerHTML = cli.innerHTML + "edit "+ dieseb.name +  "<br />" + "set extip " + dieseb.externalIp + "<br />" +   "set extintf any" +"<br />" + "set portforward enable" +"<br />" +"set mappedip  " + dieseb.internalIp + "<br />" + "set extport " + dieseb.portExt + "<br />" + "set mappedport " + dieseb.portIn + "<br />" + " next"+ "<br />"
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
