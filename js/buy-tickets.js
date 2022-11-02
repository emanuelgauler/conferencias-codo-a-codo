var quantity = 0;
var category = 0;
category_in.addEventListener('change', function () {
   let option = this.options[this.selectedIndex];
   console.log(option.value + " -> " + option.text);
   category = option.value;
});

quantity_in.addEventListener( 'change', function () {
  console.log( "cantidad: " + this.value );
  quantity = this.value;
});

clear_button.addEventListener( 'click', () => { 
   quantity = 0; category = 0;
   quantity_in.value = 0;
});

resume_button.addEventListener( 'click', function () {
   if( quantity === 0 ) {
      alert("debe ingresar la cantidad");
      return;
   }

   if( category === 0 ) {
      alert( "debe seleccionar una categoría" );
      return;
   }

   result.innerHTML = resume_value();
});

function resume_value() {
   return 200*quantity*category;
}