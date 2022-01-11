// Lag en variabel, som refererer til ".toggle-btn"
const btn = document.querySelector(".toggle-btn");
// Lag en variabel, som refererer til "nav"
const nav = document.querySelector(".banner nav");

// Lag en function, som heter toggleMenu()
function toggleMenu() {
  // 1. Toggle en klasse på nav vha. classList.toggle
  // 2. Toggle en klasse, der hedder "shown"
  nav.classList.toggle("shown");
  // 1. Lag en variabel, som heter menyShown
  // 2. Den skal være samme som, om nav-variablen indeholder klassen "shown" vha. classList.contains("")
  const menuShown = nav.classList.contains("shown");

  // 1. Lag en if/else settning => if (...) {...} else {...}
  // 2. Spørg om menu i if-sætningen => if (menu)
  if (menuShown) {
    // hvis nav har klassen "shown", sett da btn.textContent til "Luk"
    btn.textContent = "Lukk";
  } else {
    // hvis IKKE nav har klassen "shown", sett da btn.textContent til "Menu"
    btn.textContent = "Menu";
  }
}

/* Legg til et klik-event til btn, som setter toggleMenu-funktionen i gang */
btn.addEventListener("click", toggleMenu);
