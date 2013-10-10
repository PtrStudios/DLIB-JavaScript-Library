function $() {
	this.create = function(t,p,o) {
		var i = document.createElement("INPUT");
		i.setAttribute("type",t.toString());
		i.setAttribute("placeholder",p.toString());
		i.setAttribute("onclick",o.toString());
		document.body.appendChild(i);
	}
}