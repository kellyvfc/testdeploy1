//onPreHook();
console.log("Pre-request");
console.log("URL Before:", url);
console.log("Headers Before:", headers);
console.log("Body Before:", parameters);


const base = "https://triton-dev.neptune-software.cloud";
const where =  JSON.stringify({ name: 'Daniela' });

let origin = new URL(`${base}${url}`).origin;
url = origin + `/api/entity/testtableflags?where=${where}`;

console.log("url ", url);
