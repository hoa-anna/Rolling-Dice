function distributeGuests(totalGuests, totalTables) {
    const people_per_table = Math.floor(totalGuests / totalTables);             // Guests per table (rounded down)
    const extra_tables = totalGuests % totalTables;                             // Remaining guests
    
    let original_table = totalTables - extra_tables
    let table_with_extra = extra_tables

    let result = (`Your ${totalGuests} guests will be seated as follow: ${original_table} tables of ${people_per_table} people, and there are ${extra_tables} tables of ${people_per_table + 1} people.`)
    return result
}


// A prompt is easy to get user input
let totalGuestsInput = prompt("How many guests do you have?");
let numberOfTableInput = prompt("How many tables do you want?");

// convert the input into numeric data types
let totalGuests = parseInt(totalGuestsInput);
let totalTables = parseInt(numberOfTableInput);

// it is good programming practice to validate the input 
if (isNaN(totalGuests) || isNaN(totalTables) || totalGuests <= 0 || totalTables <= 0) {
    alert("Invalid input. Please enter valid positive numbers.");
} 
else {
    alert(distributeGuests(totalGuests, totalTables))                                                   
}