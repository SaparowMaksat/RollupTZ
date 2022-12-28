import './index.css'
import IMAGE_JS from './assets/js.2.png'

const loveJs = document.createElement('h1')
loveJs.className = 'title'
loveJs.textContent = 'I love JavaScript'

const imageHtml = document.createElement('img')
imageHtml.className = 'js_photo'
imageHtml.src = IMAGE_JS

document.body.append(loveJs, imageHtml)
console.log('Hello World!')
