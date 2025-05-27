document.addEventListener('DOMContentLoaded', () => {
  // Zoek de knop
  const btn = document.getElementById('PlaatsBerichtBtn');
  if (!btn) return;

  // Luister naar hover in & uit
  btn.addEventListener('mouseenter', () => btn.classList.add('hovered'));     // 3. Voeg hover toe
  btn.addEventListener('mouseleave', () => btn.classList.remove('hovered'));  // 3. Verwijder hover

  // Luister naar klik
  btn.addEventListener('click', () => {
    btn.classList.remove('clicked');  
    void btn.offsetWidth;              // 3. Force reflow
    btn.classList.add('clicked');      // 3. Activeer shine
  });
});


// 1) Open op klik
document.getElementById("PlaatsBerichtBtn")
  .addEventListener("click", function() {

    // na 1000ms (duur shine) de overlay tonen
    setTimeout(() => {
      document.getElementById("overlay").style.display = "flex";
    }, 800);
  });

// 2) Sluit op Annuleer
document.getElementById("closeFormButton")
  .addEventListener("click", () => {
    document.getElementById("overlay").style.display = "none";
  });

  
  
// 1) Open overlay met bestaande waarden
document.querySelectorAll('.editBtn').forEach(btn => {
  btn.addEventListener('click', () => {
    // vul form‐velden
    document.getElementById('from').value = btn.dataset.from;
    document.getElementById('text').value = btn.dataset.text;
    // stel actie in op jouw PATCH‐route
    const exId = window.location.pathname.split('/')[2];
    document.querySelector('.overlay-form').action =
      `/community-drops/${exId}/edit/${btn.dataset.id}`;
    // open overlay
    document.getElementById('overlay').style.display = 'flex';
  });
});
// 2) Sluit overlay
document.getElementById('closeFormButton')
  .addEventListener('click', () => {
    document.getElementById('overlay').style.display = 'none';
  });
  
