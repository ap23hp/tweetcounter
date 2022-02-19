function count(){
  
  const tweet =  event.target.value
  console.log(tweet)
    //a big object is getting logged, and we can find event  where it is originated from
  //event.target will give u element who started the event
  //now i want what is typed inside
  //value will give the word that we are typing

updateCount(tweet)
 
}
function updateCount(tweet){
    console.log("counting",tweet)
   const counter= document.querySelector(".counter")
counter.innerText=`${tweet.length}/20`
window.localStorage.setItem("tweet",tweet)
}

//if i refresh page ,the text in it will be gone
//we need to save it somewhere in browser
//we can use storage//under applications tab-we have threee places to store data
//local storage,session storage and cookies

//local storage: even if u refresh it will be there
// window.localStorage.setItem("tweet","amazing")
const storedTweet=window.localStorage.getItem("tweet")
console.log(storedTweet)

document.querySelector(".tweet").innerText=storedTweet
updateCount(storedTweet)
//to remove items
//window.localstorage.removeitem("tweet")
