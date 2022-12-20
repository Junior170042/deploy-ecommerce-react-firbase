import React from 'react'
const MessageBox = ({ message }) => {
    const myLink = document.getElementById('link');
    const alert = document.querySelector('.containerMsj');
    if (myLink) {

        myLink.addEventListener('click', () => {
            if (alert) {

                alert.classList.add('d-none');
            }
        })
    }
    return (

        <div className="containerMsj text-center py-5 d-none">
            <div className="alert alert-success alert-dismissible myAlert" >
                <a href="/" type="button" id="link">OK</a>
                <strong>Felicitaciones!</strong> <br />
                <p className="lead">{message}</p>
            </div >

        </div>
    )
}

export default MessageBox