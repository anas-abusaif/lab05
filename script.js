var userAge = prompt('please enter your age!')
while (userAge != 20){
var userAge=prompt('only people that are 20 are allowed, please try again')
}
var rating = prompt('from 1 to 10 how much would you rate my website?')
if (rating <=10){
for(i=0; i<rating; i++){
  document.write('<img src= "https://www.crownconnect.com/assets/ThankYou.jpg"/>')
}
}
else (alert('please enter a valid value'))
 
