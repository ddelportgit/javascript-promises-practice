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

// Handle error in promise chain

Promise.resolve(10)
  .then(() => {
    throw new Error("Calculation failed!");
  })
  .catch((error) => {
    console.log(error.message);
  });

// Promise.all()

const promise1 = Promise.resolve("HTML");
const promise2 = Promise.resolve("CSS");
const promise3 = Promise.resolve("JavaScript");

Promise.all([promise1, promise2, promise3]).then((results) => {
  console.log(results);
});

// Promise.race()

const promiseA = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Winner A");
  }, 1000);
});
const promiseB = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Winner B");
  }, 2000);
});

Promise.race([promiseA, promiseB]).then((result) => {
  console.log(result);
});

// Promise.allSettled()

const promiseX = Promise.resolve("Task completed");
const promiseY = Promise.reject("Task failed");
const promiseZ = Promise.resolve("Task finished");

Promise.allSettled([promiseX, promiseY, promiseZ]).then((results) => {
  console.log(results);
});

// Promise.any()

const promiseFirst = Promise.reject("First failed");
const promiseSecond = Promise.resolve("Second succeeded");
const promiseThird = Promise.resolve("Third succeeded");

Promise.any([promiseFirst, promiseSecond, promiseThird])
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });

// Final challenge

function getUserData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        id: 1,
        name: "Alex",
        role: "Frontend Developer",
      });
    }, 1000);
  });
}

getUserData()
  .then((result) => {
    console.log(`Name ${result.name}`);
    console.log(`Role: ${result.role}`);
  })
  .catch((error) => {
    console.log(error);
  });
