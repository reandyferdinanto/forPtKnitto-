const fizzBuzz = (fbNum: number): string | number => {
  if (fbNum % 3 === 0 && fbNum % 5 === 0) return "Fizz Buzz";
  if (fbNum % 3 === 0) return "Fizz";
  if (fbNum % 5 === 0) return "Buzz";
  return fbNum;
};
const rangeNum: number = 50;

for (let i = 0; i <= rangeNum; i++) {
  console.log(fizzBuzz(i));
}
