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

// Створення розмітки елементів галереї
const galleryContainer = document.querySelector('.gallery');

if (galleryContainer) {
  // Створюємо HTML розмітку для всіх елементів галереї
  const galleryMarkup = images
    .map(
      ({ preview, original, description }) => `
    <li class="gallery-item">
      <a class="gallery-link" href="${original}">
        <img
          class="gallery-image"
          src="${preview}"
          data-source="${original}"
          alt="${description}"
        />
      </a>
    </li>
  `
    )
    .join('');

  // Додаємо всю розмітку одним DOM операцією
  galleryContainer.insertAdjacentHTML('beforeend', galleryMarkup);
}

if (galleryContainer) {
  galleryContainer.addEventListener('click', (event) => {
    // Перевіряємо, чи клік був на зображенні
    const galleryImage = event.target.closest('.gallery-image');

    // Якщо клік між елементами галереї - нічого не робимо
    if (!galleryImage) {
      return;
    }

    // Забороняємо поведінку за замовчуванням (завантаження зображення)
    event.preventDefault();

    // Отримуємо посилання на велике зображення з data-source атрибуту
 
    const largeImageUrl = galleryImage.dataset.source;

    // Отримуємо опис зображення для alt атрибуту
    const imageDescription = galleryImage.alt || 'Image';

    if (!largeImageUrl) {
      return;
    }

    // Для дебагу виводимо посилання в консоль (Крок 5 - делегування)
    console.log('Large image URL:', largeImageUrl);

    // Створюємо модальне вікно з великим зображенням
    // basicLightbox.create() приймає HTML рядок або функцію
    const instance = basicLightbox.create(
      `
      <img src="${largeImageUrl}" alt="${imageDescription}" />
    `,
      {
        // Закриття при натисканні ESC та кліку на затемнений фон
        closable: true,
        onShow: (instance) => {
          // Обробник для закриття при натисканні ESC
          const handleEscapeKey = (e) => {
            if (e.key === 'Escape') {
              instance.close();
            }
          };
          document.addEventListener('keydown', handleEscapeKey);
          // Зберігаємо обробник для видалення при закритті
          instance.escapeHandler = handleEscapeKey;
        },
        onClose: (instance) => {
          // Видаляємо обробник при закритті
          if (instance.escapeHandler) {
            document.removeEventListener('keydown', instance.escapeHandler);
          }
        },
      }
    );
    // Відкриваємо модальне вікно
    instance.show();
  });
}
