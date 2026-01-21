const categoriesList = document.querySelector('#categories');
const categoryItems = categoriesList
  ? categoriesList.querySelectorAll('.item')
  : [];

console.log(`Number of categories: ${categoryItems.length}`);

categoryItems.forEach((item) => {
  const titleElement = item.querySelector('h2');
  const title = titleElement ? titleElement.textContent : '';
  const elementsCount = item.querySelectorAll('li').length;

  console.log(`Category: ${title}`);
  console.log(`Elements: ${elementsCount}`);
});
