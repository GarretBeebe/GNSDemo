/* Flot plugin for computing bottoms for filled line and bar charts.

Copyright (c) 2007-2013 IOLA and Ole Laursen.
Licensed under the MIT license.

The case: you've got two series that you want to fill the area between. In Flot
terms, you need to use one as the fill bottom of the other. You can specify the
bottom of each data point as the third coordinate manually, or you can use this
plugin to compute it for you.

In order to name the other series, you need to give it an id, like this:

	var dataset = [
		{ data: [ ... ], id: "foo" } ,         // use default bottom
		{ data: [ ... ], fillBetween: "foo" }, // use first dataset as bottom
	];

	$.plot($("#placeholder"), dataset, { lines: { show: true, fill: true }});

As a convenience, if the id given is a number that doesn't appear as an id in
the series, it is interpreted as the index in the array instead (so fillBetween:
0 can also mean the first series).

Internally, the plugin modifies the datapoints in each series. For line series,
extra data points might be inserted through interpolation. Note that at points
where the bottom line is not defined (due to a null point or start/end of line),
the current line will show a gap too. The algorithm comes from the
jquery.flot.stack.js plugin, possibly some code could be shared.

*/
!function(e){function n(e){function n(e,n){var l;for(l=0;l<n.length;++l)if(n[l].id===e.fillBetween)return n[l];return"number"==typeof e.fillBetween?e.fillBetween<0||e.fillBetween>=n.length?null:n[e.fillBetween]:null}function l(e,l,i){if(null!=l.fillBetween){var t=n(l,e.getData());if(t){for(var s,f,o,u,p,r,h,a,g=i.pointsize,w=i.points,B=t.datapoints.pointsize,c=t.datapoints.points,v=[],d=l.lines.show,m=g>2&&i.format[2].y,y=d&&l.lines.steps,b=!0,z=0,D=0;!(z>=w.length);){if(h=v.length,null==w[z]){for(a=0;g>a;++a)v.push(w[z+a]);z+=g}else if(D>=c.length){if(!d)for(a=0;g>a;++a)v.push(w[z+a]);z+=g}else if(null==c[D]){for(a=0;g>a;++a)v.push(null);b=!0,D+=B}else{if(s=w[z],f=w[z+1],u=c[D],p=c[D+1],r=0,s===u){for(a=0;g>a;++a)v.push(w[z+a]);r=p,z+=g,D+=B}else if(s>u){if(d&&z>0&&null!=w[z-g]){for(o=f+(w[z-g+1]-f)*(u-s)/(w[z-g]-s),v.push(u),v.push(o),a=2;g>a;++a)v.push(w[z+a]);r=p}D+=B}else{if(b&&d){z+=g;continue}for(a=0;g>a;++a)v.push(w[z+a]);d&&D>0&&null!=c[D-B]&&(r=p+(c[D-B+1]-p)*(s-u)/(c[D-B]-u)),z+=g}b=!1,h!==v.length&&m&&(v[h+2]=r)}if(y&&h!==v.length&&h>0&&null!==v[h]&&v[h]!==v[h-g]&&v[h+1]!==v[h-g+1]){for(a=0;g>a;++a)v[h+g+a]=v[h+a];v[h+1]=v[h-g+1]}}i.points=v}}}e.hooks.processDatapoints.push(l)}var l={series:{fillBetween:null}};e.plot.plugins.push({init:n,options:l,name:"fillbetween",version:"1.0"})}(jQuery);