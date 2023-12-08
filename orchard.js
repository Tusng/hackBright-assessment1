///////////////////
// Apple Orchard //
///////////////////

/*
    The data below has been collected over the last week at an apple orchard. 
    You will be using your coding skills to gain insights into its daily 
    operations.

    Below are three arrays each containing 7 numbers. You will use them and the 
    price variables to complete the problems in this file.

    The indexes of the arrays correspond with a day of the week.
    The first array is named fujiAcres. Notice that the first item in this array 
    is 2, meaning that 2 acres of Fuji apples were picked on Monday of this week.
*/

const fujiAcres = [2, 3, 3, 2, 2, 2, 1]
const galaAcres = [5, 2, 4, 3, 6, 2, 4]
const pinkAcres = [1, 5, 4, 2, 1, 5, 4]





// PROBLEM 1

/*
    Using a for loop, calculate the total number of acres picked for the entire 
    week.

    Save the number to a variable called `totalAcres`.
    Log `totalAcres` to the console.
*/

// CODE HERE
//Initialize totalAcres variable to store the asked result
let totalAcres = 0;
//Use for loop to loop through daily acres for 7 days(a week)
for (let i = 0; i < 7; i++) {
    //For each daily acres per each variety, add it's value to totalAcres
    totalAcres = totalAcres + fujiAcres[i] + galaAcres[i] + pinkAcres[i];
}
console.log(totalAcres);




// PROBLEM 2

/*
    Using `totalAcres`, calculate the average number of acres picked per day. 

    (Remember that the average is the total divided by the number of days)

    Save the answer to a variable called 
    `averageDailyAcres`, and log `averageDailyAcres` to the console.
*/

// CODE HERE
//Caculate the average daily acres by diving the total acres by 7 days
const averageDailyAcres = totalAcres / 7;
console.log(averageDailyAcres);




// PROBLEM 3

/*
    We have provided 2 variables below. 
    
    The `acresLeft` variable is the number of acres that still have apples left. 
    
    The `days` variable represents how many more days of work are left. It's 
    initialized at 0 because we're going to be using it as a counter.
    
    Write a while loop that will continue to run while `acresLeft` is above 0. 
    
    On each iteration of the loop:
    - add 1 to the `days` variable
    - subtract your daily average from the number of acres left

    Outside the loop, log `days` to the console.

    Note: This is not the most efficient way to calculate this number. You might
    think about other ways you could do it more mathematically.
*/

let acresLeft = 174 
let days = 0

// CODE HERE
//Count the number of days needed to pick apples from remaining acres
//While there are still acres to pick after daily apple picking
while (acresLeft - averageDailyAcres > 0) {
    //Increment the number of days by 1
    days++;
    //Update the number of remaining acres
    acresLeft  -= averageDailyAcres;
}
console.log(days);


// PROBLEM 4

/*
    Your next task is to create 3 arrays that list the daily amount of apples 
    picked, in tons, for each variety. 
    
    Each acre yields 6.5 tons of apples.

    Use the variables below to store your new arrays. Make sure that you
    don't modify the original arrays on lines 36 - 38.

    Log each of your arrays to the console.

    (Hint: loop over the original arrays, calculate the tons for that day, then
    add that number into the new list)
*/

// CODE HERE

let fujiTons = [];
let galaTons = [];
let pinkTons = [];

//For each day in the week, calculate the number of apples in tons per each variety
//by mutiplying the number of acres by 6.5 since each acre yields 6.5 tons of apple
for(let index = 0; index < 7; index++) {
    //Caculate the number of apples in tons for each type of apples and store the result in associated array for each variety
    fujiTons[index] = fujiAcres[index] * 6.5;
    galaTons[index] = galaAcres[index] * 6.5;
    pinkTons[index] = pinkAcres[index] * 6.5;
}
//Print out the results
console.log("fujiTons:")
console.log(fujiTons);
console.log("galaTons:")
console.log(galaTons);
console.log("pinkTons:")
console.log(pinkTons);

// PROBLEM 5

/*
    Next, calculate the TOTAL number of pounds picked per variety.

    You'll need to add up the tons per each variety and convert the number 
    into pounds -- store that number in the variables given below. 

    Log each of the values to the console.

    Hint: there are 2000 pounds in a ton.
*/

// CODE HERE 
let fujiPoundsTotal = 0;
let galaPoundsTotal = 0;
let pinkPoundsTotal = 0;

//For each day in the week
for (let j = 0; j < 7; j++) {
    //add the daily picked apples to the total in tons for each variety
    fujiPoundsTotal = fujiPoundsTotal + fujiTons[j];
    galaPoundsTotal = galaPoundsTotal + galaTons[j];
    pinkPoundsTotal = pinkPoundsTotal + pinkTons[j];
}
//Convert ton to pound
fujiPoundsTotal *= 2000;
galaPoundsTotal *= 2000;
pinkPoundsTotal *= 2000;
//Print out the results
console.log("fujiPoundsTotal: " + fujiPoundsTotal + " pounds");
console.log("galaPoundsTotal: " + galaPoundsTotal + " pounds");
console.log("pinkPoundsTotal: " + pinkPoundsTotal + " pounds");


// PROBLEM 6

/*
    Now that you know the total pounds per variety, use the prices below to 
    figure out how much you'll make from selling each type of apple. 

    The prices are per pound and are written in cents. 

    Log each of the profits to the console. 
*/
const fujiPrice = .89 
const galaPrice = .64
const pinkPrice = .55

// CODE HERE
//Calculate the profit for each type of apples
//by mutiplying the price per pound of each variety by the number of apples of each type in pounds
 let fujiProfit = fujiPoundsTotal * fujiPrice;
 let galaProfit = galaPoundsTotal * galaPrice;
 let pinkProfit = pinkPoundsTotal * pinkPrice;
//Print out the results
 console.log("fujiProfit: " + fujiProfit + " dollars");
 console.log("galaProfit: " + galaProfit + " dollars");
 console.log("pinkProfit: " + pinkProfit + " dollars");


// PROBLEM 7

/*
    Add up all your profits and save  the number to a variable called 
    `totalProfit`.

    Log `totalProfit` to the console.
*/

// CODE HERE
//Calcualte the total profit by adding the profit of each variety
const totalProfit = fujiProfit + galaProfit + pinkProfit;
console.log("Total profit: " + totalProfit + " dollars");