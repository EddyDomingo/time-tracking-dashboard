console.log('hello');

const daily = document.getElementById('daily-link');
const weekly = document.getElementById('weekly-link');
const monthly = document.getElementById('monthly-link');

daily.addEventListener('click', displayDaily);
weekly.addEventListener('click', displayWeekly);
monthly.addEventListener('click', displayMonthly);

function displayDaily(){
      var dailyElements = document.getElementsByClassName('daily');
      var WeeklyElements = document.getElementsByClassName('weekly');
      var MonthlyElements = document.getElementsByClassName('monthly');
      var counter;
      for(counter = 0; counter < dailyElements.length; counter++){
          dailyElements[counter].style.display = "block";
      }
      for(counter = 0; counter < WeeklyElements.length; counter++){
        WeeklyElements[counter].style.display = "none";
    }
    for(counter = 0; counter < MonthlyElements.length; counter++){
        MonthlyElements[counter].style.display = "none";
    }
}

function displayWeekly(){
    var dailyElements = document.getElementsByClassName('daily');
    var WeeklyElements = document.getElementsByClassName('weekly');
    var MonthlyElements = document.getElementsByClassName('monthly');
    var counter;
    for(counter = 0; counter < dailyElements.length; counter++){
        dailyElements[counter].style.display = "none";
    }
    for(counter = 0; counter < WeeklyElements.length; counter++){
      WeeklyElements[counter].style.display = "block";
    }
    for(counter = 0; counter < MonthlyElements.length; counter++){
        MonthlyElements[counter].style.display = "none";
    }
 }

 function displayMonthly(){
    var dailyElements = document.getElementsByClassName('daily');
    var WeeklyElements = document.getElementsByClassName('weekly');
    var MonthlyElements = document.getElementsByClassName('monthly');
    var counter;
    for(counter = 0; counter < dailyElements.length; counter++){
        dailyElements[counter].style.display = "none";
    }
    for(counter = 0; counter < WeeklyElements.length; counter++){
      WeeklyElements[counter].style.display = "none";
    }
    for(counter = 0; counter < MonthlyElements.length; counter++){
        MonthlyElements[counter].style.display = "block";
    }
 }

 