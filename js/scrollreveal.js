{
  window.sr = ScrollReveal();
  let scrollName=['.usercard','.skills','.portfolio','.education','.message']
  scrollName.map((name)=>{
    sr.reveal(name,{
        delay: 300,
        reset: true,
        distance: "150px",
        duration: 1000,
        afterReveal: function(el) {
          let className = document.getElementsByClassName(name);

          sr.clean(name)//只动画一次
        }
      });
  })
  
}
