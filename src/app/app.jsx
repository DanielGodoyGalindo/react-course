import React from "react";
import "./app.css";
import classNames from "classnames";

const wishes = [
    { text: 'Viajar a la luna', done: false },
    { text: 'Pagar el gimnasio', done: true },
    { text: 'Ir al gimnasio', done: false },
    { text: 'Aprender React', done: false }
];

const App = () => (
    <div className="app">
        <h1>APP Mi lista de deseos</h1>
        <fieldset className="wish-input">
            <legend className="wish-input__label">Nuevo deseo</legend>
            <input className="wish-input__field" placeholder="Indica tu deseo" />
        </fieldset>
        <ul className="wish-list">
            {wishes.map(({ text, done }, i) =>
                // classNames aplica una clase u otra dependiendo de el valor de done
                <li key={text} className={classNames('wish-list__item', { 'wish-list__item--done': done })}>
                    <input id={`wish${i}`} type="checkbox" checked={done}></input>
                    <label htmlFor="{`wish${i}`}">{text}</label>
                </li>
            )}
        </ul>
        <button type="button" clasName="wish-clear">Archivar conseguidos</button>
    </div>
);

export default App;