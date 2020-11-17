function Experience(props) {
    const listItems = props.experMassive.map((item) =>
        <li>{item}</li>
    );
    return (
        <div class="container">
            <h2>Experience:</h2>
            <ul>
                {listItems}
            </ul>
        </div>
    );
}
export default Experience;