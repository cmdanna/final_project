window.addEventListener("load", function () {
    console.log("Good job opening the window")
});

window.addEventListener("click", function () {
    window.scrollTo(0, 0);
});

document.querySelectorAll('.item').forEach(item => {
    item.querySelectorAll('img').forEach(design => {
        design.addEventListener('click', event => {
            console.log("Opening item");
            tile = item.querySelector('.tile');
            tile.setAttribute('id', 'tile')
            names = item.querySelector('.name');
            names.setAttribute('id', 'name')
            design = item.querySelector('.design');
            design.setAttribute('id', 'design')
            subtitle = item.querySelector('.subtitle');
            subtitle.setAttribute('id', 'subtitle')
            button = item.querySelector('.btn');
            button.setAttribute('id', 'btn')
            document.querySelector('h1').classList.add('hidden')
            document.querySelectorAll('.item').forEach(hidden => {
                hidden.classList.add('hidden')
            })
            description = item.querySelector(".description")
            detail = item.querySelector(".detail_highlight")
            description.style.display = "grid"
            detail.style.display = "grid"
            item.removeAttribute("style")
            item.removeAttribute("data-tilt")
            item.classList.add("item_adjust")
            item.style.display = "grid"
            item.querySelector("#design").classList.add("design_adjust")
            item.querySelector("#btn").classList.add("exit")
            item.querySelector('#tile').classList.add("tile_adjust")
            item.querySelector("#name").classList.add("name_adjust")
            item.querySelector("#subtitle").classList.add("subtitle_adjust")
        })
    })
})

document.querySelectorAll('.item').forEach(item => {
    item.querySelectorAll('button').forEach(button => {
        button.addEventListener('click', event => {
            console.log("Closing item");
            document.querySelector('h1').classList.remove('hidden')
            document.querySelectorAll('.item').forEach(hidden => {
                hidden.classList.remove('hidden')
            })
            item.classList.remove("item_adjust")
            item.removeAttribute('style')
            item.setAttribute('data-tilt','')
            item.querySelector("#design").classList.remove("design_adjust")
            item.querySelector("#btn").classList.remove("exit")
            item.querySelector('#tile').classList.remove("tile_adjust")
            item.querySelector("#name").classList.remove("name_adjust")
            item.querySelector("#subtitle").classList.remove("subtitle_adjust")
            description = item.querySelector(".description")
            detail = item.querySelector(".detail_highlight")
            description.style.display = "none"
            detail.style.display = "none"
            
            tile = item.querySelector('#tile');
            tile.removeAttribute('id')
            names = item.querySelector('#name');
            names.removeAttribute('id')
            design = item.querySelector('#design');
            design.removeAttribute('id')
            subtitle = item.querySelector('#subtitle');
            subtitle.removeAttribute('id')
            button = item.querySelector('#btn');
            button.removeAttribute('id')
            document.querySelector("#grid").classList.remove("grid_adjust")
            grid = document.getElementById("grid")
            grid.removeAttribute("id")
            
            
            
            // item.getElementByID('tile').removeAttribute("id")
            // item.getElementByID('name').removeAttribute("id")
            // item.getElementByID('design').removeAttribute("id")
            // item.getElementByID('subtitle').removeAttribute("id")
            // item.getElementByID('btn').removeAttribute("id")
            
            // image.classList.add("image-zoom")
        })
    })
})


// document.addEventListener(click)

// document.querySelectorAll('.item_adjust').forEach(item => {
//     item.querySelector('.exit').addEventListener('click', function () {
//         console.log("Closing item");
//         title = document.querySelector('h1')
//         title.style.display = "block"
//         document.querySelectorAll('.item').forEach(hidden => {
//             hidden.style.display = "grid"
//         })
//         item = document.querySelector('.item_adjust')
//         item.classList.remove("item_adjust")
//         document.querySelector(".tile_adjust").classList.remove("tile_adjust")
//         document.querySelector(".name_adjust").classList.remove("name_adjust")
//         document.querySelector(".subtitle_adjust").classList.remove("subtitle_adjust")
//         document.querySelector(".grid_adjust").classList.remove("grid_adjust")
//         document.querySelector("design_adjust").classList.remove("design_adjust")
//         document.querySelector(".exit").classList.remove("exit")
//     })
// })


