import React from 'react'
import ScrollableAnchor from 'react-scrollable-anchor';

const Sections = ({sections}) => {
    return (
        <>
            {
                sections.length ?
                sections.map(sec => <Section key={sec.id} section={sec}/>):
                <p>No sections!</p>
            }
        </>
    )
};

const Section = ({section}) => {
    const scroll_id = section.anchor;
    return (
        <ScrollableAnchor id={scroll_id}>
            <div className="my-2 pt-5">
                {section.title && <h2>{section.title}</h2>}
                <div className="card-deck">
                    {
                        section.items.length ?
                        section.items.map(item => <SectionItem key={item.id} item={item}/>):
                        <p>No items!</p>
                    }
                </div>
            </div>
        </ScrollableAnchor>
    )
};

const SectionItem = ({item}) => {
    return (
        <div className="card card-product">
            <img src={item.img_src} className="card-img-top w-100" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{item.title}</h5>
                <p className="card-text text-secondary _fs-90">
                    {item.description}
                </p>
            </div>
            <div className="card-footer">
                <span className="font-weight-bold">от {item.price} Р</span>
                <button type="button" className="btn btn-sm btn-outline-orange float-right">Выбрать</button>
            </div>
        </div>
    )
};

export default Sections;