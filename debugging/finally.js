// FINALLY{ 
//  The code that you place in the finally block always executes whether the error occurs or not.
// }

function test(){
  try {
    return 1;
  } catch(error) {
    return 2;
  } finally {
    return 3;
  }
}
console.log(test());