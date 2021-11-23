---
title: MOLFAR. Реєстр специфікацій API мікросервісів та робочих процесів v1.0.1
language_tabs:
  - http: HTTP
  - javascript: JavaScript
language_clients:
  - shell: curl
  - javascript: axios
toc_footers:
  - <a href="https://wdc-molfar.github.io/ms-registry/">Документація</a>
includes: []
search: true
highlight_theme: darkula
headingLevel: 2

---

<!-- Generator: Widdershins v4.0.1 -->

<h1 id="molfar-msapi-">MOLFAR. Реєстр специфікацій API мікросервісів та робочих процесів v1.0.1</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Надає доступ до реєстру специфікацій API мікросервісів і робочих процесів та описів повторюваного використання за назвою, а також надає можливість управління реєстром специфікацій, зокрема, реєструвати, оновлювати та видаляти специфікації API мікросервісів і робочих процесів

Base URLs:

* <a href="http://localhost:8080">http://localhost:8080</a>

Email: <a href="mailto:boldak.andrey@gmail.com">boldak.andrey@gmail.com</a> Web: <a href="http://localhost:8080/">ms-registry</a> 
License: <a href="http://localhost:8080/license.html">MIT License</a>

<h1 id="molfar-msapi---">Загальна інформація</h1>

## get__

> Code samples

```http
GET / HTTP/1.1
Accept: text/html
Host: localhost:8080

```

```javascript
import axios from "axios";

const options = {method: 'GET', url: 'http://localhost:8080/', headers: {Accept: 'text/html'}};

axios.request(options).then(function (response) {
  console.log(response.data);
}).catch(function (error) {
  console.error(error);
});
```

`GET /`

*Отримати загальний опис сервісу*

Повертає сторінку загального опису

> Example responses

> 200 Response

```
"Not found"
```

<h3 id="get__-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Успішна відповідь|string|

<aside class="success">
This operation does not require authentication
</aside>

## get__spec

> Code samples

```http
GET /spec HTTP/1.1
Accept: application/json
Host: localhost:8080

```

```javascript
import axios from "axios";

const options = {
  method: 'GET',
  url: 'http://localhost:8080/spec',
  headers: {Accept: 'application/json'}
};

axios.request(options).then(function (response) {
  console.log(response.data);
}).catch(function (error) {
  console.error(error);
});
```

`GET /spec`

*Отримати список зареєстрованих специфікацій*

Повертає список зареєстрованих специфікацій

> Example responses

> 200 Response

```json
[
  {
    "id": "string",
    "name": "string",
    "data": "string"
  }
]
```

<h3 id="get__spec-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Список зареєстрованих специфікацій в форматі JSON|[array_of_spec_desc](#schemaarray_of_spec_desc)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="molfar-msapi---">Доступ до реєстру</h1>

## get__spec_{name}

> Code samples

```http
GET /spec/servers.yaml HTTP/1.1
Accept: application/yaml
Host: localhost:8080

```

```javascript
import axios from "axios";

const options = {
  method: 'GET',
  url: 'http://localhost:8080/spec/servers.yaml',
  headers: {Accept: 'application/yaml'}
};

axios.request(options).then(function (response) {
  console.log(response.data);
}).catch(function (error) {
  console.error(error);
});
```

`GET /spec/{name}`

*Отримати специфікацію*

Повертає специфікацію в форматі YAML за ім'ям

<h3 id="get__spec_{name}-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Назва специфікації|

> Example responses

> 200 Response

> 404 Response

```json
{
  "body": {
    "code": "string",
    "message": "string"
  }
}
```

<h3 id="get__spec_{name}-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|MSAPI-специфікація в форматі YAML|[spec](#schemaspec)|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Специфікацію не знайдено|[error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="molfar-msapi---">Управління реєстром</h1>

## delete__spec_{name}

> Code samples

```http
DELETE /spec/servers.yaml HTTP/1.1
Accept: application/json
Host: localhost:8080

```

```javascript
import axios from "axios";

const options = {
  method: 'DELETE',
  url: 'http://localhost:8080/spec/servers.yaml',
  headers: {Accept: 'application/json'}
};

axios.request(options).then(function (response) {
  console.log(response.data);
}).catch(function (error) {
  console.error(error);
});
```

