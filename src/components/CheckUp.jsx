import React from 'react'
import { useSelector } from 'react-redux'
import MessageBox from './MessageBox'


const CheckUp = () => {
    //we get a state of addItem (the exported function)  the array that is returnded from the component
    const state = useSelector((state) => state.addItems)
    var total = 0;
    const itemList = (item) => {
        total += parseInt(item.price);
        return (
            <li className="list-group-item d-flex justify-content-between lh-sm" key={item.id}>
                <div>
                    <h6 className="my-0">{item.title}</h6>
                </div>
                <span className="text-muted">${item.price}</span>
            </li>
        )

    }

    const payformSubmit = (e) => {
        e.preventDefault();

        const alert = document.querySelector('.containerMsj');
        if (alert) {

            alert.classList.remove('d-none');
        }
        e.target.reset();
        const myButton = document.querySelector('.pagar');
        myButton.textContent = "Continuar";
    }

    const handleCheck = (e) => {
        const selected = e.target.value;
        const element = document.querySelector('.creditCard');
        const myButton = document.querySelector('.pagar');
        const inputs = document.querySelectorAll('.creditCard input')
        if (selected === "credit") {

            element.style.display = 'flex';
            myButton.textContent = "Pagar con tarjeta"
            inputs.forEach(el => {
                el.setAttribute('required', 'true')
            })
        } else if (selected === "debit") {
            myButton.textContent = "Pagar con débito"
            element.style.display = 'none';
            inputs.forEach(el => {
                el.removeAttribute('required')
            })
        } else {
            element.style.display = 'none';
            myButton.textContent = "Pagar con paypal"
            inputs.forEach(el => {
                el.removeAttribute('required')
            })
        }
    }

    return (
        <>
            <div className="container my-5">
                <div className="row g-5">
                    <div className="col-md-5 col-lg-4 order-md-last">
                        <h4 className="d-flex justify-content-between align-items-center mb-3">
                            <span className="text-primary">Mi Carrito</span>
                            <span className="badge bg-primary rounded-pill">{state.length}</span>
                        </h4>
                        <ul className="list-group mb-3">
                            {state.map(itemList)}
                            <li className="list-group-item d-flex justify-content-between">
                                <span>Total (CL)</span>
                                <strong>${total}</strong>
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-7 col-lg-8">
                        <h4 className="mb-3">Datos personales</h4>
                        <form className="needs-validation was-validated payForm" noValidate="" onSubmit={payformSubmit}>
                            <div className="row g-3">
                                <div className="col-sm-6">
                                    <label htmlFor="firstName" className="form-label">
                                        Nombre
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="firstName"
                                        placeholder=""
                                        defaultValue=""
                                        required
                                    />
                                    <div className="invalid-feedback">Nombre requerido.</div>
                                </div>
                                <div className="col-sm-6">
                                    <label htmlFor="lastName" className="form-label">
                                        Apellido
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="lastName"
                                        placeholder=""
                                        defaultValue=""
                                        required
                                    />
                                    <div className="invalid-feedback">Apellido requerido</div>
                                </div>

                                <div className="col-12">
                                    <label htmlFor="email" className="form-label">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        id="email"
                                        placeholder="you@example.com"
                                        required
                                    />
                                    <div className="invalid-feedback">
                                        Correo invalido
                                    </div>
                                </div>

                                <div className="col-12">
                                    <label htmlFor="tel" className="form-label">
                                        Telefono
                                    </label>
                                    <input
                                        type="number"
                                        className="form-control"
                                        id="tel"
                                        placeholder="927497612"
                                        required
                                    />
                                    <div className="invalid-feedback">
                                        Debes ingresar el numero de telefono.
                                    </div>
                                </div>

                                <div className="col-md-5">
                                    <label htmlFor="country" className="form-label">
                                        Comuna
                                    </label>
                                    <select className="form-select" id="country" required>
                                        <option value="">Seleccionar...</option>
                                        <option>Quilicura</option>
                                        <option>Lampa</option>
                                        <option>Colina</option>
                                        <option>Batuco</option>
                                        <option>Rencagua</option>
                                        <option>Conchali</option>
                                        <option>Recoleta</option>
                                        <option>Santiago</option>
                                    </select>
                                    <div className="invalid-feedback">Selecciona una comuna..</div>
                                </div>

                                <div className="col-12">
                                    <label htmlFor="address" className="form-label">
                                        Direccion
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="address"
                                        placeholder="1234 Calle"
                                        required
                                    />
                                    <div className="invalid-feedback">
                                        Debes ingresar tu direccion.
                                    </div>
                                </div>

                            </div>

                            <hr className="my-4" />
                            <h4 className="mb-3">Metodo de pago</h4>
                            <div className="my-3">
                                <div className="form-check">
                                    <input
                                        id="credit"
                                        name="paymentMethod"
                                        type="radio"
                                        value="credit"
                                        onChange={handleCheck}
                                        className="form-check-input check"
                                        defaultChecked=""
                                        required
                                    />
                                    <label className="form-check-label" htmlFor="credit">
                                        Tarjeta de credito
                                    </label>
                                </div>
                                <div className="form-check che">
                                    <input
                                        id="debit"
                                        name="paymentMethod"
                                        type="radio"
                                        value="debit"
                                        onChange={handleCheck}
                                        className="form-check-input check"
                                        required
                                    />
                                    <label className="form-check-label" htmlFor="debit">
                                        Debito
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input
                                        id="paypal"
                                        name="paymentMethod"
                                        type="radio"
                                        value="paypal"
                                        onChange={handleCheck}
                                        className="form-check-input check"
                                        required
                                    />
                                    <label className="form-check-label" htmlFor="paypal">
                                        PayPal
                                    </label>
                                </div>
                            </div>
                            <div className="row gy-3  creditCard ">
                                <div className="col-md-6">
                                    <label htmlFor="cc-name" className="form-label">
                                        Nombre titulario de la tarjeta
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="cc-name"
                                        placeholder="nombre completo"

                                    />
                                    <small className="text-muted">Nombre indicado en la tarjeta</small>
                                    <div className="invalid-feedback">Nombre requerido</div>
                                </div>
                                <div className="col-md-6">
                                    <label htmlFor="cc-number" className="form-label">
                                        Numero de la tarjeta
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="cc-number"
                                        placeholder="123-123-234-456-987"

                                    />
                                    <div className="invalid-feedback">Requerido</div>
                                </div>
                                <div className="col-md-3">
                                    <label htmlFor="cc-expiration" className="form-label">
                                        Fecha de vencimiento
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="cc-expiration"
                                        placeholder="Año/mes"

                                    />
                                    <div className="invalid-feedback">Requerido</div>
                                </div>
                                <div className="col-md-3">
                                    <label htmlFor="cc-cvv" className="form-label">
                                        CVV
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="cc-cvv"
                                        placeholder="000"

                                    />
                                    <div className="invalid-feedback">Codigo verificador requerido</div>
                                </div>
                            </div>
                            <hr className="my-4" />
                            <button className="w-50 btn btn-outline-primary btn-lg pagar" type="submit">
                                Continuar
                            </button>
                        </form>
                    </div>
                </div>
            </div>



            <MessageBox message="Tu pago fue realizado correctamente!" />

        </>
    )
}

export default CheckUp
