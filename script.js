

// displays current date and time on top of the page
let m = moment().format('MMMM Do YYYY, h:mm:ss a')
console.log(m)
let currentDay = m
document.getElementById('currentDay').innerHTML += m

//adding color blocks associated with the past, present, and current time

const hours = ['9', '10', '11', '12', '13', '15', '16', '17']
let blockTime = moment().hour()


let timeChecker = () => {
  for (let i = 9; i <= 17; i++) {
    console.log((i), blockTime)

    const current = document.getElementById(`hour-${i}`).children[1]
    console.log(current)
    const data = JSON.parse(localStorage.getItem(i))
    current.textContent = data
    if (blockTime < (i)) {
      current.classList.remove("future")
      current.classList.remove("present")
      current.classList.add("past")
    } else if (blockTime === (i)) {
      current.classList.remove("past")
      current.classList.remove("future")
      current.classList.add("present")
    } else if (blockTime > (i)) {
      current.classList.remove("present")
      current.classList.remove("past")
      current.classList.add("future")
    }


  }
}
//time interval set for displaying color
let showColor = setInterval(() => {
  timeChecker()
}, 60000)
timeChecker()

//local storage

document.querySelector('.saveBtn').addEventListener('click', event => {
  let description = document.getElementsByClassName('description')
  console.log(description)
  let values = []
  for (let i = 0; i < description.length; i++ ) {
    let current = description[i].value
    values.push(current)
  }
  console.log(values)
localStorage.setItem('description', JSON.stringify(values)) || []
})


let storedEvents = JSON.parse(localStorage.getItem('description'))

if (storedEvents !== null) {
  events = storedEvents;
}
let description = document.getElementsByClassName('description')
for (let i = 0; i < events.length; i++) {
  let userDescription = events[i];
  let textArea = description[i]
  // let textArea = document.getElementById(i + 9)
  textArea.value = userDescription
  
}

