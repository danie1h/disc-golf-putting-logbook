(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{18:function(e,t,a){e.exports=a.p+"static/media/pl-logo.c4139eef.png"},20:function(e,t,a){e.exports=a(57)},25:function(e,t,a){},36:function(e,t,a){},40:function(e,t,a){},42:function(e,t,a){},44:function(e,t,a){},46:function(e,t,a){},48:function(e,t,a){},50:function(e,t,a){},52:function(e,t,a){},54:function(e,t,a){},57:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),i=a(17),c=a.n(i),l=(a(25),a(7)),o=a(8),r=a(9),u=a(11),m=a(10),h=a(12),p=a(2),d=a(59),g=a(58),v=a(61),f=a(60),E=a(6),b=(a(36),function(){return s.a.createElement("div",{className:"home"},s.a.createElement("h1",{className:"title"},"Disc Golf Putting Logbook"),s.a.createElement("h2",{className:"description"},"Log Putts, View Stats, Learn and Improve, Repeat"),s.a.createElement(g.a,{to:"/disc-golf-putting-logbook/log",className:"get-started"},"Get Started"))}),k=(a(40),function(){return s.a.createElement("article",{className:"about"},s.a.createElement("header",{className:"page-header"},s.a.createElement("h1",{className:"title"},"About the Putting Logbook")),s.a.createElement("hr",{className:"divider"}),s.a.createElement("section",{className:"overview"},s.a.createElement("p",{className:"description"},"In the sport of ",s.a.createElement("a",{href:"https://www.pdga.com/introduction"},"Disc Golf"),", putting is an essential aspect and, arguably, one of the greatest challenges in a round. It's not uncommon for players to frequently miss their mark of the basket. Consistency is key, and this project will enable disc golfers to track their putting consistency. By identifying patterns, players will have the ability to leverage their stats to make the necessary modifications that will make them a better putter and, in turn, an improved player. Cue the Putting Logbook.")),s.a.createElement("section",{className:"resources"},s.a.createElement("header",{className:"page-header"},s.a.createElement("h2",{className:"resources-title"},"Related Disc Golf Readings")),s.a.createElement("hr",{className:"divider"}),s.a.createElement("ul",{className:"resource-list"},s.a.createElement("li",null,s.a.createElement("a",{href:"https://www.innovadiscs.com/home/disc-golf-faq/glossary-of-terms/"},"Lingo")),s.a.createElement("li",null,s.a.createElement("a",{href:"https://allthingsdiscgolf.com/two-disc-golf-putting-tips-focus-simulation/"},"Tips")),s.a.createElement("li",null,s.a.createElement("a",{href:"https://mainediscgolf.com/greenhorn/simple-putting-drill/"},"Drills")),s.a.createElement("li",null,s.a.createElement("a",{href:"https://dgputtheads.com/disc-golf-putting-games"},"Games")))))}),C=(a(42),function(e){return s.a.createElement("button",{className:e.className,onClick:e.onClick},e.content)}),N=(a(44),function(e){return s.a.createElement("div",{className:"putting-details"},s.a.createElement("h2",{className:"putting-details-title"},"Hole #",e.holeNum),s.a.createElement("div",{className:"hit-or-miss"},s.a.createElement(C,{className:"hit-btn main-btn",onClick:e.handleHitBtn,content:"Hit"}),s.a.createElement(C,{className:"miss-btn main-btn",onClick:e.handleMissBtn,content:"Miss"})))}),T=(a(46),function(e){var t="hit"===e.mode?s.a.createElement(E.Circle,{x:e.x,y:e.y,radius:20,fill:"green",draggable:!0,onDragEnd:e.captureDrag}):"miss"===e.mode?s.a.createElement(E.Star,{x:e.x,y:e.y,numPoints:7,innerRadius:10,outerRadius:20,fill:"red",draggable:!0,onDragEnd:e.captureDrag}):s.a.createElement(E.Line,null);return s.a.createElement("div",{className:"track-putt"},s.a.createElement("div",{className:"canvas-container",onClick:e.captureClick},s.a.createElement(E.Stage,{width:e.canvasWidth,height:e.canvasHeight},s.a.createElement(E.Layer,null,t))))}),y=(a(48),function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).state={activeTagIndexList:[],metaTagOutput:a.props.metaTagsList.map(function(e,t){return s.a.createElement(C,{key:t,className:"tag-btn",content:e,onClick:function(e){a.props.captureMetaTagClick(e),a.activateMetaTags(e)}})})},a.resetActiveMetaTags=a.resetActiveMetaTags.bind(Object(p.a)(Object(p.a)(a))),a.activateMetaTags=a.activateMetaTags.bind(Object(p.a)(Object(p.a)(a))),a.updateMetaTags=a.updateMetaTags.bind(Object(p.a)(Object(p.a)(a))),a}return Object(h.a)(t,e),Object(r.a)(t,[{key:"updateMetaTags",value:function(e,t){var a=this;return e.map(function(e,n){return t.includes(n)?s.a.createElement(C,{key:n,className:"tag-btn active",content:e,onClick:function(e){a.props.captureMetaTagClick(e),a.activateMetaTags(e)}}):s.a.createElement(C,{key:n,className:"tag-btn",content:e,onClick:function(e){a.props.captureMetaTagClick(e),a.activateMetaTags(e)}})})}},{key:"activateMetaTags",value:function(e){var t=this.state.metaTagOutput.findIndex(function(t){return e.target.innerText===t.props.content});if(this.state.activeTagIndexList.includes(t)){var a=this.state.activeTagIndexList.filter(function(e,a){return e!==t}),n=this.updateMetaTags(this.props.metaTagsList,a);this.setState({activeTagIndexList:this.state.activeTagIndexList.filter(function(e,a){return e!==t}),metaTagOutput:n})}else{var s=Object(l.a)(this.state.activeTagIndexList).concat([t]),i=this.updateMetaTags(this.props.metaTagsList,s);this.setState({activeTagIndexList:Object(l.a)(this.state.activeTagIndexList).concat([t]),metaTagOutput:i})}}},{key:"resetActiveMetaTags",value:function(e){var t=this.updateMetaTags(this.props.metaTagsList,[]);this.setState({activeTagIndexList:[],metaTagOutput:t})}},{key:"render",value:function(){var e=this;return s.a.createElement("div",{className:"log-putt"},s.a.createElement("header",{className:"page-header"},s.a.createElement("h1",{className:"title"},"Log"),s.a.createElement("div",{className:"header-options"},s.a.createElement(C,{className:"reset-all-btn",onClick:function(){e.props.onClickReset(),e.resetActiveMetaTags()},content:"Reset All"}),s.a.createElement(g.a,{to:"/disc-golf-putting-logbook/results",className:"get-results"},"Results"))),s.a.createElement("hr",{className:"divider"}),s.a.createElement("div",{className:"log-putt-controls"},s.a.createElement(N,{className:"putt-info",holeNum:this.props.holeNum,handleHitBtn:this.props.handleHitBtn,handleMissBtn:this.props.handleMissBtn}),s.a.createElement(T,{mode:this.props.mode,x:this.props.x,y:this.props.y,captureDrag:this.props.captureCanvasDrag,captureClick:this.props.captureCanvasClick,canvasWidth:this.props.canvasWidth,canvasHeight:this.props.canvasHeight}),s.a.createElement("div",{className:"tags"},this.state.metaTagOutput),s.a.createElement(C,{className:"next-btn main-btn",onClick:function(){e.props.onClickNext(),e.resetActiveMetaTags()},content:"Next"})))}}]),t}(n.Component)),O=(a(50),function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this.props.puttLog.map(function(e){return s.a.createElement("tr",{key:e.holeNum},s.a.createElement("td",null,e.holeNum),s.a.createElement("td",null,e.mode),s.a.createElement("td",null,e.shapeYPosition,", ",e.shapeXPosition),s.a.createElement("td",null,e.activeMetaTags.join(", ")))});return s.a.createElement("div",{className:"putting-results"},s.a.createElement("header",{className:"page-header"},s.a.createElement("h1",{className:"title"},"Results"),s.a.createElement("p",{className:"coming-soon"},"More features and stats coming soon!")),s.a.createElement("hr",{className:"divider"}),e.length>0?s.a.createElement("div",null,s.a.createElement("div",{className:"canvas-container"},s.a.createElement(E.Stage,{width:this.props.canvasWidth,height:this.props.canvasHeight},s.a.createElement(E.Layer,null,this.props.puttCanvasShapes))),s.a.createElement("table",{className:"data-table"},s.a.createElement("thead",null,s.a.createElement("tr",null,s.a.createElement("th",null,"Hole #"),s.a.createElement("th",null,"Putt Attempt"),s.a.createElement("th",null,"Position"),s.a.createElement("th",null,"Tags"))),s.a.createElement("tbody",null,e))):s.a.createElement("p",{id:"no-data"},"No Data Available. Log your putts ",s.a.createElement(g.a,{to:"/disc-golf-putting-logbook/log"},"here"),", then check your results."))}}]),t}(n.Component)),j=(a(52),function(){return s.a.createElement("div",{className:"no-match"},s.a.createElement("h1",{className:"title"},"404 Error: Page Not Found"))}),M=a(18),x=a.n(M),L=(a(54),function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).state={puttLog:[],puttCanvasShapes:[],holeNum:1,mode:"",canvasWidth:300,canvasHeight:300,shapeXCoordinate:150,shapeYCoordinate:150,activeMetaTags:[]},a.handleHitBtn=a.handleHitBtn.bind(Object(p.a)(Object(p.a)(a))),a.handleMissBtn=a.handleMissBtn.bind(Object(p.a)(Object(p.a)(a))),a.captureCanvasClick=a.captureCanvasClick.bind(Object(p.a)(Object(p.a)(a))),a.captureCanvasDrag=a.captureCanvasDrag.bind(Object(p.a)(Object(p.a)(a))),a.captureNextClick=a.captureNextClick.bind(Object(p.a)(Object(p.a)(a))),a.captureMetaTagClick=a.captureMetaTagClick.bind(Object(p.a)(Object(p.a)(a))),a.captureResetClick=a.captureResetClick.bind(Object(p.a)(Object(p.a)(a))),a}return Object(h.a)(t,e),Object(r.a)(t,[{key:"handleHitBtn",value:function(){this.setState({mode:"hit"})}},{key:"handleMissBtn",value:function(){this.setState({mode:"miss"})}},{key:"captureCanvasClick",value:function(e){var t=document.getElementsByClassName("konvajs-content")[0].offsetLeft,a=document.getElementsByClassName("konvajs-content")[0].offsetTop;this.setState({shapeXCoordinate:e.clientX-t,shapeYCoordinate:e.pageY-a})}},{key:"captureCanvasDrag",value:function(e){this.setState({shapeXCoordinate:e.target.x(),shapeYCoordinate:e.target.y()})}},{key:"captureNextClick",value:function(){var e=function(e,t,a,n,s){var i=e/2,c=t/2,l=i*s,o={x:"",y:""};return o.x=a<i-l?"left":a>i+l?"right":"center",o.y=n<c-l?"high":n>c+l?"low":"center",o}(this.state.canvasWidth,this.state.canvasHeight,this.state.shapeXCoordinate,this.state.shapeYCoordinate,.1),t="hit"===this.state.mode?s.a.createElement(E.Circle,{key:this.state.holeNum,x:this.state.shapeXCoordinate,y:this.state.shapeYCoordinate,radius:20,fill:"green",stroke:"black"}):s.a.createElement(E.Star,{key:this.state.holeNum,x:this.state.shapeXCoordinate,y:this.state.shapeYCoordinate,numPoints:7,innerRadius:10,outerRadius:20,fill:"red",stroke:"black"});this.setState({puttLog:Object(l.a)(this.state.puttLog).concat([{holeNum:this.state.holeNum,mode:this.state.mode,shapeXCoordinate:this.state.shapeXCoordinate,shapeYCoordinate:this.state.shapeYCoordinate,shapeXPosition:e.x,shapeYPosition:e.y,activeMetaTags:this.state.activeMetaTags}]),puttCanvasShapes:Object(l.a)(this.state.puttCanvasShapes).concat([t]),holeNum:this.state.holeNum+1,mode:"",shapeXCoordinate:150,shapeYCoordinate:150,activeMetaTags:[]})}},{key:"captureMetaTagClick",value:function(e){/active/.test(e.target.className)?this.setState({activeMetaTags:this.state.activeMetaTags.filter(function(t){return t!==e.target.innerText})}):this.setState({activeMetaTags:Object(l.a)(this.state.activeMetaTags).concat([e.target.innerText])})}},{key:"captureResetClick",value:function(){this.setState({puttLog:[],puttCanvasShapes:[],holeNum:1,mode:"",shapeXCoordinate:150,shapeYCoordinate:150,activeMetaTags:[]})}},{key:"render",value:function(){var e=this;return s.a.createElement(d.a,null,s.a.createElement("div",{className:"putting-log-app"},s.a.createElement("header",{className:"header-container"},s.a.createElement("div",{className:"header-home"},s.a.createElement(g.a,{to:"/disc-golf-putting-logbook/",className:"header-logo"},s.a.createElement("img",{className:"logo",src:x.a,width:"25",height:"25",alt:"logo"})),s.a.createElement(g.a,{to:"/disc-golf-putting-logbook/",className:"header-title"},"Putting Logbook")),s.a.createElement("nav",{className:"header-nav"},s.a.createElement(g.a,{to:"/disc-golf-putting-logbook/about",className:"header-about"},"About"),s.a.createElement(g.a,{to:"/disc-golf-putting-logbook/log",className:"header-log"},"Log"),s.a.createElement(g.a,{to:"/disc-golf-putting-logbook/results",className:"header-results"},"Results"))),s.a.createElement(v.a,null,s.a.createElement(f.a,{exact:!0,path:"/disc-golf-putting-logbook/",component:b}),s.a.createElement(f.a,{exact:!0,path:"/disc-golf-putting-logbook/about",component:k}),s.a.createElement(f.a,{path:"/disc-golf-putting-logbook/log",render:function(t){return s.a.createElement(y,Object.assign({},t,{holeNum:e.state.holeNum,handleHitBtn:e.handleHitBtn,handleMissBtn:e.handleMissBtn,mode:e.state.mode,x:e.state.shapeXCoordinate,y:e.state.shapeYCoordinate,captureCanvasDrag:e.captureCanvasDrag,captureCanvasClick:e.captureCanvasClick,canvasWidth:e.state.canvasWidth,canvasHeight:e.state.canvasHeight,onClickNext:e.captureNextClick,onClickReset:e.captureResetClick,captureMetaTagClick:e.captureMetaTagClick,metaTagsList:e.props.metaTagsList}))}}),s.a.createElement(f.a,{path:"/disc-golf-putting-logbook/results",render:function(t){return s.a.createElement(O,Object.assign({},t,{puttLog:e.state.puttLog,canvasWidth:e.state.canvasWidth,canvasHeight:e.state.canvasHeight,puttCanvasShapes:e.state.puttCanvasShapes}))}}),s.a.createElement(f.a,{component:j}))))}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(s.a.createElement(L,{metaTagsList:["downhill","uphill","headwind","tailwind","left to right wind","right to left wind","bullseye","c1","c2","outside c2"]}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[20,2,1]]]);
//# sourceMappingURL=main.69c89e77.chunk.js.map