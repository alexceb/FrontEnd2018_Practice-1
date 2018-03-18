
export default function formatTime(seconds) {

    const hours = Math.trunc(seconds / 3600);
    const minutes = Math.trunc(seconds % 3600 / 60);
    const sec = seconds % 60;
    const hoursF12 = hours > 12 ? hours - 12 : hours || 12;
    const amOrPm = hours < 12 ? "AM" : "PM";
    const getTimeNumber = (value) => value > 9 ? `${value}` : `0${value}`;
    
    return `${getTimeNumber(hoursF12)}:${getTimeNumber(minutes)}:${getTimeNumber(sec)} ${amOrPm}`;
}