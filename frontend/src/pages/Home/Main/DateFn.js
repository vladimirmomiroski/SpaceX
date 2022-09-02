const months = [
  "Jan",
  "Feb",
  "March",
  "April",
  "May",
  "June",
  "July",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

export default function DateFn(date) {

  const dateArr = date.split('/')
  const month = months[parseInt(dateArr[1]) - 1]
    
  return `${dateArr[0]} ${month} ${dateArr[2]}`
}


