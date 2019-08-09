window.addEventListener("DOMContentLoaded", function() {

    'use strict';
    let tab = document.querySelectorAll(".info-header-tab"),
        info = document.querySelector(".info-header"),
        tabContent = document.querySelectorAll(".info-tabcontent"),
        tabBtn = document.querySelectorAll(".info-tabcontent .description-btn"),
        overlay = document.querySelector(".overlay");

    console.log(tabBtn);

    function hideTabContent(a) {
        for (let i = a; i < tabContent.length; i++) {
            tabContent[i].classList.remove("show");
            tabContent[i].classList.add("hide");
        }
    }

    hideTabContent(1);

    function showTabContent (b) {
        if (tabContent[b].classList.contains("hide")) {
            tabContent[b].classList.remove("hide");
            tabContent[b].classList.add("show");
        }
    } 

    info.addEventListener("click", function(event) {
        let target = event.target;
        if (target && target.classList.contains("info-header-tab")) {
            for (let i = 0; i < tab.length; i++) {
                if (target == tab[i]) {
                    hideTabContent(0);
                    showTabContent(i);
                    tabBtn[i].addEventListener("click", function() {
                        overlay.style.display = "block";
                        this.classList.add("more-splash");
                        document.body.style.overflow = "hidden";
                    });
                    break;
                }
            }
        }
    });

    let deadline = '2019-8-9';

    function getTimeRemaining(endtime) {
        let t = Date.parse(endtime) - Date.parse(new Date());

        if (t <= 0) {
            t = 0;
        }

        let seconds = Math.floor((t/1000) % 60),
            minutes = Math.floor((t/1000/60) % 60),
            hours = Math.floor(t/(1000*60*60));

        return {
            'total' : t,
            'hours' : hours,
            'minutes' : minutes,
            'seconds' : seconds
        };
    }

    function setClock (id, endtime) {
        let timer = document.getElementById(id),
            hours = timer.querySelector(".hours"),
            minutes = timer.querySelector(".minutes"),
            seconds = timer.querySelector(".seconds"),
            timeInterval = setInterval(updateClock, 1000);

        function updateClock() {
            let t = getTimeRemaining(endtime),
                hoursT = t.hours,
                minutesT = t.minutes,
                secondsT = t.seconds;

            if (hoursT >= 0 && hoursT <10) {
                hoursT = `0 ${hoursT}`; 
            }

            hours.textContent = hoursT;

            if (minutesT >= 0 && minutesT <10) {
                minutesT = `0 ${minutesT}`; 
            }

            minutes.textContent = minutesT;

            if (secondsT >= 0 && secondsT <10) {
                secondsT = `0 ${secondsT}`; 
            }

            seconds.textContent = secondsT;

            if (t.total <= 0) {
                clearInterval(timeInterval);
            }
        }
    }

    

    setClock('timer', deadline);

    let more = document.querySelector(".more"),
        close = document.querySelector(".popup-close");

    more.addEventListener("click", function() {
        overlay.style.display = "block";
        this.classList.add("more-splash");
        document.body.style.overflow = "hidden";
    });

    close.addEventListener("click", function() {
        overlay.style.display = "none";
        more.classList.remove("more-splash");
        document.body.style.overflow = "";
    });



});