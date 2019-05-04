// JavaScript source code
/* ---------Main-----
var person = {
    name: 'Sarah',
    country: 'US',
    age: 35,
    treehouseStudent: true,
    skills: ['JavaScript', 'HTML', 'CSS']
};

function print(message) {
    var div = document.getElementById('output');
    div.innerHTML = message;
}


var mess = '<p> Hello, My name is ' + person.name + '</p>';

mess += '<p> The skills I have are ' + person.skills[0] + ', ' + person.skills[1] + '</p>';
mess += '<p>However, I have ' + person.skills.length + ' Skills in total </p>';
print(mess);

for (var i in person) {
    console.log(i,": ", person[i]);
}
   */


var message = '';
var student;
var search;

//Sample predetermine information
//This code do not have the names displayed to the user before entering names
    //because of the small sample size and it being predetermine.
//This code is for the functionality.
var Records = [
    {
        name: 'Dave',
        track: 'Front End Development',
        achievements: '158',
        points: '14730'
    },
    {
        name: 'Jody',
        track: 'iOS Development with Swift',
        achievements: '175',
        points: '16375'
    },
    {
        name: 'Jordan',
        track: 'PHP Development',
        achievements: '55',
        points: '2025'
    },
    {
        name: 'John',
        track: 'Learn WordPress',
        achievements: '40',
        points: '1950'
    },
    {
        name: 'Trish',
        track: 'Rails Development',
        achievements: '5',
        points: '350'
    }
];





function print(message) {  //This function puts the javascript into the HTML 
    var outputDiv = document.getElementById('output');
    outputDiv.innerHTML = message;
   
}

function getRecords(student) {  //This function is using the format of the records and ready to insert into HTML.
    var report = '<h2>Student: ' + student.name + '</h2>';
        report += '<p><b>Track:</b> ' + student.track + '</p>';
        report += '<p><b>Points:</b> ' + student.points + '</p>';
    report += '<p><b>Achievements:</b> ' + student.achievements + '</p>';
    return report;
}

function firstLetterCap(wholeStr) { //The function changes the first letter in the name to cap even if the user doesn't.
    var firstchar = wholeStr.charAt(0);
    var remainingStr = wholeStr.slice(1);
    wholeStr = firstchar.toUpperCase() + remainingStr;
    return wholeStr;
}


checkBool = true; //This is for the infinite loop.
allChecked = 0; //counter

search = prompt('Search student records: For example, type a name such as "Jody" or type "quit" to end the program.');
search = firstLetterCap(search);


while (checkBool) { //This loop is infinite until you type 'quit'. It says it has an error but it works.

    
    if (search.toLowerCase() === 'quit') { //To end program enter quit.
        checkBool = false;
    }


    for (var i = 0; i < Records.length; i += 1) {
        student = Records[i];
        if (student.name === search) { //Checks the names in the records
            message = getRecords(student);
            print(message);
            checkBool = false; //the end 'while' loop
            break; //To break 'for' loop
        }
        else {
            allChecked += 1; //counting all the times failed to search for name
        }
    }

    if (allChecked === Records.length) { //When allChecked is maxed(Checked all names in record) it will prompt user message
        search = prompt('The name you have entered is not in the records, please try again or type "quit" to end the program.');
        search = firstLetterCap(search);
    }
}





