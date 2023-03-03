import { useAppDispatch, useAppSelector } from "../../hooks/hooks"
import { setStep } from "../../store/reducers/posts/postsSlice"
import stepBackArrow from "../../assets/step-back-arrow.svg"
import { useState } from "react"
import emojiIcon from "../../assets/emojis.svg"
import "./ModalWindow.scss"

const ModalWindow = () => {
    const [description, setDescription] = useState<string>("")
    const [image, setImage] = useState<any>(null)
    const { step } = useAppSelector(state => state.posts)
    const { user } = useAppSelector(state => state.user)
    const dispatch = useAppDispatch()

    const handleImage = (img: any) => {
        if(img) {
            const reader = new FileReader()
            reader.onloadend = () => {
                setImage(reader.result);
            };
            reader.readAsDataURL(img);
        }
    }

    const handleStep = (e: React.MouseEvent<HTMLDivElement, MouseEvent>, step: number) => {
        if(step === 2 && !image) {
            setStep(1)
        } else {
            e.stopPropagation()
            dispatch(setStep(step))
        }
    }

    return(
        <div className="modal-window">
            <div className="white-space">
                {step === 1 &&
                <div className='first-step'>
                    <div className='modal-header'>
                        <div className="modal-header-p">Создание публикации</div>
                        <div className="next-button" onClick={(e) => handleStep(e, 2)}>Далее</div>
                    </div>
                    <div className='line'></div>
                    <div className='modal-body'>
                        <p>Перетащите сюда фото и видео</p>
                        <label className='input-file'>
                            <input  type="file" name='file' onChange={(e) => handleImage(e.target.files![0])}/>
                            <div className="select-file">Выбрать на компьютере</div>
                        </label>
                    </div>
                </div>}
                
                {step === 2 &&
                <div className="second-step">
                    <div className='modal-header'>
                        <div className="step-back-arrow"><img src={stepBackArrow} alt="" onClick={(e) => handleStep(e, 1)} /></div>
                        <div className="modal-header-p">Создание публикации</div>
                        <div className="share-button" onClick={(e) => handleStep(e, 0)}>Поделиться</div>
                    </div>
                    <div className='line'></div>
                    <div className='modal-body'>
                        <div className="added-image">{image && <img src={image} alt="" />}</div>
                        <div className="adding-description">
                            <div className="profile">
                                <img src={user.avatar} alt="" />
                                <span>{user.username}</span>
                            </div>
                            <textarea placeholder="Добавьте подпись..." maxLength={2200} rows={11} value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
                            <div className="emoji-and-length">
                                <div className="emoji"><img src={emojiIcon} alt="" /></div>
                                <div className="input-length">{description.length}/2,200</div>
                            </div>
                        </div>
                    </div>
                </div>}
            </div>
            <div className="toner" onClick={() => dispatch(setStep(0))}></div>
        </div>
    )
}

export default ModalWindow