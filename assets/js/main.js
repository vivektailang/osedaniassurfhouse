const menuToggle = document.getElementById("menuToggle");
const siteNav = document.getElementById("siteNav");
const navLinks = siteNav ? [...siteNav.querySelectorAll("a")] : [];
const revealElements = [...document.querySelectorAll(".reveal")];
const sectionAnchors = [...document.querySelectorAll("main section[id]")];
const langButtons = [...document.querySelectorAll(".lang-btn")];
const translatableNodes = [...document.querySelectorAll("[data-i18n]")];
const translatablePlaceholders = [...document.querySelectorAll("[data-i18n-placeholder]")];
const bookingForm = document.getElementById("bookingForm");
const bookingStatus = document.getElementById("bookingStatus");
const currentPath = window.location.pathname.split("/").pop()?.toLowerCase() || "index.html";

const WHATSAPP_NUMBER = "6281234567890";

const translations = {
  en: {
    "nav.home": "Home",
    "nav.about": "About",
    "nav.rooms": "Rooms",
    "nav.gallery": "Gallery",
    "nav.reviews": "Reviews",
    "nav.location": "Location",
    "nav.booking": "Booking",
    "cta.bookNow": "Book Now",
    "hero.tag": "World-Class Surf Destination • Nias, Indonesia",
    "hero.title": "Ride Epic Waves. Wake Up to Ocean Views.",
    "hero.body": "Welcome to Oseda Nias Surfhouse, your premium yet relaxed base for unforgettable surf sessions, tropical comfort, and easy direct booking via WhatsApp.",
    "hero.book": "Book via WhatsApp",
    "hero.rooms": "Explore Rooms",
    "hero.point1": "Fast response for booking inquiries",
    "hero.point2": "Steps from surf breaks and sea views",
    "hero.point3": "Trusted by international surfers",
    "hero.cardTitle": "Tropical Oceanfront Stay",
    "hero.cardText": "Sunrise views. Sunset sessions.",
    "about.title": "About Oseda Nias Surfhouse",
    "about.body1": "Designed for surfers and ocean lovers, Oseda Nias Surfhouse offers a calm tropical setting with modern comfort, clean design, and warm local hospitality.",
    "about.body2": "Whether you are here to chase legendary right-handers or relax by the sea, every detail is crafted for a high-quality and stress-free stay.",
    "about.stat1Title": "5+ Surf Spots",
    "about.stat1Text": "Easy access to iconic breaks",
    "about.stat2Title": "Global Guests",
    "about.stat2Text": "Welcoming surfers worldwide",
    "about.stat3Title": "Quick Booking",
    "about.stat3Text": "Direct WhatsApp confirmation",
    "rooms.title": "Rooms Overview",
    "rooms.subtitle": "Comfortable options for solo surfers, couples, and groups.",
    "rooms.room1Title": "Ocean View Room",
    "rooms.room1Text": "Private balcony, queen bed, AC, and panoramic sea horizon.",
    "rooms.room2Title": "Deluxe Tropical Suite",
    "rooms.room2Text": "Spacious interior with premium linens and lounge space.",
    "rooms.room3Title": "Surfer Shared Loft",
    "rooms.room3Text": "Budget-friendly social stay for surf travelers and friends.",
    "gallery.title": "Surf & Stay Gallery",
    "gallery.subtitle": "Waves, rooms, and the Nias lifestyle.",
    "reviews.title": "Guest Reviews",
    "reviews.subtitle": "What surfers and travelers say about us.",
    "location.title": "Location",
    "location.name": "Oseda Nias Surfhouse, Nias, Indonesia",
    "location.body": "Close to top surf breaks, beachfront views, and local food spots. We can help arrange airport pickup and local transportation.",
    "location.help": "Ask for Transport Help",
    "booking.title": "Booking Inquiry",
    "booking.subtitle": "Send your details and continue directly in WhatsApp for instant confirmation.",
    "booking.name": "Full Name",
    "booking.namePlaceholder": "Your full name",
    "booking.email": "Email",
    "booking.emailPlaceholder": "you@example.com",
    "booking.checkin": "Check-In Date",
    "booking.checkout": "Check-Out Date",
    "booking.guests": "Guests",
    "booking.roomType": "Preferred Room",
    "booking.room1": "Ocean View Room",
    "booking.room2": "Deluxe Tropical Suite",
    "booking.room3": "Surfer Shared Loft",
    "booking.notes": "Special Notes",
    "booking.notesPlaceholder": "Arrival time, airport transfer, or other requests",
    "booking.consent": "I agree to be contacted by WhatsApp regarding this booking inquiry.",
    "booking.submit": "Send Inquiry via WhatsApp",
    "booking.benefitsTitle": "Why Book Direct?",
    "booking.b1": "Best direct rates",
    "booking.b2": "Fast room confirmation",
    "booking.b3": "Flexible arrival coordination",
    "booking.b4": "Surf trip support from local team",
    "cta.title": "Ready to Book Your Surf Escape?",
    "cta.subtitle": "Message us now for room availability, rates, and special long-stay offers.",
    "cta.bookNowWhatsapp": "Book Now via WhatsApp"
  },
  id: {
    "nav.home": "Beranda",
    "nav.about": "Tentang",
    "nav.rooms": "Kamar",
    "nav.gallery": "Galeri",
    "nav.reviews": "Ulasan",
    "nav.location": "Lokasi",
    "nav.booking": "Pemesanan",
    "cta.bookNow": "Pesan Sekarang",
    "hero.tag": "Destinasi Surf Kelas Dunia • Nias, Indonesia",
    "hero.title": "Taklukkan Ombak Epik. Bangun dengan Pemandangan Laut.",
    "hero.body": "Selamat datang di Oseda Nias Surfhouse, tempat nyaman dan premium untuk sesi surfing terbaik, suasana tropis, dan pemesanan langsung lewat WhatsApp.",
    "hero.book": "Pesan via WhatsApp",
    "hero.rooms": "Lihat Kamar",
    "hero.point1": "Respon cepat untuk pertanyaan pemesanan",
    "hero.point2": "Dekat dengan spot surfing dan pemandangan laut",
    "hero.point3": "Dipercaya peselancar internasional",
    "hero.cardTitle": "Penginapan Tepi Laut Tropis",
    "hero.cardText": "Pemandangan matahari terbit dan sesi senja.",
    "about.title": "Tentang Oseda Nias Surfhouse",
    "about.body1": "Dirancang untuk peselancar dan pecinta laut, Oseda Nias Surfhouse menghadirkan suasana tropis yang tenang dengan kenyamanan modern, desain bersih, dan keramahan hangat.",
    "about.body2": "Baik untuk mengejar ombak legendaris maupun bersantai di tepi laut, setiap detail kami siapkan agar pengalaman menginap terasa nyaman tanpa ribet.",
    "about.stat1Title": "5+ Spot Surf",
    "about.stat1Text": "Akses mudah ke ombak ikonik",
    "about.stat2Title": "Tamu Internasional",
    "about.stat2Text": "Menyambut peselancar dari berbagai negara",
    "about.stat3Title": "Pemesanan Cepat",
    "about.stat3Text": "Konfirmasi langsung via WhatsApp",
    "rooms.title": "Pilihan Kamar",
    "rooms.subtitle": "Pilihan nyaman untuk solo traveler, pasangan, dan grup.",
    "rooms.room1Title": "Kamar Pemandangan Laut",
    "rooms.room1Text": "Balkon pribadi, kasur queen, AC, dan panorama laut.",
    "rooms.room2Title": "Suite Tropis Deluxe",
    "rooms.room2Text": "Ruang lebih luas dengan interior premium dan area santai.",
    "rooms.room3Title": "Loft Bersama Surfer",
    "rooms.room3Text": "Pilihan hemat dan sosial untuk traveler surfing.",
    "gallery.title": "Galeri Surf & Penginapan",
    "gallery.subtitle": "Ombak, kamar, dan gaya hidup Nias.",
    "reviews.title": "Ulasan Tamu",
    "reviews.subtitle": "Pendapat peselancar dan traveler tentang kami.",
    "location.title": "Lokasi",
    "location.name": "Oseda Nias Surfhouse, Nias, Indonesia",
    "location.body": "Dekat dengan spot surfing terbaik, pemandangan pantai, dan kuliner lokal. Kami juga membantu penjemputan bandara dan transportasi lokal.",
    "location.help": "Tanya Bantuan Transportasi",
    "booking.title": "Formulir Pemesanan",
    "booking.subtitle": "Isi detail Anda lalu lanjutkan langsung di WhatsApp untuk konfirmasi cepat.",
    "booking.name": "Nama Lengkap",
    "booking.namePlaceholder": "Nama lengkap Anda",
    "booking.email": "Email",
    "booking.emailPlaceholder": "anda@email.com",
    "booking.checkin": "Tanggal Check-In",
    "booking.checkout": "Tanggal Check-Out",
    "booking.guests": "Jumlah Tamu",
    "booking.roomType": "Pilihan Kamar",
    "booking.room1": "Kamar Pemandangan Laut",
    "booking.room2": "Suite Tropis Deluxe",
    "booking.room3": "Loft Bersama Surfer",
    "booking.notes": "Catatan Tambahan",
    "booking.notesPlaceholder": "Jam tiba, antar-jemput bandara, atau permintaan lain",
    "booking.consent": "Saya setuju dihubungi via WhatsApp terkait permintaan pemesanan ini.",
    "booking.submit": "Kirim via WhatsApp",
    "booking.benefitsTitle": "Kenapa Pesan Langsung?",
    "booking.b1": "Harga terbaik langsung",
    "booking.b2": "Konfirmasi kamar lebih cepat",
    "booking.b3": "Koordinasi kedatangan fleksibel",
    "booking.b4": "Dukungan perjalanan surf dari tim lokal",
    "cta.title": "Siap Pesan Liburan Surf Anda?",
    "cta.subtitle": "Hubungi kami sekarang untuk cek ketersediaan kamar, harga, dan penawaran long stay.",
    "cta.bookNowWhatsapp": "Pesan Sekarang via WhatsApp"
  }
};

