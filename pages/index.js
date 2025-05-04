export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="max-w-md w-full bg-white p-8 shadow-lg rounded-lg text-center">
        <h1 className="text-2xl font-bold text-gray-800">Metricly Quatro Ponto Zero</h1>
        <p className="mt-2 text-gray-600">BI automático para a Empresa 4.0</p>
        <form className="mt-4">
          <input
            type="email"
            placeholder="Seu e-mail"
            className="w-full p-3 border border-gray-300 rounded"
            disabled
          />
          <button
            className="mt-3 w-full p-3 bg-teal-600 text-white rounded hover:bg-teal-700"
            disabled
          >
            Me avise quando lançar
          </button>
        </form>
      </div>
    </div>
  );
}
