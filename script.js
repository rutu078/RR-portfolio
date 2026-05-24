// Mobile Navigation Toggle
const mobileMenu = document.getElementById('mobile-menu');
const navLinks = document.getElementById('nav-links');

mobileMenu.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    const icon = mobileMenu.querySelector('i');
    if(navLinks.classList.contains('active')) {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-times');
    } else {
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    }
});

// Close mobile menu on nav item click
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        const icon = mobileMenu.querySelector('i');
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    });
});

// Dynamic Typing Effect
const words = ["MSc IT Graduate", "Web Developer", "Data Analyst", "Programme Assistant"];
let i = 0;
let timer;

function typingEffect() {
    let word = words[i].split("");
    var loopTyping = function() {
        if (word.length > 0) {
            document.querySelector('.typing-text').innerHTML += word.shift();
        } else {
            setTimeout(deletingEffect, 2000);
            return false;
        }
        timer = setTimeout(loopTyping, 100);
    };
    loopTyping();
}

function deletingEffect() {
    let word = words[i].split("");
    var loopDeleting = function() {
        if (word.length > 0) {
            word.pop();
            document.querySelector('.typing-text').innerHTML = word.join("");
        } else {
            if (words.length > (i + 1)) {
                i++;
            } else {
                i = 0;
            }
            setTimeout(typingEffect, 500);
            return false;
        }
        timer = setTimeout(loopDeleting, 60);
    };
    loopDeleting();
}

typingEffect();

// Scroll Active Link Indicator
window.addEventListener('scroll', () => {
    let scrollPos = window.scrollY || document.documentElement.scrollTop;
    
    document.querySelectorAll('section').forEach(section => {
        if (scrollPos >= section.offsetTop - 100 && scrollPos < section.offsetTop + section.offsetHeight - 100) {
            document.querySelectorAll('.nav-links a').forEach(link => {
                link.classList.remove('active');
                if (section.getAttribute('id') === link.getAttribute('href').substring(1)) {
                    link.classList.add('active');
                }
            });
        }
    });
});

// Theme Toggle Logic
const themeToggle = document.getElementById('theme-toggle');
const currentTheme = localStorage.getItem('theme');

// Check for saved theme preference, otherwise default to dark
if (currentTheme === 'light') {
    document.documentElement.setAttribute('data-theme', 'light');
    themeToggle.querySelector('i').classList.replace('fa-moon', 'fa-sun');
} else {
    document.documentElement.setAttribute('data-theme', 'dark');
}

themeToggle.addEventListener('click', () => {
    let theme = document.documentElement.getAttribute('data-theme');
    const icon = themeToggle.querySelector('i');
    
    if (theme === 'dark') {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
        icon.classList.replace('fa-moon', 'fa-sun');
    } else {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
        icon.classList.replace('fa-sun', 'fa-moon');
    }
});
