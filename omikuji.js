var username;
var userresult;
 
username = prompt("お名前を教えて下さい。");
 
if (username == ""){
    username = "名無し";
}

document.getElementById("name").innerHTML = username;
var rand = Math.floor( Math.random() * 5) ; 
 

switch (rand){
    case 0:
        userresult = "大吉";
        break;
    case 1:
        userresult = "中吉";
        break;
    case 2:
        userresult = "小吉";
        break;
    case 3:
        userresult = "吉";
        break;
    case 4:
        userresult = "凶";
        break;
  }
document.getElementById("result").innerHTML = userresult;