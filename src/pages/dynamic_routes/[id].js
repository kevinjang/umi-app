export default function(props){
    return <div>
        Dynamic Routes Test
        <h1> {props.match.params.id}</h1>
    </div>
}