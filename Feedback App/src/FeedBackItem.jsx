import Card from "./shared/Card";
import {FaTimes} from "react-icons/fa"

function FeedBackItem({ item,handleDelete }) {
    return (
        <Card reverse={false} >
            <div className="num-display">{item.rating}</div>
            <button onClick={()=> handleDelete(item.id)} className="close-icon">
                <FaTimes />
            </button>
            <div className="text-display">{ item.text }</div>

        </Card>
    );
}

export default FeedBackItem;