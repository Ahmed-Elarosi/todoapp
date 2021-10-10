import { useContext } from "react";

import { EDIT_TASK } from "../../store/actions";
import todoContext from "../../store/context";

const DoneItem = ({ data }) => {

    const { dispatch } = useContext(todoContext);

    return (
        <div className="todones-item">
            <p>{data.text}</p>
            <div className="actions">
                <button className="btn" onClick={() => dispatch({ type: EDIT_TASK, payload: data.id})}>&#8635;</button>
            </div>
        </div>
    );

}

export default DoneItem;