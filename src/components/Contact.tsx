import React, { useState } from 'react';

interface FormErrors {
    nombre?: string;
    email?: string;
    message?: string;
}

const Contact: React.FC = () => {
    const [formData, setFormData] = useState({
        nombre: '',
        email: '',
        message: ''
    });
    const [errors, setErrors] = useState<FormErrors>({});
    const [isSent, setIsSent] = useState(false);

    const emailValidate = (mail: string) => {
        return /^\w+([\\.-]?\w+)*@\w+([\\.-]?\w+)*(\.\w{2,3})+$/.test(mail);
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));

        // Clear error when typing
        if (errors[name as keyof FormErrors]) {
            setErrors(prev => ({ ...prev, [name]: undefined }));
        }
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const newErrors: FormErrors = {};

        if (!formData.nombre.trim()) {
            newErrors.nombre = "Este campo es requerido";
        } else if (formData.nombre.trim().length < 3) {
            newErrors.nombre = "Nombre inválido (muy corto)";
        }

        if (!formData.email.trim()) {
            newErrors.email = "Este campo es requerido";
        } else if (!emailValidate(formData.email.trim())) {
            newErrors.email = "Correo inválido";
        }

        if (!formData.message.trim()) {
            newErrors.message = "Este campo es requerido";
        }

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        // Success
        setIsSent(true);
        setFormData({ nombre: '', email: '', message: '' });
        setErrors({});
    };

    return (
        <section className="bg-gray-50 min-h-screen py-16 md:py-24">
            <div className="container mx-auto px-4 max-w-6xl">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-4 tracking-tight">
                        ¿Tienes alguna duda?
                    </h1>
                    <div className="w-24 h-2 bg-blue-600 mx-auto rounded-full"></div>
                </div>

                <div className="flex flex-col lg:flex-row items-center gap-16">
                    <div className="w-full lg:w-1/2 flex justify-center">
                        <div className="relative group">
                            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-[2rem] blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
                            <img
                                src="/assets/images/contact.png"
                                alt="Contactanos"
                                className="relative w-full max-w-md h-auto rounded-[2rem] shadow-xl"
                            />
                        </div>
                    </div>

                    <div className="w-full lg:w-1/2">
                        <div className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-sm border border-gray-100">
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div>
                                    <label htmlFor="nombre" className="block text-sm font-black text-gray-700 uppercase tracking-widest mb-2">
                                        Nombre Completo
                                    </label>
                                    <input
                                        type="text"
                                        id="nombre"
                                        name="nombre"
                                        value={formData.nombre}
                                        onChange={handleInputChange}
                                        className={`w-full px-6 py-4 rounded-2xl bg-gray-50 border-2 outline-none transition-all ${errors.nombre ? 'border-red-300 focus:border-red-500' : 'border-transparent focus:border-blue-500 focus:bg-white'
                                            }`}
                                        placeholder="Tu nombre aquí"
                                    />
                                    {errors.nombre && <p className="mt-2 text-sm text-red-500 font-bold ml-1"><span>⚠</span> {errors.nombre}</p>}
                                </div>

                                <div>
                                    <label htmlFor="email" className="block text-sm font-black text-gray-700 uppercase tracking-widest mb-2">
                                        Correo Electrónico
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        className={`w-full px-6 py-4 rounded-2xl bg-gray-50 border-2 outline-none transition-all ${errors.email ? 'border-red-300 focus:border-red-500' : 'border-transparent focus:border-blue-500 focus:bg-white'
                                            }`}
                                        placeholder="ejemplo@correo.com"
                                    />
                                    {errors.email && <p className="mt-2 text-sm text-red-500 font-bold ml-1"><span>⚠</span> {errors.email}</p>}
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-sm font-black text-gray-700 uppercase tracking-widest mb-2">
                                        ¿En qué podemos ayudarte?
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleInputChange}
                                        rows={4}
                                        className={`w-full px-6 py-4 rounded-2xl bg-gray-50 border-2 outline-none transition-all resize-none ${errors.message ? 'border-red-300 focus:border-red-500' : 'border-transparent focus:border-blue-500 focus:bg-white'
                                            }`}
                                        placeholder="Cuéntanos..."
                                    />
                                    {errors.message && <p className="mt-2 text-sm text-red-500 font-bold ml-1"><span>⚠</span> {errors.message}</p>}
                                </div>

                                <button
                                    type="submit"
                                    className="w-full py-5 bg-blue-600 hover:bg-blue-700 text-white font-black text-xl rounded-2xl transition-all shadow-xl hover:shadow-2xl transform active:scale-[0.98] outline-none"
                                >
                                    Enviar Mensaje
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            {isSent && (
                <div
                    className="fixed bottom-8 left-1/2 -translate-x-1/2 bg-green-600 text-white px-8 py-4 rounded-2xl shadow-2xl animate-bounce-in z-[100] cursor-pointer"
                    onClick={() => setIsSent(false)}
                >
                    <div className="flex items-center gap-3">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="font-black">¡Mensaje enviado exitosamente!</span>
                    </div>
                </div>
            )}
        </section>
    );
};

export default Contact;