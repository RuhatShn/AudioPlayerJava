var songs = document.getElementById("songs"),
    myAudio = document.getElementById("myAudio");
function next(n){
  var url = URL.createObjectURL(files[n]);
  myAudio.setAttribute('src', url);
  myAudio.play();
}
var _next = 0,
    files,
    len;
songs.addEventListener('change', function() {
  files = songs.files;
  len = files.length;
  if(len){
    next(_next);
  }
});
myAudio.addEventListener("ended", function(){
   _next += 1;
   next(_next);
   console.log(len, _next);
   if((len-1)==_next){
     _next=-1;
   }
});