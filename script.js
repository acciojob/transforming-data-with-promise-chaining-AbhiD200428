//your JS code here. If required.
document.getElementById("btn").addEventListener("click", () => {
  const inputVal = document.getElementById("ip").value;
  const outputDiv = document.getElementById("output");

  if (inputVal === "") return;

  const num = Number(inputVal);

  new Promise((resolve) => {
    setTimeout(() => {
      outputDiv.textContent = `Result: ${num}`;
      resolve(num);
    }, 2000);
  })
    .then((val) => {
      return new Promise((resolve) => {
        setTimeout(() => {
          const res = val * 2;
          outputDiv.textContent = `Result: ${res}`;
          resolve(res);
        }, 1000);
      });
    })
    .then((val) => {
      return new Promise((resolve) => {
        setTimeout(() => {
          const res = val - 3;
          outputDiv.textContent = `Result: ${res}`;
          resolve(res);
        }, 1000);
      });
    })
    .then((val) => {
      return new Promise((resolve) => {
        setTimeout(() => {
          const res = val / 2;
          outputDiv.textContent = `Result: ${res}`;
          resolve(res);
        }, 1000);
      });
    })
    .then((val) => {
      return new Promise((resolve) => {
        setTimeout(() => {
          const res = val + 10;
          outputDiv.textContent = `Final Result: ${res}`;
          resolve(res);
        }, 1000);
      });
    });
});