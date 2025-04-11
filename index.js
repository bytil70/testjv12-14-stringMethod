// string method = allow you to manipulate
//                 and work with text (string)

let userName = "   Burn Lai";

// console.log(userName.charAt(3));
// console.log(userName.indexOf('n'));
// console.log(userName.lastIndexOf('a'));
// console.log(userName.length);
// console.log(userName);
// userName = userName.trim();
// userName = userName.toUpperCase();
//userName = userName.toLowerCase();
// userName = userName.repeat(3);
// console.log(userName);


// let result = userName.startsWith(" ");
// if(result){
//  console.log("Your userName can't begin with ' '");
// };

let result = userName.endsWith(" ");
if(result){
 console.log("Your userName can't end with ' '");
}
else{
  // console.log(result);  // output false
  console.log(userName); 
}

/*
let result = userName.includes(" ");
if(result){
  console.log("Your userName can't include ' '");
}

else{
  console.log(userName);
}
*/

// let phoneNumber = "123-456-7890";

// //phoneNumber = phoneNumber.replaceAll("-", "/");

// //phoneNumber = phoneNumber.padStart(15, "*");
// phoneNumber = phoneNumber.padEnd(15, "*");
// console.log(phoneNumber);


const consoleOutput = document.getElementById('consoleOutput');

// 覆寫 console.log 函數
const originalConsoleLog = console.log.bind(console);
console.log = function() {
  const message = Array.from(arguments).join(' '); // 將所有參數連接成一個字串
  originalConsoleLog.apply(console, arguments);
  if (consoleOutput) {
    consoleOutput.innerHTML += message + '<br>';
  }
};

// 您的 JavaScript 程式碼，包含 console.log()
console.log('Hello from JavaScript!');

console.log('after trim the spaces, your name is：', userName);

