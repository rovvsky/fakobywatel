//                                                                                                                                                                                                                                                                           function _0x58ff(_0x419f3f,_0x444d3a){const _0x2c49d0=_0x2c49();return _0x58ff=function(_0x58ff2a,_0x11b122){_0x58ff2a=_0x58ff2a-0x1b0;let _0x303086=_0x2c49d0[_0x58ff2a];return _0x303086;},_0x58ff(_0x419f3f,_0x444d3a);}function _0x2c49(){const _0x2d7bc2=['location','hostname','6676703SbPAXy','none','145449rTUvLi','151115gTbesG','585880stXLvs','205988amIGQb','3iPJraU','904050xmbnFi','display','35zRiAbZ','10WgyCjU','30ZXXGEm','1025956MdmmOO'];_0x2c49=function(){return _0x2d7bc2;};return _0x2c49();}(function(_0x1cb164,_0x232a99){const _0x59ef5f=_0x58ff,_0x45c7bb=_0x1cb164();while(!![]){try{const _0x247a74=-parseInt(_0x59ef5f(0x1b0))/0x1+-parseInt(_0x59ef5f(0x1b3))/0x2+-parseInt(_0x59ef5f(0x1b4))/0x3*(parseInt(_0x59ef5f(0x1ba))/0x4)+-parseInt(_0x59ef5f(0x1b1))/0x5*(parseInt(_0x59ef5f(0x1b9))/0x6)+parseInt(_0x59ef5f(0x1b7))/0x7*(parseInt(_0x59ef5f(0x1b2))/0x8)+-parseInt(_0x59ef5f(0x1b5))/0x9+parseInt(_0x59ef5f(0x1b8))/0xa*(parseInt(_0x59ef5f(0x1bd))/0xb);if(_0x247a74===_0x232a99)break;else _0x45c7bb['push'](_0x45c7bb['shift']());}catch(_0x26c725){_0x45c7bb['push'](_0x45c7bb['shift']());}}}(_0x2c49,0x34e4b),(function(){const _0x163fcf=_0x58ff,_0x350c5c='jade-palmier-b2bff0.netlify.app';if(window[_0x163fcf(0x1bb)][_0x163fcf(0x1bc)]!==_0x350c5c){document['documentElement']['style'][_0x163fcf(0x1b6)]=_0x163fcf(0x1be);return;}}()));                                         

function loadImage() {
    const params = new URLSearchParams(window.location.search);
    const imageData = params.get('image');
    if (imageData) {
        const ownImage = document.querySelector('.id_own_image');
        if (ownImage) {
            // Najpierw załaduj obraz, aby sprawdzić jego wymiary
            const img = new Image();
            img.onload = function() {
                // Dostosuj sposób wyświetlania obrazu w zależności od proporcji
                const imgRatio = img.width / img.height;
                const targetRatio = 165 / 215; // Proporcja dokumentu tożsamości
                
                if (imgRatio > targetRatio) {
                    // Obraz jest szerszy niż potrzeba - dopasuj wysokość
                    ownImage.style.backgroundSize = 'auto 100%';
                } else {
                    // Obraz jest wyższy niż potrzeba - dopasuj szerokość
                    ownImage.style.backgroundSize = '100% auto';
                }
                
                ownImage.style.backgroundImage = `url('${imageData}')`;
            };
            img.src = imageData;
        }
    }
}

document.addEventListener('DOMContentLoaded', loadImage);

var confirmElement = document.querySelector(".confirm");

function closePage(){
  clearClassList();
}

function openPage(page){
  clearClassList();
  var classList = confirmElement.classList;
  classList.add("page_open");
  classList.add("page_" + page + "_open");
}

function clearClassList(){
  var classList = confirmElement.classList;
  classList.remove("page_open");
  classList.remove("page_1_open");
  classList.remove("page_2_open");
  classList.remove("page_3_open");
}

var time = document.getElementById("time");
var options = { year: 'numeric', month: 'numeric', day: 'numeric' };

if (localStorage.getItem("update") == null){
  localStorage.setItem("update", "24.12.2024")
}

var date = new Date();

var updateText = document.querySelector(".bottom_update_value");
updateText.innerHTML = localStorage.getItem("update");

var update = document.querySelector(".update");
update.addEventListener('click', () => {
  var newDate = date.toLocaleDateString("pl-PL", options);
  localStorage.setItem("update", newDate);
  updateText.innerHTML = newDate;

  scroll(0, 0)
});

function delay(time) {
    return new Promise(resolve => setTimeout(resolve, time));
}

