
//Variables to hold input Data
let  firstName=prompt("Enter your name")
let  state=prompt("Enter your state (the two letters in UpperCase)")
var temperature=prompt("Enter the tempature in Fahrenheit ")

//Array to hold all messages
let messages=["wear a warm coat, hat, scarf and gloves.", "wear a warm coat but you won't need a hat, scarf or gloves.", "wear your warmest coat, a warm hat, a scarf, and warm gloves.", "wear a warm coat, hat and gloves. Maybe a scarf too."]

//Outputs with if statments dependending on the users input
if (state=="NE" && temperature<32 )
  console.log(`${firstName}, ${messages[0]}`)
else if(state=="NE" && temperature>=32 && temperature<=50 )
  console.log(`${firstName}, ${messages[1]}`)
else if (state=="FL" && temperature>=32 && temperature<50 )
  console.log(`${firstName}, ${messages[2]}`)
else if(state=="FL" && temperature>=50 && temperature<=70 )
  console.log(`${firstName}, ${messages[3]}`)
  