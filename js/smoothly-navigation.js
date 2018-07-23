let liTags = document.querySelectorAll('nav.menu>ul>li')
        for (i = 0; i < liTags.length; i++) {
            liTags[i].onmouseenter = function (x) {
                x.currentTarget.classList.add('active')
            }
            liTags[i].onmouseleave = function (x) {
                x.currentTarget.classList.remove('active')
            }
        }
        function animate(time) {
            requestAnimationFrame(animate);
            TWEEN.update(time);
        }
        requestAnimationFrame(animate);
        let aTags = document.querySelectorAll('nav.menu>ul>li>a')
        for (let i = 0; i < aTags.length; i++) {
            aTags[i].onclick = function (x) {
                x.preventDefault()
                let a = x.currentTarget
                let href = a.getAttribute('href')
                let element = document.querySelector(href)
                let top = element.offsetTop
                let currentTop = window.scrollY//当前高度
                let targetTop = top - 70;//目标高度
                let t = Math.abs((targetTop - currentTop))
                if (t > 700) { t = 700 }
                var coords = { y: currentTop };
                var tween = new TWEEN.Tween(coords)
                    .to({ y: targetTop }, t)
                    .easing(TWEEN.Easing.Quadratic.InOut)
                    .onUpdate(function () {
                        window.scrollTo(0, coords.y)
                    })
                    .start();


            }

        }