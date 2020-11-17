function Knowledge(props) {
    const listItemsLinks = props.links.map((item) =>
        <li><a href={item.link}>{item.title}</a></li>
    );
    return (
        <div class="container">
            <h2>Links: </h2>
            <ul>
                {listItemsLinks}
            </ul>
        </div>
    );
}
export default Knowledge;