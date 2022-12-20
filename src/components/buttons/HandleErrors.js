import { createAcount } from "./Signup";


const HandleErrors = (e) => {

    function emailValidate(mail) {
        if (/^\w+([\\.-]?\w+)*@\w+([\\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
            return (true)
        }

        return (false)
    }

    function mostrarErrores(array) {
        array.forEach(item => {
            item.errorType.classList.remove("d-none");
            item.errorType.textContent = item.error;
            item.campo.classList.add("error");
        })

    }



    const handleSumit = () => {
        e.preventDefault();
        const inputs = document.querySelectorAll("#registerForm input");
        const user = document.getElementById("user");
        const pass = document.getElementById("userPass");
        const repass = document.getElementById("rePass");
        const usermail = document.getElementById("userMail");
        const errorUser = document.querySelector(".errorUser");
        const errorRepass = document.querySelector(".errorRepass");
        const errorPass = document.querySelector(".errorPass");
        const errorMail = document.querySelector(".errorMail");


        function userValidate() {


            const errores = [];
            if (!user.value.trim()) {
                errores.push({ errorType: errorUser, campo: user, error: "Este campo es requerido" })
            } else {
                if (!isNaN(user.value.trim())) {
                    errores.push({ errorType: errorUser, campo: user, error: "Nombre usuario inválido" })
                }
            }

            if (!pass.value.trim()) {
                errores.push({ errorType: errorPass, campo: pass, error: "Este campo es requerido" })
            } else {
                if (pass.value.trim().length < 6) {
                    errores.push({ errorType: errorPass, campo: pass, error: "Requiere minimo 6 caractares" })
                }
            }

            if (!repass.value.trim()) {
                errores.push({ errorType: errorRepass, campo: repass, error: "Este campo es requerido" })
            } else {

                if (repass.value.trim() !== pass.value.trim()) {
                    errores.push({ errorType: errorRepass, campo: repass, error: "Las Contraseñas no son iguales" })
                }
            }


            if (!usermail.value.trim()) {
                errores.push({ errorType: errorMail, campo: usermail, error: "Este campo es requerido" })
            } else {

                if (!emailValidate(usermail.value.trim())) {
                    errores.push({ errorType: errorMail, campo: usermail, error: "Ingresa un correo valido" })
                }
            }


            if (errores.length !== 0) {
                mostrarErrores(errores)
                return false;
            } else {
                errorUser.classList.add("d-none");
                errorPass.classList.add("d-none");
                errorRepass.classList.add("d-none");
                errorMail.classList.add("d-none");
                createAcount(usermail.value, pass.value, user.value)

                inputs.forEach(item => {
                    item.classList.remove("error");
                })
                return true;
            }

        }


        return userValidate();
    }
    return handleSumit()

}

export default HandleErrors
