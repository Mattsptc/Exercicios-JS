function compras(trabalho1, trabalho2) {
    const comprarSorvete = trabalho1 || trabalho2
    const comprarTv50Pol = trabalho1 && trabalho2
   // const comprarTv32Pol = !!(trabalho1 ^ trabalho2); // bitwise xor
   const comprarTv32Pol = trabalho1 != trabalho2
   const manterSaudavel = !comprarSorvete // operador unario

   return { comprarSorvete, comprarTv50Pol, comprarTv32Pol, manterSaudavel }
}

console.log(compras(true, true));
console.log(compras(false, true));
console.log(compras(false, false));
console.log(compras(false, true));