import { useState, useRef } from 'react'
import Button from './Button/Button'

function StateVsRef() {
    //const [inputValue, setInputValue] = useState('');
    const input = useRef();
    const [show, setShow] = useState(false);

    function handleKeyDown(event) {
        if (event.key === 'Enter') {
            setShow(true);
        }
    }

    return(
        <div>
            <h3>Input value: {show && input.current.value}</h3>
            <input
                ref={input}
                type="text"
                className="control"
                onKeyDown={handleKeyDown}
            />
        </div>
    )
}

export default function FeedbackSection() {
    const [form, setForm] = useState({
        name: '',
        hasError: false,
        reason: 'help'
    })

    function handleNameChange(event) {
        setForm(prev => ({
            ...prev,
            name: event.target.value,
            hasError: event.target.value.trim().length === 0
        }))
    }

    return (
        <section>
            <h3>Обратная связь</h3>
            <form>
                <label htmlFor="name">Ваше имя</label>
                <input
                    type="text"
                    id="name"
                    className="control"
                    value={form.name}
                    style={{
                        border: form.hasError ? '1px solid red' : null
                    }}
                    onChange={handleNameChange}
                />

                <label htmlFor="reason">Причина обращения</label>
                <select id="reason" className="control" value={form.reason} onChange={(event => setForm(prev => ({...prev, reason: event.target.value})))}>
                    <option value="error">Ошибка</option>
                    <option value="help">Нужна помощ</option>
                    <option value="suggest">Предложение</option>
                </select>
                <Button disabled={form.hasError} isActive={!form.hasError}>Отправить</Button>
            </form>

            <hr style={ {margin: '1rem 0'} } />
            <StateVsRef />
        </section>
    )
}
