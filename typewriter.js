const sentence = "hello there from lighthouse labs";

let timer = 0;// GLOBAL VARIABLE

    
for (const char of sentence) { // YOU NEED A TIMEOUT INSIDE THE LOOP
   
    setTimeout(() => {
        process.stdout.write(char);

        }, timer += 100); //YOU NEED TO CHANGE THE TIME OF EACH ELEMENT 
        
}
 setTimeout(() => {
process.stdout.write('\n');

 },timer );