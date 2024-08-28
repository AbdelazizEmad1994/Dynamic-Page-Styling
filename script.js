// Initializing form and select boxes 
let form1 = document.createElement("form")
let select_fontsTypes = document.createElement("select")
let select_FontColors = document.createElement("select")
let select_fontSize = document.createElement("select")
let option_types;



// Giving a static style to the form and select elements
form1.style="height:100px;width:700px ;border:solid 3px black;display:flex;justify-content:space-around;align-items:center;padding:10px 20px; margin:40px auto;"
select_fontsTypes.style ="width:100px;height:20px"
select_FontColors.style ="width:100px;height:20px"
select_fontSize.style ="width:100px;height:20px"

// Appending The form and created elements to the document.
document.body.appendChild(form1)
document.body.appendChild(select_FontColors)
document.body.appendChild(select_fontSize)
document.body.appendChild(select_fontsTypes)
form1.appendChild(select_FontColors)
form1.appendChild(select_fontSize)
form1.appendChild(select_fontsTypes)

// Creating the font size select option elements
for (let i = 16; i <= 30; i++){
    let option_sizes = document.createElement("option")
    option_sizes.innerHTML = i
    option_sizes.value = `${i}px`
    select_fontSize.appendChild(option_sizes)
}

// Font types stored in array and option elements created using for each
let font_types = ["Cairo", "Roboto", "Open Sans"]
font_types.forEach(function (type) {
    option_types = document.createElement("option")
    option_types.value =  type
    option_types.textContent = type
    select_fontsTypes.appendChild(option_types)
})

    

// Font colors stored in an array and for each used to create the option elements 
let font_colors = ["red", "green", "blue", "violet", "gray", "black"]
font_colors.forEach(function (color) {
    let option_colors = document.createElement("option")
    option_colors.value = color
    option_colors.textContent = color
    select_FontColors.appendChild(option_colors)
})
    
    
// Add event listener added to the form element, to add selected styling rules to local storage and apply them to the web page. 
form1.addEventListener("input", function (e) {
    if (e.target === select_FontColors) {
        window.localStorage.setItem("font-color", e.target.value)
        document.body.style.color = window.localStorage.getItem("font-color")
    } else if (e.target === select_fontSize) {
        window.localStorage.setItem("font-size", e.target.value)
        document.body.style.fontSize = window.localStorage.getItem("font-size")
    } else if (e.target === select_fontsTypes) {
        window.localStorage.setItem("font-type",e.target.value)
        document.body.style.fontFamily = window.localStorage.getItem("font-type")
    }
})
    




// Default selected values of the 3 drop-down menus.
select_fontsTypes.value = window.localStorage.getItem("font-type")
select_FontColors.value = window.localStorage.getItem("font-color")
select_fontSize.value=window.localStorage.getItem("font-size")





//Applying the styling rules stored in local storage to the document, so if the page was closed or reloaded, these values would remain 
document.body.style.fontFamily = window.localStorage.getItem("font-type")
document.body.style.color=window.localStorage.getItem("font-color")
document.body.style.fontSize = window.localStorage.getItem("font-size")




// Sample page elements to test whether the styling is applied or not
let div1 = document.createElement("div")
let paragraph1 = document.createElement("p")
let textContent1 = document.createTextNode("This is a paragrpah text, this paragraph is a child element of a div element")
paragraph1.appendChild(textContent1)
div1.appendChild(paragraph1)
document.body.appendChild(div1)





    