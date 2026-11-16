const myPromise = new Promise((resolve, reject) => {
  reject("Something went wrong!");
});

myPromise
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });

// Promise chaining

Promise.resolve(5)
  .then((result) => {
    return result + 10;
  })
  .then((result) => {
    return result * 2;
  })
  .then((result) => {
    console.log(result);
  });
