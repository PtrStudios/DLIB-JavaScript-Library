var $ = {
	create : function(t,p,o) {
		var i = document.createElement("INPUT");
		var ii = i.setAttribute("type",t);
		var iii = i.setAttribute("placeholder",p);
		document.body.appendChild(i);
	}
}