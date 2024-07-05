const num1= 5;
const num2 = 10;

function addValues(){
    console.log(`the sum is: ${num1 + num2}`);
}

addValues()
//if we have a function inside a module, we can export it to 3-modules.js without having to call it in the module itself.
//bottom line, because the function is called here, no need to invoke it in 3-modules.js