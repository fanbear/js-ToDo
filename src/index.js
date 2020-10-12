'use strict'

import './render/categoryRender';
import './services/api.servis';

const $taskCategory = document.querySelector('.category-wrapper');

//  add .active class in task category
function selectedCategory(event) {
    const target = event.target;

    document.querySelectorAll('.category-wrapper_item').forEach(item => item.classList.remove('active'));

    if (target.classList.contains('category-wrapper_item')) {
        target.classList.add('active');
    }
}

$taskCategory.addEventListener('click', selectedCategory);