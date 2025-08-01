import CardGrid from "./CardGrid";
const CardsCustom = () => {
  return (
    <section className="bg-[#f9fbff] py-16 px-4 md:px-8 lg:px-12">
      <div className="max-w-7xl mx-auto text-center">
        {/* Título */}
        <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-3">
          Quer saber mais sobre como abrir seu CNPJ?
        </h2>
        {/* Subtítulo */}
        <p className="text-gray-600 text-base md:text-lg mb-10">
          Preparamos diversos conteúdos para apoiar a sua história de sucesso.
        </p>

        {/* Grid de Cards */}
        <CardGrid />

      </div>
    </section>
  );
};

export default CardsCustom;
