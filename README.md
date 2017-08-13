# react-3d-gallery
a react 3d gallery component 


## Installation
```
npm install react-3d-gallery --save
```

## Example
```
git clone https://github.com/lijinke666/react-3d-gallery.git
```
```
npm run demo
```

```javascript
import React from "react"
import ReactDOM from "react-dom"
import Gallery3d from "react-3d-gallery"


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
```

### options
--- 
- #### categories
  - type : `Array`
  - default : `300`
  - explain : `gallery categories object[]`
    - options.href : type : `String` `target href`
    - options.cover : type : `String` `gallary cover`
    - options.mask : type : `String | ReactNode` `gallary mask`
- #### width
  - type : `Number`
  - default : `300`
  - explain : `cover width (px)`
- #### height
  - type : `Number`
  - default : `300`
  - explain : `cover height (px)`
- #### space
  - type : `Number`
  - default : `30`
  - explain : `The time required to convert (ms)`
- #### autoPlay
  - type : `Boolean`
  - default : `true`
  - explain : `Whether to scroll automatically`
- #### autoPlaySpeed
  - type : `Number`
  - default : `4000`
  - explain : `auto play speed (ms)`
- #### arrow
  - type : `Boolean`
  - default : `true`
  - explain : `Whether to show the arrow of the gallery`
- #### backfaceVisibility
  - type : `Boolean`
  - default : `true`
  - explain : `Whether to show backface visibility of the gallery`
 ---


