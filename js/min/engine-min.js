var Engine=function(e){function n(){var e=Date.now(),a=(e-p)/1e3;o(a),t(),p=e,r.requestAnimationFrame(n)}function a(){s(),p=Date.now(),n()}function o(e){g(e)}function g(e){allEnemies.forEach(function(n){n.update(e)}),player.update()}function t(){var e=["images/water-block.png","images/stone-block.png","images/stone-block.png","images/stone-block.png","images/grass-block.png","images/grass-block.png"],n=6,a=5,o,g;for(o=0;n>o;o++)for(g=0;a>g;g++)l.drawImage(Resources.get(e[o]),101*g,83*o);i()}function i(){allEnemies.forEach(function(e){e.render()}),player.render()}function s(){}var c=e.document,r=e.window,m=c.createElement("canvas"),l=m.getContext("2d"),p;m.width=505,m.height=606,c.body.appendChild(m),Resources.load(["images/stone-block.png","images/water-block.png","images/grass-block.png","images/enemy-bug.png","images/char-boy.png","images/char-cat-girl.png"]),Resources.onReady(a),e.ctx=l}(this);