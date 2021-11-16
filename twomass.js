// Задание 2:
//
// Написать функцию и назвать ее twoMass и передать 2 аргумента array и сравнить их длину

// function twoMass() {
//
// }

// function twoMass(f, a) {
//   var result = [], // Create a new Array
//       i;
//   for (i = 0; i != a.length; i++)
//     result[i] = f(a[i]);
//   return result;
// }
// twoMass(10,20,)

function twoMass (geektech, makers){
    if (geektech.length > makers.length){
        console.log('geektech больше')
    } else if (makers.length > geektech.length){
        console.log('makers больше')
    } else{
        console.log('равны')
    }
}
twoMass("ghghghfhfgf", "hfgfv")