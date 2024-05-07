import {useState} from "react";
import {connect} from "react-redux";
import {addTodo} from "../../store/actions";
function TodoInput({addTodo}) {
    const [inputValue, setInputValue] = useState("");
    const handleInputChange = (e) => {
        setInputValue(e.target.value);

    }
    const handleAddTodo = () => {
        if (inputValue.trim() !== "") {
            addTodo(inputValue);
            setInputValue("");
        }


    }
    return (
        <div>
            <input type="text" value={inputValue} onChange={handleInputChange}/>
            <button onClick={handleAddTodo}>Add</button>
        </div>
    )
}
const mapDispatchToProps = {
    addTodo,

}

const mapStateToProps = () => ({});
export default connect(mapStateToProps, mapDispatchToProps)(TodoInput)


