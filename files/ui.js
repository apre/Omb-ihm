function rcube_mail_ui(){function f(a){p||(p=rcmail.local_storage_get_item("prefs.larry",{}));if(null==p[a]){var c=rcmail.get_cookie(a);null!=c&&(p[a]=c,rcmail.local_storage_set_item("prefs.larry",p)&&rcmail.set_cookie(a,c,new Date))}return p[a]}function q(a,c){p[a]=c;if(!rcmail.local_storage_set_item("prefs.larry",p)){var d=new Date;d.setYear(d.getFullYear()+1);rcmail.set_cookie(a,c,d)}}function r(a){var c,d,b=a.target;"inner"==b.className&&(b=a.target.parentNode);for(var g in k)if(d=k[g],c=s[g],
d.is(":visible")&&b.id!=g+"link"&&b!=d.get(0)&&!(c.toggle||c.editable&&L(b,d.get(0))||c.sticky&&rcube_mouse_is_over(a,d.get(0))||$(b).is(".folder-selector-link"))){var e=g+"";window.setTimeout(function(){x(e,!1)},10)}}function h(a){a=a?10:0;rcmail.resize_timeout&&window.clearTimeout(rcmail.resize_timeout);rcmail.resize_timeout=window.setTimeout(function(){"mail"==rcmail.env.task&&("show"==rcmail.env.action||"preview"==rcmail.env.action?b():"compose"==rcmail.env.action&&t());$("body.iframe .footerleft").each(function(){var a=
$(this),d=$(document.body),b=a.hasClass("floating"),g=d.outerHeight(!0)>$(window).height();g!=b&&(b=g?"addClass":"removeClass",a[b]("floating"),d[b]("floatingbuttons"))})},a)}function y(a){var c=$(a.object).siblings("div");c.length&&$(a.object).insertBefore(c.first());if("error"==a.type&&"login"!=rcmail.env.task){rcmail.hide_message(a.object);l.message_timer&&window.clearTimeout(l.message_timer);l.messagedialog||(l.messagedialog=$("<div>").addClass("popupdialog").hide());var c=a.message,d=function(){l.messagedialog.is(":visible")&&
l.messagedialog.dialog("destroy").hide()};l.messagedialog.is(":visible")&&(c=l.messagedialog.html()+"<p>"+a.message+"</p>");l.messagedialog.html(c).dialog({resizable:!1,closeOnEscape:!0,dialogClass:"popupmessage "+a.type,title:u.errortitle,close:d,position:["center","center"],hide:{effect:"fadeOut"},width:420,minHeight:90}).show();0<a.timeout&&(l.message_timer=window.setTimeout(d,a.timeout))}}function b(){$("#messagecontent").css("top",$("#messageheader").outerHeight()+1+"px");$("#message-objects div a").addClass("button");
$("#attachment-list li").length||($("div.rightcol").hide(),$("div.leftcol").css("margin-right","0"))}function e(a){}function m(a){}function D(a){if("TEXTAREA"==a.nodeName){var c=$(a),d=a.scrollHeight;c.css("height",14*(80<a.value.length&&21<d?2:1)+"px");t()}}function t(){var a=$("#composebody"),c=$("#compose-content"),d=$("#composeview-bottom"),b,g;b=c.height()-d.position().top;g=300-b;d.css("height",Math.max(300,b)+"px");c.css("overflow",0<g?"auto":"hidden");c=a.parent().width()-5;d=a.parent().height()-
16;a.width(c).height(d);$("#composebody_tbl").width(c+8+"px").height("").css("margin-top","1px");$("#composebody_ifr").width(c+8+"px").height(d-40+"px");$("#googie_edit_layer").height(d+"px");a=$("#directorylist");a.length&&$("#compose-contacts .scroller").css("top",a.position().top+a.outerHeight())}function z(a){var c=a.total?24*Math.ceil(a.percent/100*20):0;a.total&&480==c&&100>a.percent&&(c-=24);$("#quotadisplay").css("background-position","0 -"+c+"px")}function E(a){"reply-list"==a.command&&1==
rcmail.env.reply_all_mode&&(a=rcmail.gettext(a.status?"replylist":"replyall"),"preview"==rcmail.env.action?$("a.button.replyall").attr("title",a):$("a.button.reply-all").text(a).attr("title",a))}function F(a,c){var d=k[a]=$("#"+a);d.appendTo(document.body);d.length&&(s[a]=$.extend(s[a]||{},c||{}))}function G(a,c,d){!d&&s[a]||F(a,d);c=x(a,c);d=s[a];"function"==typeof d.callback&&d.callback(c)}function x(a,c){var d=k[a],b=s[a],g=$(b.link?b.link:"#"+a+"link"),e=b.above;d||(d=k[a]=$("#"+a),d.appendTo(document.body));
if(!d||!d.length)return!1;"undefined"==typeof c?c=d.is(":visible")?!1:!0:b.toggle&&c&&d.is(":visible")&&(c=!1);if(c&&g.length){var f=g.parent(),m=$(window);f.hasClass("dropbutton")&&(g=f);f=g.offset();g.offsetHeight=g.outerHeight();!e&&f.top+g.offsetHeight+d.height()>m.height()&&(e=!0);f.left+d.width()>m.width()&&(f.left=m.width()-d.width()-12);d.css({left:f.left,top:f.top+(e?-d.height():g.offsetHeight)})}d[c?"show":"hide"]();bw.ie6&&b.overlap&&($("select").css("visibility",c?"hidden":"inherit"),
$("select",d).css("visibility","inherit"));return c}function L(a,c){for(;a.parentNode;){if(a.parentNode==c)return!0;a=a.parentNode}return!1}function H(){$("#preview-shortheaders").toggle();var a=$("#preview-allheaders").toggle(),c=$("a#previewheaderstoggle");a.is(":visible")?c.attr("href","#hide").removeClass("add").addClass("remove"):c.attr("href","#details").removeClass("remove").addClass("add");q("previewheaders",a.is(":visible")?"1":"0")}function A(a){rcmail.env.threading!=("thread"==a)&&rcmail.set_list_options(null,
void 0,void 0,"thread"==a?1:0);$("#maillistmode, #mailthreadmode").removeClass("selected");$("#mail"+a+"mode").addClass("selected")}function M(a){a&&a.props&&"attachmentmenu"==a.props.menu?x("attachmentmenu"):N()}function O(a){P()}function Q(a){var c=a.parentNode.id.replace(/^attach/,"");$("#attachmenuopen").unbind("click").attr("onclick","").click(function(a){return rcmail.command("open-attachment",c,this)});$("#attachmenudownload").unbind("click").attr("onclick","").click(function(){rcmail.command("download-attachment",
c,this)});s.attachmentmenu.link=a;rcmail.command("menu-open",{menu:"attachmentmenu",id:c})}function N(){var a=$("#listoptions");a.is(":visible")?a.dialog("close"):($('input[name="sort_col"][value="'+rcmail.env.sort_col+'"]').prop("checked",!0),$('input[name="sort_ord"][value="DESC"]').prop("checked","DESC"==rcmail.env.sort_order),$('input[name="sort_ord"][value="ASC"]').prop("checked","DESC"!=rcmail.env.sort_order),$('input[name="list_col[]"]').each(function(){$(this).prop("checked",-1!=$.inArray(this.value,
rcmail.env.coltypes))}),a.dialog({modal:!0,resizable:!1,closeOnEscape:!0,title:null,close:function(){a.dialog("destroy").hide()},minWidth:500,width:a.width()+25}).show())}function P(){$("#listoptions").dialog("close");var a=$('input[name="sort_col"]:checked').val(),c=$('input[name="sort_ord"]:checked').val(),d=$('input[name="list_col[]"]:checked').map(function(){return this.value}).get();rcmail.set_list_options(d,a,c,rcmail.env.threading)}function R(a){a=$("#contacts-table");var c=a.parent().css("overflow",
"hidden");a.clone().css({position:"absolute",top:"0",left:"0",width:a.width()+"px","z-index":10}).appendTo(c).animate({left:-(a.width()+5)+"px"},300,"swing",function(){$(this).remove();c.css("overflow","auto")})}function S(a){a=$("#contacts-table");var c=a.parent().css("overflow","hidden"),d=a.clone().appendTo(c);a.css({position:"absolute",top:"0",left:-(a.width()+5)+"px",width:a.width()+"px",height:a.height()+"px","z-index":10}).animate({left:"0"},300,"linear",function(){d.remove();$(this).css({position:"relative",
left:"0",width:"100%",height:"auto","z-index":1});c.css("overflow","auto")})}function v(){var a=$("#upload-dialog");a.is(":visible")?a.dialog("close"):("compose"!=rcmail.env.action||a.data("extended")||($("<a>").addClass("iconlink add").attr("href","#add").html("Add").appendTo($('input[type="file"]',a).parent()).click(I),a.data("extended",!0)),a.dialog({modal:!0,resizable:!1,closeOnEscape:!0,title:a.attr("title"),close:function(){try{$("#upload-dialog form").get(0).reset()}catch(c){}a.dialog("destroy").hide();
$("div.addline",a).remove()},width:480}).show(),document.all||$("input[type=file]",a).first().click())}function I(a){a=$(this).parent();a=a.clone().addClass("addline").insertAfter(a);a.children(".iconlink").click(I);a.children("input").val("");document.all||$("input[type=file]",a).click()}function w(a,c){var d=$("#compose-"+a);if(!d.is(":visible"))return B[a]&&!c&&$("#_"+a).val(B[a]),d.show(),$("#"+a+"-link").hide(),t(),!1}function J(a,c){var d=$(a),b=d.get(0).id,g=d.children("fieldset");if(g.length){b||
(b="rcmtabcontainer",d.attr("id",b));c=c||0;g.each(function(a){a!=c&&$(this).hide()});var e=$("<div>").addClass("tabsbar").prependTo(d);g.each(function(a){var d,g,f=$(this),m=f.children("legend");g=$("<a>").text(m.text()).attr("href","#");d=$("<span>").attr({id:"tab"+a,"class":"tablink"}).click(function(){T(b,a);return!1});m.remove();f.addClass("tab");a==c&&d.addClass("selected");d.append(g).appendTo(e)})}}function T(a,c){$("#"+a).children("fieldset").each(function(a){$(this)[c==a?"show":"hide"]();
$("#tab"+a).toggleClass("selected",a==c)});h()}var u={},k={},s={forwardmenu:{editable:1},searchmenu:{editable:1,callback:function(a){if(a&&rcmail.env.search_mods){var c,b;a=$('input:checkbox[name="s_mods[]"]',k.searchmenu);var e=rcmail.env.mailbox,g=rcmail.env.search_mods;"mail"==rcmail.env.task?(g=g[e]?g[e]:g["*"],b="text"):b="*";if(g[b])a.map(function(){this.checked=!0;this.disabled=this.value!=b});else for(c in a.prop("disabled",!1).prop("checked",!1),g)$("#s_mod_"+c).prop("checked",!0)}}},attachmentmenu:{},
listoptions:{editable:1},dragmenu:{sticky:1},groupmenu:{above:1},mailboxmenu:{above:1},spellmenu:{callback:function(a){var c,b=rcmail.spellcheck_lang(),e=k.spellmenu,g=$("ul",e);if(!g.length){g=$('<ul class="toolbarmenu selectable">');for(i in rcmail.env.spell_langs)c=$("<li>"),a=$('<a href="#"></a>').text(rcmail.env.spell_langs[i]).addClass("active").data("lang",i).click(function(){rcmail.spellcheck_lang_set($(this).data("lang"))}),a.appendTo(c),c.appendTo(g);g.appendTo(e)}$("li",g).each(function(){var a=
$("a",this);a.data("lang")==b?a.addClass("selected"):a.hasClass("selected")&&a.removeClass("selected")})}},"attachment-form":{editable:1,above:1,toggle:!bw.ie&&!bw.linux},"upload-form":{editable:1,toggle:!bw.ie&&!bw.linux}},l=this,n,B={},p;this.set=function(a,c){u[a]=c};this.init=function(){rcmail.addEventListener("message",y);$("#taskbar a").each(function(a,c){$(c).append('<span class="tooltip">'+$(".button-inner",this).html()+"</span>")});$("#taskbar .minmodetoggle").click(function(a){a=$(document.body).toggleClass("minimal").hasClass("minimal");
q("minimalmode",a?1:0);$(window).resize()});if("mail"==rcmail.env.task){rcmail.addEventListener("menu-open",M).addEventListener("menu-save",O).addEventListener("responseafterlist",function(a){A(rcmail.env.threading?"thread":"list")});var a=$("#dragmessagemenu");a.length&&(rcmail.gui_object("dragmenu","dragmessagemenu"),k.dragmenu=a);if("show"==rcmail.env.action||"preview"==rcmail.env.action)rcmail.addEventListener("enable-command",E).addEventListener("aftershow-headers",function(){b()}).addEventListener("afterhide-headers",
function(){b()}),$("#previewheaderstoggle").click(function(a){H();return!1}),$("#attachment-list > li").each(function(){$(this).append($('<a class="drop"></a>').click(function(){Q(this)}))}),"1"==f("previewheaders")&&H();else if("compose"==rcmail.env.action){rcmail.addEventListener("aftersend-attachment",v).addEventListener("add-recipient",function(a){w(a.field,!0)}).addEventListener("aftertoggle-editor",function(a){window.setTimeout(function(){t()},200);a&&a.mode&&$("select[name='editorSelector']").val(a.mode)});
for(var c,d,C=["cc","bcc","replyto","followupto"],a=0;a<C.length;a++)c=C[a],d=$("#_"+c),d.length&&(d.on("change",{v:c},function(a){this.value&&w(a.data.v,!0)}),""!=d.val()&&w(c,!0));$("#composeoptionstoggle").click(function(){$("#composeoptionstoggle").toggleClass("remove");$("#composeoptions").toggle();t();q("composeoptions",$("#composeoptions").is(":visible")?"1":"0");return!1}).css("cursor","pointer");"0"!==f("composeoptions")&&$("#composeoptionstoggle").click();$("textarea[name='_to'], textarea[name='_cc'], textarea[name='_bcc']").change(function(a){D(this)}).change();
rcmail.addEventListener("autocomplete_insert",function(a){D(a.field)});(a=rcmail.opener())&&"compose"==a.env.action&&$("#composeoptionstoggle",opener.document).hasClass("remove")&&$("#composeoptionstoggle").click();(new rcube_splitter({id:"composesplitterv",p1:"#composeview-left",p2:"#composeview-right",orientation:"v",relative:!0,start:248,min:170,size:12,render:t})).init()}else"list"!=rcmail.env.action&&rcmail.env.action?"get"==rcmail.env.action&&(new rcube_splitter({id:"mailpartsplitterv",p1:"#messagepartheader",
p2:"#messagepartcontainer",orientation:"v",relative:!0,start:226,min:150,size:12})).init():(a=$("#mailpreviewframe").is(":visible"),$("#mailpreviewtoggle").addClass(a?"enabled":"closed").click(function(a){a=$(a.target);var c=$("#mailpreviewframe"),b=!c.is(":visible");n.pos||parseInt(f("mailviewsplitter")||320);var d;c.toggle();a.removeClass().addClass(b?"enabled":"closed");b?($("#mailview-top").removeClass("fullheight").css({bottom:"auto"}),$("#mailview-bottom").css({height:"auto"}).show(),rcmail.env.contentframe=
"messagecontframe",(d=rcmail.message_list.get_single_selection())&&rcmail.show_message(d,!1,!0),n.handle?(n.handle.show(),n.resize()):n.init()):(rcmail.env.contentframe=null,rcmail.show_contentframe(!1),$("#mailview-top").addClass("fullheight").css({height:"auto",bottom:"0px"}),$("#mailview-bottom").css({top:"auto",height:"0px"}).hide(),n.handle&&n.handle.hide());rcmail.message_list&&(b&&d&&rcmail.message_list.scrollto(d),rcmail.message_list.resize());rcmail.command("save-pref",{name:"preview_pane",
value:b?1:0});return!1}),$("#maillistmode").addClass(rcmail.env.threading?"":"selected").click(function(a){A("list");return!1}),$("#mailthreadmode").addClass(rcmail.env.threading?"selected":"").click(function(a){A("thread");return!1}),n=new rcube_splitter({id:"mailviewsplitter",p1:"#mailview-top",p2:"#mailview-bottom",orientation:"h",relative:!0,start:310,min:150,size:12,offset:4}),a&&n.init(),rcmail.addEventListener("setquota",z).addEventListener("enable-command",E).addEventListener("afterimport-messages",
v));$("#mailview-left").length&&(new rcube_splitter({id:"mailviewsplitterv",p1:"#mailview-left",p2:"#mailview-right",orientation:"v",relative:!0,start:226,min:150,size:12,callback:e,render:m})).init()}else"settings"==rcmail.env.task?(rcmail.addEventListener("init",function(){var a="#settingstabpreferences";rcmail.env.action&&(a="#settingstab"+(0<rcmail.env.action.indexOf("identity")?"identities":rcmail.env.action.replace(/\./g,"")));$(a).addClass("selected").children().first().removeAttr("onclick").click(function(){return!1})}),
"folders"==rcmail.env.action)?((new rcube_splitter({id:"folderviewsplitter",p1:"#folderslist",p2:"#folder-details",orientation:"v",relative:!0,start:266,min:180,size:12})).init(),new rcube_scroller("#folderslist-content","#folderslist-header","#folderslist-footer"),rcmail.addEventListener("setquota",z)):"identities"==rcmail.env.action?(new rcube_splitter({id:"identviewsplitter",p1:"#identitieslist",p2:"#identity-details",orientation:"v",relative:!0,start:266,min:180,size:12})).init():"responses"==
rcmail.env.action?(new rcube_splitter({id:"responseviewsplitter",p1:"#identitieslist",p2:"#identity-details",orientation:"v",relative:!0,start:266,min:180,size:12})).init():"preferences"!=rcmail.env.action&&rcmail.env.action?"edit-prefs"==rcmail.env.action&&($('<a href="#toggle">&#9660;</a>').addClass("advanced-toggle").appendTo("#preferences-details fieldset.advanced legend"),$("#preferences-details fieldset.advanced legend").click(function(a){a=$(this).hasClass("collapsed");$(".advanced-toggle",
this).html(a?"&#9650;":"&#9660;");$(this).toggleClass("collapsed").closest("fieldset").children(".propform").toggle()}).addClass("collapsed")):(new rcube_splitter({id:"prefviewsplitter",p1:"#sectionslist",p2:"#preferences-box",orientation:"v",relative:!0,start:266,min:180,size:12})).init():"addressbook"==rcmail.env.task&&(rcmail.addEventListener("afterupload-photo",v).addEventListener("beforepushgroup",R).addEventListener("beforepopgroup",S),""==rcmail.env.action&&((new rcube_splitter({id:"addressviewsplitterd",
p1:"#addressview-left",p2:"#addressview-right",orientation:"v",relative:!0,start:226,min:150,size:12,render:m})).init(),(new rcube_splitter({id:"addressviewsplitter",p1:"#addresslist",p2:"#contacts-box",orientation:"v",relative:!0,start:286,min:270,size:12})).init()),a=$("#dragcontactmenu"),a.length&&(rcmail.gui_object("dragmenu","dragcontactmenu"),k.dragmenu=a));$(".tabbed").each(function(a,c){J(c)});$("select.decorated").each(function(){if(bw.opera)$(this).removeClass("decorated");else{var a=$(this),
c=a.parent(),b=Math.max(a.height(),26)-2,d=a.width()-22,e=$("option",this).first().text();""!=$("option:selected",this).val()&&(e=$("option:selected",this).text());e=$('<a class="menuselector"><span class="handle">'+e+"</span></a>").css("position","absolute").offset(a.position()).insertAfter(a);e.children().width(d).height(b).css("line-height",b-1+"px");"absolute"!=c.css("position")&&c.css("position","relative");a.width(e.width()).change(function(){var a=$("option:selected",this).text();$(this).next().children().text(a)})}});
a=$("body > div.minwidth");a.length&&a.css("min-width",$(".toolbar").width()+$("#quicksearchbar").width()+$("#searchfilter").width()+30);$(document.body).bind("mouseup",r).bind("keyup",function(a){if(27==a.keyCode)for(var c in k)k[c].is(":visible")&&G(c,!1)});$("iframe").load(function(a){try{$(this.contentDocument?this.contentDocument:this.contentWindow?this.contentWindow.document:null).mouseup(r)}catch(c){}}).contents().mouseup(r);window.onresize=h;h()};this.init_tabs=J;this.show_about=function(a){var c=
$("<iframe>").attr("id","aboutframe").attr("src",rcmail.url("settings/about")).attr("frameborder","0").appendTo(document.body),b=Math.floor(0.75*$(window).height()),e={},g=$("#supportlink");g.length&&(u.supporturl=g.attr("href"))&&(e[g.html()]=function(a){0>u.supporturl.indexOf("mailto:")?window.open(u.supporturl):location.href=u.supporturl});c.dialog({modal:!0,resizable:!1,closeOnEscape:!0,title:a?a.title||a.innerHTML:null,close:function(){c.dialog("destroy").remove()},buttons:e,width:640,height:b}).width(640)};
this.show_popup=G;this.add_popup=F;this.set_searchmod=function(a){var c,b;c=rcmail.env.task;var e=rcmail.env.search_mods,g=rcmail.env.mailbox;e||(e={});"mail"==c?(e[g]||(e[g]=rcube_clone_object(e["*"])),b=e[g],c="text"):(b=e,c="*");a.checked?b[a.value]=1:delete b[a.value];a.value==c&&$('input:checkbox[name="s_mods[]"]').map(function(){this!=a&&(this.checked=!0,a.checked?(this.disabled=!0,delete b[this.value]):(this.disabled=!1,b[this.value]=1))})};this.show_uploadform=v;this.show_header_row=w;this.hide_header_row=
function(a){var c=$("#_"+a);B[a]=c.val();c.val("");$("#compose-"+a).hide();$("#"+a+"-link").show();t();return!1};this.update_quota=z;this.get_pref=f;this.save_pref=q;if(window.$&&document.body){var K=f("minimalmode");(parseInt(K)||null===K&&850>$(window).height())&&$(document.body).addClass("minimal");bw.tablet&&$("#viewport").attr("content","width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0")}}
function rcube_scroller(f,q,r){var h=this;this.list=$(f);this.top=$(q);this.bottom=$(r);this.step_size=6;this.step_time=20;this.delay=500;this.top.mouseenter(function(){rcmail.drag_active&&(h.ts=window.setTimeout(function(){h.scroll("down")},h.delay))}).mouseout(function(){h.ts&&window.clearTimeout(h.ts)});this.bottom.mouseenter(function(){rcmail.drag_active&&(h.ts=window.setTimeout(function(){h.scroll("up")},h.delay))}).mouseout(function(){h.ts&&window.clearTimeout(h.ts)});this.scroll=function(f){var b=
this,e=this.step_size;rcmail.drag_active&&("down"==f&&(e*=-1),this.list.get(0).scrollTop+=e,this.ts=window.setTimeout(function(){b.scroll(f)},this.step_time))}}
function rcube_splitter(f){function q(e){if(bw.konq||bw.chrome||bw.safari)document.body.style.webkitUserSelect="none";b.p1pos=b.relative?b.p1.position():b.p1.offset();b.p2pos=b.relative?b.p2.position():b.p2.offset();b.drag_active=!0;$(document).bind("mousemove."+this.id,r).bind("mouseup."+this.id,h);$("iframe").each(function(b,e){$("<div>").attr("id","iframe-splitter-fix-"+b).addClass("iframe-splitter-fix").css({background:"#fff",width:e.offsetWidth+"px",height:e.offsetHeight+"px",position:"absolute",
opacity:"0.001",zIndex:1E3}).css($(this).offset()).appendTo("body")})}function r(e){if(!b.drag_active)return!1;window.clearTimeout(b.ts);b.ts=window.setTimeout(function(){var f=rcube_event.get_mouse_pos(e);if(b.relative){var h=b.p1.parent().offset();f.x-=h.left;f.y-=h.top}b.horizontal?f.y-b.halfsize>b.p1pos.top&&f.y+b.halfsize<b.p2pos.top+b.p2.outerHeight()&&(b.pos=Math.max(b.min,f.y-Math.max(0,b.offset)),b.resize()):f.x-b.halfsize>b.p1pos.left&&f.x+b.halfsize<b.p2pos.left+b.p2.outerWidth()&&(b.pos=
Math.max(b.min,f.x-Math.max(0,b.offset)),b.resize());b.p1pos=b.relative?b.p1.position():b.p1.offset();b.p2pos=b.relative?b.p2.position():b.p2.offset()},1);return!1}function h(e){if(bw.konq||bw.chrome||bw.safari)document.body.style.webkitUserSelect="auto";$(document).unbind("."+b.id);b.drag_active=!1;$("div.iframe-splitter-fix").remove();b.set_cookie();"function"==typeof b.callback&&b.callback(b);return bw.safari?!0:rcube_event.cancel(e)}function y(e){b.horizontal?(e=parseInt(b.p2.parent().outerHeight(),
10)-parseInt(b.p2[0].style.top,10)-(bw.ie8?2:0),b.p2.css("height",(0<e?e:0)+"px")):(e=parseInt(b.p2.parent().outerWidth(),10)-parseInt(b.p2[0].style.left,10),b.p2.css("width",(0<e?e:0)+"px"))}this.p=f;this.id=f.id;this.horizontal="horizontal"==f.orientation||"h"==f.orientation;this.halfsize=(void 0!==f.size?f.size:10)/2;this.pos=f.start||0;this.min=f.min||20;this.offset=f.offset||0;this.relative=f.relative?!0:!1;this.drag_active=!1;this.render=f.render;this.callback=f.callback;var b=this;rcube_splitter._instances[this.id]=
b;this.init=function(){this.p1=$(this.p.p1);this.p2=$(this.p.p2);if(this.p1.length&&this.p2.length){this.p1pos=this.relative?this.p1.position():this.p1.offset();this.p2pos=this.relative?this.p2.position():this.p2.offset();this.handle=$("<div>").attr("id",this.id).attr("unselectable","on").addClass("splitter "+(this.horizontal?"splitter-h":"splitter-v")).appendTo(this.p1.parent()).bind("mousedown",q);if(this.horizontal){var b=this.p1pos.top+this.p1.outerHeight();this.handle.css({left:"0px",top:b+"px"})}else b=
this.p1pos.left+this.p1.outerWidth(),this.handle.css({left:b+"px",top:"0px"});bw.ie&&$(window).resize(y);(b=this.get_cookie())&&!isNaN(b)?(this.pos=parseFloat(b),this.resize()):this.pos&&(this.resize(),this.set_cookie())}};this.resize=function(){if(this.horizontal){if(this.p1.css("height",Math.floor(this.pos-this.p1pos.top-Math.floor(this.halfsize))+"px"),this.p2.css("top",Math.ceil(this.pos+Math.ceil(this.halfsize)+2)+"px"),this.handle.css("top",Math.round(this.pos-this.halfsize+this.offset)+"px"),
bw.ie){var b=parseInt(this.p2.parent().outerHeight(),10)-parseInt(this.p2.css("top"),10)-(bw.ie8?2:0);this.p2.css("height",(0<b?b:0)+"px")}}else this.p1.css("width",Math.floor(this.pos-this.p1pos.left-Math.floor(this.halfsize))+"px"),this.p2.css("left",Math.ceil(this.pos+Math.ceil(this.halfsize))+"px"),this.handle.css("left",Math.round(this.pos-this.halfsize+this.offset+3)+"px"),bw.ie&&(b=parseInt(this.p2.parent().outerWidth(),10)-parseInt(this.p2.css("left"),10),this.p2.css("width",(0<b?b:0)+"px"));
this.p2.resize();this.p1.resize();this.drag_active&&$("iframe").each(function(b,e){var f=$(this).offset();$("#iframe-splitter-fix-"+b).css({top:f.top+"px",left:f.left+"px",width:e.offsetWidth+"px",height:e.offsetHeight+"px"})});"function"==typeof this.render&&this.render(this)};this.get_cookie=function(){return window.UI?UI.get_pref(this.id):null};this.set_cookie=function(){window.UI&&UI.save_pref(this.id,this.pos)}}rcube_splitter._instances={};rcube_splitter.get_instance=function(f){return rcube_splitter._instances[f]};
