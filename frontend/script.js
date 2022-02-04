// pozitív egész számok: Integers
// === -> egyenlő ( if, else -nél EZT HASZNÁLD! )
// == -> 
// = -> 
// += ->
// && -> ÉS
// || -> VAGY
// ; -> sortörés


/* // add függvény kezdete

// function "function neve" (első szám, második szám)
function addTwoIntegers(firstInteger, secondInteger) { 

    console.log(firstInteger + secondInteger)                                       //maga a funkció-t írja ki log-ban (első szám + második szám) - ellenőrzésre jó
    return firstInteger + secondInteger                                             // return mindig az utolsó funkció -> ha ez nincs 'undefined'-et hoz
    if (typeof firstInteger === "number" && typeof secondInteger === "number") {    // ha (if) a két adat típusa szám,  'typeof'-> visszaírja a típust; //'==='-> egyenlő-e; "number"-> maga a típus amit szeretnénk; "&&"-> és; "||" -> vagy;
        return firstInteger + secondInteger                                         // akkor returnolja a két adat összegét
    } else {                                                                        // (else) máskülömben
        return "Valamelyik argumentum nem szám, ezért a művelet nem elvégezhető"    // az ""-ben megadott szöveget hozza ki (pl, ha a adat típusa STRING)
    }
} 

//függvény vége

console.log( addTwoIntegers("12", 13) );                                           // funkció (a kér összeadandó szám)
console.log( addTwoIntegers(1920, 85) );                                           // funkció (a kér összeadandó szám)
console.log(0 === "0") */


// loadEvent függvény kezdete


// minden eseménynél létrejön egy esemény objektum, amit paraméterként tudunk megadni

function loadEvent(eventObject) {
    //console.log(eventObject)

// getElementById() és a getElementsByClassName()->"nem használjuk" közti kül, hogy egyet, vagy többet ad vissza
    const rootElement = document.getElementById("root");                           // getEmelentById objektummá változtatja a 'root' ID-jü dolgot  'rootElement' - változó név

    //console.dir(document);
    console.dir(rootElement);


//összes section elérése, hogy kilistázzuk fejlécben lévő nav-ban:

//querySelectorAll() és a querySelector() közt a kül: egyik egy elemet, a másik több elemet fog visszaadni...ha több elem, akkor tömb [array]
    const listOfSectionElements = document.querySelectorAll("section");
    console.log(listOfSectionElements);

    //rootElement.classList.add("newClass");              // minden "root" elementben lévő elemnek ad "newClass" classt
    listOfSectionElements[0].classList.add("newClass");   // [0]-> a 0-ik elemnek akarunk Class adni
    listOfSectionElements[1].classList.add("newClass");   // [1]-> a 1-ik elemnek akarunk Class adni
    listOfSectionElements[2].classList.add("newClass");   // [2]-> a 2-ik elemnek akarunk Class adni
    listOfSectionElements[3].classList.add("newClass");   // [3]-> a 3-ik elemnek akarunk Class adni

    let anchors = ""                                                                // ""-> üres STRING (ha nem adunk üres stringet, akkor undefined lesz) látrehozzuk az 'anchors' változót

//ha végig kell léni mindenen, és lekell ellenőrizni, akkor 'for' ciklus
    for (const sectionElement of listOfSectionElements) {                           //  iterator = sectionElement; object = listOfSectionElements...végigmegy minden listában lévő elemen, megnyitja objektumba
        //anchors = anchors + `<a> ${sectionElement.id} </a>`
        anchors += `<a href="#${sectionElement.id}"> ${sectionElement.id} </a>`;    // készüljön egy section "header", és ebbe belerakni <a>-ba a linkeket ami a section elementek ID-re mutat
        //sectionElement.classList.add("new-class")                                 //innentől bármennyi section lesz, megkapja ezt a class-t
    }  
    
    console.log(anchors);
    rootElement.insertAdjacentHTML("afterbegin", `<header> ${anchors} </header>`)   //insertAdjacentHTML -> hozzáadja a HTML-hez
}

// loadEvent függvény vége

// window -> global object (minden js kód ebben fut le)
window.addEventListener("load", loadEvent);                                         // "load"-> STRING; loadEvent-> FÜGGVÉNY; addEventListener dönti el, hogy mikor fut le (eseménykezelés)





