// Бургер-меню

const iconMenu = document.querySelector('.header-burger');
if (iconMenu){
	const menuBody = document.querySelector('.nav');
	iconMenu.addEventListener("click", function(e) {
		document.body.classList.toggle('lock');
		iconMenu.classList.toggle('active');
		menuBody.classList.toggle('active');
	});
}



// Слайдер для страницы "Карьера"
let pageSlider = new Swiper('.page',{

// Cвои классы
	wrapperClass: "page-wrapper",
	slideClass: "page-screen",


// Вертикальный слайдер
	direction: 'vertical',

// Количество слайдов дял показа
	slidesPerView: 'auto',

// включение паралалкса
	parallax: true,


// Управление клавиатурой
	keyboard: {
          
        // Вкл/выкл
		enabled: true,

		// Вкл/выкл Только когда слайдер в пределах вьюпорта
		onlyInViewport: true,

		// Вкл/выкл Управление клавишами
		pageUpDown: true,
	},

// Управление колесом мыши
    mousewheel: {

    	// Чувствительность колеса мыши
    	sensitivity: 1,
    	// Класс объекта на котором будет срабатывать прокрутка мышью
    	//eventsTarget: ".block-blue"
    	//eventsTarget: ".vacancy-block"
    },

    // Отключение функционала если слайдов меньше чем нужно
    watchOverflow: true,

    // Скорость
    speed: 800,

    // Обновить слайдер при изменении элементов слайдера
    observer: true,

    // Обновить слайдер при изменении родительских элементов слайдера
    observeParents: true,

    // Обновить слайдер при изменении дочерних элементов слайда
    observeSlideChildren: true,


// Навигация
   
    // Буллеты, текущее положение, прогерсс-бар
    pagination: {
    	el: '.page-pagination',
    	type: 'bullets',
    	clickable: true,
    	bulletClass: "page-bullet",
    	bulletActiveClass: "page-bullet-active",

   },

   // Скролл
    scrollbar: {
    	el: '.page-scroll',
    	dragClass: "page-drag-scroll",
        // Возможность перетаскивать скролл
        draggable: true
   },

})
