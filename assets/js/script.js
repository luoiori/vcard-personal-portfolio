'use strict';

const elementToggleFunc = function (elem) {
  elem.classList.toggle('active');
};

const sidebar = document.querySelector('[data-sidebar]');
const sidebarBtn = document.querySelector('[data-sidebar-btn]');
const themeToggleBtn = document.querySelector('[data-theme-toggle]');

const getStoredTheme = function () {
  try {
    return localStorage.getItem('resume-theme');
  } catch (_) {
    return null;
  }
};

const storeTheme = function (theme) {
  try {
    localStorage.setItem('resume-theme', theme);
  } catch (_) {
    return;
  }
};

const setTheme = function (theme) {
  const isLight = theme === 'light';

  document.body.classList.toggle('light-theme', isLight);

  if (themeToggleBtn) {
    const icon = themeToggleBtn.querySelector('ion-icon');
    themeToggleBtn.setAttribute('aria-label', isLight ? '切换深色主题' : '切换浅色主题');

    if (icon) {
      icon.setAttribute('name', isLight ? 'moon-outline' : 'sunny-outline');
    }
  }
};

const savedTheme = getStoredTheme();

if (savedTheme === 'light' || savedTheme === 'dark') {
  setTheme(savedTheme);
}

if (sidebar && sidebarBtn) {
  sidebarBtn.addEventListener('click', function () {
    elementToggleFunc(sidebar);
  });
}

if (themeToggleBtn) {
  themeToggleBtn.addEventListener('click', function () {
    const nextTheme = document.body.classList.contains('light-theme') ? 'dark' : 'light';

    storeTheme(nextTheme);
    setTheme(nextTheme);
  });
}

const experienceToggles = document.querySelectorAll('[data-experience-toggle]');

for (let i = 0; i < experienceToggles.length; i++) {
  experienceToggles[i].addEventListener('click', function () {
    const experienceItem = this.closest('.experience-item');
    const isCollapsed = experienceItem.classList.toggle('is-collapsed');
    const label = this.getAttribute('aria-label') || '';

    this.setAttribute('aria-expanded', String(!isCollapsed));
    this.setAttribute('aria-label', label.replace(isCollapsed ? '收起' : '展开', isCollapsed ? '展开' : '收起'));
  });
}
