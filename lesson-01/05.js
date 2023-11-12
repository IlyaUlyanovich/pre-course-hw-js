let rule = "Еще не родился тот человек, который поставил бы цель и не смог бы стать программистом.";
switch (true) { 
    case rule.length < 25: 
     console.log("Все-таки не правил без исключения."); 
     break; 
    case rule.length > 25: 
     console.log("У меня сто пудов все получится"); 
     break; 
    case rule.length === 25: 
     console.log("50 на 50"); 
     break; 
   default:
    console.log("Default"); 
   }