`DELETE /spec/{name}`

*Видалити специфікацію*

Видаляє специфікацію з реєстру

<h3 id="delete__spec_{name}-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Назва специфікації|

> Example responses

> 200 Response

```json
{
  "body": {},
  "text": "string"
}
```

<h3 id="delete__spec_{name}-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Успішна відповідь|Inline|

<h3 id="delete__spec_{name}-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» body|object|false|none|none|
|» text|string|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## post__spec_{name}

> Code samples

```http
POST /spec/servers.yaml HTTP/1.1
Content-Type: text/plain
Accept: application/yaml
Host: localhost:8080
Content-Length: 8

"string"
```

```javascript
import axios from "axios";

const options = {
  method: 'POST',
  url: 'http://localhost:8080/spec/servers.yaml',
  headers: {'Content-Type': 'text/plain', Accept: 'application/yaml'},
  data: '"string"'
};

axios.request(options).then(function (response) {
  console.log(response.data);
}).catch(function (error) {
  console.error(error);
});
```

`POST /spec/{name}`

*Реєстрація специфікації*

Зберігає специфікацію в реєстрі та повертає її

> Body parameter

```
string

```

<h3 id="post__spec_{name}-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Назва специфікації|
|body|body|[spec](#schemaspec)|false|none|

> Example responses

> 200 Response

> 400 Response

```json
{
  "body": {
    "code": "string",
    "message": "string"
  }
}
```

<h3 id="post__spec_{name}-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|MSAPI-специфікація в форматі YAML|[spec](#schemaspec)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Специфікація вже існує|[error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## put__spec_{name}

> Code samples

```http
PUT /spec/servers.yaml HTTP/1.1
Content-Type: text/plain
Accept: application/yaml
Host: localhost:8080
Content-Length: 8

"string"
```

```javascript
import axios from "axios";

const options = {
  method: 'PUT',
  url: 'http://localhost:8080/spec/servers.yaml',
  headers: {'Content-Type': 'text/plain', Accept: 'application/yaml'},
  data: '"string"'
};

axios.request(options).then(function (response) {
  console.log(response.data);
}).catch(function (error) {
  console.error(error);
});
```

`PUT /spec/{name}`

*Оновити специфікацію*

Оновлює фбо реєструє специфікацію в реєстрі та повертає оновлену версію специфікації

> Body parameter

```
string

```

<h3 id="put__spec_{name}-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Назва специфікації|
|body|body|[spec](#schemaspec)|false|none|

> Example responses

> 200 Response

<h3 id="put__spec_{name}-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|MSAPI-специфікація в форматі YAML|[spec](#schemaspec)|

<aside class="success">
This operation does not require authentication
</aside>

# Schemas

<h2 id="tocS_spec">spec</h2>
<!-- backwards compatibility -->
<a id="schemaspec"></a>
<a id="schema_spec"></a>
<a id="tocSspec"></a>
<a id="tocsspec"></a>

```json
"string"

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|string|false|none|none|

<h2 id="tocS_spec_desc">spec_desc</h2>
<!-- backwards compatibility -->
<a id="schemaspec_desc"></a>
<a id="schema_spec_desc"></a>
<a id="tocSspec_desc"></a>
<a id="tocsspec_desc"></a>

```json
{
  "id": "string",
  "name": "string",
  "data": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|none|none|
|name|string|false|none|none|
|data|string|false|none|none|

<h2 id="tocS_array_of_spec_desc">array_of_spec_desc</h2>
<!-- backwards compatibility -->
<a id="schemaarray_of_spec_desc"></a>
<a id="schema_array_of_spec_desc"></a>
<a id="tocSarray_of_spec_desc"></a>
<a id="tocsarray_of_spec_desc"></a>

```json
[
  {
    "id": "string",
    "name": "string",
    "data": "string"
  }
]

```

### Properties

*None*

<h2 id="tocS_error">error</h2>
<!-- backwards compatibility -->
<a id="schemaerror"></a>
<a id="schema_error"></a>
<a id="tocSerror"></a>
<a id="tocserror"></a>

```json
{
  "body": {
    "code": "string",
    "message": "string"
  }
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|body|object|false|none|none|
|» code|string|true|none|none|
|» message|string|true|none|none|

