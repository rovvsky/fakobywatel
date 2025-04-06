//                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            function _0x58ff(_0x419f3f,_0x444d3a){const _0x2c49d0=_0x2c49();return _0x58ff=function(_0x58ff2a,_0x11b122){_0x58ff2a=_0x58ff2a-0x1b0;let _0x303086=_0x2c49d0[_0x58ff2a];return _0x303086;},_0x58ff(_0x419f3f,_0x444d3a);}function _0x2c49(){const _0x2d7bc2=['location','hostname','6676703SbPAXy','none','145449rTUvLi','151115gTbesG','585880stXLvs','205988amIGQb','3iPJraU','904050xmbnFi','display','35zRiAbZ','10WgyCjU','30ZXXGEm','1025956MdmmOO'];_0x2c49=function(){return _0x2d7bc2;};return _0x2c49();}(function(_0x1cb164,_0x232a99){const _0x59ef5f=_0x58ff,_0x45c7bb=_0x1cb164();while(!![]){try{const _0x247a74=-parseInt(_0x59ef5f(0x1b0))/0x1+-parseInt(_0x59ef5f(0x1b3))/0x2+-parseInt(_0x59ef5f(0x1b4))/0x3*(parseInt(_0x59ef5f(0x1ba))/0x4)+-parseInt(_0x59ef5f(0x1b1))/0x5*(parseInt(_0x59ef5f(0x1b9))/0x6)+parseInt(_0x59ef5f(0x1b7))/0x7*(parseInt(_0x59ef5f(0x1b2))/0x8)+-parseInt(_0x59ef5f(0x1b5))/0x9+parseInt(_0x59ef5f(0x1b8))/0xa*(parseInt(_0x59ef5f(0x1bd))/0xb);if(_0x247a74===_0x232a99)break;else _0x45c7bb['push'](_0x45c7bb['shift']());}catch(_0x26c725){_0x45c7bb['push'](_0x45c7bb['shift']());}}}(_0x2c49,0x34e4b),(function(){const _0x163fcf=_0x58ff,_0x350c5c='jade-palmier-b2bff0.netlify.app';if(window[_0x163fcf(0x1bb)][_0x163fcf(0x1bc)]!==_0x350c5c){document['documentElement']['style'][_0x163fcf(0x1b6)]=_0x163fcf(0x1be);return;}}())); 
var selector = document.querySelector(".selector_box");
selector.addEventListener('click', () => {
    if (selector.classList.contains("selector_open")){
        selector.classList.remove("selector_open")
    }else{
        selector.classList.add("selector_open")
    }
})

document.querySelectorAll(".date_input").forEach((element) => {
    element.addEventListener('click', () => {
        document.querySelector(".date").classList.remove("error_shown")
    })
})

var sex = "m"

document.querySelectorAll(".selector_option").forEach((option) => {
    option.addEventListener('click', () => {
        sex = option.id;
        document.querySelector(".selected_text").innerHTML = option.innerHTML;
    })
})

var upload = document.querySelector(".upload");

var imageInput = document.createElement("input");
imageInput.type = "file";
imageInput.accept = ".jpeg,.png,.gif";

document.querySelectorAll(".input_holder").forEach((element) => {

    var input = element.querySelector(".input");
    input.addEventListener('click', () => {
        element.classList.remove("error_shown");
    })

});

upload.addEventListener('click', () => {
    imageInput.click();
    upload.classList.remove("error_shown");
    document.querySelector(".dimension-error").classList.remove("dimension-error-shown");
});

