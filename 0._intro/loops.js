const batteries = [0.1,0.2,0.15];

batteries.forEach((battery, index) => console.log(`${battery} goes in port ${index+1}`));

const drainedBatteries = batteries.filter(battery => battery < 0.15);

console.log(drainedBatteries);