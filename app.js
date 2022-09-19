const subTotal = document.querySelector("#sub-total");
const taxTotal = document.querySelector("#tax-total");
const result = document.querySelector("#totalResult");

//item1
const dec1 = document.querySelector("#decr1");
const inc1 = document.querySelector("#incr1");
const count1 = document.querySelector("#counter1");

let sum1 = 0;

inc1.addEventListener("click", () => {
  sum1++;
  subTotal.innerHTML =
    "$" + (sum1 * 25.98 + sum2 * 45.99 + sum3 * 74.99).toFixed(2);
  taxTotal.innerHTML =
    "$" +
    (((sum1 * 25.98 + sum2 * 45.99 + sum3 * 74.99) * 18) / 100).toFixed(2);
  result.innerHTML =
    "$" +
    (
      sum1 * 25.98 +
      sum2 * 45.99 +
      sum3 * 74.99 +
      ((sum1 * 25.98 + sum2 * 45.99 + sum3 * 74.99) * 18) / 100 +
      15
    ).toFixed(2);
  item1();
});

dec1.addEventListener("click", () => {
  if (sum1 > 0) {
    sum1--;
    subTotal.innerHTML =
      "$" + (sum1 * 25.98 + sum2 * 45.99 + sum3 * 74.99).toFixed(2);
    taxTotal.innerHTML =
      "$" +
      (((sum1 * 25.98 + sum2 * 45.99 + sum3 * 74.99) * 18) / 100).toFixed(2);
    result.innerHTML =
      "$" +
      (
        sum1 * 25.98 +
        sum2 * 45.99 +
        sum3 * 74.99 +
        ((sum1 * 25.98 + sum2 * 45.99 + sum3 * 74.99) * 18) / 100 +
        15
      ).toFixed(2);
    item1();
  }
});

function item1() {
  count1.innerHTML = sum1;
}

//item2
const dec2 = document.querySelector("#decr2");
const inc2 = document.querySelector("#incr2");
const count2 = document.querySelector("#counter2");

let sum2 = 0;

inc2.addEventListener("click", () => {
  sum2++;
  subTotal.innerHTML =
    "$" + (sum1 * 25.98 + sum2 * 45.99 + sum3 * 74.99).toFixed(2);
  taxTotal.innerHTML =
    "$" +
    (((sum1 * 25.98 + sum2 * 45.99 + sum3 * 74.99) * 18) / 100).toFixed(2);
  result.innerHTML =
    "$" +
    (
      sum1 * 25.98 +
      sum2 * 45.99 +
      sum3 * 74.99 +
      ((sum1 * 25.98 + sum2 * 45.99 + sum3 * 74.99) * 18) / 100 +
      15
    ).toFixed(2);
  item2();
});

dec2.addEventListener("click", () => {
  if (sum2 > 0) {
    sum2--;
    subTotal.innerHTML =
      "$" + (sum1 * 25.98 + sum2 * 45.99 + sum3 * 74.99).toFixed(2);
    taxTotal.innerHTML =
      "$" +
      (((sum1 * 25.98 + sum2 * 45.99 + sum3 * 74.99) * 18) / 100).toFixed(2);
    result.innerHTML =
      "$" +
      (
        sum1 * 25.98 +
        sum2 * 45.99 +
        sum3 * 74.99 +
        ((sum1 * 25.98 + sum2 * 45.99 + sum3 * 74.99) * 18) / 100 +
        15
      ).toFixed(2);
    item2();
  }
});

function item2() {
  count2.innerHTML = sum2;
}

//item3
const dec3 = document.querySelector("#decr3");
const inc3 = document.querySelector("#incr3");
const count3 = document.querySelector("#counter3");

let sum3 = 0;

inc3.addEventListener("click", () => {
  sum3++;
  subTotal.innerHTML =
    "$" + (sum1 * 25.98 + sum2 * 45.99 + sum3 * 74.99).toFixed(2);
  taxTotal.innerHTML =
    "$" +
    (((sum1 * 25.98 + sum2 * 45.99 + sum3 * 74.99) * 18) / 100).toFixed(2);
  result.innerHTML =
    "$" +
    (
      sum1 * 25.98 +
      sum2 * 45.99 +
      sum3 * 74.99 +
      ((sum1 * 25.98 + sum2 * 45.99 + sum3 * 74.99) * 18) / 100 +
      15
    ).toFixed(2);
  item3();
  
});

dec3.addEventListener("click", () => {
  if (sum3 > 0) {
    sum3--;
    subTotal.innerHTML =
      "$" + (sum1 * 25.98 + sum2 * 45.99 + sum3 * 74.99).toFixed(2);
    taxTotal.innerHTML =
      "$" +
      (((sum1 * 25.98 + sum2 * 45.99 + sum3 * 74.99) * 18) / 100).toFixed(2);
    result.innerHTML =
      "$" +
      (
        sum1 * 25.98 +
        sum2 * 45.99 +
        sum3 * 74.99 +
        ((sum1 * 25.98 + sum2 * 45.99 + sum3 * 74.99) * 18) / 100 +
        15
      ).toFixed(2);
    item3();
   
  }
});

function item3() {
  count3.innerHTML = sum3;
}

// remove button

const removeBtn = document.querySelectorAll("#remove");
for (let i = 0; i < removeBtn.length; i++) {
  removeBtn[i].addEventListener(
    "click",
    () => {
      if (
        removeBtn[i].parentElement.parentElement.classList.contains("backbag")
      ) {
        subTotal.innerHTML = "$" + (sum2 * 45.99 + sum3 * 74.99).toFixed(2);
        taxTotal.innerHTML =
          "$" + (((sum2 * 45.99 + sum3 * 74.99) * 18) / 100).toFixed(2);
        result.innerHTML =
          "$" +
          (
            sum2 * 45.99 +
            sum3 * 74.99 +
            ((sum2 * 45.99 + sum3 * 74.99) * 18) / 100 +
            15
          ).toFixed(2);
        sum1 = 0;
        removeBtn[i].parentElement.parentElement.remove();
      } else if (
        removeBtn[i].parentElement.parentElement.classList.contains("shoes")
      ) {
        subTotal.innerHTML = "$" + (sum1 * 25.98 + sum3 * 74.99).toFixed(2);
        taxTotal.innerHTML =
          "$" + (((sum1 * 25.98 + sum3 * 74.99) * 18) / 100).toFixed(2);
        result.innerHTML =
          "$" +
          (
            sum1 * 25.98 +
            sum3 * 74.99 +
            ((sum1 * 25.98 + sum3 * 74.99) * 18) / 100 +
            15
          ).toFixed(2);
        sum2 = 0;
        removeBtn[i].parentElement.parentElement.remove();
      } else {
        subTotal.innerHTML = "$" + (sum1 * 25.98 + sum2 * 45.99).toFixed(2);
        taxTotal.innerHTML =
          "$" + (((sum1 * 25.98 + sum2 * 45.99) * 18) / 100).toFixed(2);
        result.innerHTML =
          "$" +
          (
            sum1 * 25.98 +
            sum2 * 45.99 +
            ((sum1 * 25.98 + sum2 * 45.99) * 18) / 100 +
            15
          ).toFixed(2);
        sum3 = 0;
        removeBtn[i].parentElement.parentElement.remove();
      }
    },
    false
  );
}