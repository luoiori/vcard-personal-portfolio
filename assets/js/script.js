'use strict';

const elementToggleFunc = function (elem) {
  elem.classList.toggle('active');
};

const sidebar = document.querySelector('[data-sidebar]');
const sidebarBtn = document.querySelector('[data-sidebar-btn]');

if (sidebar && sidebarBtn) {
  sidebarBtn.addEventListener('click', function () {
    elementToggleFunc(sidebar);
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
