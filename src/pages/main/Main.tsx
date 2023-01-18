import {Product} from "./Product";

export function Main() {
    const item = [
        {
            OverTitle: "Сказочное заморское яство",
            Title: "Нямушка",
            SubTitle: "с фуа-гра",
            Composition: [
                {
                    Count: 10,
                    Text: "порций"
                },
                "мышь в подарок",
            ],
            Mass: 0.5,
            Under: "Печень утки разварная с артишоками.",
        },
        {
            OverTitle: "Сказочное заморское яство",
            Title: "Нямушка",
            SubTitle: "с рыбой",
            Composition: [
                {
                    Count: 40,
                    Text: "мышей в подарок"
                },
                "2 мыши в подарок"
            ],
            Mass: 2,
            Under: "Головы щучьи с чесноком да свежайшая сёмгушка.",
        },
        {
            OverTitle: "Сказочное заморское яство",
            Title: "Нямушка",
            SubTitle: "с курой",
            Composition: [
                {
                    Count: 100,
                    Text: "порций"
                },
                {
                    Count: 5,
                    Text: "мышей в подарок"
                },
                "заказчик доволен"
            ],
            Mass: 5,
            Under: "Филе из цыплят с трюфелями в бульоне.",
            Disabled: true,
        },
    ]

    return <div className={"main"}>
        <div className="main__title">
            Ты сегодня покормил кота?
        </div>
        <div className="main__list">
            {item.map((item, i) => {
                return <Product {...item} />
            })}
        </div>
    </div>
}