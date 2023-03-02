const radio = document.querySelectorAll('input[name="radio_button"]');
const slide = document.querySelectorAll('.slide');

for (let i = 0; i < radio.length; i++) {
  radio[i].addEventListener("change", function() {
    let val = this.value; // this == the clicked radio,
    for (let i = 0; i < slide.length; i++) {
        slide[i].style.display = 'none';
    } 
    document.querySelector('.'+val).style.display = 'block';
});
}
