
// Write your code here


// const chai = require('chai')
// const expect = chai.expect;

// describe('index.js', function() {
//   describe('multiply', function() {
//     it("is an equation whose multiplied results will equal 62", function() {
//       expect(num1).to.be.a('number')
//       expect(num2).to.be.a('number')
//       expect(multiply).to.eq(62)

// describe('random', function() {
//     it("generates a random integer greater than 0", function() {
//       expect(Number.isInteger(random)).to.be.true
//       expect(random).to.not.eq(0)
const num1 = 10;
let num2 = 6.2;

let multiply = num1 * num2;
console.log(multiply);

let maxi = Math.floor(70);
let min = Math.ceil(1);
let random = Math.floor(Math.random() * (maxi) + min);
console.log(random);


// describe('mod', function() {
//     it("is an equation that calculates a remainder that is equal to 4", function() {
//       expect(num3).to.be.a('number')
//       expect(num4).to.be.a('number')
//       expect(mod).to.eq(4)
let num3 = 10;
let num4 = 6;

let mod = num3 % num4;
console.log(mod);


// describe('max', function() {
//     it("will return 20 as the highest number in the set", function() {
//       expect(max).to.eq(20)
const arr = [20, 15, 10, 5, 0];
let max = Math.max(...arr)
console.log(max);