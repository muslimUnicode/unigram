import { useState } from "react"
import "./ModalWindow.scss"

const ModalWindow = () => {
    const [imageAdded, setImageAdded] = useState<boolean>(false)

    return(
        <div className="toner">
            <div className="modal-window">
                {imageAdded
                ?
                <div className="image-adding">
                    
                </div>
                :
                <div className="description-adding">
                    
                </div>}
            </div>
        </div>
    )
}

export default ModalWindow