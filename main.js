var $ = {
	create : function(t1,t2,p,v,h,c,o) {
		var i = document.createElement(t1);
		if (t2 !== undefined && t2 !== 0) {
			i.setAttribute("type",t2);
		}
		if (p !== undefined && p !== 0) {
			i.setAttribute("placeholder",p);
		}
		if (v !== undefined && v !== 0) {
			i.setAttribute("value",v);
		}
		if (h !== undefined && h !== 0) {
			i.innerHTML = h;
		}
		if (o !== undefined && o !== 0) {
			i.setAttribute("onclick",o);
		}
		if (c !== undefined && c !== 0) {
			i.setAttribute("class",c);
		}
		else {
			i.setAttribute("class","d-lib-light")
		}
		document.body.appendChild(i);
	}
}

$.create('p',undefined,undefined,undefined,"the","div");

