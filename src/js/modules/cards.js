const addClassCard = () => {
    const container = document.querySelector('.payment__cards');
    const cards = document.querySelectorAll('.payment__card');
    
    container.addEventListener('click', (e) => {
        let target = e.target;
        
        if (target.classList.contains('payment__card')) {
          cards.forEach(item => {
            item.classList.remove('payment__card--active');
          });
          target.classList.add('payment__card--active');
        }
    });
    
}
export default addClassCard;