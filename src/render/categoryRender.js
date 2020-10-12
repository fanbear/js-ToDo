import { styleCategory, category } from '../data/model';
import { AddCategoryDataBase, GetDataBase } from '../services/api.servis'


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

        const value = e.target.name.value.toLowerCase();
        e.target.name.value = '';

        const style = new getColorCategory(styleCategory).randomColor();// получаем цвет категории
        new AddCategoryDataBase('category').add(value, value, style);
        new GetDataBase('category').getBase();
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

new CreateCategoryItem('.add-category') //создаем новую категорию

