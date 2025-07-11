
  
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('sw.js')
      .then(reg => console.log('Service Worker registered', reg))
      .catch(err => console.error('Service Worker failed', err));
  }

 function toggleMenu(source = 'main') {
  const navLinks = document.getElementById("navLinks");
  const toggleMain = document.getElementById("menuToggle");
  const toggleCompact = document.getElementById("menuToggleCompact");

  const clickedToggle = source === 'compact' ? toggleCompact : toggleMain;
  const otherToggle = source === 'compact' ? toggleMain : toggleCompact;

  otherToggle?.classList.remove("open");

  const isOpening = !clickedToggle.classList.contains("open");
  clickedToggle.classList.toggle("open", isOpening);

  navLinks.classList.toggle("active", isOpening);
  navLinks.classList.toggle("mobile-hidden", !isOpening);

  if (isOpening) {
    if (source === 'compact') {
      const rect = clickedToggle.getBoundingClientRect();
      navLinks.style.position = 'fixed';
      navLinks.style.top = `${rect.bottom}px`;
      navLinks.classList.add("prevent-scroll");
    } else {
      navLinks.style.position = ''; // reset to CSS (absolute with top: 100%)
      navLinks.style.top = '';
    }
  } else {
    
    navLinks.classList.remove("prevent-scroll");
	  // Wait for the transition (400ms) before hiding completely
    setTimeout(() => {
      navLinks.classList.add("mobile-hidden");
      navLinks.style.top = '';
      navLinks.style.position = '';
    }, 400); // Match CSS transition time

    clickedToggle.classList.remove("open");
    navLinks.classList.remove("prevent-scroll");
  }
}
document.querySelectorAll('#navLinks a').forEach(link => {
  link.addEventListener('click', () => {
    const navLinks = document.getElementById("navLinks");
    const toggleMain = document.getElementById("menuToggle");
    const toggleCompact = document.getElementById("menuToggleCompact");

    navLinks.classList.remove("active", "prevent-scroll"); 
    navLinks.classList.add("mobile-hidden");
    navLinks.style.top = '';
    navLinks.style.position = '';

    toggleMain?.classList.remove("open");
    toggleCompact?.classList.remove("open");
  });
});

