function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  // pegar a tag img
  const img = document.querySelector("#profile img")

  //substituir a imagem
  if (html.classList.contains("light")) {
    //se tiver o light mode, adicionar a imagem light
    img.setAttribute("src", "./Assets/gi_profile-pic-light.png")
  } else {
    //se tiver dark mode, adicionar a imagem dark
    img.setAttribute("src", "./Assets/gi_profile-pic.png")
  }
}
