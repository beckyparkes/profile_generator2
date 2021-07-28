const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What\'s your name? ', (name) => {
  console.log(`Nice ta meetcha, ${name}!`);

  rl.question('Why is the sky blue? ', (sky) => {
    console.log(`${sky} is NOT what my 4th grade science teacher told me, SIR.`);
  
  rl.question('If you could have a superpower, what would it be, and why? ', (superpower) => {
    console.log(`${superpower}, huh. Dude, that's pretty dope.`);
 
  
    console.log(`Well, ${name}, it's always awesome to learn of another super with the power of ${superpower}!\n And maaaaaaaybe I should go back to Ms. Sontrop and tell her that the sky is actually blue ${sky}.`)

    rl.close();
    })
  })
});
