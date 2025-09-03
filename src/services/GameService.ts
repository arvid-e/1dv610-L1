import * as readline from 'readline';


export class GameService {

  askForName(): Promise<string> {
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    return new Promise((resolve) => {
      rl.question('What is your name? ', (name: string) => {
        console.log('');
        console.log('');
        console.log('');
        console.log(`Hello ${name}!`);
        console.log('');
        console.log('Welcome to the Temperature Guessing Game!');
        console.log("Try to guess the temperature of a city of your choice!");
        resolve(name);
        rl.close();
      });
    })
  }
  
  
  askForCity(): Promise<string> {
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });
    console.log('');

    return new Promise((resolve) => {
      rl.question('Input a city name:  ', (name: string) => {
        resolve(name);
        rl.close();
      });
    })
  }

  askForTemperature(): Promise<number> {
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });
    console.log('');

    return new Promise((resolve) => {
      rl.question('Guess the temperature in celcius: ', (guess: string) => {
        const guessTemp = Number(guess);
        resolve(guessTemp);
      });
    })
  }

  getResults(name: string, city: string, guess: number, actual: number): void {
    const difference = Math.abs(guess - actual);
    console.log('');
    console.log('--------------------');
    console.log('# ---- Results ---- #');
    console.log('--------------------');
    console.log(`Player: ${name}`)
    console.log(`City: ${city}`);
    console.log('--------------------');

    if (difference < 1.1) {
        console.log('Amazing guess!');
        console.log('12 points');
        console.log('--------------------');
        console.log(`Your guess: ${guess}`);
        console.log(`Actual temperature: ${actual}`);
        console.log('--------------------');
    } else if (difference < 3) {
        console.log('Great guess!');
        console.log('8 points');
        console.log('--------------------');
        console.log(`Your guess: ${guess}`);
        console.log(`Actual temperature: ${actual}`);
        console.log('--------------------');
    } else if (difference < 6) {
        console.log('Good guess!');
        console.log('6 points');
        console.log('--------------------');
        console.log(`Your guess: ${guess}`);
        console.log(`Actual temperature: ${actual}`);
        console.log('--------------------');
    } else if (difference < 11) {
        console.log('OK guess.');
        console.log('2 points');
        console.log('--------------------');
        console.log(`Your guess: ${guess}`);
        console.log(`Actual temperature: ${actual}`);
        console.log('--------------------');
    } else if (difference > 10) {
        console.log('You can do better!');
        console.log('0 points');
        console.log('--------------------');
        console.log(`Your guess: ${guess}`);
        console.log(`Actual temperature: ${actual}`);
        console.log('--------------------');
    }

    process.exit(1)
  }
}