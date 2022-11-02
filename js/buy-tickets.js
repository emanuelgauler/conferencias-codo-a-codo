category_in.addEventListener('change', function () {
   let option = this.options[this.selectedIndex];
   console.log(option.value + " -> " + option.text);
});