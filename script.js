"use strict";

// Select elements to be changed
const checkbox = document.getElementById("checkbox");
const card = document.getElementsByClassName("card")[0];
const socialIcons = {
  linkedin: "/assets/Icons/linkedin.png",
  github: "/assets/Icons/github.png",
  instagram: "/assets/Icons/instagram.png",
  website: "/assets/Icons/website.png",
  mode: "/assets/Icons/mode.png",
};

const lightSocialIcons = {
  linkedin: "/assets/Icons/light/linkedin.png",
  github: "/assets/Icons/light/github.png",
  instagram: "/assets/Icons/light/instagram.png",
  website: "/assets/Icons/light/website.png",
  mode: "/assets/Icons/light/mode.png",
};

// Function to update social icons
function updateSocialIcons(icons) {
  const linkedinIcon = document.getElementById("linkedin");
  const githubIcon = document.getElementById("github");
  const instagramIcon = document.getElementById("instagram");
  const websiteIcon = document.getElementById("website");
  const modeIcon = document.getElementById("mode");

  linkedinIcon.src = icons.linkedin;
  githubIcon.src = icons.github;
  instagramIcon.src = icons.instagram;
  websiteIcon.src = icons.website;
  modeIcon.src = icons.mode;
}

// Define the function to toggle light/dark mode
function toggleDarkMode() {
  if (checkbox.checked) {
    card.classList.add("dark-mode");
    card.classList.remove("light-mode");
    updateSocialIcons(lightSocialIcons);
  } else {
    card.classList.remove("dark-mode");
    card.classList.add("light-mode");
    updateSocialIcons(socialIcons);
  }
}

// Add event listener for checkbox
checkbox.addEventListener("change", toggleDarkMode);
