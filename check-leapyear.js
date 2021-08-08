// The rule is that if the year is divisible by 100 and not divisible by 400, leap year is skipped. The year 2000 was a leap year, for example, but the years 1700, 1800, and 1900 were not. The next time a leap year will be skipped is the year 2100.


function checkLeapYear(year) {
    
    if (((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0)) {
        
        console.log("Its a Leap Year: ", year);
    }
    else {
        console.log('Not a Leap Year: ', year);
    }
}

let year = 2000;
checkLeapYear(year);