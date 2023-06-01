/* function подсчитатьСуммуИПроизведение(массив) {
    let сумма = 0;
    let произведение = 1;

    массив.forEach(function (элемент) {
        сумма += элемент;
        произведение *= элемент;
    });

    console.log("Сумма: " + сумма);
    console.log("Произведение: " + произведение);
}

let мойМассив = [1, 2, 3, 4, 5, 6];
подсчитатьСуммуИПроизведение(мойМассив); */

/* ------------- O_o --------------- */


let mojaSuperTablica = [1, 2, 3, 4, 5, 6];
policzSumeIIloczyn(mojaSuperTablica);

function policzSumeIIloczyn(tablica) {
    let suma = 0;
    let iloczyn = 1;

    tablica.forEach(function (element) {
        // suma += element;
        suma = suma + element;
        iloczyn *= element;
    });

    console.log("Suma liczb: " + suma);
    console.log("Iloczyn: " + iloczyn);

}

