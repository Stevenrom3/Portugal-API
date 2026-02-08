# 🇵🇹 Lusitânia 7 – Portugal API

Proyecto individual de consumo de una **API REST pública** para mostrar información del país **Portugal**, desarrollado como parte del programa **Análisis y Desarrollo de Software**.

El proyecto obtiene la información **directamente desde la API**, la procesa en formato JSON y la presenta de forma clara en una página web usando **HTML, CSS y JavaScript**.

---

## 🎯 Objetivo del proyecto

Consumir la API REST Countries para:
- Interpretar datos en formato JSON
- Filtrar información de un país específico
- Mostrar únicamente los campos asignados
- Presentar los datos de manera visual y ordenada

---

## 🌍 País asignado

- **Portugal**

---

## 🔗 API utilizada

- **REST Countries**
- Endpoint usado (Grupo C):
https://restcountries.com/v3.1/alpha?codes=PRT,ESP


> El endpoint devuelve información de más de un país.  
> En el código se filtra y se muestra **únicamente Portugal**, según lo indicado en el taller.

---

## 📌 Campos mostrados (exactamente 5)

- Nombre del país  
- Traducción al español  
- Capital  
- Región  
- Moneda  

*(La información proviene directamente de la API, no está escrita manualmente)*

---

## 🛠️ Tecnologías utilizadas

- HTML5  
- CSS3  
- JavaScript (Fetch API)  

❌ No se usaron frameworks  
❌ No se usaron datos manuales  

---

## 📁 Estructura del proyecto
Portugal-API/
│
├── index.html
├── styles.css
└── app.js


---

## ▶️ Funcionamiento

1. Se realiza una petición `fetch` a la API REST Countries  
2. Se recibe la respuesta en formato JSON  
3. Se filtra el país asignado (Portugal)  
4. Se extraen los campos requeridos  
5. La información se muestra dinámicamente en la página web  

---

## 👤 Autor

- **Johan Steven Romero Marín**
- Aprendiz N.º 24

---

## 📚 Observaciones

Este proyecto sienta las bases para el consumo de APIs REST, manejo de datos JSON y presentación de información dinámica en aplicaciones web, conocimientos fundamentales para el uso posterior de frameworks y backend.

