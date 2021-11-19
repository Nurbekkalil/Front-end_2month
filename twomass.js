// Задание 2.2: es6
//
// Написать функцию и назвать ее twoMass и передать 2 аргумента array и сравнить их длину

const TwoMass = (mass1, mass2) => {
    if (mass1.length > mass2.length){
        console.log('mass1 больше')
    }
    else if (mass1.length < mass2.length){
        console.log('mass1 меньше')
    }
}
TwoMass('toyota', 'lexus')





// Задание 2:
//
// Написать функцию и назвать ее twoMass и передать 2 аргумента array и сравнить их длину


// function twoMass (geektech, makers){
//     if (geektech.length > makers.length){
//         console.log('geektech больше')
//     } else if (makers.length > geektech.length){
//         console.log('makers больше')
//     } else{
//         console.log('равны')
//     }
// }
// twoMass("ghghghfhfgf", "hfgfv")