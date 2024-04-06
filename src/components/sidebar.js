import React from "react";

class Sidebar extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <nav>
                <ul>
                    <li className="link"><a href="https://ru.legacy.reactjs.org/docs/create-a-new-react-app.html" target="_blank">React</a></li>
                    <li><a href="https://ithillel.ua/ru"
                           target="_blank">Hillel IT school</a></li>
                    <li><a href="https://create-react-app.dev/"
                           target="_blank">Create-react-app</a></li>
                </ul>
            </nav>
        )
    }
}

export default Sidebar;
