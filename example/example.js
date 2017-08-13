import React from "react"
import ReactDOM from "react-dom"
import Gallery3d from "../src/index"


const cover = (id) => ({
    href:"https://www.github.com",
    cover: "http://p1.music.126.net/PQsm4zVDlbCeNACgW1j3QA==/18831335650676452.jpg?param=400y400",
    mask: (
        <div className="photo-cover">
            <h4 key="photo-title" className="cover-title">title{id+1}</h4>
            <p key="photo-content" className="cover-content">content{id+1}</p>
        </div>
    ),

})
const categories = [...new Array(8)].map((item, i) => { item = cover(i); return item })

const options = {
    categories,
    width: 400,
    height: 400,
    speed:1000,     
    autoPlay: true,
    autoPlaySpeed: 4000,
    space: 20,
    arrow: true,
    backfaceVisibility: false
}

const Demo = () => (
    <Gallery3d {...options} style={{ "margin": "50px auto" }} />

)
ReactDOM.render(
    <Demo />,
    document.getElementById('root')
)
