var q1 = prompt("Would you like to have Coffee or Tea?"); 

if (q1.toLowerCase() === "coffee") { 

var q2 = prompt("Great! Would you like to have Cookies with your Coffee?"); 

if (q2.toLowerCase() === "yes") { 

console.log("You have ordered coffee and cookies."); 

} else { console.log("You ordered only coffee."); 

}

 } else if (q1.toLowerCase() === "tea") { 

var q2 = prompt("Great! Would you like to have Cookies with your Tea?"); 

if (q2.toLowerCase() === "yes") {

 console.log("You have ordered tea and cookies."); 

} else { console.log("You ordered only tea."); 

}

 } else { console.log("Okay, have a good day...😀"); 

}
