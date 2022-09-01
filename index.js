const element = document.getElementById('main')
element.remove();

const newHeader = document.createElement("h1")
// document.body.append(createElement)


// newHeader.setAttribute("id", "victory")
// newHeader.textContent = "is the champion"

newHeader.id = "victory"
newHeader.innerHTML = "is the champion"