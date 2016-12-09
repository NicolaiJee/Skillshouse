function CalculatePi(loop)
{
    var c = parseInt(loop);
    var f = parseFloat(loop);
    var n=1;
    var Pi = 0;
    //these errors will need more work…
    if (isNaN(c) || f != c ) {
      throw("errInvalidNumber");
    } else if (c<=0) {
      throw("errNegativeNumber");
    }
	
    for (var i=0;i<=c;i++) {
      Pi=Pi+(4/n)-(4/(n+2));
      n=n+4;
    }
    return Pi;
}
//wait for the start 'CalculatePi' message
//e is the event and e.data contains the JSON object
//self.onmessage = function(e) {
//  CalculatePi(e.data.value);
//}
onconnect = function (e) {
    var port = e.ports[0];

    port.onmessage = function (e) {
        var workerResult =
  CalculatePi(e.data.value);
        port.postMessage({ 'PiValue': workerResult });
    }

}