import React from 'react'
import { useState } from 'react';

const ErrorFirebase = (err) => {
    const [error, setError] = useState('');

    switch (err) {
        case 'auth/email-already-in-use':
            setError('Este correo ya pertenece a una cuenta');
            break;
        case 'auth/invalid-email':
            setError('Email incorrecta');
            break;
        case 'auth/weak-password':
            setError('La contraseña es débil');
            break;
        default:
            return;
    }
    return (
        <div className="containerMsj text-center py-5 d-none">
            <div className="alert alert-success alert-dismissible myAlert" >
                <span type="button" id="link">OK</span>
                <strong>Felicitaciones!</strong> <br />
                <p className="lead">{error && error}</p>
            </div >

        </div>
    )
}

export default ErrorFirebase