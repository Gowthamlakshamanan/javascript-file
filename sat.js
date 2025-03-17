// let lapCounter = 1;
// const totalLaps = 10;
// while (lapCounter <= totalLaps) {
//     console.log(`Lap ${lapCounter} completed.`);
//     lapCounter++;
// }
// console.log("All laps completed!");


// let batteryLevel = 100;
// while (batteryLevel > 20) {
//     console.log(`Remaining battery: ${batteryLevel}%`);
//     batteryLevel -= 5;
// }
// console.log("Battery is low.");


// let position = { x: 0, y: 0 };
// function printPosition() {
//     console.log(`Robot's current position: (${position.x}, ${position.y})`);
// }
// function moveRobot(direction) {
//     switch (direction) {
//         case 'North':
//             position.y += 1;
//             break;
//         case 'South':
//             position.y -= 1;
//             break;
//         case 'East':
//             position.x += 1;
//             break;
//         case 'West':
//             position.x -= 1;
//             break;
//         default:
//             console.log('Invalid direction. Use North, South, East, or West.');
//             return;
//     }
//     printPosition();
// }
// moveRobot('North');
// moveRobot('East');  
// moveRobot('South'); 
// moveRobot('West');  



// let altitude = 1000;
// function simulateDescent() {
//     const intervalId = setInterval(() => {
//         altitude -= 10;
//         console.log(`Current altitude: ${altitude}ft`);
//         if (altitude <= 0) {
//             console.log("Flight arrived");
//             clearInterval(intervalId);
//         }
//     }, 100);
// }
// simulateDescent();


// function assignRunway(destination) {
//     let runway;

//     switch (destination) {
//         case 'New York':
//        console.log('Runway 1');
//             break;
//         case 'Los Angeles':
//         console.log('Runway 2');
//             break;
//         case 'Chicago':
//         console.log('Runway 3');
//             break;
//         case 'Miami':
//         console.log('Runway 4');
//             break;
//         case 'Dallas':
//         console.log ('Runway 5');
//             break;
//         default:
//        console.log('Unknown destination. Please enter a valid destination.');
//             break;
//     }

// }
// assignRunway("Dallas");



const targetAltitude = 1000;
const intervals = 10;
const altitudeIncrement = targetAltitude / intervals;
let currentAltitude = 0;
for (let i = 1; i <= intervals; i++) {
    currentAltitude += altitudeIncrement;
    console.log(`Altitude at interval ${i}: ${Math.round(currentAltitude)}ft`);
}

console.log(`Final altitude: ${targetAltitude}ft`);
