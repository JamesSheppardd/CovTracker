const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
]

const decideDate = (date) => {
    // date in form YYYY-MM-DD
    const year = date.substring(0,4);
    let month = date.substring(5,7);
    const day = date.substring(8,10);
    // get month into actual month name
    month = months[month-1];

    return `${month} ${day}, ${year}`
}

export default decideDate;