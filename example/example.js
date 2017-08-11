import React from "react"
import ReactDOM from "react-dom"
import Gallery3d from "../src/index"

const exampleCover = require('./cover.jpg')

const cover = (id) => ({
    cover: exampleCover,
    mask: (
        <div className="photo-cover">
            <h4 key="photo-title" className="cover-title">cover{id+1}</h4>
            <p key="photo-content" className="cover-content">content{id+1}</p>
        </div>
    ),

})
const categories = [...new Array(8)].map((item, i) => { item = cover(i); return item })

const options = {
    categories,
    width: 200,
    height: 200,
    // speed:2000,     
    autoPlay: true,
    autoPlaySpeed: 4000,
    space: 20,
    arrow: true,
    backfaceVisibility: false,
    autoPlay: false,
}

const Demo = () => (
    <Gallery3d {...options} style={{ "margin": "0 auto" }} />

)
ReactDOM.render(
    <Demo />,
    document.getElementById('root')
)
