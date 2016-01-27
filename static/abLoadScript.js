var addScriptToBody = function(src) {
  var script = document.createElement('script');
  script.setAttribute('src', src)
  document.body.appendChild(script);
}

var abTimeout = setTimeout(function(){
  console.log("call timeout");
  addScriptToBody('./index-variation1.js');
}, 1500);

_kmq.push(function(){
  var srcFile = KM.ab("Landing Page A/B Script Load", ["variation1", "variation2"]);
  addScriptToBody('./index-' + srcFile + '.js');
  clearTimeout(abTimeout);
});
