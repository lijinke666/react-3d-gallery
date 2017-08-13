import React, { PropTypes, PureComponent } from "react"
import classNames from "classnames"
import IconRight from "react-icons/lib/fa/angle-right"
import IconLeft from "react-icons/lib/fa/angle-left"

import './styles.less'

export default class Gallery3d extends PureComponent {
    static defaultProps = {
        space: 30,
        width: 300,
        height: 300,
        speed: 300,
        autoPlay: true,
        arrow: true,
        backfaceVisibility: true,
        autoPlaySpeed: 4000
    }
    static propTypes = {
        width: PropTypes.number.isRequired,
        height: PropTypes.number.isRequired,
        categories: PropTypes.array.isRequired,
        space: PropTypes.number,
        autoPlay: PropTypes.bool,
        autoPlaySpeed: PropTypes.number,
        speed: PropTypes.number,
        arrow: PropTypes.bool,
        backfaceVisibility: PropTypes.bool,
    }
    constructor(props) {
        super(props)
        this.state = {
            rotate: 0,
            delay: 0
        }
    }
    componentDidMount() {
        const { autoPlaySpeed, categories } = this.props
        this.imageRoate = 360 / categories.length

        this.timer = setInterval(() => {
            let { rotate } = this.state
            rotate += this.imageRoate

            this.setState({ rotate })
        }, autoPlaySpeed)
    }
    componentWillUnMount() {
        clearInterval(this.timer)
    }
    onArrowLeftClick = () => {
        let { rotate } = this.state
        rotate -= this.imageRoate
        this.setState({ rotate })
    }
    onArrowRightClick = () => {
        let { rotate } = this.state
        rotate += this.imageRoate
        this.setState({ rotate })
    }
    render() {
        const {
            categories,
            space,
            width,
            height,
            speed,
            arrow,
            mask,
            autoPlaySpeed,
            backfaceVisibility,
            className,
            style,
            ...attr
        } = this.props

        const { delay, rotate } = this.state

        const speedConfig = {
            "transition": `transform ${speed}ms cubic-bezier(0.165, 0.84, 0.44, 1)`,
            "WebkitTransition": `transform ${speed}ms cubic-bezier(0.165, 0.84, 0.44, 1)`
        }

        const styles = {
            ...speedConfig,
            'transform': `rotateY(${rotate}deg)`,
            'WebkitTransform': `rotateY(${rotate}deg)`
        }
        const categoriesLength = categories.length

        const r = ~~((width / 2) / Math.tan((360 / categoriesLength / 2) / 180 * Math.PI) + space);

        return (
            <div
                key="rotateBox"
                className={classNames("rotate-box", className)}
                style={{ width, height, ...style }}
                {...attr}
            >
                <ul className="category"
                    style={{ ...styles, width, height }}
                >
                    {
                        categories.map((item, i) => {

                            const { cover, mask,href } = item
                            const styles = {
                                width,
                                height,
                                "backfaceVisibility": "",
                                "WebkitBackfaceVisibility": backfaceVisibility ? "visible" : "hidden",
                                "WebkitBackfaceVisibility": backfaceVisibility ? "visible" : "hidden",
                                "WebkitTransform": `rotateY(${360 / categoriesLength * i}deg) translate3d(0,0,${r}px)`,
                                "Transform": `rotateY(${360 / categoriesLength * i}deg) translate3d(0,0,${r}px)`,
                                "background": `url(${cover}) no-repeat`
                            }
                            return (
                                <li
                                    className="item"
                                    alt="category"
                                    key={`category${i}`}
                                    style={styles}
                                >
                                    {mask ? mask : undefined}
                                    <a href={href} className='category-link'></a>
                                </li>
                            )
                        })
                    }
                </ul>
                {
                    arrow
                        ? <div className="rotate-box-arrow">
                            <a href="javascript:;" className="arrow arrow-left" onClick={this.onArrowLeftClick}><IconLeft /></a>
                            <a href="javascript:;" className="arrow arrow-right" onClick={this.onArrowRightClick}><IconRight /></a>
                        </div>
                        : undefined
                }

            </div>
        )
    }
}
