// Dado el siguiente código revisa si existe algún error y corrígelo. Indica cuál sería su salida.

const a = 2;
const b =3;
let c=2;

for (let i=0; i<b;i++) {
    c*=a;
    for(let j=0; j<b;j++) {
      c+=a;
    }
}

console.log(c);

// no existe ningún error; c=58.