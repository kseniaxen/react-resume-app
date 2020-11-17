function MainInfo(props) {
    return (
            <div class="container">
                <h1>My resume</h1>
                <h2>Name: {props.name}</h2>
                <h2>Age: {props.age}</h2>
            </div>
    );
}
export default MainInfo;