let currentLanguage = "en";

function setLanguage(lang) {
  const selected = translations[lang] ? lang : "en";
  currentLanguage = selected;
  document.documentElement.lang = selected;

  translatableNodes.forEach((node) => {
    const key = node.getAttribute("data-i18n");
    if (!key) return;
    const value = translations[selected][key];
    if (value) {
      node.textContent = value;
    }
  });

  translatablePlaceholders.forEach((node) => {
    const key = node.getAttribute("data-i18n-placeholder");
    if (!key) return;
    const value = translations[selected][key];
    if (value) {
      node.setAttribute("placeholder", value);
    }
  });

  langButtons.forEach((btn) => {
    const isActive = btn.getAttribute("data-lang") === selected;
    btn.classList.toggle("is-active", isActive);
  });
}

if (menuToggle && siteNav) {
  menuToggle.addEventListener("click", () => {
    siteNav.classList.toggle("open");
  });

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      siteNav.classList.remove("open");
    });
  });

  document.addEventListener("click", (event) => {
    const target = event.target;
    if (!(target instanceof Element)) return;
    if (!siteNav.contains(target) && !menuToggle.contains(target)) {
      siteNav.classList.remove("open");
    }
  });
}

if (revealElements.length) {
  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.2 }
  );

  revealElements.forEach((element) => {
    revealObserver.observe(element);
  });
}

