const os = require('os');// this is a built in module, external modules need to be downloaded

//info about current user
const user = os.userInfo();
console.log(user)


// method returns the system uptime in seconds
console.log(`The system uptime is ${os.uptime()} seconds`)

const currentOS= {
    name:os.type(),
    release:os.release(),
    totalMem:os.totalmem(),
    freeMem:os.freemem()
}
console.log(currentOS)



