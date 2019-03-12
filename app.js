window.onload = app;

const addDivs = {
  content: "main-content",
  rootEl: {},

  minValue: "min-value",
  maxValue: "max-value",
  fizzValue: "fizz-value",
  buzzValue: "buzz-value",

  submitDivs: "add-divs",
  clearDivs: "clear-divs",

  defaultValues: {
    min: 1,
    max: 15,
    fizz: 3,
    buzz: 5
  },

  submitValue: function (event) {
    addDivs.clearValue();

    addDivs.defaultValues.min = parseInt(
      document.getElementById(addDivs.minValue).value
    );

    addDivs.defaultValues.max = parseInt(
      document.getElementById(addDivs.maxValue).value
    );

    addDivs.defaultValues.fizz = parseInt(
      document.getElementById(addDivs.fizzValue).value
    );

    addDivs.defaultValues.buzz = parseInt(
      document.getElementById(addDivs.buzzValue).value
    );

    for (
      let i = addDivs.defaultValues.min; i <= addDivs.defaultValues.max; i++
    ) {
      const newDiv = document.createElement("div");
      if (i % addDivs.defaultValues.fizz === 0 && i % addDivs.defaultValues.buzz === 0) {
        newDiv.className = "fizzbuzz generated-divs";
        newDiv.id = i;
        newDiv.innerText = 'Fizz-Buzz';
        addDivs.rootEl.appendChild(newDiv);
      } else if (i % addDivs.defaultValues.fizz === 0) {
        newDiv.className = "fizz generated-divs";
        newDiv.id = i;
        newDiv.innerText = 'Fizz';
        addDivs.rootEl.appendChild(newDiv);
      } else if (i % addDivs.defaultValues.buzz === 0) {
        newDiv.className = "buzz generated-divs";
        newDiv.id = i;
        newDiv.innerText = 'Buzz';
        addDivs.rootEl.appendChild(newDiv);
      } else {
        newDiv.className = "other generated-divs";
        newDiv.id = i;
        newDiv.innerText = i;
        addDivs.rootEl.appendChild(newDiv);
      }
    }
  },

  clearValue: function () {
    document.getElementById(addDivs.content).innerHTML = "";
  },

  initializeState: function () {
    addDivs.rootEl = document.getElementById(addDivs.content);

    document.getElementById(addDivs.submitDivs).onclick = addDivs.submitValue;
    document.getElementById(addDivs.clearDivs).onclick = addDivs.clearValue;

    document.getElementById(addDivs.minValue).value = addDivs.defaultValues.min;
    document.getElementById(addDivs.maxValue).value = addDivs.defaultValues.max;
    document.getElementById(addDivs.fizzValue).value = addDivs.defaultValues.fizz;
    document.getElementById(addDivs.buzzValue).value = addDivs.defaultValues.buzz;

    addDivs.submitValue();
  }
};

function app() {
  addDivs.initializeState();
}