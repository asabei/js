function resultAngle(hours, minutes) {
    const minuteAngle = minutes * 6;
    const hourAngle = (hours % 12) * 30 + (minutes * 0.5);
    let angle = Math.abs(hourAngle - minuteAngle);
    if (angle > 180) {
        angle = 360 - angle; 
    }

    return angle;
}
const time = {
    hours : 3,
    minutes : 30
};
const angle = resultAngle(time.hours, time.minutes);
console.log(angle);