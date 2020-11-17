function Knowledge(props) {
    const listItemsKnow = props.know.map((item) =>
        <li>{item}</li>
    );
    const listItemsEd = props.ed.map((item) =>
        <li>{item}</li>
    );
    return (
        <div class="container">
            <div class="container-know">
                <div>
                    <h2>Knowledge:</h2>
                    <ul>
                        {listItemsKnow}
                    </ul>
                </div>
                <div>
                    <h2>Education:</h2>
                    <ul>
                        {listItemsEd}
                    </ul>
                </div>
            </div>
        </div>
    );
}
export default Knowledge;