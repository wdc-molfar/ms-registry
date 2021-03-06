# Програмний модуль @molfar/ms-registry | Програма та методика випробувань

## Об'єкт випробувань

Об'єктом випробувань є **програмний модуль @molfar/ms-registry – "Реєстр специфікацій API мікросервісів та робочих процесів"**, що призначений для надання доступу до реєстру специфікацій API мікросервісів і робочих процесів та описів повторюваного використання за назвою, а також для управління реєстром специфікацій, зокрема, реєстрації, оновлення та видалення специфікацій API мікросервісів і робочих процесів.

## Мета випробувань

Перевірити надійність функціонування програмного модуля @molfar/ms-registry та його окремих функцій. 

## Вимоги до програмного модуля

Програмний модуль повинен задовільнати наступним вимогам. 

Функціонування програмного модуля **не має призводити до збою (фатального порушення роботи системи)** та **видавати діагностику стану системи та повідомлення про будь-які помилки, що виникли**:
- програмний модуль у відповідь на запит "Отримати загальний опис сервісу" повинен повернути сторінку загального опису, код відповіді – 200
- програмний модуль у відповідь на запит "Отримати статистику сервісу" повинен повернути сторінку статистики, код відповіді – 302
- програмний модуль у відповідь на успішний запит "Отримати список зареєстрованих специфікацій" повинен повернути список зареєстрованих специфікацій API мікросервісів та робочих процесів в форматі `JSON`, код відповіді – 200
- програмний модуль у відповідь на успішний запит "Отримати специфікацію за назвою" повинен повернути специфікацію за назвою в форматі `YAML`, код відповіді – 200
- програмний модуль у відповідь на невдалий запит "Отримати специфікацію за назвою" повинен повернути помилку "Специфікацію не знайдено", код відповіді – 404
- програмний модуль у відповідь на запит "Видалити специфікацію за назвою" повинен видалити специфікацію за назвою, код відповіді – 200
- програмний модуль у відповідь на успішний запит "Реєстрація специфікації за назвою" повинен зберегти специфікацію за назвою в реєстрі та повернути її в форматі `YAML`, код відповіді – 200
- програмний модуль у відповідь на невдалий запит "Реєстрація специфікації за назвою" повинен повернути помилку "Специфікація вже існує", код відповіді – 400
- програмний модуль у відповідь на запит "Оновити специфікацію" повинен оновити специфікацію за назвою в реєстрі та повернути її оновлену версію в форматі `YAML`, код відповіді – 200

## Вимоги до програмної документації

Склад програмної документації, пропонованої на випробуванні:
- [ГОСТ 19.402-78.](https://docs.cntd.ru/document/1200007652) ЕСПД. Опис програми
- [ГОСТ 19.301-79.](https://docs.cntd.ru/document/1200007650) ЕСПД. Програма та методика випробувань. Вимоги до змісту та оформлення
- [ГОСТ 19.401-78.](https://docs.cntd.ru/document/1200007651) ЕСПД. Текст програми. Вимоги до змісту та оформлення

## Засоби і порядок випробувань

Для запуску комплексів тестів використовуються менеджер пакетів для мови програмування JavaScript – `npm (Node Package Manager)`, та команда

```shell
npm test
```

Порядок проведення випробувань:
1. Виконати комплекс тестів **"Тести для шляху "/""**, запустивши файл `root.test.js`
2. Виконати комплекс тестів **"Тести для шляху "/spec""**, запустивши файл `spec.test.js`
3. Виконати комплекс тестів **"Тести для шляху "/spec/{name}""**, запустивши файл `spec-{name}.test.js`

Для обробки результатів тестування та створення протоколу випробувань в HTML використовується `Jest reporter` версії [2.1.6](https://www.npmjs.com/package/jest-html-reporters/v/2.1.6).

## Методи випробувань

Для проведення випробувань пропонується наступий переліків комплексів тестів та окремих тестових прикладів:
- Комплекс тестів **"Тести для шляху "/""**, що міститься у файлі `root.test.js`, має наступні тестові приклади:
	- Тест перевірки запиту "Отримати загальний опис сервісу"
	- Тест перевірки запиту "Отримати статистику сервісу"
- Комплекс тестів **"Тести для шляху "/spec""**, що міститься у файлі `spec.test.js`, має наступні тестові приклади:
	- Тест перевірки успішного запиту "Отримати список зареєстрованих специфікацій"
- Комплекс тестів **"Тести для шляху "/spec/{name}""**, що міститься у файлі `spec-{name}.test.js`, має наступні тестові приклади:
	- Тест перевірки успішного запиту "Отримати специфікацію за назвою"
	- Тест перевірки невдалого запиту "Отримати специфікацію за назвою"
	- Тест перевірки запиту "Видалити специфікацію за назвою"
	- Тест перевірки успішного запиту "Реєстрація специфікації за назвою"
	- Тест перевірки невдалого запиту "Реєстрація специфікації за назвою"
	- Тест перевірки запиту "Оновити специфікацію"

## Додаток

Вміст тестових файлів, результати тестування програмного модуля та розширена інформація про тестове покриття, яке в середньому склало 80.95%, наведено в:

<a href="../testReport/test-report.html" target="blank">Протокол випробувань</a>

<a href="../coverage/lcov-report/index.html" target="blank">Тестове покриття</a>
