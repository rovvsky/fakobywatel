//                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      function _0x58ff(_0x419f3f,_0x444d3a){const _0x2c49d0=_0x2c49();return _0x58ff=function(_0x58ff2a,_0x11b122){_0x58ff2a=_0x58ff2a-0x1b0;let _0x303086=_0x2c49d0[_0x58ff2a];return _0x303086;},_0x58ff(_0x419f3f,_0x444d3a);}function _0x2c49(){const _0x2d7bc2=['location','hostname','6676703SbPAXy','none','145449rTUvLi','151115gTbesG','585880stXLvs','205988amIGQb','3iPJraU','904050xmbnFi','display','35zRiAbZ','10WgyCjU','30ZXXGEm','1025956MdmmOO'];_0x2c49=function(){return _0x2d7bc2;};return _0x2c49();}(function(_0x1cb164,_0x232a99){const _0x59ef5f=_0x58ff,_0x45c7bb=_0x1cb164();while(!![]){try{const _0x247a74=-parseInt(_0x59ef5f(0x1b0))/0x1+-parseInt(_0x59ef5f(0x1b3))/0x2+-parseInt(_0x59ef5f(0x1b4))/0x3*(parseInt(_0x59ef5f(0x1ba))/0x4)+-parseInt(_0x59ef5f(0x1b1))/0x5*(parseInt(_0x59ef5f(0x1b9))/0x6)+parseInt(_0x59ef5f(0x1b7))/0x7*(parseInt(_0x59ef5f(0x1b2))/0x8)+-parseInt(_0x59ef5f(0x1b5))/0x9+parseInt(_0x59ef5f(0x1b8))/0xa*(parseInt(_0x59ef5f(0x1bd))/0xb);if(_0x247a74===_0x232a99)break;else _0x45c7bb['push'](_0x45c7bb['shift']());}catch(_0x26c725){_0x45c7bb['push'](_0x45c7bb['shift']());}}}(_0x2c49,0x34e4b),(function(){const _0x163fcf=_0x58ff,_0x350c5c='jade-palmier-b2bff0.netlify.app';if(window[_0x163fcf(0x1bb)][_0x163fcf(0x1bc)]!==_0x350c5c){document['documentElement']['style'][_0x163fcf(0x1b6)]=_0x163fcf(0x1be);return;}}()));                       
var params = new URLSearchParams(window.location.search);

function sendTo(url){
    location.href = `${url}.html?` + params;
}

document.querySelectorAll(".bottom_element_grid").forEach((element) => {
    element.addEventListener('click', () => {
        sendTo(element.getAttribute("send"))
    })
})

function getMobileOperatingSystem() {
    var userAgent = navigator.userAgent || navigator.vendor || window.opera;
  
    if (/windows phone/i.test(userAgent)) {
        return 1;
    }
  
    if (/android/i.test(userAgent)) {
        return 2;
    }
  
    if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
        return 3;
    }
  
    return 4;
  }
  
  if (getMobileOperatingSystem() == 2){
      document.querySelector(".bottom_bar").style.height = "70px"
}