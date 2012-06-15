/*
	Copyright (c) 2004-2011, The Dojo Foundation All Rights Reserved.
	Available via Academic Free License >= 2.1 OR the modified BSD license.
	see: http://dojotoolkit.org/license for details
*/


dojo._hasResource["dojox.charting.Element"]||(dojo._hasResource["dojox.charting.Element"]=!0,dojo.provide("dojox.charting.Element"),dojo.require("dojox.gfx"),dojo.declare("dojox.charting.Element",null,{chart:null,group:null,htmlElements:null,dirty:!0,constructor:function(a){this.chart=a;this.group=null;this.htmlElements=[];this.dirty=!0;this.trailingSymbol="...";this._events=[]},createGroup:function(a){if(!a)a=this.chart.surface;if(!this.group)this.group=a.createGroup();return this},purgeGroup:function(){this.destroyHtmlElements();
if(this.group)this.group.clear(),this.group.removeShape(),this.group=null;this.dirty=!0;if(this._events.length)dojo.forEach(this._events,function(a){a.shape.disconnect(a.handle)}),this._events=[];return this},cleanGroup:function(a){this.destroyHtmlElements();if(!a)a=this.chart.surface;this.group?this.group.clear():this.group=a.createGroup();this.dirty=!0;return this},destroyHtmlElements:function(){if(this.htmlElements.length)dojo.forEach(this.htmlElements,dojo.destroy),this.htmlElements=[]},destroy:function(){this.purgeGroup()},
getTextWidth:function(a,d){return dojox.gfx._base._getTextBox(a,{font:d}).w||0},getTextWithLimitLength:function(a,d,b,c){if(!a||a.length<=0)return{text:"",truncated:c||!1};if(!b||b<=0)return{text:a,truncated:c||!1};var e=a.substring(0,1)+this.trailingSymbol,f=this.getTextWidth(e,d);if(b<=f)return{text:e,truncated:!0};if(this.getTextWidth(a,d)<=b)return{text:a,truncated:c||!1};else{c=0;for(e=a.length;c<e;){if(e-c<=2){for(;this.getTextWidth(a.substring(0,c)+this.trailingSymbol,d)>b;)c-=1;return{text:a.substring(0,
c)+this.trailingSymbol,truncated:!0}}f=c+Math.round((e-c)*0.618);this.getTextWidth(a.substring(0,f),d)<b?c=f:e=f}}},getTextWithLimitCharCount:function(a,d,b,c){return!a||a.length<=0?{text:"",truncated:c||!1}:!b||b<=0||a.length<=b?{text:a,truncated:c||!1}:{text:a.substring(0,b)+this.trailingSymbol,truncated:!0}},_plotFill:function(a,d,b){if(!a||!a.type||!a.space)return a;var c=a.space;switch(a.type){case "linear":if(c==="plot"||c==="shapeX"||c==="shapeY"){a=dojox.gfx.makeParameters(dojox.gfx.defaultLinearGradient,
a);a.space=c;if(c==="plot"||c==="shapeX"){var e=d.height-b.t-b.b;a.y1=b.t+e*a.y1/100;a.y2=b.t+e*a.y2/100}if(c==="plot"||c==="shapeY")e=d.width-b.l-b.r,a.x1=b.l+e*a.x1/100,a.x2=b.l+e*a.x2/100}break;case "radial":if(c==="plot")a=dojox.gfx.makeParameters(dojox.gfx.defaultRadialGradient,a),a.space=c,c=d.width-b.l-b.r,d=d.height-b.t-b.b,a.cx=b.l+c*a.cx/100,a.cy=b.t+d*a.cy/100,a.r=a.r*Math.sqrt(c*c+d*d)/200;break;case "pattern":if(c==="plot"||c==="shapeX"||c==="shapeY"){a=dojox.gfx.makeParameters(dojox.gfx.defaultPattern,
a);a.space=c;if(c==="plot"||c==="shapeX")e=d.height-b.t-b.b,a.y=b.t+e*a.y/100,a.height=e*a.height/100;if(c==="plot"||c==="shapeY")e=d.width-b.l-b.r,a.x=b.l+e*a.x/100,a.width=e*a.width/100}}return a},_shapeFill:function(a,d){if(!a||!a.space)return a;var b=a.space;switch(a.type){case "linear":if(b==="shape"||b==="shapeX"||b==="shapeY"){a=dojox.gfx.makeParameters(dojox.gfx.defaultLinearGradient,a);a.space=b;if(b==="shape"||b==="shapeX"){var c=d.width;a.x1=d.x+c*a.x1/100;a.x2=d.x+c*a.x2/100}if(b==="shape"||
b==="shapeY")c=d.height,a.y1=d.y+c*a.y1/100,a.y2=d.y+c*a.y2/100}break;case "radial":if(b==="shape")a=dojox.gfx.makeParameters(dojox.gfx.defaultRadialGradient,a),a.space=b,a.cx=d.x+d.width/2,a.cy=d.y+d.height/2,a.r=a.r*d.width/200;break;case "pattern":if(b==="shape"||b==="shapeX"||b==="shapeY"){a=dojox.gfx.makeParameters(dojox.gfx.defaultPattern,a);a.space=b;if(b==="shape"||b==="shapeX")c=d.width,a.x=d.x+c*a.x/100,a.width=c*a.width/100;if(b==="shape"||b==="shapeY")c=d.height,a.y=d.y+c*a.y/100,a.height=
c*a.height/100}}return a},_pseudoRadialFill:function(a,d,b,c,e){if(!a||a.type!=="radial"||a.space!=="shape")return a;var f=a.space,a=dojox.gfx.makeParameters(dojox.gfx.defaultRadialGradient,a);a.space=f;if(arguments.length<4)return a.cx=d.x,a.cy=d.y,a.r=a.r*b/100,a;f=arguments.length<5?c:(e+c)/2;return{type:"linear",x1:d.x,y1:d.y,x2:d.x+a.r*b*Math.cos(f)/100,y2:d.y+a.r*b*Math.sin(f)/100,colors:a.colors}}}));