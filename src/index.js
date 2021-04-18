import Post from "@models/Post";
import json from '@/assets/json'
import xml from '@/assets/data.xml'
import csv from '@/assets/data.csv'
import '@/styles/styles.css'
import WebpackLogo from '@/assets/webpack-logo'

const post = new Post('Webpack Post title.', WebpackLogo)

console.log('Post to string:', post.toString())

console.log('JSON: ', json)
console.log('XML: ', xml)
console.log('CSV: ', csv)
