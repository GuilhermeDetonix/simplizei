import YellowStar from './YellowStar.jsx';
const TituloNossosClientesDizem = () => {
    return (
        <div className="text-center my-8 sm:mb-12 lg:mb-16" >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-blue-900 mb-3">
                Confira o que nossos clientes falam sobre nós.
            </h2>
            <h3 className="siteSubTitulo">Confira o que nossos clientes falam sobre nossos serviços</h3>

            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-8 mt-4">
                <div className="flex items-center gap-2">
                    Nossas avaliações feitas<br />por nossos clientes:
                </div>
                <div className="flex items-center gap-2">
                    <img src="/assets/img/reclame-aqui.svg" alt="RA1000" className="w-16 sm:w-20 h-auto" />
                </div>
                <div className="flex items-center gap-2">
                    <img src="/assets/img/google.svg" alt="Google" className="w-8 sm:w-10 h-auto" />
                    <div className="flex items-center gap-1">
                        {[...Array(5)].map((_, i) => (
                            <YellowStar key={i} className="w-4 h-4 sm:w-5 sm:h-5" />
                        ))}
                        <span className="text-sm sm:text-base text-gray-700 font-medium ml-1">4.6</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TituloNossosClientesDizem;