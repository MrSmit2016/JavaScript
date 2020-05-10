"use strict"
class CountdownTimer {
    constructor(seconds = 0, minutes = 0, hours = 0, days = 0, t,) {
        this.seconds = seconds;
        this.minutes = minutes;
        this.hours = hours;
        this.days = days;
        this.t = t;
        this.getTimeRemaining = this.getTimeRemaining.bind(this);
    }

    getTimeRemaining(endtime) {
        this.t = Date.parse(endtime) - Date.parse(new Date());
        this.seconds = Math.floor((this.t / 1000) % 60);
        this.minutes = Math.floor((this.t / 1000 / 60) % 60);
        this.hours = Math.floor((this.t / (1000 * 60 * 60)) % 24);
        this.days = Math.floor(this.t / (1000 * 60 * 60 * 24));
        return {
            total: this.t,
            days: this.days,
            hours: this.hours,
            minutes: this.minutes,
            seconds: this.seconds,
        };
    }

    initializeClock(id, endtime) {
        const clock = document.getElementById(id);
        const daysSpan = clock.querySelector('[data-value="days"]');
        const hoursSpan = clock.querySelector('[data-value="hours"]');
        const minutesSpan = clock.querySelector('[data-value="mins"]');
        const secondsSpan = clock.querySelector('[data-value="secs"]');
        const updateClock = () => {
            const t = this.getTimeRemaining(endtime);
            daysSpan.textContent = t.days;
            hoursSpan.textContent = ('0' + t.hours).slice(-2);
            minutesSpan.textContent = ('0' + t.minutes).slice(-2);
            secondsSpan.textContent = ('0' + t.seconds).slice(-2);

            if (t.total <= 0) {
                clearInterval(timeinterval);
            }
        };
        updateClock();
        const timeinterval = setInterval(updateClock, 1000);
    }
}

const clock = new CountdownTimer({
    selector: '#timer-1',
    targetDate: new Date('Jul 17, 2019'),
});

const deadLine = 'Aug 7, 2020';
const deadLineFormat = new Date(Date.parse(deadLine));
clock.initializeClock('timer-1', deadLineFormat);