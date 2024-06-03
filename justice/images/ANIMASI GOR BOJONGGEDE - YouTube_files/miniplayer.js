(function(g){var window=this;'use strict';var L6=function(a){g.W.call(this,{G:"div",L:"ytp-miniplayer-ui"});this.le=!1;this.player=a;this.T(a,"minimized",this.dg);this.T(a,"onStateChange",this.XG)},M6=function(a){g.BM.call(this,a);
this.i=new L6(this.player);this.i.hide();g.oM(this.player,this.i.element,4);a.Qe()&&(this.load(),g.N(a.getRootNode(),"ytp-player-minimized",!0))};
g.w(L6,g.W);g.k=L6.prototype;
g.k.PE=function(){this.tooltip=new g.jQ(this.player,this);g.I(this,this.tooltip);g.oM(this.player,this.tooltip.element,4);this.tooltip.scale=.6;this.Ac=new g.uN(this.player);g.I(this,this.Ac);this.Hg=new g.W({G:"div",L:"ytp-miniplayer-scrim"});g.I(this,this.Hg);this.Hg.Da(this.element);this.T(this.Hg.element,"click",this.CA);var a=new g.W({G:"button",Ja:["ytp-miniplayer-close-button","ytp-button"],W:{"aria-label":"Tutup"},U:[g.qK()]});g.I(this,a);a.Da(this.Hg.element);this.T(a.element,"click",this.Mi);
a=new g.$1(this.player,this);g.I(this,a);a.Da(this.Hg.element);this.Gp=new g.W({G:"div",L:"ytp-miniplayer-controls"});g.I(this,this.Gp);this.Gp.Da(this.Hg.element);this.T(this.Gp.element,"click",this.CA);var b=new g.W({G:"div",L:"ytp-miniplayer-button-container"});g.I(this,b);b.Da(this.Gp.element);a=new g.W({G:"div",L:"ytp-miniplayer-play-button-container"});g.I(this,a);a.Da(this.Gp.element);var c=new g.W({G:"div",L:"ytp-miniplayer-button-container"});g.I(this,c);c.Da(this.Gp.element);this.AN=new g.UO(this.player,
this,!1);g.I(this,this.AN);this.AN.Da(b.element);b=new g.SO(this.player,this);g.I(this,b);b.Da(a.element);this.nextButton=new g.UO(this.player,this,!0);g.I(this,this.nextButton);this.nextButton.Da(c.element);this.Kg=new g.WP(this.player,this);g.I(this,this.Kg);this.Kg.Da(this.Hg.element);this.Mc=new g.aP(this.player,this);g.I(this,this.Mc);g.oM(this.player,this.Mc.element,4);this.pA=new g.W({G:"div",L:"ytp-miniplayer-buttons"});g.I(this,this.pA);g.oM(this.player,this.pA.element,4);a=new g.W({G:"button",
Ja:["ytp-miniplayer-close-button","ytp-button"],W:{"aria-label":"Tutup"},U:[g.qK()]});g.I(this,a);a.Da(this.pA.element);this.T(a.element,"click",this.Mi);a=new g.W({G:"button",Ja:["ytp-miniplayer-replay-button","ytp-button"],W:{"aria-label":"Tutup"},U:[g.vK()]});g.I(this,a);a.Da(this.pA.element);this.T(a.element,"click",this.eW);this.T(this.player,"presentingplayerstatechange",this.Qc);this.T(this.player,"appresize",this.zb);this.T(this.player,"fullscreentoggled",this.zb);this.zb()};
g.k.show=function(){this.Pd=new g.mr(this.tq,null,this);this.Pd.start();this.le||(this.PE(),this.le=!0);0!==this.player.getPlayerState()&&g.W.prototype.show.call(this);this.Mc.show();this.player.unloadModule("annotations_module")};
g.k.hide=function(){this.Pd&&(this.Pd.dispose(),this.Pd=void 0);g.W.prototype.hide.call(this);this.player.Qe()||(this.le&&this.Mc.hide(),this.player.loadModule("annotations_module"))};
g.k.ya=function(){this.Pd&&(this.Pd.dispose(),this.Pd=void 0);g.W.prototype.ya.call(this)};
g.k.Mi=function(){this.player.stopVideo();this.player.Pa("onCloseMiniplayer")};
g.k.eW=function(){this.player.playVideo()};
g.k.CA=function(a){if(a.target===this.Hg.element||a.target===this.Gp.element)this.player.V().N("kevlar_miniplayer_play_pause_on_scrim")?g.tJ(this.player.Ab())?this.player.pauseVideo():this.player.playVideo():this.player.Pa("onExpandMiniplayer")};
g.k.dg=function(){g.N(this.player.getRootNode(),"ytp-player-minimized",this.player.Qe())};
g.k.Bd=function(){this.Mc.Ub();this.Kg.Ub()};
g.k.tq=function(){this.Bd();this.Pd&&this.Pd.start()};
g.k.Qc=function(a){g.T(a.state,32)&&this.tooltip.hide()};
g.k.zb=function(){g.nP(this.Mc,0,this.player.bb().getPlayerSize().width,!1);g.bP(this.Mc)};
g.k.XG=function(a){this.player.Qe()&&(0===a?this.hide():this.show())};
g.k.hc=function(){return this.tooltip};
g.k.We=function(){return!1};
g.k.Af=function(){return!1};
g.k.Gi=function(){return!1};
g.k.sx=function(){};
g.k.Bn=function(){};
g.k.zs=function(){};
g.k.Pn=function(){return null};
g.k.Tv=function(){return null};
g.k.Cj=function(){return new g.Am(0,0,0,0)};
g.k.handleGlobalKeyDown=function(){return!1};
g.k.handleGlobalKeyUp=function(){return!1};
g.k.Bq=function(a,b,c,d,e){var f=0,h=d=0,l=g.Tm(a);if(b){c=g.ur(b,"ytp-prev-button")||g.ur(b,"ytp-next-button");var m=g.ur(b,"ytp-play-button"),n=g.ur(b,"ytp-miniplayer-expand-watch-page-button");c?f=h=12:m?(b=g.Rm(b,this.element),h=b.x,f=b.y-12):n&&(h=g.ur(b,"ytp-miniplayer-button-top-left"),f=g.Rm(b,this.element),b=g.Tm(b),h?(h=8,f=f.y+40):(h=f.x-l.width+b.width,f=f.y-20))}else h=c-l.width/2,d=25+(e||0);b=this.player.bb().getPlayerSize().width;e=f+(e||0);l=g.xg(h,0,b-l.width);e?(a.style.top=e+"px",
a.style.bottom=""):(a.style.top="",a.style.bottom=d+"px");a.style.left=l+"px"};
g.k.showControls=function(){};
g.k.vl=function(){};
g.k.Mk=function(){return!1};g.w(M6,g.BM);M6.prototype.create=function(){};
M6.prototype.Yi=function(){return!1};
M6.prototype.load=function(){this.player.hideControls();this.i.show()};
M6.prototype.unload=function(){this.player.showControls();this.i.hide()};g.AM("miniplayer",M6);})(_yt_player);
