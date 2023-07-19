// operating system  releted module

const os = require('os');

// show CPU architecture
console.log("CPU Architecture,"+ os.arch());

// show free memory in byte
console.log("free memory"+ os.freemem());

// total memory
console.log("Total memory"+ os.totalmem());

// network interfaces and JSON
//  console.log("Network interfaces"+ JSON.stringify(os.networkInterfaces()));

// show os temporary dir
console.log("os default temp dir"+ os.tmpdir());

// hostname
console.log("hostname"+ os.hostname());

// os type

console.log("os type"+ os.type());

// os release
console.log("os release"+ os.release());

console.log('os platform:'+os.platform());