function updateActiveNavLink() {
  navLinks.forEach((link) => {
    const href = link.getAttribute("href") || "";
    let isActive = false;

    if (href.startsWith("#")) {
      const scrollY = window.scrollY + 180;
      let activeId = "top";
      sectionAnchors.forEach((section) => {
        const top = section.offsetTop;
        const bottom = top + section.offsetHeight;
        if (scrollY >= top && scrollY < bottom) {
          activeId = section.id;
        }
      });
      const id = href.replace("#", "") || "top";
      isActive = id === activeId;
    } else {
      isActive = href.toLowerCase() === currentPath;
    }

    if (isActive) {
      link.style.backgroundColor = "rgba(11,79,156,0.14)";
    } else {
      link.style.backgroundColor = "transparent";
    }
  });
}

window.addEventListener("scroll", updateActiveNavLink);
window.addEventListener("load", updateActiveNavLink);

if (langButtons.length) {
  langButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const lang = btn.getAttribute("data-lang") || "en";
      setLanguage(lang);
    });
  });
}

setLanguage("en");

if (bookingForm && bookingStatus) {
  bookingForm.addEventListener("submit", (event) => {
    event.preventDefault();

    if (!bookingForm.checkValidity()) {
      bookingStatus.className = "booking-status error";
      bookingStatus.textContent = currentLanguage === "id"
        ? "Mohon lengkapi semua data wajib sebelum melanjutkan."
        : "Please complete all required details before continuing.";
      bookingForm.reportValidity();
      return;
    }

    const formData = new FormData(bookingForm);
    const fullName = String(formData.get("fullName") || "").trim();
    const email = String(formData.get("email") || "").trim();
    const checkin = String(formData.get("checkin") || "").trim();
    const checkout = String(formData.get("checkout") || "").trim();
    const guests = String(formData.get("guests") || "").trim();
    const roomType = String(formData.get("roomType") || "").trim();
    const notes = String(formData.get("notes") || "").trim() || "-";

    const messageLines = currentLanguage === "id"
      ? [
          "Halo Oseda Nias Surfhouse, saya ingin melakukan pemesanan.",
          "",
          `Nama: ${fullName}`,
          `Email: ${email}`,
          `Check-In: ${checkin}`,
          `Check-Out: ${checkout}`,
          `Jumlah Tamu: ${guests}`,
          `Kamar Pilihan: ${roomType}`,
          `Catatan: ${notes}`
        ]
      : [
          "Hi Oseda Nias Surfhouse, I would like to make a booking inquiry.",
          "",
          `Name: ${fullName}`,
          `Email: ${email}`,
          `Check-In: ${checkin}`,
          `Check-Out: ${checkout}`,
          `Guests: ${guests}`,
          `Preferred Room: ${roomType}`,
          `Notes: ${notes}`
        ];

    const encodedMessage = encodeURIComponent(messageLines.join("\n"));
    const waUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;

    bookingStatus.className = "booking-status ok";
    bookingStatus.textContent = currentLanguage === "id"
      ? "Mengarahkan ke WhatsApp..."
      : "Redirecting to WhatsApp...";

    window.open(waUrl, "_blank", "noopener,noreferrer");
  });
}