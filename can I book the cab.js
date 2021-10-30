function isBooked(start, end) {
  let bookings = [
    {
      start: 15,
      end: 25,
    },
    {
      start: 13,
      end: 14,
    },
    {
      start: 18,
      end: 24,
    },
  ];

  let userDates = [];
  let tempDates = [];
  let result = 1;

  for (let i = start; i <= end; i++) {
    userDates.push(i);
  }

  for (var i = 0; i < bookings.length; i++) {
    tempDates = [];
    for (let j = bookings[i].start; j <= bookings[i].end; j++) {
      tempDates.push(j);
    }
    for (let t = 0; t < tempDates.length; t++) {
      userDates.includes(tempDates[t]) ? (result = 0) : (result = 1);
      if (result == 0) {
        return "You cannot book on these dates";
      }
    }
  }
  if (result === 1) return "Your ride is booked";
}

var t1 = performance.now();
console.log(isBooked(9, 12));
var t2 = performance.now();

console.log(`Time elapsed: ${(t2 - t1) / 100} seconds.`);
