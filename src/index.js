import * as $ from "jquery"
import Post from "./Post";
import async from "./async"
import * as styles from "./styles/styles.css"
import json from "./assets/json"
import WebpackLogo from "./assets/webpack-logo"
import xml from "./assets/data.xml"
import csv from "./assets/data.csv"

const post = new Post("Webpack Post Title", WebpackLogo)

console.log("Post to String:", post.toString())

console.log(json)

console.log(styles)

console.log(xml)

console.log(csv)

async()