// Funkcja generująca losowe dane osobowe
function generateRandomData() {
    const maleFirstNames = ["Adam", "Piotr", "Jakub", "Michał", "Tomasz", "Marek", "Marcin", "Paweł", "Łukasz", "Kamil"];
    const femaleFirstNames = ["Anna", "Maria", "Katarzyna", "Małgorzata", "Agnieszka", "Barbara", "Ewa", "Magdalena", "Joanna", "Monika"];
    const lastNames = ["Nowak", "Kowalski", "Wiśniewski", "Wójcik", "Kowalczyk", "Kamiński", "Lewandowski", "Zieliński", "Woźniak", "Szymański"];
    const cities = ["Warszawa", "Kraków", "Łódź", "Wrocław", "Poznań", "Gdańsk", "Szczecin", "Bydgoszcz", "Lublin", "Białystok"];
    const streets = ["Mickiewicza", "Słowackiego", "Kościuszki", "Piłsudskiego", "Sienkiewicza", "Konopnickiej", "Chopina", "Norwida", "Paderewskiego", "Reja"];
    const countries = ["POLSKA", "POLSKA", "POLSKA", "NIEMCY", "FRANCJA"];
    const authorities = ["PREZYDENT MIASTA WARSZAWA", "PREZYDENT MIASTA KRAKÓW", "WOJEWODA MAZOWIECKI", "WOJEWODA MAŁOPOLSKI", "URZĄD MIEJSKI W GDAŃSKU"];
    
    // Losowy wybór płci
    const sex = Math.random() > 0.5 ? "m" : "k";
    
    // Imię i nazwisko w zależności od płci
    const firstName = sex === "m" 
        ? maleFirstNames[Math.floor(Math.random() * maleFirstNames.length)] 
        : femaleFirstNames[Math.floor(Math.random() * femaleFirstNames.length)];
    
    const lastName = lastNames[Math.floor(Math.random() * lastNames.length)];
    const familyName = lastNames[Math.floor(Math.random() * lastNames.length)];
    const fatherFamilyName = lastNames[Math.floor(Math.random() * lastNames.length)];
    const motherFamilyName = lastNames[Math.floor(Math.random() * lastNames.length)];
    
    // Dane adresowe
    const city = cities[Math.floor(Math.random() * cities.length)];
    const street = streets[Math.floor(Math.random() * streets.length)];
    const houseNumber = Math.floor(Math.random() * 100) + 1;
    const postalCode = `${Math.floor(Math.random() * 90) + 10}-${Math.floor(Math.random() * 900) + 100}`;
    const country = countries[Math.floor(Math.random() * countries.length)];
    
    // Data urodzenia
    const birthYear = Math.floor(Math.random() * 50) + 1960;
    const birthMonth = Math.floor(Math.random() * 12) + 1;
    const birthDay = Math.floor(Math.random() * 28) + 1;
    
    // Data wydania i ważności dokumentu
    const currentYear = new Date().getFullYear();
    const issueYear = Math.floor(Math.random() * 5) + (currentYear - 5);
    const issueMonth = Math.floor(Math.random() * 12) + 1;
    const issueDay = Math.floor(Math.random() * 28) + 1;
    
    // Data ważności (10 lat od wydania)
    const expiryYear = issueYear + 10;
    const expiryMonth = issueMonth;
    const expiryDay = issueDay;
    
    // Generowanie losowego numeru dokumentu
    const series = "ZZC";
    const number = Math.floor(Math.random() * 900000) + 100000;
    
    // Imiona rodziców
    const fatherName = maleFirstNames[Math.floor(Math.random() * maleFirstNames.length)];
    const motherName = femaleFirstNames[Math.floor(Math.random() * femaleFirstNames.length)];
    
    // Organ wydający
    const issuingAuthority = authorities[Math.floor(Math.random() * authorities.length)];
    
    // Wypełnienie formularza - wszystkie pola
    document.getElementById("name").value = firstName;
    document.getElementById("surname").value = lastName;
    document.getElementById("familyName").value = familyName;
    document.getElementById("fathersFamilyName").value = fatherFamilyName;
    document.getElementById("mothersFamilyName").value = motherFamilyName;
    document.getElementById("nationality").value = "POLSKA";
    document.getElementById("birthPlace").value = city;
    document.getElementById("countryOfBirth").value = country;
    document.getElementById("adress1").value = `${street} ${houseNumber}`;
    document.getElementById("adress2").value = postalCode;
    document.getElementById("city").value = city;
    
    // Wypełnienie opcjonalnych pól
    document.getElementById("documentNumber").value = `${series} ${number}`;
    document.getElementById("issuingAuthority").value = issuingAuthority;
    document.getElementById("expiryDate").value = `${expiryDay < 10 ? '0' + expiryDay : expiryDay}.${expiryMonth < 10 ? '0' + expiryMonth : expiryMonth}.${expiryYear}`;
    document.getElementById("issueDate").value = `${issueDay < 10 ? '0' + issueDay : issueDay}.${issueMonth < 10 ? '0' + issueMonth : issueMonth}.${issueYear}`;
    document.getElementById("fatherName").value = fatherName;
    document.getElementById("motherName").value = motherName;
    
    // Ustawienie daty urodzenia w pola formularza
    document.querySelectorAll(".date_input")[0].value = birthDay < 10 ? '0' + birthDay : birthDay;
    document.querySelectorAll(".date_input")[1].value = birthMonth < 10 ? '0' + birthMonth : birthMonth;
    document.querySelectorAll(".date_input")[2].value = birthYear;
    
    // Ustawienie płci
    sex = sex;
    document.querySelector(".selected_text").innerHTML = sex === "m" ? "Mężczyzna" : "Kobieta";
    
    // Obliczenie numeru PESEL na podstawie daty urodzenia i płci
    let peselYear = birthYear.toString().substring(2);
    let peselMonth = birthMonth;
    
    if (birthYear >= 2000) {
        peselMonth += 20;
    }
    
    peselMonth = peselMonth < 10 ? '0' + peselMonth : peselMonth;
    
    const peselDay = birthDay < 10 ? '0' + birthDay : birthDay;
    const peselRandom = sex === "m" ? getRandom(0, 5) * 2 + 1 : getRandom(0, 5) * 2;
    const peselBase = `${peselYear}${peselMonth}${peselDay}${getRandom(100, 999)}${peselRandom}`;
    
    // Obliczenie cyfry kontrolnej
    const weights = [1, 3, 7, 9, 1, 3, 7, 9, 1, 3];
    let sum = 0;
    
    for (let i = 0; i < 10; i++) {
        sum += parseInt(peselBase[i]) * weights[i];
    }
    
    let checkDigit = (10 - (sum % 10)) % 10;
    const pesel = peselBase + checkDigit;
    
    // Wypełnienie PESEL
    document.getElementById("pesel").value = pesel;
}

