class CountdownTimer {
  constructor({ selector, targetDate }) {
    const block = document.querySelector(selector);
    this.date = targetDate;
    this.days = block.querySelector('[data-value="days"]');
    this.hours = block.querySelector('[data-value="hours"]');
    this.minutes = block.querySelector('[data-value="mins"]');
    this.seconds = block.querySelector('[data-value="secs"]');
    this.startT();
    this.updateT();
  }
  getTimerComponents(time) {
    const days = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));
    const hours = this.pad(
      Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    );
    const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));

    return { days, hours, mins, secs };
  }
  startT() {
    setInterval(() => {
      this.updateT();
    }, 1000);
  }
  updateT() {
    const currDate = new Date().getTime();
    let time = this.date - currDate;
    const { days, hours, mins, secs } = this.getTimerComponents(time);
    this.dates(days, hours, mins, secs);
  }
  dates(days, hours, mins, secs) {
    this.days.textContent = days;
    this.hours.textContent = hours;
    this.minutes.textContent = mins;
    this.seconds.textContent = secs;
  }
  pad(value) {
    return String(value).padStart(2, "0");
  }
}
new CountdownTimer({
  selector: "#timer-1",
  targetDate: new Date("Jul 31, 2021"),
});
