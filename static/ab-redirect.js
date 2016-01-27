var timeout = setTimeout(()=>{
   window.location.replace("http://localhost:9000/variation1.html");
 }, 1500)

_kmq.push(function(){
  KM.ab("Landing Page A/B Test", ["variation1.html", "variation2.html"], function(page){
    clearTimeout(timeout);
    window.location.replace("http://localhost:9000/"+ page);
  });
});
