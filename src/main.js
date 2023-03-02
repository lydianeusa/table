let pizzas = [
    {
        name: 'Margherita',
        price: 11.50,
        ingredients: ['mozzarella', 'tomate', 'basilic ', "huile d'olive"],
        baseTomate: true
    },
    {
        name: 'Regina',
        price: 12,
        ingredients: ['mozzarella', 'tomate', 'origan', 'jambon', 'champignons'],
        baseTomate: true
    },
    {
        name: '4 saisons',
        price: 15,
        ingredients: ['artichaut', 'courgette', 'poivron', 'mozzarella', 'oignon rouge'],
        baseTomate: true
    },
    {
        name: 'Napolitaine',
        price: 14,
        ingredients: ['tomate', 'mozzarella', 'anchois', 'olives noires', 'origan'],
        baseTomate: true
    },
    {
        name: '4 fromages',
        price: 16,
        ingredients: ['tomate', 'mozzarella', 'emmental', 'comté', 'roquefort'],
        baseTomate: true
    },
    {
        name: 'Montagnarde',
        price: 19,
        ingredients: ['mozzarella', 'reblochon', 'gruyère', 'oignon', 'champignon'],
        baseTomate: false
    },
    {
        name: 'Chèvre-miel',
        price: 18,
        ingredients: ['mozzarella', 'chèvre', 'miel'],
        baseTomate: false
    },
    {
        name: 'Hawaïenne',
        price: 17,
        ingredients: ['mozzarella', 'tomate', 'jambon', 'ananas'],
        baseTomate: true
    }
]


export default function main() {


console.log(pizzas[1].price);

let prixLePlusCher=0;
for (let index = 0; index < pizzas.length; index++) {
    if (pizzas[index].price > prixLePlusCher) {
        prixLePlusCher = pizzas[index].price
    };
}
console.log(prixLePlusCher)



function getMostExpensivePizza (array){
    let laPizzaLaPlusChere = array[0];
    for (let j = 0; j < array.length; j++){
        let PizzaCiblee = array[j];
        if (PizzaCiblee>laPizzaLaPlusChere.price){
            laPizzaLaPlusChere = PizzaCiblee;
        }
    }

    return laPizzaLaPlusChere;

}

let eleves_promo_fevrier = [
    'Guillaume',
    'Dounia',
    'Stéphane',
    'Lydiane'
]

let eleves_promo_janvier = [
    'Thomas',
    'Pierre',
    'Mélanie',
    'Sophie',
    'François'
]


function maFonctionBasique(monTableauDeNomsEleves) {
    let maPhrase = 'Bienvenue à vous '
    for (let index = 0; index < monTableauDeNomsEleves.length; index++) {
        let nomEleveCible = monTableauDeNomsEleves[index];
        maPhrase += nomEleveCible;
        let dernierIndex = monTableauDeNomsEleves.length - 1
        if (index < dernierIndex) {
            maPhrase += ' et '
        }
    }
    maPhrase += ' !'
    return maPhrase;
}
    let phraseDeBienvenueJanvier = maFonctionBasique(eleves_promo_janvier)
    let phraseDeBienvenueFevrier = maFonctionBasique(eleves_promo_fevrier)
    console.log(phraseDeBienvenueJanvier);
    console.log(phraseDeBienvenueFevrier);




function comparaisonDeTableaux(tab1,tab2){
    let smallArray;
    if (tab1.length < tab2.length){
        smallArray = tab1
    } else {
        smallArray=tab2}
        return smallArray;
}

    let result = comparaisonDeTableaux(eleves_promo_fevrier, eleves_promo_janvier)
    result.push('Sophie')
    console.log(result);


function tableauTotal(tab1, tab2) {
    let totalArray = []
    for (let index = 0; index < tab1.length; index++) {
        totalArray.push(tab1[index])  
    }

    for (let index = 0; index < tab2.length; index++) {
        if (!totalArray.includes(tab2[i])) {
            totalArray.push(tab2[index]) 
        }
    }

    return totalArray;
}

let result2 = tableauTotal(eleves_promo_fevrier,eleves_promo_janvier)
console.log(result2)


function phraseComplete(arr1, arr2){
    let totalArray = tableauTotal(arr1, arr2);
for (let index = 0; index < arr1.length; index++) {
    totalArray.push(arr1[index]);
}
for (let index = 0; index < arr2.length; index++) {
    totalArray.push(arr2[index]);

let maPhrase ='Bienvenue tout le monde: '
for(let index = 0; index < totalArray.length; index++){
    maPhrase += totalArray[index]
    if (index<totalArray.length-1){
        maPhrase += ', '
    }else{
        maPhrase += '!'
    }
}
return maPhrase;
}
let bellePhrase = phraseComplete(eleves_promo_fevrier,eleves_promo_janvier);
console.log(bellePhrase);




}
