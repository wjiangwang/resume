let specialTags = document.querySelectorAll('[data-x]')
        for (let i = 0; i < specialTags.length; i++) {
            specialTags[i].classList.add('offSet')
        }

        //网页加载后自动弹起
        setTimeout(function () { findClosestAndRemoveOffset() }, 1300);
        
        window.onscroll = function () {
            if (window.scrollY > 0) {
                top_nav_bar.classList.add('move')
            } else {
                top_nav_bar.classList.remove('move')
            }
            findClosestAndRemoveOffset()
        }





        function findClosestAndRemoveOffset() {
            let scrollTop = window.scrollY
            let specialTags = document.querySelectorAll('[data-x]')
            let min = specialTags[0]
            for (let i = 0; i < specialTags.length; i++) {
                let top = specialTags[i].offsetTop
                if (Math.abs(top - scrollTop) < Math.abs(min.offsetTop - scrollTop)) { min = specialTags[i] }
            }
            min.classList.remove('offSet')
            let minId = min.id
            let a = document.querySelector('a[href="#' + minId + '"]')
            console.log(a)
            let li = a.parentNode
            let brotherLi = li.parentNode.children
            for (let i = 0; i < brotherLi.length; i++) { brotherLi[i].classList.remove('highLight') }
            li.classList.add('highLight')

        }