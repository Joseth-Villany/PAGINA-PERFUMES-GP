const searchForm = document.querySelector('.search-form');
const searchBtn = document.querySelector('.search-btn');
const searchInput = document.querySelector('.search-input');

searchBtn.addEventListener('mouseenter', () => {
  searchForm.classList.toggle('active');
  searchInput.focus();
});
searchBtn.addEventListener("mouseleave" , () =>{
    searchForm.classList.remove("active")
    searchInput.blur()
});