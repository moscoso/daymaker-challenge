(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{o5AU:function(l,n,u){"use strict";u.r(n);var e=u("CcnG"),t=function(){return function(){}}(),i=u("pMnS"),o=u("oBZk"),a=u("ZZ/e"),s=u("ZYCi"),b=u("Ip0R"),r=u("gIcY"),c=u("vZrz"),h=function(){function l(l,n,u){this.dispatch=l,this.router=n,this.alertController=u,this.genderValue=null,this.rangeValue={lower:1,upper:17},this.title="",this.items=[],this.minAge=1,this.maxAge=17}return l.prototype.ngOnInit=function(){var l=this;this.dispatch.getOpportunitiesSnapshot().then((function(n){l.validateURL(n)})),this.dispatch.getState().subscribe((function(n){l.items=n.daymaker.children}))},l.prototype.validateURL=function(l){for(var n=this.router.url,u=n.replace("/",""),e=!1,t=0,i=l.daymaker.opportunities;t<i.length;t++){var o=i[t];if(e=o.url===u){this.title=o.name,this.dispatch.selectOpportunity(o.id);break}}e||this.dispatch.invalidateRoute(n)},l.prototype.confirm1=function(l){var n=this;this.alertController.create({message:"Are you sure you want to claim this child?",buttons:[{role:"confirm",cssClass:"confirm",text:"CONFIRM",handler:function(){n.confirm2(l)}},{role:"cancel",text:"CANCEL",cssClass:"abort"}]}).then((function(l){return l.present()}))},l.prototype.confirm2=function(l){var n=this;this.alertController.create({message:"Are you DOUBLE sure you want to claim this child?",buttons:[{role:"confirm",text:"CONFIRM",cssClass:"confirm",handler:function(){n.dispatch.claimChild(l)}},{role:"cancel",text:"ABORT",cssClass:"abort"}]}).then((function(l){return l.present()}))},l.prototype.submitFilter=function(){this.minAge=this.rangeValue.lower,this.maxAge=this.rangeValue.upper,this.dispatch.changeFilter(this.genderValue,this.rangeValue.lower,this.rangeValue.upper)},l}(),g=e.rb({encapsulation:0,styles:[["[_nghost-%COMP%]   .scroll[_ngcontent-%COMP%]{background:#ededed}[_nghost-%COMP%]   .child-card[_ngcontent-%COMP%]{height:100%;display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column}[_nghost-%COMP%]   .child-card[_ngcontent-%COMP%]   ion-card-header[_ngcontent-%COMP%]{padding:0}[_nghost-%COMP%]   .child-card[_ngcontent-%COMP%]   ion-card-header[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]{padding:4px 16px}[_nghost-%COMP%]   .child-card[_ngcontent-%COMP%]   ion-card-content[_ngcontent-%COMP%]{-webkit-box-flex:1;flex:1 1 auto;padding:0}[_nghost-%COMP%]   img[_ngcontent-%COMP%]{width:150px}[_nghost-%COMP%]   ion-item[_ngcontent-%COMP%], [_nghost-%COMP%]   ion-label[_ngcontent-%COMP%]{font-family:Comfortaa,cursive}[_nghost-%COMP%]   .female[_ngcontent-%COMP%]{color:pink}[_nghost-%COMP%]   .male[_ngcontent-%COMP%]{color:#87ceeb}"]],data:{}});function m(l){return e.Kb(0,[(l()(),e.tb(0,0,null,null,11,null,null,null,null,null,null,null)),(l()(),e.tb(1,0,null,null,10,"ion-card",[],null,null,null,o.I,o.d)),e.sb(2,49152,null,0,a.k,[e.h,e.k,e.z],null,null),(l()(),e.tb(3,0,null,0,1,"h1",[["class","ion-text-center"]],null,null,null,null,null)),(l()(),e.Jb(-1,null,["Something went wrong."])),(l()(),e.tb(5,0,null,0,6,"ion-button",[["routerLink","/"]],null,[[null,"click"]],(function(l,n,u){var t=!0;return"click"===n&&(t=!1!==e.Eb(l,7).onClick()&&t),"click"===n&&(t=!1!==e.Eb(l,8).onClick(u)&&t),t}),o.C,o.b)),e.sb(6,49152,null,0,a.i,[e.h,e.k,e.z],null,null),e.sb(7,16384,null,0,s.n,[s.m,s.a,[8,null],e.D,e.k],{routerLink:[0,"routerLink"]},null),e.sb(8,737280,null,0,a.Ib,[b.g,a.Fb,e.k,s.m,[2,s.n]],null,null),(l()(),e.tb(9,0,null,0,1,"ion-icon",[["name","home"]],null,null,null,o.N,o.m)),e.sb(10,49152,null,0,a.A,[e.h,e.k,e.z],{name:[0,"name"]},null),(l()(),e.Jb(-1,0,["Go Home "]))],(function(l,n){l(n,7,0,"/"),l(n,8,0),l(n,10,0,"home")}),null)}function d(l){return e.Kb(0,[(l()(),e.tb(0,0,null,null,11,null,null,null,null,null,null,null)),(l()(),e.tb(1,0,null,null,10,"ion-card",[["class","ion-text-center"]],null,null,null,o.I,o.d)),e.sb(2,49152,null,0,a.k,[e.h,e.k,e.z],null,null),(l()(),e.tb(3,0,null,0,1,"h1",[],null,null,null,null,null)),(l()(),e.Jb(-1,null,["No more children in this giving opportunity that match the criteria"])),(l()(),e.tb(5,0,null,0,6,"ion-button",[["routerLink","/"]],null,[[null,"click"]],(function(l,n,u){var t=!0;return"click"===n&&(t=!1!==e.Eb(l,7).onClick()&&t),"click"===n&&(t=!1!==e.Eb(l,8).onClick(u)&&t),t}),o.C,o.b)),e.sb(6,49152,null,0,a.i,[e.h,e.k,e.z],null,null),e.sb(7,16384,null,0,s.n,[s.m,s.a,[8,null],e.D,e.k],{routerLink:[0,"routerLink"]},null),e.sb(8,737280,null,0,a.Ib,[b.g,a.Fb,e.k,s.m,[2,s.n]],null,null),(l()(),e.tb(9,0,null,0,1,"ion-icon",[["name","home"]],null,null,null,o.N,o.m)),e.sb(10,49152,null,0,a.A,[e.h,e.k,e.z],{name:[0,"name"]},null),(l()(),e.Jb(-1,0,["Go Home "]))],(function(l,n){l(n,7,0,"/"),l(n,8,0),l(n,10,0,"home")}),null)}function p(l){return e.Kb(0,[(l()(),e.tb(0,0,null,null,30,"ion-col",[["size","12"],["size-md","6"]],null,null,null,o.J,o.i)),e.sb(1,49152,null,0,a.r,[e.h,e.k,e.z],{size:[0,"size"]},null),(l()(),e.tb(2,0,null,0,28,"ion-card",[["class","child-card"]],null,null,null,o.I,o.d)),e.sb(3,49152,null,0,a.k,[e.h,e.k,e.z],null,null),(l()(),e.tb(4,0,null,0,6,"ion-card-header",[],null,null,null,o.F,o.f)),e.sb(5,49152,null,0,a.m,[e.h,e.k,e.z],null,null),(l()(),e.tb(6,0,null,0,4,"ion-item",[["detail","false"],["lines","none"]],null,null,null,o.O,o.n)),e.sb(7,49152,null,0,a.F,[e.h,e.k,e.z],{detail:[0,"detail"],lines:[1,"lines"]},null),(l()(),e.tb(8,0,null,0,0,"img",[],[[8,"src",4]],null,null,null,null)),(l()(),e.tb(9,0,null,0,1,"h1",[],null,null,null,null,null)),(l()(),e.Jb(10,null,["",""])),(l()(),e.tb(11,0,null,0,12,"ion-card-content",[],null,null,null,o.E,o.e)),e.sb(12,49152,null,0,a.l,[e.h,e.k,e.z],null,null),(l()(),e.tb(13,0,null,0,10,"ion-list",[],null,null,null,o.R,o.p)),e.sb(14,49152,null,0,a.M,[e.h,e.k,e.z],null,null),(l()(),e.tb(15,0,null,0,8,"ion-item",[],null,null,null,o.O,o.n)),e.sb(16,49152,null,0,a.F,[e.h,e.k,e.z],null,null),(l()(),e.tb(17,0,null,0,2,"ion-label",[],null,null,null,o.P,o.o)),e.sb(18,49152,null,0,a.L,[e.h,e.k,e.z],null,null),(l()(),e.Jb(19,0,["Age: ",""])),(l()(),e.tb(20,0,null,0,1,"ion-icon",[["class","female"],["name","female"]],[[8,"hidden",0]],null,null,o.N,o.m)),e.sb(21,49152,null,0,a.A,[e.h,e.k,e.z],{name:[0,"name"]},null),(l()(),e.tb(22,0,null,0,1,"ion-icon",[["class","male"],["name","male"]],[[8,"hidden",0]],null,null,o.N,o.m)),e.sb(23,49152,null,0,a.A,[e.h,e.k,e.z],{name:[0,"name"]},null),(l()(),e.tb(24,0,null,0,6,"ion-row",[["class","ion-no-padding ion-justify-content-center\\"]],null,null,null,o.W,o.v)),e.sb(25,49152,null,0,a.hb,[e.h,e.k,e.z],null,null),(l()(),e.tb(26,0,null,0,4,"ion-col",[["class","ion-text-right"],["size","4"]],null,null,null,o.J,o.i)),e.sb(27,49152,null,0,a.r,[e.h,e.k,e.z],{size:[0,"size"]},null),(l()(),e.tb(28,0,null,0,2,"ion-button",[["color","primary"]],null,[[null,"click"]],(function(l,n,u){var e=!0;return"click"===n&&(e=!1!==l.component.confirm1(l.context.$implicit.id)&&e),e}),o.C,o.b)),e.sb(29,49152,null,0,a.i,[e.h,e.k,e.z],{color:[0,"color"]},null),(l()(),e.Jb(-1,0,["\ud83c\udf81CLAIM"]))],(function(l,n){l(n,1,0,"12"),l(n,7,0,"false","none"),l(n,21,0,"female"),l(n,23,0,"male"),l(n,27,0,"4"),l(n,29,0,"primary")}),(function(l,n){l(n,8,0,"assets/kid/"+n.context.$implicit.id+".png"),l(n,10,0,n.context.$implicit.alias),l(n,19,0,n.context.$implicit.age),l(n,20,0,"f"!=n.context.$implicit.gender),l(n,22,0,"m"!=n.context.$implicit.gender)}))}function f(l){return e.Kb(0,[(l()(),e.tb(0,0,null,null,6,null,null,null,null,null,null,null)),(l()(),e.tb(1,0,null,null,5,"ion-grid",[["fixed",""]],null,null,null,o.L,o.k)),e.sb(2,49152,null,0,a.y,[e.h,e.k,e.z],{fixed:[0,"fixed"]},null),(l()(),e.tb(3,0,null,0,3,"ion-row",[],null,null,null,o.W,o.v)),e.sb(4,49152,null,0,a.hb,[e.h,e.k,e.z],null,null),(l()(),e.ib(16777216,null,0,1,null,p)),e.sb(6,278528,null,0,b.i,[e.O,e.L,e.s],{ngForOf:[0,"ngForOf"]},null)],(function(l,n){var u=n.component;l(n,2,0,""),l(n,6,0,u.items)}),null)}function k(l){return e.Kb(0,[(l()(),e.tb(0,0,null,null,10,"ion-header",[],null,null,null,o.M,o.l)),e.sb(1,49152,null,0,a.z,[e.h,e.k,e.z],null,null),(l()(),e.tb(2,0,null,0,8,"ion-toolbar",[],null,null,null,o.bb,o.A)),e.sb(3,49152,null,0,a.Ab,[e.h,e.k,e.z],null,null),(l()(),e.tb(4,0,null,0,3,"ion-buttons",[["slot","start"]],null,null,null,o.D,o.c)),e.sb(5,49152,null,0,a.j,[e.h,e.k,e.z],null,null),(l()(),e.tb(6,0,null,0,1,"ion-menu-button",[],null,null,null,o.S,o.s)),e.sb(7,49152,null,0,a.P,[e.h,e.k,e.z],null,null),(l()(),e.tb(8,0,null,0,2,"ion-title",[],null,null,null,o.ab,o.z)),e.sb(9,49152,null,0,a.yb,[e.h,e.k,e.z],null,null),(l()(),e.Jb(10,0,["",""])),(l()(),e.tb(11,0,null,null,59,"ion-content",[],null,null,null,o.K,o.j)),e.sb(12,49152,null,0,a.s,[e.h,e.k,e.z],null,null),(l()(),e.tb(13,0,null,0,26,"ion-item",[],null,null,null,o.O,o.n)),e.sb(14,49152,null,0,a.F,[e.h,e.k,e.z],null,null),(l()(),e.tb(15,0,null,0,2,"ion-label",[],null,null,null,o.P,o.o)),e.sb(16,49152,null,0,a.L,[e.h,e.k,e.z],null,null),(l()(),e.Jb(-1,0,["Gender"])),(l()(),e.tb(18,0,null,0,1,"ion-icon",[["hidden",""],["name","female"]],null,null,null,o.N,o.m)),e.sb(19,49152,null,0,a.A,[e.h,e.k,e.z],{name:[0,"name"]},null),(l()(),e.tb(20,0,null,0,19,"ion-select",[["interface","popover"],["interfaceOptions",'{"cssClass": "daymaker-popover", "mode": "md"}']],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionBlur"],[null,"ionChange"]],(function(l,n,u){var t=!0,i=l.component;return"ionBlur"===n&&(t=!1!==e.Eb(l,21)._handleBlurEvent(u.target)&&t),"ionChange"===n&&(t=!1!==e.Eb(l,21)._handleChangeEvent(u.target)&&t),"ngModelChange"===n&&(t=!1!==(i.genderValue=u)&&t),t}),o.Y,o.w)),e.sb(21,16384,null,0,a.Jb,[e.k],null,null),e.Gb(1024,null,r.b,(function(l){return[l]}),[a.Jb]),e.sb(23,671744,null,0,r.e,[[8,null],[8,null],[8,null],[6,r.b]],{model:[0,"model"]},{update:"ngModelChange"}),e.Gb(2048,null,r.c,null,[r.e]),e.sb(25,16384,null,0,r.d,[[4,r.c]],null,null),e.sb(26,49152,null,0,a.lb,[e.h,e.k,e.z],{interface:[0,"interface"],interfaceOptions:[1,"interfaceOptions"]},null),(l()(),e.tb(27,0,null,0,2,"ion-select-option",[],null,null,null,o.X,o.x)),e.sb(28,49152,null,0,a.mb,[e.h,e.k,e.z],{value:[0,"value"]},null),(l()(),e.Jb(-1,0,["Both"])),(l()(),e.tb(30,0,null,0,4,"ion-select-option",[["value","f"]],null,null,null,o.X,o.x)),e.sb(31,49152,null,0,a.mb,[e.h,e.k,e.z],{value:[0,"value"]},null),(l()(),e.tb(32,0,null,0,1,"ion-icon",[["name","female"]],null,null,null,o.N,o.m)),e.sb(33,49152,null,0,a.A,[e.h,e.k,e.z],{name:[0,"name"]},null),(l()(),e.Jb(-1,0,["Female "])),(l()(),e.tb(35,0,null,0,4,"ion-select-option",[["value","m"]],null,null,null,o.X,o.x)),e.sb(36,49152,null,0,a.mb,[e.h,e.k,e.z],{value:[0,"value"]},null),(l()(),e.tb(37,0,null,0,1,"ion-icon",[["name","male"]],null,null,null,o.N,o.m)),e.sb(38,49152,null,0,a.A,[e.h,e.k,e.z],{name:[0,"name"]},null),(l()(),e.Jb(-1,0,["Male "])),(l()(),e.tb(40,0,null,0,17,"ion-item",[],null,null,null,o.O,o.n)),e.sb(41,49152,null,0,a.F,[e.h,e.k,e.z],null,null),(l()(),e.tb(42,0,null,0,2,"ion-label",[],null,null,null,o.P,o.o)),e.sb(43,49152,null,0,a.L,[e.h,e.k,e.z],null,null),(l()(),e.Jb(-1,0,["Age"])),(l()(),e.tb(45,0,null,0,12,"ion-range",[["dualKnobs","true"],["max","17"],["min","1"],["pin","true"],["step","1"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionBlur"],[null,"ionChange"]],(function(l,n,u){var t=!0,i=l.component;return"ionBlur"===n&&(t=!1!==e.Eb(l,46)._handleBlurEvent(u.target)&&t),"ionChange"===n&&(t=!1!==e.Eb(l,46)._handleChangeEvent(u.target)&&t),"ngModelChange"===n&&(t=!1!==(i.rangeValue=u)&&t),t}),o.V,o.u)),e.sb(46,16384,null,0,a.Jb,[e.k],null,null),e.Gb(1024,null,r.b,(function(l){return[l]}),[a.Jb]),e.sb(48,671744,null,0,r.e,[[8,null],[8,null],[8,null],[6,r.b]],{model:[0,"model"]},{update:"ngModelChange"}),e.Gb(2048,null,r.c,null,[r.e]),e.sb(50,16384,null,0,r.d,[[4,r.c]],null,null),e.sb(51,49152,null,0,a.ab,[e.h,e.k,e.z],{dualKnobs:[0,"dualKnobs"],max:[1,"max"],min:[2,"min"],pin:[3,"pin"],step:[4,"step"]},null),(l()(),e.tb(52,0,null,0,2,"ion-label",[["slot","start"]],null,null,null,o.P,o.o)),e.sb(53,49152,null,0,a.L,[e.h,e.k,e.z],null,null),(l()(),e.Jb(54,0,["",""])),(l()(),e.tb(55,0,null,0,2,"ion-label",[["slot","end"]],null,null,null,o.P,o.o)),e.sb(56,49152,null,0,a.L,[e.h,e.k,e.z],null,null),(l()(),e.Jb(57,0,["",""])),(l()(),e.tb(58,0,null,0,6,"ion-item",[],null,null,null,o.O,o.n)),e.sb(59,49152,null,0,a.F,[e.h,e.k,e.z],null,null),(l()(),e.tb(60,0,null,0,4,"ion-button",[["size","large"]],null,[[null,"click"]],(function(l,n,u){var e=!0;return"click"===n&&(e=!1!==l.component.submitFilter()&&e),e}),o.C,o.b)),e.sb(61,49152,null,0,a.i,[e.h,e.k,e.z],{size:[0,"size"]},null),(l()(),e.tb(62,0,null,0,1,"ion-icon",[["name","funnel"]],null,null,null,o.N,o.m)),e.sb(63,49152,null,0,a.A,[e.h,e.k,e.z],{name:[0,"name"]},null),(l()(),e.Jb(-1,0,["Filter "])),(l()(),e.ib(16777216,null,0,1,null,m)),e.sb(66,16384,null,0,b.j,[e.O,e.L],{ngIf:[0,"ngIf"]},null),(l()(),e.ib(16777216,null,0,1,null,d)),e.sb(68,16384,null,0,b.j,[e.O,e.L],{ngIf:[0,"ngIf"]},null),(l()(),e.ib(16777216,null,0,1,null,f)),e.sb(70,16384,null,0,b.j,[e.O,e.L],{ngIf:[0,"ngIf"]},null)],(function(l,n){var u=n.component;l(n,19,0,"female"),l(n,23,0,u.genderValue),l(n,26,0,"popover",'{"cssClass": "daymaker-popover", "mode": "md"}'),l(n,28,0,null),l(n,31,0,"f"),l(n,33,0,"female"),l(n,36,0,"m"),l(n,38,0,"male"),l(n,48,0,u.rangeValue),l(n,51,0,"true","17","1","true","1"),l(n,61,0,"large"),l(n,63,0,"funnel"),l(n,66,0,null==u.items.length),l(n,68,0,null!=u.items.length&&0===u.items.length),l(n,70,0,null!==u.items.length&&u.items.length>0)}),(function(l,n){var u=n.component;l(n,10,0,u.title),l(n,20,0,e.Eb(n,25).ngClassUntouched,e.Eb(n,25).ngClassTouched,e.Eb(n,25).ngClassPristine,e.Eb(n,25).ngClassDirty,e.Eb(n,25).ngClassValid,e.Eb(n,25).ngClassInvalid,e.Eb(n,25).ngClassPending),l(n,45,0,e.Eb(n,50).ngClassUntouched,e.Eb(n,50).ngClassTouched,e.Eb(n,50).ngClassPristine,e.Eb(n,50).ngClassDirty,e.Eb(n,50).ngClassValid,e.Eb(n,50).ngClassInvalid,e.Eb(n,50).ngClassPending),l(n,54,0,u.rangeValue.lower),l(n,57,0,u.rangeValue.upper)}))}function C(l){return e.Kb(0,[(l()(),e.tb(0,0,null,null,1,"app-list",[],null,null,null,k,g)),e.sb(1,114688,null,0,h,[c.a,s.m,a.a],null,null)],(function(l,n){l(n,1,0)}),null)}var z=e.pb("app-list",h,C,{},{},[]);u.d(n,"ListPageModuleNgFactory",(function(){return v}));var v=e.qb(t,[],(function(l){return e.Bb([e.Cb(512,e.j,e.bb,[[8,[i.a,z]],[3,e.j],e.x]),e.Cb(4608,b.l,b.k,[e.u,[2,b.t]]),e.Cb(4608,r.g,r.g,[]),e.Cb(4608,a.b,a.b,[e.z,e.g]),e.Cb(4608,a.Eb,a.Eb,[a.b,e.j,e.q]),e.Cb(4608,a.Hb,a.Hb,[a.b,e.j,e.q]),e.Cb(1073742336,b.b,b.b,[]),e.Cb(1073742336,r.f,r.f,[]),e.Cb(1073742336,r.a,r.a,[]),e.Cb(1073742336,a.Cb,a.Cb,[]),e.Cb(1073742336,s.o,s.o,[[2,s.t],[2,s.m]]),e.Cb(1073742336,t,t,[]),e.Cb(1024,s.k,(function(){return[[{path:"",component:h}]]}),[])])}))}}]);