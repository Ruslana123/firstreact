
import {connect} from "react-redux";

function MainHeader ({todos}) {
    return (
        <div>
            <span>Todos count - {todos.length}</span>
        </div>
    )
}

const mapStateToProps = (state) => ({
    todos: state.todos
});
export default connect(mapStateToProps)(MainHeader)