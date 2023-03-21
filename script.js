function sampleFunction() {
  let localString = "This is a local variable";
  window.alert(localString);
  localString = "This is a local variable update!!";
  window.alert(localString);
}

sampleFunction();
window.alert(localString);

 