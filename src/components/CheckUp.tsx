import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { Product } from '../redux/reducers/addItem';

const CheckUp: React.FC = () => {
    const state = useSelector((state: RootState) => state.addItems);
    const [paymentMethod, setPaymentMethod] = useState<string>("credit");
    const [isPaid, setIsPaid] = useState<boolean>(false);

    let total = 0;
    const itemList = (item: Product) => {
        total += item.price;
        return (
            <li className="flex justify-between items-center py-3 border-b border-gray-100 last:border-0" key={item.id}>
                <div>
                    <h6 className="font-semibold text-gray-800">{item.title}</h6>
                    <span className="text-xs text-gray-400 capitalize">{item.category}</span>
                </div>
                <span className="font-bold text-blue-600">${item.price.toLocaleString()}</span>
            </li>
        );
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsPaid(true);
        (e.target as HTMLFormElement).reset();
    };

    const handlePaymentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPaymentMethod(e.target.value);
    };

    return (
        <section className="bg-gray-50 min-h-screen py-12 md:py-20">
            <div className="container mx-auto px-4 max-w-6xl">
                <div className="flex flex-col lg:flex-row gap-12">
                    {/* Order Summary (Sticky on desktop) */}
                    <div className="w-full lg:w-1/3 order-first lg:order-last">
                        <div className="bg-white rounded-3xl shadow-sm p-8 sticky top-24 border border-gray-100">
                            <h4 className="flex justify-between items-center mb-8">
                                <span className="text-2xl font-black text-gray-900 border-b-4 border-blue-600 pb-1">Resumen</span>
                                <span className="bg-blue-600 text-white text-sm font-bold px-3 py-1 rounded-full">{state.length} ítems</span>
                            </h4>
                            <ul className="mb-8 space-y-1">
                                {state.map(itemList)}
                                <li className="flex justify-between items-center pt-6 mt-4 border-t-2 border-gray-100">
                                    <span className="text-xl font-bold text-gray-900">Total</span>
                                    <strong className="text-3xl font-black text-blue-700">${total.toLocaleString()}</strong>
                                </li>
                            </ul>
                            <div className="bg-blue-50 rounded-xl p-4 text-sm text-blue-700 flex items-center">
                                <svg className="w-5 h-5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                                </svg>
                                Los precios incluyen IVA y gastos de envío para todo Chile.
                            </div>
                        </div>
                    </div>

                    {/* Checkout Form */}
                    <div className="w-full lg:w-2/3">
                        <div className="bg-white rounded-3xl shadow-sm p-8 md:p-12 border border-gray-100">
                            <h4 className="text-3xl font-black text-gray-900 mb-10">Finalizar Compra</h4>

                            <form className="space-y-10" onSubmit={handleSubmit}>
                                {/* Personal Info Section */}
                                <div className="space-y-6">
                                    <h5 className="text-lg font-bold text-gray-500 uppercase tracking-widest flex items-center">
                                        <span className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mr-3 text-sm">1</span>
                                        Información Personal
                                    </h5>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                            <label htmlFor="firstName" className="block text-sm font-bold text-gray-700 mb-2">Nombre</label>
                                            <input type="text" id="firstName" className="w-full px-5 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all" required />
                                        </div>
                                        <div>
                                            <label htmlFor="lastName" className="block text-sm font-bold text-gray-700 mb-2">Apellido</label>
                                            <input type="text" id="lastName" className="w-full px-5 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all" required />
                                        </div>
                                        <div className="md:col-span-2">
                                            <label htmlFor="email" className="block text-sm font-bold text-gray-700 mb-2">Email</label>
                                            <input type="email" id="email" className="w-full px-5 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all" placeholder="ejemplo@correo.com" required />
                                        </div>
                                        <div>
                                            <label htmlFor="tel" className="block text-sm font-bold text-gray-700 mb-2">Teléfono</label>
                                            <input type="tel" id="tel" className="w-full px-5 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all" placeholder="9 1234 5678" required />
                                        </div>
                                        <div>
                                            <label htmlFor="comuna" className="block text-sm font-bold text-gray-700 mb-2">Comuna</label>
                                            <select id="comuna" className="w-full px-5 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all bg-white" required>
                                                <option value="">Seleccionar...</option>
                                                <option>Quilicura</option>
                                                <option>Lampa</option>
                                                <option>Colina</option>
                                                <option>Batuco</option>
                                                <option>Rancagua</option>
                                                <option>Conchalí</option>
                                                <option>Recoleta</option>
                                                <option>Santiago</option>
                                            </select>
                                        </div>
                                        <div className="md:col-span-2">
                                            <label htmlFor="address" className="block text-sm font-bold text-gray-700 mb-2">Dirección de Envío</label>
                                            <input type="text" id="address" className="w-full px-5 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all" placeholder="Nombre calle #1234, Departamento/Block" required />
                                        </div>
                                    </div>
                                </div>

                                <hr className="border-gray-100" />

                                {/* Payment Method Section */}
                                <div className="space-y-6">
                                    <h5 className="text-lg font-bold text-gray-500 uppercase tracking-widest flex items-center">
                                        <span className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mr-3 text-sm">2</span>
                                        Método de Pago
                                    </h5>

                                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                                        <label className={`relative flex items-center justify-center p-4 rounded-2xl border-2 cursor-pointer transition-all ${paymentMethod === 'credit' ? 'border-blue-600 bg-blue-50 ring-2 ring-blue-600 ring-opacity-10' : 'border-gray-100 hover:border-gray-200'}`}>
                                            <input type="radio" name="paymentOption" value="credit" className="sr-only" checked={paymentMethod === 'credit'} onChange={handlePaymentChange} />
                                            <div className="flex flex-col items-center">
                                                <svg className={`w-8 h-8 mb-2 ${paymentMethod === 'credit' ? 'text-blue-600' : 'text-gray-400'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                                                </svg>
                                                <span className={`font-bold text-sm ${paymentMethod === 'credit' ? 'text-blue-700' : 'text-gray-500'}`}>Crédito</span>
                                            </div>
                                        </label>
                                        <label className={`relative flex items-center justify-center p-4 rounded-2xl border-2 cursor-pointer transition-all ${paymentMethod === 'debit' ? 'border-blue-600 bg-blue-50 ring-2 ring-blue-600 ring-opacity-10' : 'border-gray-100 hover:border-gray-200'}`}>
                                            <input type="radio" name="paymentOption" value="debit" className="sr-only" checked={paymentMethod === 'debit'} onChange={handlePaymentChange} />
                                            <div className="flex flex-col items-center">
                                                <svg className={`w-8 h-8 mb-2 ${paymentMethod === 'debit' ? 'text-blue-600' : 'text-gray-400'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                </svg>
                                                <span className={`font-bold text-sm ${paymentMethod === 'debit' ? 'text-blue-700' : 'text-gray-500'}`}>Débito</span>
                                            </div>
                                        </label>
                                        <label className={`relative flex items-center justify-center p-4 rounded-2xl border-2 cursor-pointer transition-all ${paymentMethod === 'paypal' ? 'border-blue-600 bg-blue-50 ring-2 ring-blue-600 ring-opacity-10' : 'border-gray-100 hover:border-gray-200'}`}>
                                            <input type="radio" name="paymentOption" value="paypal" className="sr-only" checked={paymentMethod === 'paypal'} onChange={handlePaymentChange} />
                                            <div className="flex flex-col items-center">
                                                <div className={`mb-2 font-black italic text-2xl ${paymentMethod === 'paypal' ? 'text-blue-800' : 'text-gray-400'}`}>PayPal</div>
                                                <span className={`font-bold text-sm ${paymentMethod === 'paypal' ? 'text-blue-700' : 'text-gray-500'}`}>Express Checkout</span>
                                            </div>
                                        </label>
                                    </div>

                                    {/* Conditional Card Form */}
                                    {paymentMethod === 'credit' && (
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-gray-50 p-6 rounded-2xl animate-fade-in">
                                            <div className="md:col-span-2">
                                                <label className="block text-xs font-black text-gray-500 uppercase mb-2">Nombre del Titular</label>
                                                <input type="text" className="w-full px-5 py-3 rounded-xl border border-gray-200 outline-none" placeholder="Como figura en la tarjeta" required />
                                            </div>
                                            <div className="md:col-span-2">
                                                <label className="block text-xs font-black text-gray-500 uppercase mb-2">Número de Tarjeta</label>
                                                <input type="text" className="w-full px-5 py-3 rounded-xl border border-gray-200 outline-none" placeholder="0000 0000 0000 0000" required />
                                            </div>
                                            <div>
                                                <label className="block text-xs font-black text-gray-500 uppercase mb-2">Vencimiento</label>
                                                <input type="text" className="w-full px-5 py-3 rounded-xl border border-gray-200 outline-none" placeholder="MM / AA" required />
                                            </div>
                                            <div>
                                                <label className="block text-xs font-black text-gray-500 uppercase mb-2">CVV</label>
                                                <input type="text" className="w-full px-5 py-3 rounded-xl border border-gray-200 outline-none" placeholder="000" required />
                                            </div>
                                        </div>
                                    )}
                                </div>

                                <button
                                    type="submit"
                                    className="w-full py-6 bg-blue-600 hover:bg-blue-700 text-white font-black text-2xl rounded-2xl transition-all shadow-xl hover:shadow-2xl transform active:scale-[0.98] outline-none"
                                >
                                    {paymentMethod === 'paypal' ? 'Pagar con PayPal' : 'Confirmar Pago'}
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            {isPaid && (
                <div
                    className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm"
                    onClick={() => setIsPaid(false)}
                >
                    <div className="bg-white p-12 rounded-[3rem] shadow-2xl text-center animate-zoom-in max-w-sm w-full">
                        <div className="w-24 h-24 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-8">
                            <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                            </svg>
                        </div>
                        <h3 className="text-3xl font-black text-gray-900 mb-2">¡Éxito!</h3>
                        <p className="text-gray-500 font-bold mb-8">Tu pago fue realizado correctamente.</p>
                        <button className="w-full py-4 bg-gray-900 text-white font-black rounded-2xl hover:bg-black transition-all">
                            Continuar
                        </button>
                    </div>
                </div>
            )}
        </section>
    );
};

export default CheckUp;
