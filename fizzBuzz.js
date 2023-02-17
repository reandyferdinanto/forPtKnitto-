const FizzBuzz = (fbNum) => {
  if ((fbNum % 3 === 0) & (fbNum % 5 === 0)) return "FizzBuzz";
  if (fbNum % 3 === 0) return "Fizz";
  if (fbNum % 5 === 0) return "Buzz";
  return fbNum;
};

const rangeNum = 50;

for (let i = 0; i < rangeNum; i++) {
  console.log(FizzBuzz(i));
}
