var watchFavorites = false;

document.addEventListener('DOMContentLoaded', function() {
  fillList();
}, false);

function fillList() {
  var favoritesBtn = document.getElementById('favorites-btn');
  var listTitle = document.getElementById('list-title');
  if (watchFavorites && isLogged()) {
    fillFavoriteList();
  } else {
    fillAllList();
    if (isLogged()) {
      favoritesBtn.innerHTML = 'Ver Favoritos';
      listTitle.innerHTML = 'Listado Completo';
    }
  }
}

function toggleFavoritesList() {
  watchFavorites = !watchFavorites;
  fillList();
}

function fillAllList() {
  var list = document.getElementById('items');
  list.innerHTML = '';
  for (i = 0; i < items.length; i++) {
    var item = items[i];
    var favorite = isFavorite(item.title);
    addItem(item, favorite);
  }
}

function fillFavoriteList() {
  var list = document.getElementById('items');
  list.innerHTML = '';
  for (i = 0; i < items.length; i++) {
    var item = items[i];
    var favorite = isFavorite(item.title);
    if (favorite) {
      addItem(item, favorite);
    }
  }
}


function addItem(item, favorite) {
  if (!isLogged()) {
    favorite = false;
  }
  var list = document.getElementById('items');
  list.insertAdjacentHTML('beforeend',
      '<div class="col-lg-3 col-sm-6" onclick="toggleFavorite(\'' + item.title + '\')">' +
      '  <div class="items__item hover__box">' +
      '    <div class="items__thumb hover__box__thumb">' +
      '      <a title="' + item.title + '">' +
      '        <img src="' + item.imageUrl + '" alt="' + item.title + '">' +
      '      </a>' +
      '    </div>' +
      '    <h1 class="items__name" id="favorite_' + item.title + '">' + favoriteIcon(favorite) + '</h1>' +
      '    <div class="items__info">' +
      '      <h3 class="items__capital">' + item.title + '</h3>' +
      '      <p class="items__number">' + item.subtitle + '</p>' +
      '    </div>' +
      '  </div>' +
      '</div>'
    );
}

function favoriteIcon(favorite) {
  return favorite ? '❤' : '';
}