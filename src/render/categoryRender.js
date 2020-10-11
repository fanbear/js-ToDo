import { styleCategory, category } from '../data/model';


//получения данных из инпута и запись нового обьекта в массив
export class CreateCategoryItem {
    constructor(selector, update) {
        this.$el = document.querySelector(selector);
        this.update = update;

        this.init();
    }
    init () {
        this.$el.addEventListener('submit', this.getValue.bind(this));
    }
    getValue(e) {
        e.preventDefault();

        const value = e.target.name.value;
        e.target.name.value = '';

        const style = new getColorCategory(styleCategory).randomColor();// получаем цвет категории
        const item = new NewCategoryTask(value, style);
        category.push(item); 
        update();     
    }
}

//Шаблон нового таска
class NewCategoryTask {
    constructor(props, style) {
            this.id = props;
            this.name = props;
            this.style = style
    }
    categoryItem(content) {
        return `<div class="category-wrapper_item ${content.style}" data-name="${content.id}" data-active="" >${content.name}</div>`
    }
}
//Цвет категории
class getColorCategory {
    constructor(style){
        this.style = style;
    }

    getRandom(min, max) {
        return Math.random() * (max - min) + min;
    }

    randomColor() {
        return this.style[Math.ceil(this.getRandom(0, 5))];
    }
}

//рендер категорий
export class RenderCategory {
    constructor(selector) {
        this.$el = document.querySelector(selector);
    }

    toHTML(model) {
        let src = '';
        model.forEach(element => {
            const item = new NewCategoryTask;
            src += item.categoryItem(element);
            return src;
        });
        this.$el.textContent = '';
        this.$el.insertAdjacentHTML('afterbegin', src);
        
    }

}


new CreateCategoryItem('.add-category') //создаем новую категорию

///обновляем категории после создания или удаления
function update() {
    new RenderCategory('.category-wrapper').toHTML(category);
}