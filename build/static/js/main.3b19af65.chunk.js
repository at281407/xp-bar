(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{146:function(e,n,t){"use strict";t.r(n);var r=t(0),o=t.n(r),i=t(38),a=t.n(i),c=(t(84),t(3)),l=t(2);function u(){var e=Object(c.a)(["\n    position: relative;\n    top: 0;\n    left: 0;\n    height: 100%;\n    width: 100%;\n"]);return u=function(){return e},e}var s=l.b.div(u()),p=t(8),f=t(15),d=t(75),v=t(13),m={isLoginFormOpen:!1},h=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"TOGGLE_LOGIN_FORM":return Object(v.a)({},e,{isLoginFormOpen:n.loginBool});default:return e}},b={modalType:"",isActive:!1,isVisible:!1},g=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"SHOW_MODAL":return Object(v.a)({},e,{modalType:n.payload.modalType,isActive:n.payload.modalActivityBool,isVisible:n.payload.modalActivityBool});case"HIDE_MODAL":return console.log("hiding modal"),Object(v.a)({},e,{isVisible:!1});case"DEACTIVATE_MODAL":return console.log("deactivating modal"),Object(v.a)({},e,{modalType:"",isActive:!1});default:return e}},x={currXp:0,isReseting:!1,currLevel:{level:null,xpFloor:null,nextLevel:null}},w=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:x,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"SET_CURR_LEVEL":return Object(v.a)({},e,{currLevel:n.currLevel});case"SET_CURR_XP":return Object(v.a)({},e,{currXp:n.currXp});case"CLEAR_XP":return x;default:return e}},O=Object(f.c)({loginReducer:h,modalReducer:g,xpBarReducer:w}),y=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||f.d;function j(){arguments.length>0&&void 0!==arguments[0]&&arguments[0];return Object(f.e)(O,y(Object(f.a)(d.a)))}var L=t(76),E=t.n(L),C=(t(89),t(90),t(77)),A=t.n(C),F=(E.a,{fillColor:"linear-gradient(to left, rgb(142, 45, 226), rgb(74, 0, 224))",borderColor:"#FFC10C",emblem:A.a}),k=t(5),X=t(6),M=t(9),I=t(7),R=t(10),_=function(e,n,t){return function(r){return r(n?{type:"SHOW_MODAL",payload:{modalType:e,modalActivityBool:n}}:(o=t,function(e){setTimeout(function(){e({type:"HIDE_MODAL"}),setTimeout(function(){e({type:"DEACTIVATE_MODAL"})},500)},o||0)}));var o}};function T(){var e=Object(c.a)(["\n    width: 100%;\n    height: 50px;\n"]);return T=function(){return e},e}var S=l.b.header(T());function z(){var e=Object(c.a)(["\n    width: ",";\n    height: ",";\n    margin: ",";\n    padding: ",";\n    display: ",";\n    .fas {\n        color: black;\n    }\n"]);return z=function(){return e},e}var B=l.b.img(z(),function(e){return e.width||"auto"},function(e){return e.height||"auto"},function(e){return e.margin||"0"},function(e){return e.padding||"0"},function(e){return e.display||"block"}),D=function(e){function n(){return Object(k.a)(this,n),Object(M.a)(this,Object(I.a)(n).apply(this,arguments))}return Object(R.a)(n,e),Object(X.a)(n,[{key:"render",value:function(){return o.a.createElement(S,null)}}]),n}(r.Component),V=Object(p.b)(function(e){return{}},{toggleModalAction:_})(D),U=t(60),H=t.n(U);H.a.initializeApp({apiKey:"AIzaSyAh7ssN8Jt8ywDtNUznq58sfyvya-mdRZ4",authDomain:"xp-bar.firebaseapp.com",databaseURL:"https://xp-bar.firebaseio.com/",projectId:"xp-bar",storageBucket:"xp-bar.appspot.com",messagingSenderId:"965104940223"});var N=H.a,W=t(39),G=t.n(W),P=function(e){switch(console.log("Current Xp "+e),!0){case e>=0&&e<300:return{level:1,xpFloor:0,nextLevel:300};case e>=300&&e<900:return{level:2,xpFloor:300,nextLevel:900};case e>=900&&e<2700:return{level:3,xpFloor:900,nextLevel:2700};case e>=2700&&e<6500:return{level:4,xpFloor:2700,nextLevel:6500};case e>=6500&&e<14e3:return{level:5,xpFloor:6500,nextLevel:14e3};case e>=14e3&&e<23e3:return{level:6,xpFloor:14e3,nextLevel:23e3};case e>=23e3&&e<34e3:return{level:7,xpFloor:23e3,nextLevel:34e3};case e>=34e3&&e<48e3:return{level:8,xpFloor:34e3,nextLevel:48e3};case e>=48e3&&e<64e3:return{level:9,xpFloor:48e3,nextLevel:64e3};case e>=64e3&&e<85e3:return{level:10,xpFloor:64e3,nextLevel:85e3};case e>=85e3&&e<1e5:return{level:11,xpFloor:85e3,nextLevel:1e5};case e>=1e5&&e<12e4:return{level:12,xpFloor:1e5,nextLevel:12e4};case e>=12e4&&e<14e4:return{level:13,xpFloor:12e4,nextLevel:14e4};case e>=14e4&&e<165e3:return{level:14,xpFloor:14e4,nextLevel:165e3};case e>=165e3&&e<195e3:return{level:15,xpFloor:165e3,nextLevel:195e3};case e>=195e3&&e<225e3:return{level:16,xpFloor:195e3,nextLevel:225e3};case e>=225e3&&e<265e3:return{level:17,xpFloor:225e3,nextLevel:265e3};case e>=265e3&&e<305e3:return{level:18,xpFloor:265e3,nextLevel:305e3};case e>=305e3&&e<355e3:return{level:19,xpFloor:305e3,nextLevel:355e3};case e>=355e3:return{level:20,xpFloor:355e3};default:return null}},J=t(55),q=t.n(J);function Q(){var e=Object(c.a)(["\n    position: relative;\n    width: ",";\n    margin: 0 auto;\n    height: 50px;\n    border: 3px solid ",";\n    border-radius: 5px;\n"]);return Q=function(){return e},e}var K=l.b.div(Q(),function(e){return e.percent||"100%"},function(e){return e.theme.borderColor});function Y(){var e=Object(c.a)(["\n    font-size: 1.5em;\n    color: #ffc22a;\n    position: absolute;\n    margin: 12px 0;\n    width: 100%;\n    text-align: center;\n"]);return Y=function(){return e},e}var Z=l.b.h4(Y());function $(){var e=Object(c.a)(["\n    width: ",";\n    height: 101%;\n    background: ",";\n    -webkit-transition: width 2s; /* For Safari 3.1 to 6.0 */\n    transition: width 1s;\n    border-radius: 2px;\n    ","\n"]);return $=function(){return e},e}var ee=l.b.div($(),function(e){return e.percent||"0"},function(e){return e.theme.fillColor},function(e){return e.isReseting?"\n         -webkit-transition: width 0s; /* For Safari 3.1 to 6.0 */\n         transition: width 0s\n    ":"\n        -webkit-transition: width 2s; /* For Safari 3.1 to 6.0 */\n         transition: width 1s\n    "});function ne(){var e=Object(c.a)(["\n    color: ",";\n    font-size: 40px;\n    width: ",";\n    text-align: ",";\n    margin: ",";\n    b {\n        font-weight: bold;\n    }\n"]);return ne=function(){return e},e}var te=l.b.h1(ne(),function(e){return e.theme.borderColor},function(e){return e.width||"100%"},function(e){return e.textAlign||"center"},function(e){return e.margin||"0 auto"});function re(){var e=Object(c.a)(["\n    top: calc(50% - 50px);\n    width: 80%;\n    margin: 0 auto;\n"]);return re=function(){return e},e}var oe=l.b.div(re());function ie(){var e=Object(c.a)(["\n    position: relative;\n    width: 100px;\n    height: 100px;\n    top: 14.5px;\n    background-image: url(",");\n    background-repeat: no-repeat;\n    background-position: center;\n    margin: 0 auto;\n    z-index: 100;\n"]);return ie=function(){return e},e}oe.Level=te,oe.FillContainer=K,oe.CurrXp=Z,oe.Fill=ee;var ae=l.b.div(ie(),function(e){return e.theme.emblem}),ce=function(e){function n(){var e,t;Object(k.a)(this,n);for(var r=arguments.length,o=new Array(r),i=0;i<r;i++)o[i]=arguments[i];return(t=Object(M.a)(this,(e=Object(I.a)(n)).call.apply(e,[this].concat(o)))).state={newXpInput:0,fanFare:new Audio(G.a)},t.handleXpStore=function(){localStorage.setItem("xp",t.props.currXp)},t}return Object(R.a)(n,e),Object(X.a)(n,[{key:"componentDidMount",value:function(){var e=this;window.addEventListener("beforeunload",this.handleXpStore),N.database().ref().child("xp").on("value",function(n){if(e.props.setCurrXpAction(n.val()),n.val()>=e.props.currLevel.nextLevel){var t=e.props.currLevel.nextLevel;e.props.setCurrXpAction(t),setTimeout(function(){console.log("Before Levelup",n.val());var e=P(n.val());this.props.setCurrLevelAction(e),this.props.setCurrXpAction(n.val()),this.props.toggleModalAction("levelUp",!0)}.bind(e),1e3)}else{var r=P(n.val());e.props.setCurrLevelAction(r)}})}},{key:"componentWillMount",value:function(){var e=localStorage.getItem("xp");if(console.log("Getting current xp",e),e){console.log("setting curr xp and level"),this.props.setCurrXpAction(e);var n=P(e);this.props.setCurrLevelAction(n)}}},{key:"componentWillUnmount",value:function(){window.removeEventListener("beforeunload",this.handleXpStore)}},{key:"render",value:function(){if(this.props.currLevel){var e=this.props.currXp-this.props.currLevel.xpFloor,n=this.props.currLevel.nextLevel-this.props.currLevel.xpFloor;console.log("Curr XP "+e,"goal "+n);var t=e/n*100;return console.log(t),this.props.currXp&&this.props.currLevel?o.a.createElement(oe,null,o.a.createElement(oe.Level,null,"Level ",o.a.createElement("b",null,this.props.currLevel.level?this.props.currLevel.level:null)),o.a.createElement(ae,null),o.a.createElement(oe.FillContainer,null,o.a.createElement(oe.CurrXp,null,this.props.currXp," / ",this.props.currLevel.nextLevel),o.a.createElement(oe.Fill,{isReseting:this.props.isReseting,percent:t+"%"}))):o.a.createElement("h1",null,"Loading")}return o.a.createElement("h1",null,"Loading")}}]),n}(r.Component),le=Object(p.b)(function(e){return{currXp:e.xpBarReducer.currXp,currLevel:e.xpBarReducer.currLevel}},{setCurrLevelAction:function(e){return function(n){return n({type:"SET_CURR_LEVEL",currLevel:e})}},setCurrXpAction:function(e){return function(n){return n({type:"SET_CURR_XP",currXp:e})}},toggleModalAction:_})(ce);function ue(){var e=Object(c.a)(["\n  from {\n    opacity: 1;\n  }\n\n  to {\n    opacity: 0;\n  }\n"]);return ue=function(){return e},e}function se(){var e=Object(c.a)(["\n  from {\n    opacity: 0;\n  }\n\n  to {\n    opacity: 1;\n  }\n"]);return se=function(){return e},e}function pe(){var e=Object(c.a)(["\n  from {\n    transform: rotate(0deg);\n  }\n\n  to {\n    transform: rotate(360deg);\n  }\n"]);return pe=function(){return e},e}var fe=Object(l.c)(pe()),de={fadeIn:{time:"500ms",keyframes:Object(l.c)(se())},fadeOut:{time:"500ms",keyframes:Object(l.c)(ue())},rotate:{time:"700ms",keyframes:fe}};function ve(){var e=Object(c.a)(["\n    position: absolute;\n    width:100%;\n    height: 100%;\n    background-color: rgba(0,0,0,0.5);\n    z-index: 100;\n"]);return ve=function(){return e},e}var me=l.b.div(ve());function he(){var e=Object(c.a)(["\n    display: flex;\n    position: relative;\n    justify-content: center;\n    align-items: center;\n    width: 300px;\n    height: auto;\n    background-color: #fff;\n    z-index: 200;\n\n"]);return he=function(){return e},e}var be=l.b.div(he());function ge(){var e=Object(c.a)(["\n    display: flex;\n    width: ",";\n    flex-flow: column nowrap;\n    justify-content: center;\n    align-items: center;\n    margin: 0 auto;\n"]);return ge=function(){return e},e}var xe=l.b.form(ge(),function(e){return e.width||"100%"});function we(){var e=Object(c.a)(["\n    display: flex;\n    width: 100%;\n    flex-flow: row nowrap;\n    margin: ",";\n    justify-content: ",";\n    align-items: ",";\n"]);return we=function(){return e},e}var Oe=l.b.div(we(),function(e){return e.margin||"0"},function(e){return e.justifyContent||"center"},function(e){return e.alignItems||"center"});function ye(){var e=Object(c.a)(["\n    width: ",";\n    height: 30px;\n    margin: ",";\n    color: #333333;\n    border: 3px solid #e7e7e7;\n    border-radius: 3px;\n"]);return ye=function(){return e},e}var je=l.b.input(ye(),function(e){return e.width||"calc(100% - 3px)"},function(e){return e.margin||"0"});function Le(){var e=Object(c.a)(["\n    display: flex;\n    width: 100%;\n    flex-flow: column nowrap;\n    margin: ",";\n    justify-content: ",";\n    align-items: ",";\n"]);return Le=function(){return e},e}var Ee=l.b.div(Le(),function(e){return e.margin||"0"},function(e){return e.justifyContent||"center"},function(e){return e.alignItems||"center"});function Ce(){var e=Object(c.a)(["\n    font-size: 1em;\n    width: 100%;\n    text-align: left;\n    margin: 0.5em 0;\n    font-style: italic;\n"]);return Ce=function(){return e},e}var Ae=l.b.label(Ce());function Fe(){var e=Object(c.a)(["\n    width: ",";\n    height: 40px;\n    max-width: 300px;\n    margin: 1em auto;\n    color: #ffffff;\n    font-size: 1em;\n    font-weight: bold;\n    border-radius: 5px;\n    background-color: #ffc22a;\n"]);return Fe=function(){return e},e}var ke=l.b.button(Fe(),function(e){return e.width||"100%"});function Xe(){var e=Object(c.a)(["\n    font-size: 1em;\n    width: ",";\n    text-align: ",";\n    margin: ",";\n"]);return Xe=function(){return e},e}var Me=l.b.q(Xe(),function(e){return e.width||"100%"},function(e){return e.textAlign||"left"},function(e){return e.margin||"0 auto"});function Ie(){var e=Object(c.a)(["\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    width: 100%;\n    height: 100%;\n    position: fixed;\n    top: 0;\n    left: 0;\n    transition: visibility "," linear;\n    animation: "," "," linear;\n    visibility: ",";\n"]);return Ie=function(){return e},e}var Re=l.b.div(Ie(),de.fadeIn.time,function(e){return e.isVisible?de.fadeIn.keyframes:de.fadeOut.keyframes},de.fadeIn.time,function(e){return e.isVisible?"visible":"hidden"});function _e(){var e=Object(c.a)(["\n    margin: ",";\n    display: ","; \n    mask: ",";\n    #path12357{\n        mask: url(",") no-repeat 100% 100%;;\n    }\n"]);return _e=function(){return e},e}Re.Overlay=me,Re.Box=be,Re.Close=B,Re.Icon=B,Re.Heading=te,Re.Quote=Me,Re.Form=xe,Re.FormRow=Oe,Re.FieldGroup=Ee,Re.Input=je,Re.Label=Ae,Re.Button=ke;var Te=l.b.svg(_e(),function(e){return e.margin||"0 auto"},function(e){return e.display||"block"},function(e){return e.mask||"none"},q.a),Se=function(e){function n(){return Object(k.a)(this,n),Object(M.a)(this,Object(I.a)(n).apply(this,arguments))}return Object(R.a)(n,e),Object(X.a)(n,[{key:"render",value:function(){return o.a.createElement(Te,Object.assign({},this.props,{width:"60px",height:"60px",version:"1.1",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 1000 1000","enable-background":"new 0 0 1000 1000",xmlSpace:"preserve"}),o.a.createElement("metadata",null," Svg Vector Icons : http://www.onlinewebfonts.com/icon "),o.a.createElement("g",null,o.a.createElement("g",{transform:"translate(0.000000,511.000000) scale(0.100000,-0.100000)"},o.a.createElement("path",{d:"M637.1,3280.4c-183.9-55.2-259.5-92-345.3-165.5c-91.9-81.7-106.3-106.3-145.1-257.5c-45-171.6-24.5-235,112.4-384.1c132.8-143,183.9-228.9,183.9-314.7c0-73.6-94-257.5-190-378c-38.8-47-87.9-118.5-108.3-157.3c-47-94-49-273.8,0-363.7c55.2-106.3,188-222.7,335.1-294.2l136.9-67.4l480.2-14.3c353.5-8.2,543.5-24.5,725.4-57.2c134.9-24.5,275.8-49,312.6-55.2l65.4-12.3V904c0,226.8,116.5,745.8,202.3,899.1c10.2,18.4-22.5,67.4-104.2,151.2c-141,147.1-300.4,382.1-433.2,639.6c-175.7,341.2-376,559.9-617.1,668.2C1109.1,3323.3,810.8,3333.5,637.1,3280.4z"}),o.a.createElement("path",{d:"M4713.5,3296.7c-322.8-40.9-754-212.5-1074.8-427c-200.2-134.9-598.7-533.3-729.5-731.5c-222.7-335.1-359.6-688.6-416.8-1066.6c-53.1-363.7,16.4-1452.8,118.5-1857.4c89.9-359.6,298.3-645.7,535.3-733.5c255.4-96,388.2-190,474.1-339.2c26.6-45,85.8-194.1,132.8-329c102.2-302.4,153.2-378,306.5-478.1c406.6-263.6,1430.3-265.6,1834.9-4.1c151.2,100.1,206.4,183.9,310.6,482.2c47,134.9,100.1,271.8,116.5,304.4c61.3,120.6,185.9,228.8,337.1,296.3c259.5,114.4,290.1,132.8,396.4,239.1c171.7,167.5,292.2,470,353.5,876.6c71.5,478.1,92,1440.5,36.8,1681.6c-122.6,529.2-347.4,933.8-737.6,1324.1c-255.4,255.4-453.6,396.4-756,541.5C5522.6,3280.4,5126.3,3349.8,4713.5,3296.7z M4147.5,244c175.7-36.8,296.3-104.2,347.4-190c53.1-89.9,79.7-322.9,55.2-490.4c-24.5-171.6-120.6-365.8-226.8-463.8c-114.4-102.2-310.6-192.1-457.7-206.4c-261.5-26.6-641.6,91.9-801,251.3c-114.4,114.4-155.3,214.6-165.5,408.7c-20.4,390.3,167.5,617.1,578.3,700.8C3614.2,280.8,4000.4,276.7,4147.5,244z M6542.3,233.8c382.1-98.1,537.4-302.4,517-682.5c-6.1-134.9-20.4-185.9-67.4-275.8c-104.2-190-331-318.8-647.7-369.8c-206.4-34.7-351.5-14.3-525.1,73.6c-314.6,157.3-467.9,482.2-412.8,874.5c24.5,181.9,59.3,245.2,167.6,308.5C5769.9,276.7,6237.8,311.4,6542.3,233.8z M5095.6-914.6c67.4-32.7,94-83.8,220.7-404.6c118.5-306.5,130.8-376,81.7-467.9c-42.9-83.8-128.7-112.4-306.5-98.1c-81.7,6.1-183.9,2-228.9-6.1c-165.5-38.8-333.1,69.5-333.1,214.6c0,67.4,143,470,226.8,637.5C4834-885.9,4950.5-843,5095.6-914.6z"}),o.a.createElement("path",{d:"M8804.2,3282.4c-271.8-98.1-494.5-329-688.6-719.2c-114.4-230.9-277.9-467.9-427.1-617.1l-132.8-134.8l69.5-202.3c75.6-220.7,122.6-455.6,145.1-707c10.2-132.8,18.4-157.3,47-149.2c273.8,81.7,735.6,134.9,1176.9,134.9c388.2,2,474,22.5,672.2,163.5c251.3,181.9,298.3,427.1,124.6,668.2c-294.3,404.6-302.4,478.1-73.6,729.5c161.4,177.8,179.8,232.9,134.8,410.7c-36.8,143-75.6,200.2-188,286.1C9472.4,3294.6,9035.1,3364.1,8804.2,3282.4z"}),o.a.createElement("path",{d:"M7645.6-740.9c-51.1-273.8-202.3-613-339.2-754l-61.3-63.3l138.9-83.8c486.3-290.1,764.2-559.9,1013.5-986.9c134.9-230.9,271.8-365.7,435.2-425c247.2-94,449.5-32.7,547.6,165.5c28.6,57.2,53.1,122.6,53.1,143c0,83.8,96,279.9,255.4,517c212.5,316.7,239.1,406.6,190,647.7c-57.2,273.8-149.2,408.7-331,488.3c-87.9,38.8-159.4,47-472,59.3l-367.8,16.3l-490.4,163.5c-269.7,89.9-504.7,169.6-523.1,177.8C7668.1-665.3,7657.9-679.6,7645.6-740.9z"}),o.a.createElement("path",{d:"M1771.1-855.3L1291-1016.7l-367.8-16.3c-316.7-12.3-382.1-20.4-476.1-61.3c-136.9-59.3-235-173.7-288.1-335.1c-104.2-314.6-77.7-467.9,138.9-784.6c177.8-255.4,214.5-329,257.5-496.5c18.4-71.5,55.2-167.5,81.7-212.5c96-167.5,300.4-216.6,535.4-128.7c151.2,55.2,337.1,239.1,433.2,425c169.6,326.9,447.5,617.1,837.8,872.5c130.8,85.8,245.2,163.5,255.4,171.6c10.2,8.2-18.4,57.2-63.3,108.3c-108.3,122.6-218.6,353.5-286.1,594.6c-30.6,106.3-65.4,192.1-77.6,192.1C2261.5-689.8,2034.7-765.4,1771.1-855.3z"}))))}}]),n}(r.Component);function ze(){var e=Object(c.a)(["\n    display: flex;\n    flex-flow: column nowrap;\n    justify-content: center;\n    align-items: middle;\n    width: 100%;\n    height: 100%;\n"]);return ze=function(){return e},e}var Be=l.b.div(ze()),De=function(e){function n(){var e,t;Object(k.a)(this,n);for(var r=arguments.length,o=new Array(r),i=0;i<r;i++)o[i]=arguments[i];return(t=Object(M.a)(this,(e=Object(I.a)(n)).call.apply(e,[this].concat(o)))).state={newXpInput:0,fanFare:new Audio(G.a)},t}return Object(R.a)(n,e),Object(X.a)(n,[{key:"componentDidMount",value:function(){this.state.fanFare.play()}},{key:"render",value:function(){return o.a.createElement(Be,null,o.a.createElement(Se,null),o.a.createElement(Re.Heading,{textAlign:"center",margin:"0.5em 0"},"Ye be level 5 now!"),o.a.createElement(Re.Quote,{textAlign:"Center",margin:"0.5em 0"},"In an honest service there is thin commons, low wages, and hard labor...No, a merry life and a short one, shall be my motto."),o.a.createElement(Re.Button,{onClick:this.props.toggleModalAction,width:"60%"},"Continue"))}}]),n}(r.Component),Ve=Object(p.b)(function(e){return{}},{toggleModalAction:_})(De),Ue=function(e){function n(){var e,t;Object(k.a)(this,n);for(var r=arguments.length,i=new Array(r),a=0;a<r;a++)i[a]=arguments[a];return(t=Object(M.a)(this,(e=Object(I.a)(n)).call.apply(e,[this].concat(i)))).renderModal=function(){switch(t.props.modalType){case"levelUp":return o.a.createElement(Ve,null);default:return o.a.createElement("h1",null,"Invalid Modal Type")}},t}return Object(R.a)(n,e),Object(X.a)(n,[{key:"render",value:function(){return console.log("rendering"),o.a.createElement(Re,{isVisible:this.props.isVisible},o.a.createElement(Re.Overlay,null),o.a.createElement(Re.Box,null,this.renderModal()))}}]),n}(r.Component),He=Object(p.b)(function(e){return{modalType:e.modalReducer.modalType,isVisible:e.modalReducer.isVisible}},{})(Ue);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a.a.render(o.a.createElement(function(){return o.a.createElement(p.a,{store:j()},o.a.createElement(l.a,{theme:F},o.a.createElement(s,null,o.a.createElement(V,null),o.a.createElement(le,null),o.a.createElement(He,null))))},null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},39:function(e,n,t){e.exports=t.p+"static/media/LevelUp.5ee8aef7.wav"},55:function(e,n,t){e.exports=t.p+"static/media/gold.6e20cf60.jpg"},76:function(e,n,t){e.exports=t.p+"static/media/pirate_ship.8de5ec1d.svg"},77:function(e,n,t){e.exports=t.p+"static/media/helmet.598de562.svg"},79:function(e,n,t){e.exports=t(146)},84:function(e,n,t){},89:function(e,n,t){e.exports=t.p+"static/media/book.f704b87d.svg"},90:function(e,n,t){e.exports=t.p+"static/media/spell.bdb13c26.svg"}},[[79,1,2]]]);
//# sourceMappingURL=main.3b19af65.chunk.js.map