function handleContactForm(event) {
    event.preventDefault();

     const toast = document.getElementById("toast");

   toast.style.display = "block";
  toast.classList.remove("fade-active");
  void toast.offsetWidth; // Trigger reflow
  toast.classList.add("fade-active");

    setTimeout(() => {
    toast.style.display = "none";
  }, 3000);

    event.target.reset();
}
 const scrollToTopBtn = document.getElementById("scrollToTopBtn");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      scrollToTopBtn.style.display = "block";
    } else {
      scrollToTopBtn.style.display = "none";
    }
  });

  scrollToTopBtn.addEventListener("click", (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
	document.querySelectorAll('#courses .tab-item').forEach(tab => {
    tab.addEventListener('click', () => {
      // deactivate all tabs
      document.querySelectorAll('#courses .tab-item').forEach(t => t.classList.remove('active'));
      // hide all panels
      document.querySelectorAll('#courses .content-panel').forEach(p => p.classList.remove('active'));

      // activate clicked tab
      tab.classList.add('active');
      // show its panel
      document.getElementById(tab.dataset.target).classList.add('active');
    });
  });
	const fullHeader = document.getElementById("full-header");
const compactHeader = document.getElementById("compact-header");

window.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    compactHeader.classList.add("visible");
    fullHeader.style.display = "none";
  } else {
    compactHeader.classList.remove("visible");
    fullHeader.style.display = "flex"; // use flex because original header uses flex layout
  }
});
const swiper = new Swiper(".myHeroSwiper", {
  loop: true,
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  speed: 800,
  effect: 'slide',
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
const loginBtn = document.getElementById("loginBtn");
  const fixedLoginBtn = document.getElementById("fixedLoginBtn");
  const loginModal = document.getElementById("loginModal");
  const messageBox = document.getElementById("messageBox");
  const togglePassword = document.getElementById("togglePassword");
  const passwordInput = document.getElementById("password");
const users = [
    { email: "durgeshpawar883@gmail.com", password: "dgp4912" },
    { email: "abhijadhav555@gmail.com", password: "abhi1526" },
    { email: "neetamore779@gmail.com", password: "neeta5716" }
  ];
 const isLoggedIn =
  localStorage.getItem("loggedIn") === "true" ||
  sessionStorage.getItem("loggedIn") === "true";
const userEmail = localStorage.getItem("userEmail") || sessionStorage.getItem("userEmail");
const role = localStorage.getItem("role") || sessionStorage.getItem("role");

const cameFromDashboard = sessionStorage.getItem("visitedFromDashboard") === "true";

const loggedOut = sessionStorage.getItem("loggedOut") === "true";

if (isLoggedIn && !cameFromDashboard && !loggedOut) {
 
  sessionStorage.removeItem("visitedFromDashboard");
  if (role === "admin") {
    window.location.href = "home.html";
  } else if (userEmail === "abhijadhav555@gmail.com") {
    window.location.href = "student.html";
  } else if (userEmail === "neetamore779@gmail.com") {
    window.location.href = "student02.html";
  }
}
sessionStorage.removeItem("loggedOut");

 function openLogin() {
    loginModal.style.display = "flex";
    messageBox.textContent = "";
  }

function closeLogin() {
    loginModal.style.display = "none";
    messageBox.textContent = "";
  }
togglePassword.addEventListener("click", () => {
    const isPassword = passwordInput.getAttribute("type") === "password";
    passwordInput.setAttribute("type", isPassword ? "text" : "password");

    // Toggle the icon class
    togglePassword.classList.toggle("fa-eye");
    togglePassword.classList.toggle("fa-eye-slash");
  });

 function showSpinnerThenLogin() {
  const loader = document.getElementById("fullscreenLoader");
  loader.classList.add("active");

  setTimeout(() => {
    loader.classList.remove("active");
    openLogin(); // Existing function to show modal
  }, 500); // 1-second loading delay
}

 loginBtn.onclick = showSpinnerThenLogin;
fixedLoginBtn.onclick = showSpinnerThenLogin;

  // Login form submission
  document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;
    const remember = document.getElementById("rememberMe").checked;

    const user = users.find(
      user => user.email === email && user.password === password
    );

    if (user) {
  const isAdmin = email === "durgeshpawar883@gmail.com";
  const isStudent1 = email === "abhijadhav555@gmail.com";
  const isStudent2 = email === "neetamore779@gmail.com";

  const storage = remember ? localStorage : sessionStorage;
  storage.setItem("loggedIn", "true");
  storage.setItem("userEmail", email);
  storage.setItem("role", isAdmin ? "admin" : "student");

  messageBox.style.color = "green";
  messageBox.textContent = "Login successful! Redirecting...";

  setTimeout(() => {
    if (isStudent1) {
      window.location.href = "student.html";
    } else if (isStudent2) {
      window.location.href = "student02.html";
    } else {
      window.location.href = "home.html";
    }
  }, 1000);

 } else {
      messageBox.style.color = "red";
      messageBox.textContent = "Invalid email or password.";
    }
  });

 document.getElementById("forgotPasswordLink").addEventListener("click", function (e) {
  e.preventDefault();
  document.querySelector(".login-box").style.display = "none";
  document.getElementById("forgotPasswordBox").style.display = "block";
});

function closeForgotPassword() {
  document.getElementById("forgotPasswordBox").style.display = "none";
  document.querySelector(".login-box").style.display = "block";
}

document.getElementById("forgotPasswordForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const emailInput = document.getElementById("forgotEmail");
  const email = emailInput.value;
  const messageBox = document.getElementById("forgotMessageBox");

  if (email.trim() === "") {
    messageBox.innerText = "Please enter an email.";
    messageBox.style.color = ""; // Default color
  } else if (email === "durgeshpawar883@gmail.com" ||
    email === "abhijadhav555@gmail.com" || email === "neetamore779@gmail.com") {
    messageBox.innerText = "Password reset successful. Please check your email.";
    messageBox.style.color = "green";
    emailInput.value = "";

    
    setTimeout(() => {
      messageBox.innerText = "";
    }, 3000);
  } else {
    messageBox.innerText = "Email not registered";
    messageBox.style.color = "red";
    emailInput.value = ""; 
    
    setTimeout(() => {
      messageBox.innerText = "";
    }, 3000);
  }
});
window.addEventListener("pageshow", function (event) {
  const isHistoryNav = event.persisted || performance.getEntriesByType("navigation")[0].type === "back_forward";
  if (isHistoryNav) {
    window.location.reload(); // force a fresh reload if navigated via back button
  }
});

(function () {
  const loginBox = document.querySelector('.login-box');
  if (!loginBox) return;

  const inputs = loginBox.querySelectorAll('input');

  inputs.forEach(input => {
    input.addEventListener('focus', () => {
      if (window.innerWidth <= 768) {
        loginBox.style.transform = 'translateY(-20%)';
      }
    });

    input.addEventListener('blur', () => {
      if (window.innerWidth <= 768) {
        loginBox.style.transform = 'translateY(0)';
      }
    });
  });
})();

