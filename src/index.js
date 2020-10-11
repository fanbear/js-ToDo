'use strict'

import { category } from './data/model';
import { RenderCategory, get} from './render/categoryRender';

const $taskCategory = document.querySelector('.category-wrapper');
const $btnCategory = document.querySelector('.btn-category');


//  add .active class in task category
function showCategory(event) {
    const target = event.target;

    document.querySelectorAll('.category-wrapper_item').forEach(item => item.classList.remove('active'));

    if (target.classList.contains('category-wrapper_item')) {
        target.classList.add('active');
    }
}

$taskCategory.addEventListener('click', showCategory);