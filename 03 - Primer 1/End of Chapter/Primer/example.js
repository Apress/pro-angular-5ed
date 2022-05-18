function myFunction(param) {
  if (typeof(param) == "number") {
      let result = param + 100;
      console.log("My result: " + result);
  } else {
      throw ("Expected a number: " + param)
  }
}

myFunction(1);
myFunction("London");
