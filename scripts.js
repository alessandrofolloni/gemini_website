function openPage(evt, pageName) {
  // Dichiarare tutte le variabili
  var i, tabcontent, tablinks;
  // Ottenere tutti gli elementi con class="tabcontent" e nasconderli
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  
  // Ottenere tutti gli elementi con class="tablinks" e rimuovere la classe "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  
  // Mostrare il tabcontent corrente e aggiungere una classe "active" al bottone che ha aperto il tab
  document.getElementById(pageName).style.display = "block";
  evt.currentTarget.className += " active";
  }

  let slideIndex = 0;

  function showSlide(n) {
    const slides = document.querySelectorAll('.slides .slide');
    if (n >= slides.length) { slideIndex = 0; }
    if (n < 0) { slideIndex = slides.length - 1; }
    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = 'none';
    }
    slides[slideIndex].style.display = 'grid';
  
    // Nascondi tutti i testi delle didascalie
    const captions = document.querySelectorAll('.slides .slide .caption');
    for (let i = 0; i < captions.length; i++) {
      captions[i].style.display = 'none';
    }
    // Mostra il testo della didascalia corrispondente alla slide attuale
    const currentCaption = slides[slideIndex].querySelector('.caption');
    if (currentCaption) {
      currentCaption.style.display = 'grid';
    }
  }
  
  function prevSlide() {
    showSlide(slideIndex -= 1);
  }
  
  function nextSlide() {
    showSlide(slideIndex += 1);
  }
  
  // Visualizza la prima immagine al caricamento della pagina
  showSlide(slideIndex);
  
  