import classNames from "classnames";
import {useState} from "react";

interface ProductProps {
    Mass?: number
    Title?: string
    OverTitle: string
    SubTitle?: string
    Composition?: ({
        Count: number
        Text: string
    } | string)[]
    Disabled?: boolean
    Under?: string
}

enum StatusEnum {
    default,
    selected,
    selectedHover

}

export function Product(props: ProductProps) {
    const [status, setStatus] = useState(StatusEnum.default)

    const handleClick = () => {
        if (props.Disabled) {
            return
        }

        setStatus(prev => {
            if (prev === 0) {
                return StatusEnum.selected
            }
            return StatusEnum.default
        })
    }

    const handleMouseOut = () => {
        if (props.Disabled) {
            return
        }

        setStatus(prev => {
            console.log(prev)
            if (prev === StatusEnum.default) {
                return StatusEnum.default
            }
            return StatusEnum.selectedHover
        })
    }

    const isSelect = status === StatusEnum.selected || status === StatusEnum.selectedHover

    return <div
        className={classNames(
            "product",
            props.Disabled ? "disabled" : "",
            isSelect ? "selected" : ""
        )}
        onClick={handleClick}
        onMouseOut={handleMouseOut}
    >
        <ProductContent
            {...props}
            SelectedHover={status === StatusEnum.selectedHover}
        />
        <div className={classNames(
            "product__under",
            props.Disabled ? "product__under--yellow" : ""
        )}>
            {props.Disabled ? `Печалька, ${props.SubTitle} закончился.` :
                isSelect ? props.Under :
                    <>Чего сидишь? Порадуй котэ, <a className={"product__link"} href="/">купи.</a></>}
        </div>
    </div>
}

interface ProductContentProps {
    SelectedHover?: boolean
}

function ProductContent(props: ProductProps & ProductContentProps) {
    return (<div className="product__box">
        <div className={"product__top"}>
            <div
                className={classNames(
                    "product__over-title",
                    props.SelectedHover ? "product__over-title--danger" : "",
                )}
            >
                {props.SelectedHover ? "Котэ не одобряет?" : props.OverTitle}
            </div>
        </div>

        <div className={"product__bot"}>
            <div className="product__title">
                {props.Title}
            </div>
            <div className="product__sub-title">
                {props.SubTitle}
            </div>
            {props.Composition && props.Composition.map((item, i) => {
                return <div className="product__composition">
                    {typeof item === "string" ? item : (<><b>{item.Count}</b> {item.Text}</>)}
                </div>
            })}
            {props.Mass && <div className="product__mass">
                <div className="product__mass-top">
                    {props.Mass % 1 > 0 ? props.Mass : Math.round(props.Mass)}
                </div>
                <div className="product__mass-bot">
                    КГ
                </div>
            </div>}
        </div>
    </div>)
}