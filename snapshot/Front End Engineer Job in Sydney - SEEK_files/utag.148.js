//tealium universal tag - utag.148 ut4.0.202204040136, Copyright 2022 Tealium.com Inc. All Rights Reserved.
var _tfa=_tfa||[];try{(function(id,loader){var u={"id":id};utag.o[loader].sender[id]=u;if(utag.ut===undefined){utag.ut={};}
var match=/ut\d\.(\d*)\..*/.exec(utag.cfg.v);if(utag.ut.loader===undefined||!match||parseInt(match[1])<41){u.loader=function(o,a,b,c,l,m){utag.DB(o);a=document;if(o.type=="iframe"){m=a.getElementById(o.id);if(m&&m.tagName=="IFRAME"){b=m;}else{b=a.createElement("iframe");}o.attrs=o.attrs||{};utag.ut.merge(o.attrs,{"height":"1","width":"1","style":"display:none"},0);}else if(o.type=="img"){utag.DB("Attach img: "+o.src);b=new Image();}else{b=a.createElement("script");b.language="javascript";b.type="text/javascript";b.async=1;b.charset="utf-8";}if(o.id){b.id=o.id;}for(l in utag.loader.GV(o.attrs)){b.setAttribute(l,o.attrs[l]);}b.setAttribute("src",o.src);if(typeof o.cb=="function"){if(b.addEventListener){b.addEventListener("load",function(){o.cb();},false);}else{b.onreadystatechange=function(){if(this.readyState=="complete"||this.readyState=="loaded"){this.onreadystatechange=null;o.cb();}};}}if(o.type!="img"&&!m){l=o.loc||"head";c=a.getElementsByTagName(l)[0];if(c){utag.DB("Attach to "+l+": "+o.src);if(l=="script"){c.parentNode.insertBefore(b,c);}else{c.appendChild(b);}}}};}else{u.loader=utag.ut.loader;}
if(utag.ut.typeOf===undefined){u.typeOf=function(e){return({}).toString.call(e).match(/\s([a-zA-Z]+)/)[1].toLowerCase();};}else{u.typeOf=utag.ut.typeOf;}
u.ev={"view":1,"link":1};u.hastaboola=function(){if(utag.ut.taboolaScriptRequested){return true;}
var i,s=document.getElementsByTagName("script");for(i=0;i<s.length;i++){if(s[i].src&&s[i].src.indexOf("cdn.taboola.com/libtrc/unip")>=0){return true;}}
return false;};u.scriptrequested=u.hastaboola();u.map_func=function(arr,obj,item){var i=arr.shift();obj[i]=obj[i]||{};if(arr.length>0){u.map_func(arr,obj[i],item);}else{obj[i]=item;}};u.clearEmptyKeys=function(object){for(var key in object){if(object[key]===""||object[key]===undefined){delete object[key];}}
return object;};u.event_map={"page_view":[],"view_content":[],"lead":[],"complete_registration":[],"make_purchase":[{"name":"orderid"},{"name":"revenue"},{"name":"currency"},{"name":"quantity"}],"search":[],"add_to_cart":[],"add_to_wishlist":[],"start_checkout":[],"add_payment_info":[],"app_install":[]};u.std_params={"orderid":function(){return u.data.orderid;},"revenue":function(){return u.data.revenue;},"currency":function(){return u.data.currency;},"quantity":function(){return u.data.quantity;}};u.map={"taboolaNotify":"notify","taboolaName":"name"};u.extend=[function(a,b){try{if(1){b['taboolaNotify']='action';b['taboolaName']='page_view_seekcomau'}}catch(e){utag.DB(e);}}];u.send=function(a,b){if(u.ev[a]||u.ev.all!==undefined){utag.DB("send:148");utag.DB(b);var c,d,e,f,h,i,j,_event,pv,evt,dataName,event_param;u.data={"qsp_delim":"&","kvp_delim":"=","base_url":"//cdn.taboola.com/libtrc/unip/##utag_client_name##/tfa.js","client_name":"seekcomau-au-sc","event_name":"","notify":"event","item-url":document.location.href,"eventData":{},"event":[]};for(c=0;c<u.extend.length;c++){try{d=u.extend[c](a,b);if(d==false)return}catch(e){}};utag.DB("send:148:EXTENSIONS");utag.DB(b);for(d in utag.loader.GV(u.map)){if(b[d]!==undefined&&b[d]!==""){e=u.map[d].split(",");for(f=0;f<e.length;f++){u.map_func(e[f].split("."),u.data,b[d]);}}else{h=d.split(":");if(h.length===2&&b[h[0]]===h[1]){if(u.map[d]){u.data.event=u.data.event.concat(u.map[d].split(","));}}}}
utag.DB("send:148:MAPPINGS");utag.DB(u.data);u.data.orderid=u.data.orderid||b._corder||"";u.data.revenue=u.data.revenue||b._ctotal||"";u.data.currency=u.data.currency||b._ccurrency||"";if(!u.data.client_name){utag.DB(u.id+": Tag not fired: Required attribute not populated");return;}
if(u.typeOf(u.data.client_name)==="string"){u.data.client_name=u.data.client_name.split(",");}
for(i=0;i<u.data.event.length;i++){if(u.data.event[i]===u.data.event_name){evt=true;}}
if(!evt&&u.data.event_name){u.data.event.push(u.data.event_name);}
if(a==="view"){for(i=0;i<u.data.event.length;i++){if(u.data.event[i]==="page_view"){pv=true;}}
if(!pv){u.data.event.push("page_view");}}
for(i=0;i<u.data.event.length;i++){_event=u.data.event[i];var tfaObject={};if(u.event_map[_event]){for(j=0;j<u.event_map[_event].length;j++){event_param=u.event_map[_event][j];tfaObject[event_param.name]=u.std_params[event_param.name](_event);if(tfaObject[event_param.name]===undefined&&event_param.required){utag.DB(u.id+": Event: "+_event+": Required attribute not populated");}}}
for(dataName in u.data[_event]){tfaObject[dataName]=u.data[_event][dataName];}
tfaObject.name=tfaObject.name||_event;tfaObject.notify=tfaObject.notify||u.data.notify;tfaObject["item-url"]=u.data["item-url"];u.clearEmptyKeys(tfaObject);for(j=0;j<u.data.client_name.length;j++){var tfaObject2={};for(dataName in tfaObject){tfaObject2[dataName]=tfaObject[dataName];}
tfaObject2.id=u.data.client_name[j];_tfa.push(tfaObject2);}}
u.data.base_url=u.data.base_url.replace("##utag_client_name##",u.data.client_name[0]);if(!u.hastaboola()){u.scriptrequested=true;utag.ut.taboolaScriptRequested=true;u.loader({"type":"script","src":u.data.base_url,"cb":null,"loc":"script","id":"utag_148","attrs":{}});}
utag.DB("send:148:COMPLETE");}};utag.o[loader].loader.LOAD(id);}("148","seek.houston"));}catch(error){utag.DB(error);}
