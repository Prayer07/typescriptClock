const Clock = () =>{
    let dates = new Date()

    const time = document.getElementById("time") as HTMLParagraphElement
    const date = document.getElementById("date") as HTMLSpanElement
    const day = document.getElementById("day") as HTMLSpanElement
    const month = document.getElementById("month") as HTMLSpanElement
    const year = document.getElementById("year") as HTMLSpanElement


    //updated version
    const hours = dates.getHours() < 10? `0${dates.getHours()}`: dates.getHours()
    const minutes = dates.getMinutes() < 10? `0${dates.getMinutes()}`: dates.getMinutes()
    const seconds = dates.getSeconds() < 10? `0${dates.getSeconds()}`: dates.getSeconds()

    // time
    time.textContent = `${hours}:${minutes}:${seconds}`

    //date
    date.textContent = `${dates.getDate() < 10? `0${dates.getDate()}` : dates.getDate()}`

    //year
    year.textContent = `${dates.getFullYear()}`

    //dates.getDay()
    if(dates.getDay() == 1){
        day.textContent = "Monday"
    }else if(dates.getDay() == 2){
        day.textContent = "Tuesday"
    }else if(dates.getDay() == 3){
        day.textContent = "Wednesday"
    }else if(dates.getDay() == 4){
        day.textContent = "Thursday"
    }else if(dates.getDay() == 5){
        day.textContent = "Friday"
    }else if(dates.getDay() == 6){
        day.textContent = "Saturday"
    }else if(dates.getDay() == 0){
        day.textContent = "Sunday"
    }    

    
    //dates.getMonth()
    if(dates.getMonth() == 1){
        month.textContent = "February"
    }else if(dates.getMonth() == 2){
        month.textContent = "March"
    }else if(dates.getMonth() == 3){
        month.textContent = "April"
    }else if(dates.getMonth() == 4){
        month.textContent = "May"
    }else if(dates.getMonth() == 5){
        month.textContent = "June"
    }else if(dates.getMonth() == 6){
        month.textContent = "July"
    }else if(dates.getMonth() == 7){
        month.textContent = "August"
    }else if(dates.getMonth() == 8){
        month.textContent = "September"
    }else if(dates.getMonth() == 9){
        month.textContent = "October"
    }else if(dates.getMonth() == 10){
        month.textContent = "November"
    }else if(dates.getMonth() == 11){
        month.textContent = "December"
    }else if(dates.getMonth() == 0){
        month.textContent = "January"
    }

}
setInterval(Clock, 1000)