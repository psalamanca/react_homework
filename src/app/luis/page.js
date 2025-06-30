import Button from "./components/Button";
import Stilos from "./page.module.css";

export default function paginaPrincipal() {
    return (
        <div className={Stilos.Button}>
            <h1>Prueba del botton</h1>
            <Button />
        </div>
    )
}