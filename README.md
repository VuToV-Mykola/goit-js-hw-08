<!-- AUTOGEN:STATS -->
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript) [![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML) [![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS) [![Terminal](https://img.shields.io/badge/mac%20terminal-000000?style=for-the-badge&logo=apple&logoColor=white&labelColor=000000)](https://support.apple.com/guide/terminal/welcome/mac) [![VS Code](https://img.shields.io/badge/VS_Code-007ACC?style=for-the-badge&logo=visual-studio-code&logoColor=white)](https://code.visualstudio.com/) [![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/) [![Figma](https://img.shields.io/badge/Figma-F24E1E?style=for-the-badge&logo=figma&logoColor=white)](https://www.figma.com/) 

[![📊 Views](https://img.shields.io/endpoint?url=https://raw.githubusercontent.com/VuToV-Mykola/goit-js-hw-08/main/assets/db/visitors-badge.json)](https://github.com/VuToV-Mykola/goit-js-hw-08/graphs/traffic)
[![⭐ Stars](https://img.shields.io/endpoint?url=https://raw.githubusercontent.com/VuToV-Mykola/goit-js-hw-08/main/assets/db/likes-badge.json)](https://github.com/VuToV-Mykola/goit-js-hw-08/actions/workflows/screenshot-and-visitor.yaml)
[![📦 Size](https://img.shields.io/endpoint?url=https://raw.githubusercontent.com/VuToV-Mykola/goit-js-hw-08/main/assets/db/repo-size.json)](https://github.com/VuToV-Mykola/goit-js-hw-08)
[![📄 License](https://img.shields.io/endpoint?url=https://raw.githubusercontent.com/VuToV-Mykola/goit-js-hw-08/main/assets/db/repo-license.json)](https://github.com/VuToV-Mykola/goit-js-hw-08/blob/main/LICENSE)

## 📸 Скріншот проекту
![Project Screenshot](./assets/screenshot.png)
<!-- END:AUTOGEN -->

## My Achievements

![Description](./assets/head.jpg)

## My Certificates - Completed Sololearn Course

![Certification Badge](./assets/certificat.jpg)

[SOLOLEARN](https://www.sololearn.com/certificates/CT-VJXN3HQH)

# JavaScript Homework 08

## Task - Image Gallery

Create an image gallery with the ability to click on its elements and view the full-size image in a modal window. Watch the demo video of the gallery functionality.

Creating a gallery is a complex task that is best broken down into several simpler subtasks. By completing each one, you will move closer to the final goal. This process is called **task decomposition**.

---

## Implementation Steps

### Step 1 - Gallery Markup

Start by creating a container for the gallery elements. Add an unordered list with the class `gallery` to your HTML code.

```html
<ul class="gallery"></ul>
```

### Step 2 - Images Array

You'll need data to create the gallery elements. Add this array of objects to your JavaScript file. Each object represents one gallery item.

- **preview** — link to the small version of the image for the gallery card
- **original** — link to the large version of the image for the modal window
- **description** — text description of the image, for the `alt` attribute of the small image and caption of the large image in the modal

```javascript
const images = [
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820__480.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820_1280.jpg',
    description: 'Hokkaido Flower',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg',
    description: 'Container Haulage Freight',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg',
    description: 'Aerial Beach View',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg',
    description: 'Flower Blooms',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg',
    description: 'Alpine Mountains',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg',
    description: 'Mountain Lake Sailing',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg',
    description: 'Alpine Spring Meadows',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg',
    description: 'Nature Landscape',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg',
    description: 'Lighthouse Coast Sea',
  },
];
```

### Step 3 - Gallery Item Markup

You have a container to add gallery elements to, and data to create them from. Now it's time to populate the gallery with markup.

Use the `images` array of objects and this HTML template for a gallery item, then create the markup in your JavaScript code and add all markup inside `ul.gallery`. Do not add other HTML tags besides those contained in this template.

```html
<li class="gallery-item">
  <a class="gallery-link" href="large-image.jpg">
    <img
      class="gallery-image"
      src="small-image.jpg"
      data-source="large-image.jpg"
      alt="Image description"
    />
  </a>
</li>
```

**Important points:**

- In the `src` attribute of the `<img>` tag, specify the link to the small version of the image.
- For the `alt` attribute, use the image description.
- The link to the large image should be stored in the `data-source` attribute on the `<img>` element, and specified in the `href` of the link.

**Note:** The image is wrapped in a link with an `href` attribute pointing to the image file path. Therefore, clicking on it may trigger downloading the image to the user's computer. **Prevent this default behavior**.

### Step 4 - Styles

Add gallery styling according to the layout.

### Step 5 - Event Delegation

It's time to add functionality to listen for clicks on gallery elements and get the link to the large image on click. Use the **delegation technique** on `ul.gallery`. For now, when clicking on a gallery element, output the link to the large image stored as the value of the `data-source` attribute of the `img` element to the console.

### Step 6 - Library Integration

The **basicLightbox** library provides a fully functional modal window that perfectly suits our task. Use the **jsDelivr** CDN service and add links to the minified (`.min`) JS and CSS files of the library to your HTML file.

### Step 7 - Modal Window

Enhance your code so that when clicking on a gallery element, a modal window from the connected library opens. To learn how to initialize the modal window in your code and how to use it, refer to the documentation and examples.

### Step 8 - Large Image

Use your code to get the link to the large image from the `data-source` attribute to replace the value of the `src` attribute of the `<img>` element in the modal window before opening. Use the ready-made modal window markup with an image from the basicLightbox library examples.

---

## Mentor Review Criteria

The mentor will check the following:

✅ A gallery of images from the `images` data array is displayed on the live page

✅ The image gallery is styled according to the layout

✅ Gallery data is created dynamically in JavaScript

✅ Event delegation technique is used when listening for click events on gallery elements

✅ Nothing happens when clicking between gallery elements

✅ The basicLightbox library is connected

✅ When clicking on a gallery element, a modal window from the connected library opens, containing an enlarged version of the clicked image

---

## Technologies Used

- HTML5
- CSS3
- JavaScript (ES6+)
- basicLightbox Library

## Project Structure

```
goit-js-hw-08/
├── index.html
├── css/
│   └── styles.css
├── js/
│   └── gallery.js
├── assets/
└── README.md
```

---

## Setup Instructions

1. Clone the repository or download the project files
2. Open `index.html` in a web browser
3. Ensure the basicLightbox library is loaded via CDN (check the HTML file)
4. Test the gallery functionality by clicking on images

## Resources

- [basicLightbox Documentation](https://github.com/electerious/basicLightbox)
- [jsDelivr CDN](https://www.jsdelivr.com/)
