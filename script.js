document.addEventListener("keydown", function(e) {
  if (e.ctrlKey && e.shiftKey && e.key === "`") {
    let scr = prompt("eval?");
    try {
      eval(scr);
    } catch (err) {
      console.error("Error evaluating code:", err);
    }
  }
});
