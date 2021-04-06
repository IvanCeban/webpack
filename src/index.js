import Post from "./Post";
import json from './assets/json'
import xml from './assets/data.xml'
import './styles/styles.css'
import WebpackLogo from './assets/webpack-logo.png'

const post = new Post('Webpack Post title.', WebpackLogo)

console.log('Post to string:', post.toString())

console.log('JSON: ', json)
console.log('XML: ', xml)
