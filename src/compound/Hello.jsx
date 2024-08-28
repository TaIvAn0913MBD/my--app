const Hello = (props) =>{
    let ner = props.name;
    let nas = props.age;
    return(
    <div><h1>H i !</h1>
    <h1>N a m e : {ner}</h1>
    <h1>A g e : {nas} </h1></div>)
}
export default Hello;