let input = document.getElementById("input");
let result = document.getElementById("result");

input.addEventListener("input", () => {
    const text = input.value.trim();
    const words = text.split(/\s+/).filter(word => word.length > 0);
    const letters = text.replace(/\s+/g, "").length;
    
    result.innerHTML = `Word count: ${words.length} | Letter count: ${letters}`;
  });

 
  window.onbeforeunload = function() {
        return "Are you sure you want to leave?";
    }