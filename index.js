// Code your solution here

// let even = arr.filter(n => {
// 	return n % 2 === 0;
//   });
  
// const drivers = [
// 	{
// 	  name: 'Bobby',
// 	  hometown: 'Pittsburgh' },
// 	{
// 	  name: 'Sammy',
// 	  hometown: 'New York' } ,
// 	{
// 	  name: 'Sally',
// 	  hometown: 'Cleveland' },
// 	{
// 	  name: 'Annette',
// 	  hometown: 'Los Angeles' },
// 	{
// 	  name: 'Bobby',
// 	  hometown: 'Tampa Bay' }
//   ];

function findMatching(drivers, name) {
	// return drivers.filter((driver) => {
		// return driver.toLowerCase() === name.toLowerCase()
	// })
	return drivers.filter(driver => driver.toLowerCase() === name.toLowerCase())
	};

function fuzzyMatch(drivers, name) {
	return drivers.filter(driver => driver.charAt(0) === name.charAt(0))
};

function matchName(drivers, name) {
	return drivers.filter(driver => driver.name === name)
}