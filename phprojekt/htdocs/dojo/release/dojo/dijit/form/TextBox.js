/*
	Copyright (c) 2004-2011, The Dojo Foundation All Rights Reserved.
	Available via Academic Free License >= 2.1 OR the modified BSD license.
	see: http://dojotoolkit.org/license for details
*/


if(!dojo._hasResource["dijit.form.TextBox"])dojo._hasResource["dijit.form.TextBox"]=!0,dojo.provide("dijit.form.TextBox"),dojo.require("dijit.form._FormWidget"),dojo.declare("dijit.form.TextBox",dijit.form._FormValueWidget,{trim:!1,uppercase:!1,lowercase:!1,propercase:!1,maxLength:"",selectOnClick:!1,placeHolder:"",templateString:dojo.cache("dijit.form","templates/TextBox.html",'<div class="dijit dijitReset dijitInline dijitLeft" id="widget_${id}" role="presentation"\n\t><div class="dijitReset dijitInputField dijitInputContainer"\n\t\t><input class="dijitReset dijitInputInner" dojoAttachPoint=\'textbox,focusNode\' autocomplete="off"\n\t\t\t${!nameAttrSetting} type=\'${type}\'\n\t/></div\n></div>\n'),
_singleNodeTemplate:'<input class="dijit dijitReset dijitLeft dijitInputField" dojoAttachPoint="textbox,focusNode" autocomplete="off" type="${type}" ${!nameAttrSetting} />',_buttonInputDisabled:dojo.isIE?"disabled":"",baseClass:"dijitTextBox",attributeMap:dojo.delegate(dijit.form._FormValueWidget.prototype.attributeMap,{maxLength:"focusNode"}),postMixInProperties:function(){var a=this.type.toLowerCase();if(this.templateString&&this.templateString.toLowerCase()=="input"||(a=="hidden"||a=="file")&&
this.templateString==dijit.form.TextBox.prototype.templateString)this.templateString=this._singleNodeTemplate;this.inherited(arguments)},_setPlaceHolderAttr:function(a){this._set("placeHolder",a);if(!this._phspan)this._attachPoints.push("_phspan"),this._phspan=dojo.create("span",{className:"dijitPlaceHolder dijitInputField"},this.textbox,"after");this._phspan.innerHTML="";this._phspan.appendChild(document.createTextNode(a));this._updatePlaceHolder()},_updatePlaceHolder:function(){if(this._phspan)this._phspan.style.display=
this.placeHolder&&!this._focused&&!this.textbox.value?"":"none"},_getValueAttr:function(){return this.parse(this.get("displayedValue"),this.constraints)},_setValueAttr:function(a,c,b){var d;a!==void 0&&(d=this.filter(a),typeof b!="string"&&(b=d!==null&&(typeof d!="number"||!isNaN(d))?this.filter(this.format(d,this.constraints)):""));if(b!=null&&b!=void 0&&(typeof b!="number"||!isNaN(b))&&this.textbox.value!=b)this.textbox.value=b,this._set("displayedValue",this.get("displayedValue"));this._updatePlaceHolder();
this.inherited(arguments,[d,c])},displayedValue:"",getDisplayedValue:function(){dojo.deprecated(this.declaredClass+"::getDisplayedValue() is deprecated. Use set('displayedValue') instead.","","2.0");return this.get("displayedValue")},_getDisplayedValueAttr:function(){return this.filter(this.textbox.value)},setDisplayedValue:function(a){dojo.deprecated(this.declaredClass+"::setDisplayedValue() is deprecated. Use set('displayedValue', ...) instead.","","2.0");this.set("displayedValue",a)},_setDisplayedValueAttr:function(a){a===
null||a===void 0?a="":typeof a!="string"&&(a=String(a));this.textbox.value=a;this._setValueAttr(this.get("value"),void 0);this._set("displayedValue",this.get("displayedValue"))},format:function(a){return a==null||a==void 0?"":a.toString?a.toString():a},parse:function(a){return a},_refreshState:function(){},_onInput:function(a){if(a&&a.type&&/key/i.test(a.type)&&a.keyCode)switch(a.keyCode){case dojo.keys.SHIFT:case dojo.keys.ALT:case dojo.keys.CTRL:case dojo.keys.TAB:return}if(this.intermediateChanges){var c=
this;setTimeout(function(){c._handleOnChange(c.get("value"),!1)},0)}this._refreshState();this._set("displayedValue",this.get("displayedValue"))},postCreate:function(){dojo.isIE&&setTimeout(dojo.hitch(this,function(){var a=dojo.getComputedStyle(this.domNode);if(a&&(a=a.fontFamily)){var c=this.domNode.getElementsByTagName("INPUT");if(c)for(var b=0;b<c.length;b++)c[b].style.fontFamily=a}}),0);this.textbox.setAttribute("value",this.textbox.value);this.inherited(arguments);dojo.isMoz||dojo.isOpera?this.connect(this.textbox,
"oninput","_onInput"):(this.connect(this.textbox,"onkeydown","_onInput"),this.connect(this.textbox,"onkeyup","_onInput"),this.connect(this.textbox,"onpaste","_onInput"),this.connect(this.textbox,"oncut","_onInput"))},_blankValue:"",filter:function(a){if(a===null)return this._blankValue;if(typeof a!="string")return a;this.trim&&(a=dojo.trim(a));this.uppercase&&(a=a.toUpperCase());this.lowercase&&(a=a.toLowerCase());this.propercase&&(a=a.replace(/[^\s]+/g,function(a){return a.substring(0,1).toUpperCase()+
a.substring(1)}));return a},_setBlurValue:function(){this._setValueAttr(this.get("value"),!0)},_onBlur:function(a){if(!this.disabled){this._setBlurValue();this.inherited(arguments);this._selectOnClickHandle&&this.disconnect(this._selectOnClickHandle);if(this.selectOnClick&&dojo.isMoz)this.textbox.selectionStart=this.textbox.selectionEnd=void 0;this._updatePlaceHolder()}},_onFocus:function(a){if(!this.disabled&&!this.readOnly){if(this.selectOnClick&&a=="mouse")this._selectOnClickHandle=this.connect(this.domNode,
"onmouseup",function(){this.disconnect(this._selectOnClickHandle);var a;dojo.isIE?(a=dojo.doc.selection.createRange(),a=a.parentElement()==this.textbox&&a.text.length==0):a=this.textbox.selectionStart==this.textbox.selectionEnd;a&&dijit.selectInputText(this.textbox)});this._updatePlaceHolder();this.inherited(arguments);this._refreshState()}},reset:function(){this.textbox.value="";this.inherited(arguments)}}),dijit.selectInputText=function(a,c,b){var d=dojo.global,e=dojo.doc,a=dojo.byId(a);isNaN(c)&&
(c=0);isNaN(b)&&(b=a.value?a.value.length:0);dijit.focus(a);e.selection&&dojo.body().createTextRange?a.createTextRange&&(a=a.createTextRange(),a.collapse(!0),a.moveStart("character",-99999),a.moveStart("character",c),a.moveEnd("character",b-c),a.select()):d.getSelection&&a.setSelectionRange&&a.setSelectionRange(c,b)};