const TheList = (props) =>{
    let TheName = props.Name;
    let TheJob = props.Job;
    return(<div>
        <h1>{TheName}</h1>
        <h2>{TheJob}</h2>
        </div>
    
    )
}
export default TheList;