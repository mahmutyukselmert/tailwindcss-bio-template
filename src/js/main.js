/* Typewriter effect */
document.addEventListener("DOMContentLoaded", () => {
  const typewriterElement = document.getElementById("typewriter");
  const text1 = document.getElementById("full-title-text").textContent;
  const text2 = document.getElementById("short-title-text").textContent;
  const texts = [text1, text2];
  let currentIndex = 0;

  const typewriterEffect = (element, text, callback) => {
    element.textContent = ""; // Clear the text content
    let i = 0;
    const typingSpeed = 100;
    const type = () => {
      if (i < text.length) {
        element.textContent += text.charAt(i);
        i++;
        setTimeout(type, typingSpeed);
      } else {
        setTimeout(() => {
          deleteEffect(element, callback);
        }, 2000); // Wait for 2 seconds before starting to delete
      }
    };
    type();
  };

  // Delete effect
  const deleteEffect = (element, callback) => {
    let text = element.textContent;
    let i = text.length;
    const deletingSpeed = 50;
    const del = () => {
      if (i > 0) {
        text = text.substring(0, i - 1);
        element.textContent = text;
        i--;
        setTimeout(del, deletingSpeed);
      } else {
        setTimeout(callback, 500);
      }
    };
    del();
  };

  const startTypingEffect = () => {
    typewriterEffect(typewriterElement, texts[currentIndex], () => {
      currentIndex = (currentIndex + 1) % texts.length;
      startTypingEffect();
    });
  };

  startTypingEffect();
});

/* Theme Toggle - Dark/Light */
document.addEventListener("DOMContentLoaded", () => {
  const themeToggleButton = document.getElementById("theme-toggle");
  const darkIcon = document.getElementById("theme-toggle-dark-icon");
  const lightIcon = document.getElementById("theme-toggle-light-icon");
  const currentTheme = localStorage.getItem("theme");

  if (currentTheme === "dark") {
    document.documentElement.classList.add("dark");
    darkIcon.classList.remove("hidden");
    lightIcon.classList.add("hidden");
  } else {
    document.documentElement.classList.remove("dark");
    darkIcon.classList.add("hidden");
    lightIcon.classList.remove("hidden");
  }

  themeToggleButton.addEventListener("click", () => {
    if (document.documentElement.classList.contains("dark")) {
      document.documentElement.classList.remove("dark");
      darkIcon.classList.add("hidden");
      lightIcon.classList.remove("hidden");
      localStorage.setItem("theme", "light");
    } else {
      document.documentElement.classList.add("dark");
      darkIcon.classList.remove("hidden");
      lightIcon.classList.add("hidden");
      localStorage.setItem("theme", "dark");
    }
  });
});

/* Hamburger Menu */
const initSite = () => {
  const hamburgerBtn = document.getElementById("hamburger-button");
  const menu = document.getElementById("menu");

  const toggleMenu = () => {
    //menu.classList.toggle('hidden')
    menu.classList.toggle("mobile-menu");
    hamburgerBtn.classList.toggle("toggle-btn");
  };

  hamburgerBtn.addEventListener("click", toggleMenu);
  menu.addEventListener("click", toggleMenu);
};
document.addEventListener("DOMContentLoaded", initSite);
