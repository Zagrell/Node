
function doingSomething(anyFunctionReference, name) {
    anyFunctionReference(name);
}

const running = (name) => console.log(`${name} is running`);
const drinking = name => console.log(`${name} is drinking`);
const sitting = (name) => console.log(`${name} is sitting`);

doingSomething(sitting,"Per");
doingSomething(drinking,"Pól");
doingSomething(running,"Óli");

doingSomething(name => {console.log(`${name} is studying`);},"Martin");