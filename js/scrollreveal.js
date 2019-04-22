{
  window.sr = ScrollReveal();
  let scrollName=['.usercard','.skills','.portfolio','.education','.message']
  scrollName.map((name)=>{
    sr.reveal(name,{
        delay: 300,
        reset: false,
        distance: "150px",
        duration: 1000,
        afterReveal: function(el) {
          let className = document.getElementsByClassName(name);

          sr.clean(name)//只动画一次
        }
      });
  })
  
  let scrollName2=['left','right']
  scrollName2.map((name)=>{
    sr.reveal('.'+name,{
      origin: name,
      opacity: 0.8,
        delay: 300,
        reset: false,
        distance: "100px",
        duration: 1000,
        afterReveal: function(el) {
          let className = document.getElementsByClassName(name);
          sr.clean('.'+name)//只动画一次
        }
      });
    })
 
  
}
