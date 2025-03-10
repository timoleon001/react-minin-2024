import Button from "./Button/Button";
import { useState } from "react";
import { differences } from "../data";

export default function DifferencessSection() {
    const [ contentType, setContentType ] = useState(null);

    function handleclick(type) {
        setContentType(type);
    }

    return (
        <section>
          <h3>Чем мы отличаемся от других</h3>
          <Button isActive={contentType == 'way'} onClick={() => handleclick('way')}>Подход</ Button>
          <Button isActive={contentType == 'easy'} onClick={() => handleclick('easy')}>Доступность</ Button>
          <Button isActive={contentType == 'program'} onClick={() => handleclick('program')}>Концентрация</ Button>
          { contentType ? <p>{ differences[contentType] }</p> : <p>Нажми на кнопку</p> }
        </section>
    );
}