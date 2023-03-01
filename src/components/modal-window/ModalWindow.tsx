import { useAppDispatch, useAppSelector } from "../../hooks/hooks"
import { setStep } from "../../store/reducers/posts/postsSlice"
import stepBackArrow from "../../assets/step-back-arrow.svg"
import "./ModalWindow.scss"

const ModalWindow = () => {
    const { step } = useAppSelector(state => state.posts)
    const dispatch = useAppDispatch()

    const handleStep = (e: React.MouseEvent<HTMLDivElement, MouseEvent>, step: number) => {
        e.stopPropagation()
        dispatch(setStep(step))
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
                            <input  type="file" name='file' />
                            <div className="select-file">Выбрать на компьютере</div>
                        </label>
                    </div>
                </div>}
                
                {step === 2 &&
                <div className="second-step">
                    <div className='modal-header'>
                        <div className="step-back-arrow"><img src={stepBackArrow} alt="" /></div>
                        <div className="modal-header-p">Создание публикации</div>
                        <div className="next-button" onClick={(e) => handleStep(e, 0)}>Поделиться</div>
                    </div>
                </div>}
            </div>
            <div className="toner" onClick={() => dispatch(setStep(0))}></div>
        </div>
    )
}

export default ModalWindow