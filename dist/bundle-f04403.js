!function(e){var t={};function a(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,a),r.l=!0,r.exports}a.m=e,a.c=t,a.d=function(e,t,o){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(a.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)a.d(o,r,function(t){return e[t]}.bind(null,r));return o},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="",a(a.s=0)}([function(e,t,a){"use strict";a.r(t);var o=function(e,t,a){return e>a?a:e<t?t:e},r=function(e,t){return Math.log(t)/Math.log(e)},n=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return function(t,a){a.xpos+a.radius+t.radius>t.xpos&&a.xpos<t.xpos+t.radius+a.radius&&a.ypos+a.radius+t.radius>t.ypos&&a.ypos<t.ypos+t.radius+a.radius&&s(t,a,e)}},s=function(e,t,a){var r=e.radius+t.radius,n=Math.sqrt(Math.pow(e.xpos-t.xpos,2)+Math.pow(e.ypos-t.ypos,2));r>n&&(e.nextMomentum.x+=o(t.momentum.x*t.mass*(n/r)*a,-50,50),t.nextMomentum.x=t.nextMomentum.x*o(t.mass/e.mass,.99,1),t.nextMomentum.x+=o(e.momentum.x*e.mass*(n/r)*a,-50,50),e.nextMomentum.x=e.nextMomentum.x*o(e.mass/t.mass,.99,1),e.nextMomentum.y+=o(t.momentum.y*t.mass*(n/r)*a,-50,50),t.nextMomentum.y=t.nextMomentum.y*o(t.mass/e.mass,.99,1),t.nextMomentum.y+=o(e.momentum.y*e.mass*(n/r)*a,-50,50),e.nextMomentum.y=e.nextMomentum.y*o(e.mass/t.mass,.99,1),e.mass<=t.mass?i(t,e,n,a):i(e,t,n,a))},i=function(e,t,a,r){(a-e.radius<0||t.mass<100)&&(e.mass+=t.mass,t.mass=0,e.nextMomentum.x+=t.nextMomentum.x,e.nextMomentum.y+=t.nextMomentum.y);var n=t.massDelta*t.mass*o((t.radius-(a-e.radius))/t.radius,.01,.1)*o(r,.5,2);t.mass-=n,e.mass+=n},u=function(e,t){return e.radius+t.radius>Math.sqrt(Math.pow(e.xpos-t.xpos,2)+Math.pow(e.ypos-t.ypos,2))},m=function(e,t){e.xpos+e.radius>=t.realBoardWidth?(e.nextMomentum.x=-1*e.momentum.x,e.xpos=t.realBoardWidth-e.radius-1):e.xpos-e.radius<=0&&(e.nextMomentum.x=-1*e.momentum.x,e.xpos=0+e.radius+1),e.ypos+e.radius>=t.realBoardHeight?(e.nextMomentum.y=-1*e.momentum.y,e.ypos=t.realBoardHeight-e.radius-1):e.ypos-e.radius<=0&&(e.nextMomentum.y=-1*e.momentum.y,e.ypos=0+e.radius+1)};function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var c=function e(t){var a=this,o=t.x,r=t.y,n=t.mass,s=t.momentum,i=t.realBoardWidth,u=t.realBoardHeight;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),l(this,"move",(function(e){a.momentum=Object.assign({},a.nextMomentum);var t=a.mass>0?a.momentum.x/a.mass:0,o=a.mass>0?a.momentum.y/a.mass:0;a.xpos+=t*e,a.ypos+=o*e})),l(this,"adjustRadius",(function(){a.radius=Math.sqrt(a.mass/Math.PI)})),this.mass=n||Math.floor(1e5*Math.random()+1e4),this.radius=Math.sqrt(this.mass/Math.PI),this.xpos=o||Math.floor(Math.random()*(i-this.radius))+this.radius,this.ypos=r||Math.floor(Math.random()*(u-this.radius))+this.radius,this.momentum=s||{x:Math.floor(1e6*Math.random())-5e5,y:Math.floor(1e6*Math.random())-5e5},this.nextMomentum=Object.assign({},this.momentum),this.color="blue"};c.prototype.momentumDelta=1,c.prototype.massDelta=.5,c.prototype.momentumMax=10;var d=c;function h(e){return(h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function f(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function p(e,t){return!t||"object"!==h(t)&&"function"!=typeof t?g(e):t}function b(e){return(b=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function g(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function x(e,t){return(x=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function w(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var y=function(e){function t(){var e,a;f(this,t);for(var r=arguments.length,n=new Array(r),s=0;s<r;s++)n[s]=arguments[s];return w(g(a=p(this,(e=b(t)).call.apply(e,[this].concat(n)))),"propel",(function(e,t,r,n){if(!(a.mass<=0)){var s=n.mousePos.x-window.innerWidth/2,i=n.mousePos.y-window.innerHeight/2,u=Math.atan2(i,s),m=Math.cos(u),l=Math.sin(u),c=a.mass*o((Date.now()-n.mouseDownTime)/3e4,.01,.1);a.mass-=c;var h=Math.sqrt(c/Math.PI),f=a.xpos+m*a.radius+(m>0?h:-1*h),p=a.ypos+l*a.radius+(l>0?h:-1*h),b={x:50*c*m*2,y:50*c*l*2};t.push(new d({x:f,y:p,mass:c,momentum:b,realBoardWidth:r.realBoardWidth,realBoardHeight:r.realBoardHeight})),a.nextMomentum.x+=-1*b.x*3,a.nextMomentum.y+=-1*b.y*3}})),a}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&x(e,t)}(t,e),t}(d);function v(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var V=function e(t){var a=this,o=t.x,r=t.y,n=t.width,s=t.height,i=t.level,u=void 0===i?0:i;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),v(this,"split",(function(){var t=Math.floor(a.width/2),o=Math.floor(a.height/2);a.quadrants.push(new e({x:a.x,y:a.y,width:t,height:o,level:a.level+1})),a.quadrants.push(new e({x:a.x+t,y:a.y,width:t,height:o,level:a.level+1})),a.quadrants.push(new e({x:a.x,y:a.y+o,width:t,height:o,level:a.level+1})),a.quadrants.push(new e({x:a.x+t,y:a.y+o,width:t,height:o,level:a.level+1}))})),v(this,"clear",(function(){a.dataPoints=[];for(var e=0;e<a.quadrants.length;e++)a.quadrants[e].clear(),a.quadrants[e]=null;0===a.level&&(a.quadrants=[])})),v(this,"insert1",(function(e){var t=a.getIndex(e);if(a.quadrants.length>0&&-1!==t)return a.quadrants[t].insert1(e);if(a.dataPoints.push(e),0===a.quadrants.length&&a.dataPoints.length>a.maxDataPoints){a.split();for(var o=[],r=0;r<a.dataPoints.length;r++)-1!==(t=a.getIndex(a.dataPoints[r]))?a.quadrants[t].insert1(a.dataPoints[r]):o.push(a.dataPoints[r]);a.dataPoints=o}})),v(this,"getIndex",(function(e){return e.xpos-e.radius>a.x&&e.xpos+e.radius<a.halfX&&e.ypos-e.radius>a.y&&e.ypos+e.radius<a.halfY?0:e.xpos-e.radius>a.halfX&&e.xpos+e.radius<a.endX&&e.ypos-e.radius>a.y&&e.ypos+e.radius<a.halfY?1:e.xpos-e.radius>a.x&&e.xpos+e.radius<a.halfX&&e.ypos-e.radius>a.halfY&&e.ypos+e.radius<a.endY?2:e.xpos-e.radius>a.halfX&&e.xpos+e.radius<a.endX&&e.ypos-e.radius>a.halfY&&e.ypos+e.radius<a.endY?3:-1})),v(this,"checkAllCollisions",(function(e){for(var t=0,o=a.dataPoints.length;t<o;t++){for(var r=t+1;r<o;r++)e(a.dataPoints[t],a.dataPoints[r]);for(var n=0,s=a.quadrants.length;n<s;n++)a.quadrants[n].checkCollision(e,a.dataPoints[t])}for(var i=0,u=a.quadrants.length;i<u;i++)a.quadrants[i].checkAllCollisions(e)})),v(this,"checkCollision",(function(e,t){for(var o=0,r=a.dataPoints.length;o<r;o++)e(t,a.dataPoints[o]);for(var n=0,s=a.quadrants.length;n<s;n++)a.quadrants[n].checkCollision(e,t)})),this.quadrants=[],this.x=o,this.y=r,this.width=n,this.height=s,this.endX=this.x+this.width,this.endY=this.y+this.height,this.halfX=this.x+Math.floor(this.width/2),this.halfY=this.y+Math.floor(this.height/2),this.level=u,this.dataPoints=[]};V.prototype.maxDataPoints=10;var S=V;function M(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var A=function e(t){var a=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),M(this,"boardHeight",(function(){return a.realBoardHeight/a.currentZoom})),M(this,"boardWidth",(function(){return a.realBoardWidth/a.currentZoom})),this.boardSize=t.boardSize,this.realBoardWidth=t.realBoardWidth,this.realBoardHeight=t.realBoardHeight,this.baseMass=t.baseMass,this.maxZoom=t.maxZoom,this.absoluteMaxZoom=t.absoluteMaxZoom,this.minZoom=t.minZoom,this.currentZoom=t.currentZoom,this.boardFocus=t.boardFocus};var T=function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.timeBase=t.timeBase,this.timeCoefficient=t.timeCoefficient};var P=function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.mouseDownTime=t.mouseDownTime,this.mouseDownInterval=t.mouseDownInterval,this.mouseOffset=t.mouseOffset,this.mousePos=t.mousePos};function I(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function H(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var O=function e(){var t=this,a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:2e4,s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2e4,i=arguments.length>2?arguments[2]:void 0;I(this,e),H(this,"setupMouse",(function(){t.mouseVars=new P({mouseDownTime:null,mouseDownInterval:null,mouseOffset:{x:0,y:0},mousePos:{x:0,y:0}})})),H(this,"setupTime",(function(){t.timeVars=new T({timeBase:10,timeCoefficient:1})})),H(this,"setupProportions",(function(e,a){var o=parseInt(50/Math.sqrt(1e5/Math.PI)*e/1e3),r=o,n=o;t.boardVars=new A({boardSize:e/3e4,realBoardWidth:e,realBoardHeight:a,baseMass:5e4,maxZoom:o,absoluteMaxZoom:r,minZoom:.7,currentZoom:n,boardFocus:{x:e/2,y:a/2}})})),H(this,"addAmoebas",(function(e,a,o){for(var r=0;r<e;r++){for(var n=a(),s=Math.sqrt(n/Math.PI),i=Math.floor(Math.random()*(t.boardVars.realBoardWidth-s))+s,m=Math.floor(Math.random()*(t.boardVars.realBoardHeight-s))+s,l={x:Math.floor(Math.random()*o)-o/2,y:Math.floor(Math.random()*o)-o/2},c=new d({x:i,y:m,mass:n,momentum:l,realBoardWidth:t.boardVars.realBoardWidth,realBoardHeight:t.boardVars.realBoardHeight});t.amoeboi&&u(t.amoeboi,c);)c.xpos=Math.floor(Math.random()*(t.boardVars.realBoardWidth-s))+s,c.ypos=Math.floor(Math.random()*(t.boardVars.realBoardHeight-s))+s;t.amoebas.push(c)}})),H(this,"setupAmoebas",(function(e){var a,o;t.amoebas=[],t.amoeboi=e?new y({x:t.boardVars.realBoardWidth/2,y:t.boardVars.realBoardHeight/2,mass:1e7,momentum:{x:0,y:0},realBoardWidth:t.boardVars.realBoardWidth,realBoardHeight:t.boardVars.realBoardHeight}):null,t.quadTree=new S({x:0,y:0,width:t.boardVars.realBoardWidth,height:t.boardVars.realBoardHeight}),o=function(){return a=Math.pow(t.boardVars.realBoardHeight/30*Math.PI,2),Math.floor(Math.random()*a*4+a)},t.addAmoebas(parseInt(2*t.boardVars.boardSize),o,1e6),o=function(){return Math.floor(4e6*Math.random()*Math.pow(t.boardVars.boardSize,2)+1e6*Math.pow(t.boardVars.boardSize,2))},t.addAmoebas(parseInt(20*t.boardVars.boardSize),o,1e6),o=function(){return Math.floor(4e5*Math.random()+1e5)},t.addAmoebas(parseInt(700*t.boardVars.boardSize),o,1e6),o=function(){return Math.floor(4e5*Math.random()+1e4)},t.addAmoebas(parseInt(50*t.boardVars.boardSize),o,1e6),o=function(){return Math.floor(1e4*Math.random()+1e4)},t.addAmoebas(parseInt(1e4*t.boardVars.boardSize),o,1e5);for(var r=0;r<t.amoebas.length;r++)t.quadTree.insert1(t.amoebas[r]);e&&(t.amoeboi.mass/=100,t.amoeboi.adjustRadius())})),H(this,"animate",(function(e){if(e.ctx.clearRect(0,0,innerWidth,innerHeight),e.drawField(t.boardVars,t.mouseVars,t.quadTree),"reset"===t.currentStatus)return t.boardVars.maxZoom=4,t.boardVars.currentZoom=2,t.timeVars.timeCoefficient=.5,t.boardVars.baseMass=5e4,t.setupAmoebas(!1),t.boardVars.boardFocus={x:t.boardVars.realBoardWidth/2,y:t.boardVars.realBoardHeight/2},t.currentStatus="homepage",requestAnimationFrame((function(){return t.animate(e)}));if("setup"===t.currentStatus)return t.setupProportions(3e4,3e4),t.setupAmoebas(!0),e.homepageYOffset=0,t.boardVars.currentZoom=4,t.timeVars.timeCoefficient=.5,t.boardVars.baseMass=t.amoeboi.mass,t.boardVars.boardFocus={x:t.amoeboi.xpos,y:t.amoeboi.ypos},t.currentStatus="playing",t.audio.playbackRate=.5+1/(1+Math.pow(Math.E,-10*r(10,t.timeVars.timeCoefficient)))*3.5,requestAnimationFrame((function(){return t.animate(e)}));if("nextLevel"===t.currentStatus)return e.homepageYOffset=0,t.boardVars.currentZoom=4,t.timeVars.timeCoefficient=.5,t.setupProportions(1.2*t.boardVars.realBoardWidth+(500-1.2*t.boardVars.realBoardWidth%500),1.2*t.boardVars.realBoardHeight+(500-1.2*t.boardVars.realBoardHeight%500)),t.setupAmoebas(!0),t.boardVars.baseMass=t.amoeboi.mass,t.boardVars.boardFocus={x:t.amoeboi.xpos,y:t.amoeboi.ypos},t.currentStatus="playing",t.audio.playbackRate=.5+1/(1+Math.pow(Math.E,-10*r(10,t.timeVars.timeCoefficient)))*3.5,requestAnimationFrame((function(){return t.animate(e)}));if("homepage"===t.currentStatus)return t.moveAmoebas(e),e.makeHomepage(t.mouseVars,t.muted),requestAnimationFrame((function(){return t.animate(e)}));if("movingToInstructions"===t.currentStatus)return e.homepageYOffset>-1e3?e.homepageYOffset-=50:t.currentStatus="instructions",t.moveAmoebas(e),e.makeHomepage(t.mouseVars,t.muted),requestAnimationFrame((function(){return t.animate(e)}));if("instructions"===t.currentStatus)return t.moveAmoebas(e),e.makeHomepage(t.mouseVars,t.muted),requestAnimationFrame((function(){return t.animate(e)}));if("movingToHomePage"===t.currentStatus)return e.homepageYOffset<0?e.homepageYOffset+=50:t.currentStatus="homepage",t.moveAmoebas(e),e.makeHomepage(t.mouseVars,t.muted),requestAnimationFrame((function(){return t.animate(e)}));if("coloringLoseScreen"===t.currentStatus)return t.boardVars.boardFocus.x+=t.boardVars.boardFocus.x<t.boardVars.realBoardWidth/2?10:-10,t.boardVars.boardFocus.y+=t.boardVars.boardFocus.y<t.boardVars.realBoardHeight/2?10:-10,t.boardVars.currentZoom=t.boardVars.currentZoom>1?.9*t.boardVars.currentZoom:t.boardVars.currentZoom,t.boardVars.baseMass=0,t.moveAmoebas(e),t.homepageAlpha<.5?(t.homepageAlpha+=.1,e.ctx.globalAlpha=t.homepageAlpha,e.ctx.fillStyle="black",e.ctx.fillRect(0,0,window.innerWidth,window.innerHeight),requestAnimationFrame((function(){return t.animate(e)}))):(e.ctx.globalAlpha=t.homepageAlpha,e.ctx.fillStyle="black",e.ctx.fillRect(0,0,window.innerWidth,window.innerHeight),e.homepageYOffset=1500,t.homepageAlpha=0,t.currentStatus="movingToLoseScreen",requestAnimationFrame((function(){return t.animate(e)})));if("movingToLoseScreen"===t.currentStatus)return e.homepageYOffset>1e3?e.homepageYOffset-=50:t.currentStatus="losescreen",t.moveAmoebas(e),e.makeHomepage(t.mouseVars,t.muted),requestAnimationFrame((function(){return t.animate(e)}));if("losescreen"===t.currentStatus)return t.moveAmoebas(e),e.makeHomepage(t.mouseVars,t.muted),requestAnimationFrame((function(){return t.animate(e)}));if("losescreenToHomePage"===t.currentStatus)return e.homepageYOffset>0?e.homepageYOffset-=50:t.currentStatus="homepage",t.moveAmoebas(e),e.makeHomepage(t.mouseVars,t.muted),requestAnimationFrame((function(){return t.animate(e)}));if(t.paused)return t.amoebas.forEach((function(a){e.drawAmoeba(a,t.boardVars,t.mouseVars)})),e.drawAmoeboi(t.amoeboi,t.boardVars,t.mouseVars),e.makePause(t.mouseVars.mousePos.x,t.mouseVars.mousePos.y),requestAnimationFrame((function(){return t.animate(e)}));if("playing"===t.currentStatus&&t.checkWin()&&(t.currentStatus="coloringWinScreen"),"coloringWinScreen"===t.currentStatus)return t.boardVars.boardFocus.x+=t.boardVars.boardFocus.x<t.boardVars.realBoardWidth/2?10:-10,t.boardVars.boardFocus.y+=t.boardVars.boardFocus.y<t.boardVars.realBoardHeight/2?10:-10,t.boardVars.currentZoom=t.boardVars.currentZoom>1?.9*t.boardVars.currentZoom:t.boardVars.currentZoom,t.boardVars.baseMass=t.amoeboi.mass,t.moveAmoebas(e),t.homepageAlpha<.5?(t.homepageAlpha+=.1,e.ctx.globalAlpha=t.homepageAlpha,e.ctx.fillStyle="black",e.ctx.fillRect(0,0,window.innerWidth,window.innerHeight),requestAnimationFrame((function(){return t.animate(e)}))):(e.ctx.globalAlpha=t.homepageAlpha,e.ctx.fillStyle="black",e.ctx.fillRect(0,0,window.innerWidth,window.innerHeight),e.homepageYOffset=1500,t.homepageAlpha=0,t.currentStatus="movingToWinScreen",requestAnimationFrame((function(){return t.animate(e)})));if("movingToWinScreen"===t.currentStatus)return e.homepageYOffset>1e3?e.homepageYOffset-=50:t.currentStatus="winScreen",t.boardVars.baseMass=t.amoeboi.mass,t.moveAmoebas(e),e.makeWinScreen(t.mouseVars),requestAnimationFrame((function(){return t.animate(e)}));if("winScreen"===t.currentStatus)return t.boardVars.baseMass=t.amoeboi.mass,t.moveAmoebas(e),e.makeWinScreen(t.mouseVars),requestAnimationFrame((function(){return t.animate(e)}));if(t.moveAmoebas(e),e.makeMargins(t.timeVars),e.makeMassDisplay(t.amoeboi),e.makeInstructions(t.muted,t.autoscaleTime),t.autoscaleTime){var a=t.amoebas[0];t.amoebas.forEach((function(e){a=a.radius<e.radius?e:a})),t.timeVars.timeCoefficient=t.amoeboi.radius/a.radius*t.timeVars.timeBase*.75}t.amoeboi.mass>0?(t.boardVars.boardFocus={x:t.amoeboi.xpos,y:t.amoeboi.ypos},t.boardVars.baseMass=t.amoeboi.mass,t.amoeboi.radius/t.boardVars.realBoardWidth*1e3*t.boardVars.currentZoom>75&&(t.boardVars.maxZoom=o(75/(t.amoeboi.radius/t.boardVars.realBoardWidth*1e3),1,t.boardVars.absoluteMaxZoom),t.boardVars.currentZoom=o(.9999999*t.boardVars.currentZoom,t.boardVars.minZoom,t.boardVars.maxZoom)),t.amoeboi.radius/t.boardVars.realBoardWidth*1e3*t.boardVars.maxZoom<75&&(t.boardVars.maxZoom=o(75/(t.amoeboi.radius/t.boardVars.realBoardWidth*1e3),1,t.boardVars.absoluteMaxZoom))):t.currentStatus="coloringLoseScreen",requestAnimationFrame((function(){return t.animate(e)}))})),H(this,"moveAmoebas",(function(e){t.amoebas=t.amoebas.filter((function(e){return e.mass>0})),t.quadTree.clear();for(var a=0;a<t.amoebas.length;a++)t.quadTree.insert1(t.amoebas[a]);e.ctx.globalAlpha=.8,t.amoebas.forEach((function(a){a.move(t.timeVars.timeCoefficient),e.drawAmoeba(a,t.boardVars,t.mouseVars)})),t.amoeboi&&t.amoeboi.move(t.timeVars.timeCoefficient),t.amoeboi&&e.drawAmoeboi(t.amoeboi,t.boardVars,t.mouseVars),e.ctx.globalAlpha=1,t.quadTree.checkAllCollisions(n(t.timeVars.timeCoefficient)),t.amoebas.forEach((function(e){t.amoeboi&&n(t.timeVars.timeCoefficient)(t.amoeboi,e),t.amoeboi&&n(t.timeVars.timeCoefficient)(e,t.amoeboi),m(e,t.boardVars)})),t.amoeboi&&m(t.amoeboi,t.boardVars)})),H(this,"checkWin",(function(){for(var e=0,a=t.amoebas.length;e<a;e++)if(t.amoeboi.mass<t.amoebas[e].mass)return!1;return!0})),this.audio=i,this.muted=!1,this.setupProportions(a,s),this.setupTime(),this.setupMouse(),this.paused=!1,this.currentStatus="reset",this.shiftDown=!1,this.homepageAlpha=0,this.autoscaleTime=!0},W=function(e){var t=e.boardFocusY,a=e.boardHeight,o=e.innerHeight,r=e.mouseOffsetY;return function(e){return(e-t)/(a/2)*500+o/2+r}},Y=function(e){var t=e.boardFocusX,a=e.boardWidth,o=e.innerWidth,r=e.mouseOffsetX;return function(e){return(e-t)/(a/2)*500+o/2+r}};function k(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var B=function e(t){var a=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),k(this,"buildAndColorAmoeba",(function(e,t,o,r){if(!(e.mass<=0))if(isNaN(e.xpos)||isNaN(e.ypos))e.mass=0;else{e.adjustRadius();var n=W({boardFocusY:t.boardFocus.y,boardHeight:t.boardHeight(),innerHeight:window.innerHeight,mouseOffsetY:o.mouseOffset.y})(e.ypos),s=Y({boardFocusX:t.boardFocus.x,boardWidth:t.boardWidth(),innerWidth:window.innerWidth,mouseOffsetX:o.mouseOffset.x})(e.xpos),i=e.radius/t.realBoardWidth*1e3*t.currentZoom,u=r(e,s,n,i,t.baseMass);a.ctx.beginPath(),a.ctx.arc(s,n,i,0,2*Math.PI),a.ctx.fillStyle=u,a.ctx.fill()}})),k(this,"drawAmoeboi",(function(e,t,o){a.buildAndColorAmoeba(e,t,o,a.colorizeAmoeboi)})),k(this,"drawAmoeba",(function(e,t,o){a.buildAndColorAmoeba(e,t,o,a.colorizeAmoeba)})),k(this,"colorizeAmoeba",(function(e,t,r,n,s){if(!(e.mass<=0)){var i=a.ctx.createRadialGradient(t,r,n,t,r,0);return e.mass<s?(i.addColorStop(0,"rgb(".concat(20,", ",20,", ",255,")")),i.addColorStop(o(1-e.mass/s,0,1),"rgb(".concat(50,", ",20,", ",200,")")),i.addColorStop(1,"rgb(".concat(255,", ",20,", ",20,")"))):(i.addColorStop(0,"rgb(".concat(255,", ",20,", ",20,")")),i.addColorStop(o(1-s/e.mass,0,1),"rgb(".concat(200,", ",20,", ",50,")")),i.addColorStop(1,"rgb(".concat(20,", ",20,", ",255,")"))),i}})),k(this,"colorizeAmoeboi",(function(e,t,o,r){if(!(e.mass<=0)){var n=a.ctx.createRadialGradient(t,o,r,t,o,0);return n.addColorStop(0,"rgb(".concat(0,", ",255,", ",0,")")),n.addColorStop(1,"rgb(".concat(0,", ",150,", ",0,")")),n}})),k(this,"makePause",(function(e,t){a.ctx.globalAlpha=.5,a.ctx.fillStyle="black",a.ctx.fillRect(0,0,window.innerWidth,window.innerHeight);var o=e/window.innerWidth*50,r=t/window.innerHeight*50;a.ctx.globalAlpha=1,a.ctx.fillStyle="white",a.ctx.font="70px Impact";var n=window.innerWidth/2-75-o,s=window.innerHeight/2+50-r+a.homepageYOffset;a.ctx.fillText("PAUSED",n,s)})),k(this,"makeClock",(function(e){a.ctx.globalAlpha=.7,a.ctx.beginPath(),a.ctx.arc(120,120,65,0,(r(e.timeBase,e.timeCoefficient)+1)/2*Math.PI*2),a.ctx.strokeStyle="orange",a.ctx.lineWidth=5,a.ctx.stroke(),a.ctx.beginPath(),a.ctx.arc(120,120,60,0,2*Math.PI),a.ctx.strokeStyle="black",a.ctx.lineWidth=3,a.ctx.stroke(),a.ctx.globalAlpha=.8,a.ctx.fillStyle="white",a.ctx.fill(),a.ctx.beginPath(),a.ctx.moveTo(120,120),a.ctx.lineTo(120+60*Math.cos(a.clockAngle*Math.PI/180),120+60*Math.sin(a.clockAngle*Math.PI/180)),a.ctx.fillStyle="black",a.ctx.stroke(),a.clockAngle=(a.clockAngle+e.timeCoefficient)%360,a.ctx.globalAlpha=1})),k(this,"drawField",(function(e,t,o){var r=W({boardFocusY:e.boardFocus.y,boardHeight:e.boardHeight(),innerHeight:window.innerHeight,mouseOffsetY:t.mouseOffset.y}),n=Y({boardFocusX:e.boardFocus.x,boardWidth:e.boardWidth(),innerWidth:window.innerWidth,mouseOffsetX:t.mouseOffset.x});a.drawBorders(n,r,e.realBoardWidth,e.realBoardHeight),a.drawGrid(n,r,e.realBoardWidth,e.realBoardHeight)})),k(this,"drawGrid",(function(e,t,o,r){a.ctx.globalAlpha=.4,a.ctx.fillStyle="black";for(var n=500,s=t(0),i=t(r);n<o;)a.ctx.fillRect(e(n),s,2,i-s),n+=500;for(var u=500,m=e(0),l=e(o);u<r;)a.ctx.fillRect(m,t(u),l-m,2),u+=500;a.ctx.globalAlpha=1})),k(this,"drawBorders",(function(e,t,o,r){a.ctx.globalAlpha=.4,a.ctx.fillStyle="red";var n=t(0),s=t(r);a.ctx.fillRect(e(0),n,2,s-n),a.ctx.fillRect(e(o),n,2,s-n);var i=e(0),u=e(o);a.ctx.fillRect(i,t(0),u-i,2),a.ctx.fillRect(i,t(r),u-i,2),a.ctx.globalAlpha=1})),k(this,"drawQuadtree",(function(e,t,o){if(o&&o.quadrants.length){a.ctx.globalAlpha=.4,a.ctx.strokeStyle="black";var r=e(o.x),n=t(o.y),s=e(o.endX),i=t(o.endY),u=e(o.halfX),m=t(o.halfY);a.ctx.beginPath(),a.ctx.moveTo(r,m),a.ctx.lineTo(s,m),a.ctx.closePath(),a.ctx.stroke(),a.ctx.beginPath(),a.ctx.moveTo(u,n),a.ctx.lineTo(u,i),a.ctx.closePath(),a.ctx.stroke(),o.quadrants.forEach((function(o){a.drawQuadtree(e,t,o)})),a.ctx.globalAlpha=1}})),k(this,"makeMassDisplay",(function(e){var t;a.ctx.globalAlpha=.7,a.ctx.fillStyle="black",t=e.mass>0?130+15*o(Math.floor(Math.log10(e.mass/100),1,1e4)):145,a.ctx.fillRect(window.innerWidth-220,65,t,50),a.ctx.globalAlpha=1,a.ctx.fillStyle="white",a.ctx.font="30px Impact",a.ctx.fillText("Mass: ".concat(Math.floor(e.mass/100)),window.innerWidth-200,100)})),k(this,"makeInstructions",(function(e,t){if(a.ctx.globalAlpha=.7,a.ctx.fillStyle="black",!a.showInstructions)return a.ctx.fillRect(50,65,340,50),a.ctx.globalAlpha=1,a.ctx.fillStyle="white",a.ctx.font="20px Arial Black",void a.ctx.fillText("PRESS I FOR INSTRUCTIONS",60,100);a.ctx.globalAlpha=.7,a.ctx.fillStyle="black",a.ctx.fillRect(50,65,365,320),a.ctx.globalAlpha=1,a.ctx.fillStyle="white",a.ctx.font="20px Arial Black",a.ctx.fillText("SPACE   :  Pause",60,95),a.ctx.fillText(" SHIFT   :  Look Around",61,135),a.ctx.fillText("SCROLL :  Zoom In/Out",60,170),a.ctx.fillText("     H      :  Main Menu",65,215),a.ctx.fillText("     R      :  Restart",65,255),a.ctx.fillText("     I       :  Toggle Instructions",67,295),a.ctx.fillText("     M      :  Toggle Volume (".concat(e?"OFF":"ON",")"),63,335),a.ctx.fillText("     A      :  Autoscale Time (".concat(t?"ON":"OFF",")"),63,375)})),k(this,"makeMargins",(function(e){a.ctx.globalAlpha=.7,a.ctx.fillStyle="black";var t=Math.floor(window.innerHeight/8),o=window.innerWidth/2-250,n=window.innerHeight-t/2-25,s=(r(e.timeBase,e.timeCoefficient)+1)/2;a.ctx.fillStyle="black",a.ctx.fillRect(o-10,n,520,50),a.ctx.fillStyle="white",a.ctx.fillRect(o+500*s-10,n,20,50),a.ctx.globalAlpha=1})),k(this,"makeWinScreen",(function(e){a.ctx.globalAlpha=.5,a.ctx.fillStyle="black",a.ctx.fillRect(0,0,window.innerWidth,window.innerHeight);var t=e.mousePos.x/window.innerWidth*50,o=e.mousePos.y/window.innerHeight*50,r=window.innerWidth/2-195-t,n=window.innerHeight/2-80-o+a.homepageYOffset;a.ctx.globalAlpha=1,a.ctx.fillStyle="white",a.ctx.font="70px Impact",a.ctx.fillText("YOU'VE WON",r+55,n-920),a.ctx.font="40px Impact",a.ctx.fillText("Press C to continue",r+65,n-840)})),k(this,"setupImages",(function(){a.iconImages={};["githubLogo","linkedInLogo","folderIcon","volume","volumeReverse","mute","muteReverse"].forEach((function(e){return a.setupImage(e)}))})),k(this,"setupImage",(function(e){a.iconImages[e]=new Image,a.iconImages[e].src="../assets/images/".concat(e,".png")})),k(this,"makeHomepage",(function(e,t){a.ctx.globalAlpha=.5,a.ctx.fillStyle="black",a.ctx.fillRect(0,0,window.innerWidth,window.innerHeight);var o=e.mousePos.x/window.innerWidth*50,r=e.mousePos.y/window.innerHeight*50,n=Math.sin((Date.now()-a.homepageTime)%1500/1500*Math.PI);a.ctx.globalAlpha=1,a.ctx.fillStyle="white",a.ctx.font="120px Impact";var s=window.innerWidth/2-195-o,i=window.innerHeight/2-80-r+a.homepageYOffset;a.ctx.fillText("AmoeBoi",s,i),a.ctx.globalAlpha=.7,a.ctx.fillStyle="rgb(0,0,50)",a.ctx.fillRect(s-300,i+885,1050,530),a.ctx.globalAlpha=1,a.ctx.fillStyle="rgb(240,240,240)",a.ctx.font="".concat(30+2*n,"px Impact"),a.ctx.fillText("PRESS ENTER TO START",s+85-5*n,i+100+2*n),a.ctx.font="50px Impact",a.ctx.fillText("⬇ INSTRUCTIONS ⬇",s+15,i+360),a.ctx.fillText("⬆ MAIN MENU ⬆",s+50,i+850),a.ctx.font="25px Arial Black",a.ctx.fillText("Become the Biggest!",s+80,i+930),a.ctx.fillText("Absorb smaller amoebas, avoid the bigger ones,",s-105,i+1e3),a.ctx.fillText("and become the biggest blob in the land.",s-55,i+1030),a.ctx.fillText("Aim and hold the left mouse button to shoot out smaller amoebas",s-222.5,i+1100),a.ctx.fillText("and propel yourself the other way... but be careful!",s-120,i+1130),a.ctx.fillText("Every shot uses a little bit of your own mass.",s-80,i+1160),a.ctx.fillText("You can speed up or slow down time using the left/right arrow keys.",s-240,i+1230),a.ctx.fillText("Press space to pause the game",s+10,i+1300),a.ctx.fillText("and press H to return to the Main Menu at any time.",s-130,i+1330),a.ctx.fillText("PRESS ENTER TO START",s+50,i+1400),a.ctx.drawImage(a.iconImages.githubLogo,s-50,i+170,80,80),a.ctx.drawImage(a.iconImages.linkedInLogo,s+180,i+170,72,72),a.ctx.drawImage(a.iconImages.folderIcon,s+380,i+170,88,88),a.ctx.drawImage(t?a.iconImages.mute:a.iconImages.volume,s-5,i+(t?60:65),50,50),a.ctx.drawImage(t?a.iconImages.muteReverse:a.iconImages.volumeReverse,s+400,i+(t?60:65),50,50),a.ctx.fillStyle="white",a.ctx.font="70px Impact",a.ctx.fillText("YOU'VE LOST",s+55,i-920),a.ctx.font="40px Impact",a.ctx.fillText("Press R to play again",s+50,i-840),a.ctx.fillText("Press H to return to Main Menu",s-27.5,i-760)})),this.element=document.getElementById(t),this.ctx=this.element.getContext("2d"),this.homepageYOffset=0,this.clockAngle=0,this.showInstructions=!0,this.homepageTime=null,this.setupImages()};document.addEventListener("DOMContentLoaded",(function(){var e=new B("background");e.element.width=window.innerWidth,e.element.height=window.innerHeight;var t=document.getElementById("audio"),a=new O(3e4,3e4,t);t.playbackRate=.5+1/(1+Math.pow(Math.E,-10*r(10,a.timeVars.timeCoefficient)))*3.5,t.volume=.5,window.onresize=function(){e.element.width=window.innerWidth,e.element.height=window.innerHeight},window.addEventListener("click",(function(o){if("homepage"===a.currentStatus){var r=a.mouseVars.mousePos.x/window.innerWidth*50,n=a.mouseVars.mousePos.y/window.innerHeight*50,s=window.innerWidth/2-195-r,i=window.innerHeight/2-80-n+e.homepageYOffset;o.pageX>s-40&&o.pageX<s+40&&o.pageY>i+170&&o.pageY<i+250?window.location="https://github.com/1stepremoved":o.pageX>s+180&&o.pageX<s+252&&o.pageY>i+170&&o.pageY<i+242?window.location="https://linkedin.com/in/hamilton-sands":o.pageX>s+380&&o.pageX<s+468&&o.pageY>i+170&&o.pageY<i+258?window.location="https://1stepremoved.github.io/portfolio/":o.pageX>s+75&&o.pageX<s+365&&o.pageY>i+315&&o.pageY<i+360?(a.currentStatus="movingToInstructions",document.body.style.cursor="default"):o.pageX>s-5&&o.pageX<s+45&&o.pageY>i+60&&o.pageY<i+110?0===t.volume?(t.volume=.5,a.muted=!1):(t.volume=0,a.muted=!0):o.pageX>s+400&&o.pageX<s+450&&o.pageY>i+60&&o.pageY<i+110&&(0===t.volume?(t.volume=.5,a.muted=!1):(t.volume=0,a.muted=!0))}else if("instructions"===a.currentStatus){var u=a.mouseVars.mousePos.x/window.innerWidth*50,m=a.mouseVars.mousePos.y/window.innerHeight*50,l=window.innerWidth/2-195-u,c=window.innerHeight/2-80-m+e.homepageYOffset;o.pageX>l+110&&o.pageX<l+335&&o.pageY>c+805&&o.pageY<c+850&&(a.currentStatus="movingToHomePage",document.body.style.cursor="default")}})),window.addEventListener("touchstart",(function(e){if("playing"===a.currentStatus){if(clearInterval(a.mouseVars.mouseDownInterval),a.paused||2===e.button||"playing"!==a.currentStatus)return;a.mouseVars.mouseDownTime=Date.now(),a.mouseVars.mousePos.x=e.touches[0].pageX,a.mouseVars.mousePos.y=e.touches[0].pageY,a.amoeboi.propel(e,a.amoebas,a.boardVars,a.mouseVars),a.mouseVars.mouseDownInterval=setInterval((function(){a.amoeboi.propel(e,a.amoebas,a.boardVars,a.mouseVars)}),200)}})),window.addEventListener("touchmove",(function(e){"playing"===a.currentStatus&&(a.mouseVars.mousePos.x=e.touches[0].pageX,a.mouseVars.mousePos.y=e.touches[0].pageY)})),window.addEventListener("touchend",(function(t){t.touches.length>1||("homepage"===a.currentStatus?(a.currentStatus="setup",e.homepageYOffset=0):"losescreen"===a.currentStatus?(document.body.style.cursor="default",a.currentStatus="losescreenToHomePage"):"winScreen"===a.currentStatus?a.currentStatus="nextLevel":"playing"===a.currentStatus&&(a.mouseVars.mouseDownTime=null,clearInterval(a.mouseVars.mouseDownInterval)))})),window.addEventListener("mousedown",(function(e){clearInterval(a.mouseVars.mouseDownInterval),a.paused||2===e.button||"playing"!==a.currentStatus||(a.mouseVars.mouseDownTime=Date.now(),a.mouseVars.mousePos.x=e.pageX,a.mouseVars.mousePos.y=e.pageY,a.amoeboi.propel(e,a.amoebas,a.boardVars,a.mouseVars),a.mouseVars.mouseDownInterval=setInterval((function(){a.amoeboi.propel(e,a.amoebas,a.boardVars,a.mouseVars)}),200))})),window.addEventListener("mousemove",(function(t){if("homepage"===a.currentStatus){var o=a.mouseVars.mousePos.x/window.innerWidth*50,r=a.mouseVars.mousePos.y/window.innerHeight*50,n=window.innerWidth/2-195-o,s=window.innerHeight/2-80-r+e.homepageYOffset;t.pageX>n-40&&t.pageX<n+40&&t.pageY>s+170&&t.pageY<s+250?document.body.style.cursor="pointer":t.pageX>n+180&&t.pageX<n+252&&t.pageY>s+170&&t.pageY<s+242?document.body.style.cursor="pointer":t.pageX>n+380&&t.pageX<n+468&&t.pageY>s+170&&t.pageY<s+258?document.body.style.cursor="pointer":t.pageX>n+75&&t.pageX<n+365&&t.pageY>s+315&&t.pageY<s+360?document.body.style.cursor="pointer":t.pageX>n-5&&t.pageX<n+45&&t.pageY>s+60&&t.pageY<s+110?document.body.style.cursor="pointer":t.pageX>n+400&&t.pageX<n+450&&t.pageY>s+60&&t.pageY<s+110?document.body.style.cursor="pointer":document.body.style.cursor="default",window.innerHeight-t.pageY<30&&(a.currentStatus="movingToInstructions")}else if("instructions"===a.currentStatus){var i=a.mouseVars.mousePos.x/window.innerWidth*50,u=a.mouseVars.mousePos.y/window.innerHeight*50,m=window.innerWidth/2-195-i,l=window.innerHeight/2-80-u+e.homepageYOffset;t.pageX>m+110&&t.pageX<m+335&&t.pageY>l+805&&t.pageY<l+850?document.body.style.cursor="pointer":document.body.style.cursor="default",t.pageY<30&&(a.currentStatus="movingToHomePage")}else"playing"===a.currentStatus&&a.shiftDown&&(a.mouseVars.mouseOffset.x=(window.innerWidth/2-t.pageX)/2,a.mouseVars.mouseOffset.y=(window.innerHeight/2-t.pageY)/2);a.mouseVars.mousePos.x=t.pageX,a.mouseVars.mousePos.y=t.pageY,a.mouseVars.mouseDownTime&&(a.mouseVars.mousePos.x=t.pageX,a.mouseVars.mousePos.y=t.pageY)})),window.addEventListener("mouseup",(function(e){a.mouseVars.mouseDownTime=null,clearInterval(a.mouseVars.mouseDownInterval)})),window.addEventListener("keydown",(function(o){switch(o.keyCode){case 39:if(a.paused||"playing"!==a.currentStatus||a.autoscaleTime)return;return a.timeVars.timeCoefficient=Math.min(1.1*a.timeVars.timeCoefficient,a.timeVars.timeBase),void(t.playbackRate=.5+1/(1+Math.pow(Math.E,-10*r(10,a.timeVars.timeCoefficient)))*3.5);case 37:if(a.paused||"playing"!==a.currentStatus||a.autoscaleTime)return;return a.timeVars.timeCoefficient=Math.max(.9*a.timeVars.timeCoefficient,Math.pow(a.timeVars.timeBase,-1)),void(t.playbackRate=.5+1/(1+Math.pow(Math.E,-10*r(10,a.timeVars.timeCoefficient)))*3.5);case 65:if(a.paused||"playing"!==a.currentStatus)return;return void(a.autoscaleTime=!a.autoscaleTime);case 32:if("playing"!==a.currentStatus)return;return a.paused=!a.paused,void(a.mouseVars.mouseDownTime=null);case 72:return"instructions"===a.currentStatus?(document.body.style.cursor="default",void(a.currentStatus="movingToHomePage")):"losescreen"===a.currentStatus?(document.body.style.cursor="default",void(a.currentStatus="losescreenToHomePage")):(a.currentStatus="reset",void(a.paused=!1));case 73:return void(e.showInstructions=!e.showInstructions);case 82:return void("playing"!==a.currentStatus&&"losescreen"!==a.currentStatus&&"winScreen"!==a.currentStatus||(a.currentStatus="setup"));case 13:if("homepage"!==a.currentStatus&&"instructions"!==a.currentStatus)return;return a.currentStatus="setup",void(e.homepageYOffset=0);case 16:return void(a.shiftDown=!0);case 67:return void("winScreen"===a.currentStatus&&(a.currentStatus="nextLevel"));case 77:0===t.volume?(t.volume=.5,a.muted=!1):(t.volume=0,a.muted=!0);default:return}})),window.addEventListener("keyup",(function(e){switch(e.keyCode){case 16:return a.mouseVars.mouseOffset.x=0,a.mouseVars.mouseOffset.y=0,void(a.shiftDown=!1);default:return}}));var n=/Firefox/i.test(navigator.userAgent)?"wheel":"mousewheel";document.addEventListener(n,(function(e){if(e.preventDefault(),!a.paused&&"playing"===a.currentStatus){var t=e.deltaY/-1e3;a.boardVars.currentZoom=o(a.boardVars.currentZoom+t,a.boardVars.minZoom,a.boardVars.maxZoom)}})),a.animate(e)}))}]);
//# sourceMappingURL=bundle-f04403.js.map