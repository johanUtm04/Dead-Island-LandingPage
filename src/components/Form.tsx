import React, { useState, type FormEvent } from "react";
import "../css/Form.css";
import {analytics, registrosCollection, addDoc, type Registro } from "../firebase";
import { useNavigate } from 'react-router-dom';
import {  logEvent } from "firebase/analytics";

const Form: React.FC = () => {
    const [nombre, setNombre] = useState("");
    const [edad, setEdad] = useState<number | "">("");
    const [correo, setCorreo] = useState("");
    const navigate = useNavigate();
    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        if (edad === "") return;

        const nuevoRegistro: Registro = { nombre, correo, edad };
        try {
            //Guardar quien entra al link
            logEvent(analytics, "form_submitted",{
                email: nuevoRegistro.correo ? "provided" : "empty",
            })
            await addDoc(registrosCollection, nuevoRegistro);
            navigate("/success");
            setNombre(""); setEdad(""); setCorreo("");
        } catch (err) {
            console.error(err);
            alert("Error al registrar");
        }
    };

    return (
        <>
            <div className="scanline-overlay"></div>
            <div className="main-container">
                <h1>¡Island Escape llego a tu vida!</h1>
                <p className="tagline">"La jungla te espera La misión es ahora."</p>
            </div>

            <div className="form-container">
                <h2>Registro de Participantes</h2>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder="TU NOMBRE DE GUERRA"
                        value={nombre}
                        onChange={(e) => setNombre(e.target.value)}
                        required
                    />
                    <input
                        type="number"
                        placeholder="EDAD"
                        value={edad}
                        onChange={(e) => setEdad(Number(e.target.value))}
                        required
                    />
                    <input
                        type="email"
                        placeholder="CORREO ELECTRONICO"
                        value={correo}
                        onChange={(e) => setCorreo(e.target.value)}
                        required
                    />
                    <button id="submit" type="submit">¡UNIRSE A LA MISIÓN!</button>
                </form>
            </div>
        </>
    );
};

export default Form;
