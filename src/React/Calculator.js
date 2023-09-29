import React, { Component } from 'react';




class Calculator extends Component {
    state = {
        num1: '',
        num2: '',
        num3: '750',
        result: '',
    };

    handleInputChange = (e) => {
        const { name, value } = e.target;
        this.setState({
            [name]: value,
        });
    };

    calculateResult = () => {
        const { num1, num2, num3 } = this.state;
        const result = parseFloat(num1) * parseFloat(num2) * parseFloat(num3);
        this.setState({ result });
    };

    render() {
        const { num1, num2, num3, result } = this.state;

        return (
            <div className="cll grid place-items-center font">
                <h2 className="text-2xl font-semibold mb-6 text-white">Предварительный расчёт стоимости изготовления</h2>
                <div>
                    <div className="box md:flex md:flex-nowrap gap-4 p-4 rounded-lg overflow-hidden shadow-lg mb-4 md:w-40">
                        <input
                            type="number"
                            name="num1"
                            value={num1}
                            onChange={this.handleInputChange}
                            placeholder="Высота"

                        />
                        <p>x</p>
                        <input
                            type="number"
                            name="num2"
                            value={num2}
                            onChange={this.handleInputChange}
                            placeholder="Ширина"
                        />
                        <p>x</p>
                        <h2>{num3}</h2>
                        <p>=</p>
                        <h2>{result}</h2>
                        <button className="hover:text-green-900 transition duration-300 inline-block but text-white py-1 px-4 rounded-md " onClick={this.calculateResult}>Расчёт</button>
                    </div>

                </div>
                <footer className="cl p-4 font w-full mt-4">
                    <div className="container mx-auto">
                        <div className="flex justify-between items-center">
                            <div className="flex flex-nowrap gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="text-black w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                                </svg>
                                <h2 className="text-white">+7 (903) 675-08-61</h2>
                            </div>
                            <div className="flex flex-nowrap gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="text-black w-6 h-6">
                                    <path strokeLinecap="round" d="M16.5 12a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 10-2.636 6.364M16.5 12V8.25" />
                                </svg>
                                <h2 className="text-white">marbella80@mail.ru</h2>
                            </div>
                            <div className="flex flex-nowrap gap-2">
                                <svg className="w-7 h-7" xmlns="http://www.w3.org/2000/svg" height="800" width="1200" viewBox="-100.7682 -167.947 873.3244 1007.682">
                                    <g fill="#100f0d">
                                        <path d="M335.895 0c-91.224 0-102.663.387-138.49 2.021-35.752 1.631-60.169 7.31-81.535 15.612-22.088 8.584-40.82 20.07-59.493 38.743-18.674 18.673-30.16 37.407-38.743 59.495C9.33 137.236 3.653 161.653 2.02 197.405.386 233.232 0 244.671 0 335.895c0 91.222.386 102.661 2.02 138.488 1.633 35.752 7.31 60.169 15.614 81.534 8.584 22.088 20.07 40.82 38.743 59.495 18.674 18.673 37.405 30.159 59.493 38.743 21.366 8.302 45.783 13.98 81.535 15.612 35.827 1.634 47.266 2.021 138.49 2.021 91.222 0 102.661-.387 138.488-2.021 35.752-1.631 60.169-7.31 81.534-15.612 22.088-8.584 40.82-20.07 59.495-38.743 18.673-18.675 30.159-37.407 38.743-59.495 8.302-21.365 13.981-45.782 15.612-81.534 1.634-35.827 2.021-47.266 2.021-138.488 0-91.224-.387-102.663-2.021-138.49-1.631-35.752-7.31-60.169-15.612-81.534-8.584-22.088-20.07-40.822-38.743-59.495-18.675-18.673-37.407-30.159-59.495-38.743-21.365-8.302-45.782-13.981-81.534-15.612C438.556.387 427.117 0 335.895 0zm0 60.521c89.686 0 100.31.343 135.729 1.959 32.75 1.493 50.535 6.965 62.37 11.565 15.68 6.094 26.869 13.372 38.622 25.126 11.755 11.754 19.033 22.944 25.127 38.622 4.6 11.836 10.072 29.622 11.565 62.371 1.616 35.419 1.959 46.043 1.959 135.73 0 89.687-.343 100.311-1.959 135.73-1.493 32.75-6.965 50.535-11.565 62.37-6.094 15.68-13.372 26.869-25.127 38.622-11.753 11.755-22.943 19.033-38.621 25.127-11.836 4.6-29.622 10.072-62.371 11.565-35.413 1.616-46.036 1.959-135.73 1.959-89.694 0-100.315-.343-135.73-1.96-32.75-1.492-50.535-6.964-62.37-11.564-15.68-6.094-26.869-13.372-38.622-25.127-11.754-11.753-19.033-22.943-25.127-38.621-4.6-11.836-10.071-29.622-11.565-62.371-1.616-35.419-1.959-46.043-1.959-135.73 0-89.687.343-100.311 1.959-135.73 1.494-32.75 6.965-50.535 11.565-62.37 6.094-15.68 13.373-26.869 25.126-38.622 11.754-11.755 22.944-19.033 38.622-25.127 11.836-4.6 29.622-10.072 62.371-11.565 35.419-1.616 46.043-1.959 135.73-1.959"/><path d="M335.895 447.859c-61.838 0-111.966-50.128-111.966-111.964 0-61.838 50.128-111.966 111.966-111.966 61.836 0 111.964 50.128 111.964 111.966 0 61.836-50.128 111.964-111.964 111.964zm0-284.451c-95.263 0-172.487 77.224-172.487 172.487 0 95.261 77.224 172.485 172.487 172.485 95.261 0 172.485-77.224 172.485-172.485 0-95.263-77.224-172.487-172.485-172.487m219.608-6.815c0 22.262-18.047 40.307-40.308 40.307-22.26 0-40.307-18.045-40.307-40.307 0-22.261 18.047-40.308 40.307-40.308 22.261 0 40.308 18.047 40.308 40.308"/></g>
                                </svg>
                                <h2 className="text-white">poshiv.n.o</h2>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>

        );
    }
}

export default Calculator;
