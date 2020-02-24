import React, {useEffect, useContext} from 'react'
import {SectionsContext} from '../context/sections/sectionsContext'
import Sections from "../components/sections";

const Main = () => {
    const _sections = [
        {
            id: 'pizza',
            anchor: 'pizza',
            title: '',
            items: [
                {id: 'hmmm',
                    title: 'Аррива!',
                    description: 'Соус бургер, цыпленок, соус ранч, чоризо, сладкий перец, красный лук, моцарелла, томаты, чеснок',
                    img_src: 'images/products/pizza1.jpg',
                    price: 395},
                {id: 'hmmm2',
                    title: 'Пепперони-сердце',
                    description: 'Пикантная пепперони, томатный соус, моцарелла',
                    img_src: 'images/products/pizza2.jpg',
                    price: 625},
            ]
        },
        {
            id: 'combos',
            anchor: 'combos',
            title: 'Комбо',
            items: [
                {id: 'com1',
                    title: 'Две пиццы и напиток',
                    description: 'Соберите свое комбо по выгодной цене. Две маленькие пиццы 25 см и напиток на выбор — для компании из 2-4 человек. Не суммируется с акциями.',
                    img_src: 'images/products/combo1.jpg',
                    price: 749}
            ]
        },
        {
            id: 'snacks',
            anchor: 'snacks',
            title: 'Закуски',
            items: [
                {id: 'dod1',
                    title: 'Додстер',
                    description: 'Фирменный горячий ролл. Цыпленок, томаты, моцарелла и соус ранч в тонкой пшеничной лепешке',
                    img_src: 'images/products/snack1.jpg',
                    price: 159}
            ]
        },
        {
            id: 'desserts',
            anchor: 'desserts',
            title: 'Десерты',
            items: [
                {id: 'des1',
                    title: 'Рулетики с брусникой, 16 шт',
                    description: 'Фирменный горячий ролл. Цыпленок, томаты, моцарелла и соус ранч в тонкой пшеничной лепешке',
                    img_src: 'images/products/dessert1.jpg',
                    price: 165}
            ]
        },
        {
            id: 'drinks',
            anchor: 'drinks',
            title: 'Напитки',
            items: [
                {id: 'dod1',
                    title: 'Coca-cola Zero, 0,5 л',
                    description: '',
                    img_src: 'images/products/drink1.jpg',
                    price: 95}
            ]
        },
    ];
    const {sections, fetchSections} = useContext(SectionsContext);

    useEffect(() => {
        fetchSections()
    }, []);

    return (
        <Sections sections={sections}/>
    );
};

export default Main;