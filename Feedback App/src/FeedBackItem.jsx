<<<<<<< HEAD
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

=======
<<<<<<< HEAD
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

=======
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

>>>>>>> 60b54414feb6faf232c7d518adce18b5d35b312f
>>>>>>> 2fe6d129981b1950b4f1ed8ab95613ed0466252c
export default FeedBackItem;