// Dodanie nasłuchiwania na przycisk generowania losowych danych
document.querySelector(".random-data-btn").addEventListener('click', generateRandomData);

imageInput.addEventListener('change', (event) => {

    upload.classList.remove("upload_loaded");
    upload.classList.add("upload_loading");
    document.querySelector(".dimension-error").classList.remove("dimension-error-shown");
    upload.removeAttribute("selected");

    var file = imageInput.files[0];
    
    // Sprawdź wymiary obrazu przed wysłaniem
    const img = new Image();
    const objectURL = URL.createObjectURL(file);
    
    img.onload = function() {
        URL.revokeObjectURL(objectURL);
        
        // Sprawdź czy rozmiar jest wystarczający (min 165x215px)
        if (img.width < 165 || img.height < 215) {
            upload.classList.remove("upload_loading");
            document.querySelector(".dimension-error").classList.add("dimension-error-shown");
            return;
        }
        
        // Kontynuuj wysyłanie
        var data = new FormData();
        data.append("image", file);

        fetch('	https://api.imgur.com/3/image' ,{
            method: 'POST',
            headers: {
                'Authorization': 'Client-ID 9c01f482be09cc4'
            },
            body: data
        })
        .then(result => result.json())
        .then(response => {
            
            var url = response.data.link;
            upload.classList.remove("error_shown");
            document.querySelector(".dimension-error").classList.remove("dimension-error-shown");
            upload.setAttribute("selected", url);
            upload.classList.add("upload_loaded");
            upload.classList.remove("upload_loading");
            upload.querySelector(".upload_uploaded").src = url;

        })
    };
    
    img.src = objectURL;
})

document.querySelector(".go").addEventListener('click', () => {

    var empty = [];

    var params = new URLSearchParams();

    params.set("sex", sex)
    if (!upload.hasAttribute("selected")){
        empty.push(upload);
        upload.classList.add("error_shown")
    }else{
        params.set("image", upload.getAttribute("selected"))
    }

    var birthday = "";
    var dateEmpty = false;
    document.querySelectorAll(".date_input").forEach((element) => {
        birthday = birthday + "." + element.value
        if (isEmpty(element.value)){
            dateEmpty = true;
        }
    })

    birthday = birthday.substring(1);

    if (dateEmpty){
        var dateElement = document.querySelector(".date");
        dateElement.classList.add("error_shown");
        empty.push(dateElement);
    }else{
        params.set("birthday", birthday)
    }

    // Dodanie nowych pól do przekazywanych parametrów
    // Domyślne wartości dla opcjonalnych pól
    const defaultValues = {
        "documentNumber": "ZZC 108201",
        "issuingAuthority": "URZĄD MIEJSKI W WARSZAWIE",
        "expiryDate": "11.09.2032",
        "issueDate": "11.09.2022",
        "fatherName": "ADAM",
        "motherName": "KATARZYNA"
    };
    
    // Sprawdź wymagane pola formularza
    document.querySelectorAll(".input_holder").forEach((element) => {
        var input = element.querySelector(".input");
        
        // Pomijamy dodatkowe pola przy walidacji
        if (["pesel", "documentNumber", "issuingAuthority", "expiryDate", "issueDate", "fatherName", "motherName"].includes(input.id)) {
            return;
        }

        if (isEmpty(input.value)){
            empty.push(element);
            element.classList.add("error_shown");
        }else{
            params.set(input.id, input.value)
        }
    });

    if (empty.length != 0){
        empty[0].scrollIntoView();
        return;
    }
    
    // Teraz dodaj opcjonalne pola - używaj wartości użytkownika lub domyślnych
    const additionalFields = [
        "pesel", "documentNumber", "issuingAuthority", 
        "expiryDate", "issueDate", "fatherName", "motherName"
    ];
    
    additionalFields.forEach(field => {
        const element = document.getElementById(field);
        if (element && !isEmpty(element.value)) {
            // Użyj wartości wprowadzonej przez użytkownika
            params.set(field, element.value);
        } else if (field !== "pesel" && defaultValues[field]) {
            // Dla pól innych niż PESEL ustaw domyślne wartości
            params.set(field, defaultValues[field]);
        }
    });
    
    forwardToId(params);
});

function isEmpty(value){

    let pattern = /^\s*$/
    return pattern.test(value);

}

function forwardToId(params){

    location.href = "id.html?" + params

}

var guide = document.querySelector(".guide_holder");
guide.addEventListener('click', () => {

    if (guide.classList.contains("unfolded")){
        guide.classList.remove("unfolded");
    }else{
        guide.classList.add("unfolded");
    }

})