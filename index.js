const BulbElement = document.querySelector('.bulb');

const changeBulb = () => {
  BulbElement.classList.toggle('bulb--on');
};

document.body.addEventListener('keydown', changeBulb);
