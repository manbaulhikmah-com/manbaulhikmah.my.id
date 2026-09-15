document.querySelectorAll('.menu-card').forEach(card=>{
  card.addEventListener('click',()=>{
    document.querySelectorAll('.menu-card').forEach(c=>c.classList.remove('selected'));
    card.classList.add('selected');
  });
});