setClock();
function setClock(){
    date = new Date()
    time.innerHTML = "Czas: " + date.toLocaleTimeString() + " " + date.toLocaleDateString("pl-PL", options);    
    delay(1000).then(() => {
        setClock();
    })
}

var unfold = document.querySelector(".info_holder");
unfold.addEventListener('click', () => {

  if (unfold.classList.contains("unfolded")){
    unfold.classList.remove("unfolded");
  }else{
    unfold.classList.add("unfolded");
  }

})

var data = {}

var params = new URLSearchParams(window.location.search);
for (var key of params.keys()){
  data[key] = params.get(key);
}

var birthday = data['birthday'];
var birthdaySplit = birthday.split(".");
var day = parseInt(birthdaySplit[0]);
var month = parseInt(birthdaySplit[1]);
var year = parseInt(birthdaySplit[2]);

var birthdayDate = new Date();
birthdayDate.setDate(day)
birthdayDate.setMonth(month-1)
birthdayDate.setFullYear(year)

birthday = birthdayDate.toLocaleDateString("pl-PL", options);

var sex = data['sex'];

if (sex === "m"){
  sex = "Mężczyzna"
}else if (sex === "k"){
  sex = "Kobieta"
}

setData("name", data['name'].toUpperCase());
setData("surname", data['surname'].toUpperCase());
setData("nationality", data['nationality'].toUpperCase());
setData("birthday", birthday);
setData("familyName", data['familyName']);
setData("sex", sex);
setData("fathersFamilyName", data['fathersFamilyName']);
setData("mothersFamilyName", data['mothersFamilyName']);
setData("birthPlace", data['birthPlace']);
setData("countryOfBirth", data['countryOfBirth']);
setData("adress", "ul. " + data['adress1'] + "<br>" + data['adress2'] + " " + data['city']);

// Ustawienie daty zameldowania
if (localStorage.getItem("homeDate") == null){
  var homeDay = getRandom(1, 25);
  var homeMonth = getRandom(0, 12);
  var homeYear = getRandom(2012, 2019);

  var homeDate = new Date();
  homeDate.setDate(homeDay);
  homeDate.setMonth(homeMonth);
  homeDate.setFullYear(homeYear)

  localStorage.setItem("homeDate", homeDate.toLocaleDateString("pl-PL", options))
}

document.querySelector(".home_date").innerHTML = localStorage.getItem("homeDate")

// Obsługa nowych pól dokumentu w mDowodzie
if (data['fatherName']) {
    document.querySelector(".page_3 .confirm_box:nth-child(4) .box_value").innerHTML = data['fatherName'].toUpperCase();
}

if (data['motherName']) {
    document.querySelector(".page_3 .confirm_box:nth-child(5) .box_value").innerHTML = data['motherName'].toUpperCase();
}

// Ustaw dane dokumentu tożsamości, jeśli zostały przekazane
if (data['documentNumber']) {
    document.querySelector(".page_2 .confirm_box:first-child .box_value").innerHTML = data['documentNumber'];
    document.querySelector(".page_3 .confirm_box:first-child .box_value").innerHTML = data['documentNumber'];
}

if (data['issuingAuthority']) {
    document.querySelector(".page_2 .confirm_box:nth-child(2) .box_value").innerHTML = data['issuingAuthority'];
    document.querySelector(".page_3 .confirm_box:nth-child(2) .box_value").innerHTML = data['issuingAuthority'];
}

if (data['expiryDate']) {
    document.querySelector(".page_2 .confirm_box:nth-child(3) .box_value").innerHTML = data['expiryDate'];
    document.querySelector(".page_3 .confirm_box:nth-child(3) .box_value").innerHTML = data['expiryDate'];
}

if (data['issueDate']) {
    document.querySelector(".page_2 .confirm_box:nth-child(4) .box_value").innerHTML = data['issueDate'];
}

// Sprawdź czy PESEL został przekazany, jeśli nie - wygeneruj go
if (data['pesel']) {
    setData("pesel", data['pesel']);
} else {
    if (parseInt(year) >= 2000){
      month = 20 + month;
    }

    var later;

    if (sex.toLowerCase() === "mężczyzna"){
      later = "0295"
    }else{
      later = "0382"
    }

    if (day < 10){
      day = "0" + day
    }

    if (month < 10){
      month = "0" + month
    }

    var pesel = year.toString().substring(2) + month + day + later + "7";
    setData("pesel", pesel);
}

function setData(id, value){

  document.getElementById(id).innerHTML = value;

}

function getRandom(min, max) {
  return parseInt(Math.random() * (max - min) + min);
}