let CITIES_ARRAY = ['Москва', 'Казань', 'Калининград', 'Санкт-Петербург'];


autocompleteCity(document.getElementById("city_input"), CITIES_ARRAY);


// Кнопка продолжить после запроса города
let continueCity = document.getElementById('continue_city')
continueCity.addEventListener('click', function() {

    // Проверка на ввод города
    let inputCity = document.getElementById('city_input')

    // Если города нет в списке городов, то выводит ошибку
    if (!(CITIES_ARRAY.includes(inputCity.value))) {
        document.getElementById('error_city').textContent = 'Выберите город из предложенных'
        return
    }

	// Очистка ошибки, если была
	document.getElementById('error_city').textContent = ''
    console.log(inputCity.value)
})


// Функция вывода результатов поиска
function autocompleteCity(input, array) {

	// Вывод результатов при клике
    input.addEventListener("click", function() {
        // Закрытие прошлых результатов
        closeAllLists()
        let listResults = document.querySelector(".autocomplete-items")
		let inputValue = input.value

		// Затемнение тени под поиском
		document.querySelector(".autocomplete").style = 'filter: drop-shadow(0px 5px 17px rgba(34, 60, 80, 0.2))'

		// Если строка поиска пуста, то результаты не выводятся
		if (inputValue === '') {
			return
		}

        // Поиск по массиву
		let num = 0		// Счетчик для кнопок результатов
        for (i = 0; i < array.length; i++) {
            // Проверка на совпадение
            if (array[i].substr(0, inputValue.length).toUpperCase() == inputValue.toUpperCase()) {
				// Скругление полей поиска
                input.style = 'border-radius: 22px 22px 0px 0px;'

                // Добавление блока
                let htmlCity = `<div class="city city-${i}" id="${i}">${array[i]}</div>`
                listResults.insertAdjacentHTML('beforeend', htmlCity);

				let result = document.getElementsByClassName('city')
				result[num].addEventListener("click", function() {
					console.log(this.id);
					input.value = array[this.id]
				});
				num++
            }
        }

		try {
			// Сглаживание нижних краев последнего результата для красоты
			resultArray = document.querySelectorAll('.city')
			lastResult = resultArray[resultArray.length-1]
			lastResult.style = 'border-radius: 0px 0px 22px 22px'
		} catch (error) {
			return
		}
    })


	// Вывод результатов при вводе
    input.addEventListener("input", function() {
        // Закрытие прошлых результатов
        closeAllLists()
        let listResults = document.querySelector(".autocomplete-items")
		let inputValue = input.value

		// Затемнение тени под поиском
		document.querySelector(".autocomplete").style = 'filter: drop-shadow(0px 5px 17px rgba(34, 60, 80, 0.2))'

        // Поиск по массиву
		let num = 0		// Счетчик для кнопок результатов
        for (i = 0; i < array.length; i++) {
            // Проверка на совпадение
            if (array[i].substr(0, inputValue.length).toUpperCase() == inputValue.toUpperCase()) {
				// Скругление полей поиска
                input.style = 'border-radius: 22px 22px 0px 0px;'

                // Добавление блока
                let htmlCity = `<div class="city city-${i}" id="${i}">${array[i]}</div>`
                listResults.insertAdjacentHTML('beforeend', htmlCity);

				let result = document.getElementsByClassName('city')
				result[num].addEventListener("click", function() {
					console.log(this.id);
					input.value = array[this.id]
				});
				num++
			}
		}

		try {
			// Сглаживание нижних краев последнего результата для красоты
			resultArray = document.querySelectorAll('.city')
			lastResult = resultArray[resultArray.length-1]
			lastResult.style = 'border-radius: 0px 0px 22px 22px'
		} catch (error) {
			return
		}
    })


	// Если клик в любое место сайта, то поиск закрывается
	document.addEventListener("click", function (e) {
        closeAllLists(e.target);
    });

    // Функция очистки списка в случае клика в любое место кроме списка
    function closeAllLists(element) {
        if (element != input) {

			// Очистка блока с результатами
            let cities_list = document.querySelector(".autocomplete-items");
            cities_list.innerHTML = ''

			// Скругление всех углов поиска
            input.style = 'border-radius: 22px;'
			document.querySelector(".autocomplete").style = 'filter: drop-shadow(0px 3px 24px rgba(34, 60, 80, 0.1))'

			// console.log('Список очистился')
        }
    }
}