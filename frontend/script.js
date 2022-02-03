// Add függvény
// pozitív egész számok: Integers
// === -> egyenlő ( if, else -nél EZT HASZNÁLD! )
// == -> 
// = -> 
// && -> ÉS
// || -> VAGY

//függvény kezdete

function addTwoIntegers(firstInteger, secondInteger) {  // function "function neve" (első szám, második szám) 
    // console.log(firstInteger + secondInteger)        //maga a funkció-t írja ki log-ban (első szám + második szám) - ellenőrzésre jó
    //return firstInteger + secondInteger                 // return mindig az utolsó funkció -> ha ez nincs 'undefined'-et hoz
    //return "hello"
    if (typeof firstInteger === "number" && typeof secondInteger === "number") {  // ha (if) a két adat típusa szám,  'typeof'-> visszaírja a típust; //'==='-> egyenlő-e; "number"-> maga a típus amit szeretnénk; "&&"-> és; "||" -> vagy;
        return firstInteger + secondInteger                                        // akkor returnolja a két adat összegét
    } else {                                                                        // (else) máskülömben
        return "Valamelyik argumentum nem szám, ezért a művelet nem elvégezhető"    // az ""-ben megadott szöveget hozza ki (pl, ha a adat típusa STRING)
    }
} 

//függvény vége

console.log( addTwoIntegers("12", 13) );  // funkció (a kér összeadandó szám)
console.log( addTwoIntegers(1920, 85) ); // funkció (a kér összeadandó szám)
console.log(0 === "0")