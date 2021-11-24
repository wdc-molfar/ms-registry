(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{658:function(t,v,_){"use strict";_.r(v);var e=_(64),r=Object(e.a)({},(function(){var t=this,v=t.$createElement,_=t._self._c||v;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("h1",{attrs:{id:"програмнии-модуль-molfar-ms-registry-програма-та-методика-випробувань"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#програмнии-модуль-molfar-ms-registry-програма-та-методика-випробувань"}},[t._v("#")]),t._v(" Програмний модуль @molfar/ms-registry | Програма та методика випробувань")]),t._v(" "),_("h2",{attrs:{id:"об-єкт-випробувань"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#об-єкт-випробувань"}},[t._v("#")]),t._v(" Об'єкт випробувань")]),t._v(" "),_("p",[t._v("Об'єктом випробувань є "),_("strong",[t._v('програмний модуль @molfar/ms-registry – "Реєстр специфікацій API мікросервісів та робочих процесів"')]),t._v(", що призначений для надання доступу до реєстру специфікацій API мікросервісів і робочих процесів та описів повторюваного використання за назвою, а також для управління реєстром специфікацій, зокрема, реєстрації, оновлення та видалення специфікацій API мікросервісів і робочих процесів.")]),t._v(" "),_("h2",{attrs:{id:"мета-випробувань"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#мета-випробувань"}},[t._v("#")]),t._v(" Мета випробувань")]),t._v(" "),_("p",[t._v("Перевірити надійність функціонування програмного модуля @molfar/ms-registry та його окремих функцій.")]),t._v(" "),_("h2",{attrs:{id:"вимоги-до-програмного-модуля"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#вимоги-до-програмного-модуля"}},[t._v("#")]),t._v(" Вимоги до програмного модуля")]),t._v(" "),_("p",[t._v("Програмний модуль повинен задовільнати наступним вимогам.")]),t._v(" "),_("p",[t._v("Функціонування програмного модуля "),_("strong",[t._v("не має призводити до збою (фатального порушення роботи системи)")]),t._v(" та "),_("strong",[t._v("видавати діагностику стану системи та повідомлення про будь-які помилки, що виникли")]),t._v(":")]),t._v(" "),_("ul",[_("li",[t._v('програмний модуль у відповідь на запит "Отримати загальний опис сервісу" повинен повернути сторінку загального опису, код відповіді – 200')]),t._v(" "),_("li",[t._v('програмний модуль у відповідь на запит "Отримати статистику сервісу" повинен повернути сторінку статистики, код відповіді – 302')]),t._v(" "),_("li",[t._v('програмний модуль у відповідь на успішний запит "Отримати список зареєстрованих специфікацій" повинен повернути список зареєстрованих специфікацій API мікросервісів та робочих процесів в форматі '),_("code",[t._v("JSON")]),t._v(", код відповіді – 200")]),t._v(" "),_("li",[t._v('програмний модуль у відповідь на успішний запит "Отримати специфікацію за назвою" повинен повернути специфікацію за назвою в форматі '),_("code",[t._v("YAML")]),t._v(", код відповіді – 200")]),t._v(" "),_("li",[t._v('програмний модуль у відповідь на невдалий запит "Отримати специфікацію за назвою" повинен повернути помилку "Специфікацію не знайдено", код відповіді – 404')]),t._v(" "),_("li",[t._v('програмний модуль у відповідь на запит "Видалити специфікацію за назвою" повинен видалити специфікацію за назвою, код відповіді – 200')]),t._v(" "),_("li",[t._v('програмний модуль у відповідь на успішний запит "Реєстрація специфікації за назвою" повинен зберегти специфікацію за назвою в реєстрі та повернути її в форматі '),_("code",[t._v("YAML")]),t._v(", код відповіді – 200")]),t._v(" "),_("li",[t._v('програмний модуль у відповідь на невдалий запит "Реєстрація специфікації за назвою" повинен повернути помилку "Специфікація вже існує", код відповіді – 400')]),t._v(" "),_("li",[t._v('програмний модуль у відповідь на запит "Оновити специфікацію" повинен оновити специфікацію за назвою в реєстрі та повернути її оновлену версію в форматі '),_("code",[t._v("YAML")]),t._v(", код відповіді – 200")])]),t._v(" "),_("h2",{attrs:{id:"вимоги-до-програмноі-документаціі"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#вимоги-до-програмноі-документаціі"}},[t._v("#")]),t._v(" Вимоги до програмної документації")]),t._v(" "),_("p",[t._v("Склад програмної документації, пропонованої на випробуванні:")]),t._v(" "),_("ul",[_("li",[_("a",{attrs:{href:"https://docs.cntd.ru/document/1200007652",target:"_blank",rel:"noopener noreferrer"}},[t._v("ГОСТ 19.402-78."),_("OutboundLink")],1),t._v(" ЕСПД. Опис програми")]),t._v(" "),_("li",[_("a",{attrs:{href:"https://docs.cntd.ru/document/1200007650",target:"_blank",rel:"noopener noreferrer"}},[t._v("ГОСТ 19.301-79."),_("OutboundLink")],1),t._v(" ЕСПД. Програма та методика випробувань. Вимоги до змісту та оформлення")]),t._v(" "),_("li",[_("a",{attrs:{href:"https://docs.cntd.ru/document/1200007651",target:"_blank",rel:"noopener noreferrer"}},[t._v("ГОСТ 19.401-78."),_("OutboundLink")],1),t._v(" ЕСПД. Текст програми. Вимоги до змісту та оформлення")])]),t._v(" "),_("h2",{attrs:{id:"засоби-і-порядок-випробувань"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#засоби-і-порядок-випробувань"}},[t._v("#")]),t._v(" Засоби і порядок випробувань")]),t._v(" "),_("p",[t._v("Для запуску комплексів тестів використовуються менеджер пакетів для мови програмування JavaScript – "),_("code",[t._v("npm (Node Package Manager)")]),t._v(", та команда")]),t._v(" "),_("div",{staticClass:"language-shell extra-class"},[_("pre",{pre:!0,attrs:{class:"language-shell"}},[_("code",[_("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" "),_("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("test")]),t._v("\n")])])]),_("p",[t._v("Порядок проведення випробувань:")]),t._v(" "),_("ol",[_("li",[t._v("Виконати комплекс тестів "),_("strong",[t._v('"Тести для шляху "/""')]),t._v(", запустивши файл "),_("code",[t._v("root.test.js")])]),t._v(" "),_("li",[t._v("Виконати комплекс тестів "),_("strong",[t._v('"Тести для шляху "/spec""')]),t._v(", запустивши файл "),_("code",[t._v("spec.test.js")])]),t._v(" "),_("li",[t._v("Виконати комплекс тестів "),_("strong",[t._v('"Тести для шляху "/spec/{name}""')]),t._v(", запустивши файл "),_("code",[t._v("spec-{name}.test.js")])])]),t._v(" "),_("p",[t._v("Для обробки результатів тестування та створення протоколу випробувань в HTML використовується "),_("code",[t._v("Jest reporter")]),t._v(" версії "),_("a",{attrs:{href:"https://www.npmjs.com/package/jest-html-reporters/v/2.1.6",target:"_blank",rel:"noopener noreferrer"}},[t._v("2.1.6"),_("OutboundLink")],1),t._v(".")]),t._v(" "),_("h2",{attrs:{id:"методи-випробувань"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#методи-випробувань"}},[t._v("#")]),t._v(" Методи випробувань")]),t._v(" "),_("p",[t._v("Для проведення випробувань пропонується наступий переліків комплексів тестів та окремих тестових прикладів:")]),t._v(" "),_("ul",[_("li",[t._v("Комплекс тестів "),_("strong",[t._v('"Тести для шляху "/""')]),t._v(", що міститься у файлі "),_("code",[t._v("root.test.js")]),t._v(", має наступні тестові приклади:\n"),_("ul",[_("li",[t._v('Тест перевірки запиту "Отримати загальний опис сервісу"')]),t._v(" "),_("li",[t._v('Тест перевірки запиту "Отримати статистику сервісу"')])])]),t._v(" "),_("li",[t._v("Комплекс тестів "),_("strong",[t._v('"Тести для шляху "/spec""')]),t._v(", що міститься у файлі "),_("code",[t._v("spec.test.js")]),t._v(", має наступні тестові приклади:\n"),_("ul",[_("li",[t._v('Тест перевірки успішного запиту "Отримати список зареєстрованих специфікацій"')])])]),t._v(" "),_("li",[t._v("Комплекс тестів "),_("strong",[t._v('"Тести для шляху "/spec/{name}""')]),t._v(", що міститься у файлі "),_("code",[t._v("spec-{name}.test.js")]),t._v(", має наступні тестові приклади:\n"),_("ul",[_("li",[t._v('Тест перевірки успішного запиту "Отримати специфікацію за назвою"')]),t._v(" "),_("li",[t._v('Тест перевірки невдалого запиту "Отримати специфікацію за назвою"')]),t._v(" "),_("li",[t._v('Тест перевірки запиту "Видалити специфікацію за назвою"')]),t._v(" "),_("li",[t._v('Тест перевірки успішного запиту "Реєстрація специфікації за назвою"')]),t._v(" "),_("li",[t._v('Тест перевірки невдалого запиту "Реєстрація специфікації за назвою"')]),t._v(" "),_("li",[t._v('Тест перевірки запиту "Оновити специфікацію"')])])])]),t._v(" "),_("h2",{attrs:{id:"додаток"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#додаток"}},[t._v("#")]),t._v(" Додаток")]),t._v(" "),_("p",[t._v("Вміст тестових файлів, результати тестування програмного модуля та розширена інформація про тестове покриття, яке в середньому склало 80.95%, наведено в:")]),t._v(" "),_("p",[_("a",{attrs:{href:"../testReport/test-report.html",target:"blank"}},[t._v("Протокол випробувань")])]),t._v(" "),_("p",[_("a",{attrs:{href:"../coverage/lcov-report/index.html",target:"blank"}},[t._v("Тестове покриття")])])])}),[],!1,null,null,null);v.default=r.exports}}]);