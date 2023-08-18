const checkboxes = document.querySelectorAll('input[type = "checkbox"]');
let firstIndex;

checkboxes.forEach((checkbox) => {
  let inBetween = false;
  checkbox.addEventListener("click", (e) => {
    if (e.shiftKey && e.target.checked) {
      checkboxes.forEach((checkbox) => {
        if (checkbox === e.target || checkbox === firstIndex) {
          inBetween = !inBetween;
          console.log("mark");
        }

        if (inBetween) {
          checkbox.checked = true;
        }
      });
    }
    firstIndex = e.target;
  });
});
