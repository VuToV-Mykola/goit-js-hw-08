<!-- AUTOGEN:STATS -->
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS) [![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML) [![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript) [![Terminal](https://img.shields.io/badge/mac%20terminal-000000?style=for-the-badge&logo=apple&logoColor=white&labelColor=000000)](https://support.apple.com/guide/terminal/welcome/mac) [![VS Code](https://img.shields.io/badge/VS_Code-007ACC?style=for-the-badge&logo=visual-studio-code&logoColor=white)](https://code.visualstudio.com/) [![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/) [![Figma](https://img.shields.io/badge/Figma-F24E1E?style=for-the-badge&logo=figma&logoColor=white)](https://www.figma.com/) 

[![📊 Views](https://img.shields.io/endpoint?url=https://raw.githubusercontent.com/VuToV-Mykola/goit-js-hw-07/main/assets/db/visitors-badge.json)](https://github.com/VuToV-Mykola/goit-js-hw-07/graphs/traffic)
[![⭐ Stars](https://img.shields.io/endpoint?url=https://raw.githubusercontent.com/VuToV-Mykola/goit-js-hw-07/main/assets/db/likes-badge.json)](https://github.com/VuToV-Mykola/goit-js-hw-07/actions/workflows/screenshot-and-visitor.yaml)
[![📦 Size](https://img.shields.io/endpoint?url=https://raw.githubusercontent.com/VuToV-Mykola/goit-js-hw-07/main/assets/db/repo-size.json)](https://github.com/VuToV-Mykola/goit-js-hw-07)
[![📄 License](https://img.shields.io/endpoint?url=https://raw.githubusercontent.com/VuToV-Mykola/goit-js-hw-07/main/assets/db/repo-license.json)](https://github.com/VuToV-Mykola/goit-js-hw-07/blob/main/LICENSE)

## 📸 Скріншот проекту
![Project Screenshot](./assets/screenshot.png)
<!-- END:AUTOGEN -->

## My Achievements

![Description](./assets/head.jpg)

## My Certificates - Completed Sololearn Course

![Certification Badge](./assets/certificat.jpg)

[SOLOLEARN](https://www.sololearn.com/certificates/CT-VJXN3HQH)

# JavaScript Homework 07

## About

GoIT Homework-JS #7 focuses on DOM manipulation and event handling. Use the provided Figma layout to style the task markup. Do not change the HTML structure in task files.

Figma layout: https://www.figma.com/design/m8k9NQV7qZrtYDCvxfD68B/HW-JavaScript?node-id=0-1&p=f  
Homework brief: https://www.edu.goit.global/ru/learn/35708569/18936918/19852907/homework

## Task 1. Categories

**Complete this task in `js/task-1.js`.**

Using DOM properties and methods, write a script that:

- Counts and logs the number of categories in `ul#categories` (i.e. `li.item` elements).
- For each `li.item`, logs the category title (`<h2>`) and the number of elements within the category.

### Mentor Review Criteria

- Category count, titles, and item counts are obtained via DOM properties and methods
- Data for each category is logged inside a loop or `forEach()`
- Console output format:
  - `Number of categories: X`
  - `Category: ...`
  - `Elements: ...`

## Task 2. Image Gallery

**Complete this task in `js/task-2.js`.**

Create a gallery from the `images` array and add it to `ul.gallery`:

- Create `<img>` elements inside `<li>` elements based on the data
- Insert all gallery items into the DOM with one operation
- Add minimal flexbox styling via CSS classes

### Mentor Review Criteria

- A gallery with six images is created and added to `ul.gallery`
- The gallery consists of 6 `<li>` elements with nested `<img>` elements
- Images are created using data from the `images` array
- All elements are inserted with a single DOM operation
- Minimal flexbox styling is present

## Task 3. Input Greeting

**Complete this task in `js/task-3.js`.**

On input in `input#name-input`, substitute the current value into `span#name-output` as the greeting name:

- Trim whitespace from both ends of the input value
- If the input is empty (or only spaces), show `Anonymous`

### Mentor Review Criteria

- `input` event is listened to on `#name-input`
- The current input value is shown in `#name-output`
- Input value is trimmed
- `Anonymous` is shown when input is empty

## Task 4. Login Form

**Complete this task in `js/task-4.js`.**

Implement login form submission:

- Handle the `submit` event on `.login-form`
- Prevent page reload
- If any field is empty, show `alert('All form fields must be filled in')`
- Otherwise, collect values (trimmed) into an object using `elements`, log it, and reset the form

### Mentor Review Criteria

- `submit` event is handled
- Page does not reload on submit
- Empty fields trigger an alert
- Logged object contains trimmed values by input name
- Form fields are reset after submit

## Task 5. Background Color Widget

**Complete this task in `js/task-5.js`.**

On click of `button.change-color`, set the `<body>` background color to a random hex color and show it in `span.color`.

Use:

```javascript
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
```

### Mentor Review Criteria

- Background changes only on button click
- Each click applies a new random color
- `<body>` and `span.color` show the same color value
