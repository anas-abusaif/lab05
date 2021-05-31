var userAge = prompt('please enter your age!');
 while (userAge <20 || userAge>40){
 userAge=prompt('only people that are between 20 and 40 are allowed, please try again');
 }



var rating = prompt('from 1 to 10 how much would you rate my website?')
if (rating <=10){
for(i=0; i<rating; i++){
  document.write( + i + '<img src= "https://www.crownconnect.com/assets/ThankYou.jpg"/> <br>');
}
}
else (alert('please enter a valid value'));




let f=prompt('how much do you spend on food every month?');
 
let w=prompt("what's the value of the water bill you recive every month");

let e=prompt("what's the value of the electricity bill you recive every month?");

let h=prompt("how much do you pay for your house rent every month?");

function totalExpensis(f, w, e, h){

let  total1 = Number(f) + Number(w) + Number(e) + Number(h) ;

 document.write('your total monthly expensis are: ' + total1 + '<br>' )

}
totalExpensis(f, w ,e, h);


