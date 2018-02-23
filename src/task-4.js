
export default function formatTime(seconds) {

    const hours = Math.trunc(seconds / 3600);
    const minutes = Math.trunc(seconds % 3600 / 60);
    const sec = seconds % 60;
    let hoursF12 = hours;
    let time;
    if (hours > 12) {
        hoursF12 = hours - 12;
    }
    if (hours === 0) {
        hoursF12 = 12;
    }
    time = `${hoursF12 > 9 ? `${hoursF12}` : `0${hoursF12}`}`;
    time += `:${minutes > 9 ? `${minutes}` : `0${minutes}`}`;
    time += `:${(sec > 9 ? `${sec}` : `0${sec}`)}`;
    time += ` ${hours < 12 ? "AM" : "PM"}`;
    return time;
}

