const Home = (props) => {
let ner = props.name;
let nas = props.age;
  return (<div>
    <h1>Hello</h1>
    <h1>Name: { ner } </h1>
    <h1>Age: { nas } </h1>
  </div>);
};
export default Home;
