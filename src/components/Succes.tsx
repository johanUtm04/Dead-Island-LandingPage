import React from "react";

const Success: React.FC = () => {    
    
    return (
        <>
            <div className="scanline-overlay"></div> 

            <div className="message-box">
                <h2>[MISIÓN CUMPLIDA]</h2>
                <p className="status-message">
                    Transmisión de datos exitosa.<br/>
                    Su expediente de recluta ha sido registrado correctamente.<br/>
                    ¡Prepárese para el despliegue!
                </p>
                <a
                href="/"
                style={{
                    backgroundColor: "#39ff14",
                    color: "#000",
                    padding: "10px 20px",
                    borderRadius: "4px",
                    textDecoration: "none",
                    fontFamily: "'Press Start 2P', cursive",
                    fontSize: "12px",
                    display: "inline-block"
                }}
                >
                VOLVER A BASE
                </a>
            </div>
        </>
    );

};

export default Success;