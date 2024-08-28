const Cars = (props) => {
    let ner = props.name;
    let ungu = props.color;
    let tsag = props.time;
    let zurag = props.image1;
    return(<div className="smallContent">
        <img src={zurag} className="Icontent"/>
        <h1>My {ner}</h1>
        <h2>My car color is {ungu}</h2>
        <h3>My car is made in {tsag}</h3>
    </div>)
}

export default Cars;