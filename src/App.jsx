import React from 'react';

const activos = ['META', 'NVDA', 'AMD'];
const horaActual = new Date().toLocaleTimeString('en-US', { hour12: false, timeZone: 'America/New_York' });
const diaActual = new Date().toLocaleDateString('en-US', { weekday: 'long', timeZone: 'America/New_York' });
const hoyEsFeriado = () => {
  const dia = new Date().getDay(); // 0 = domingo, 6 = sábado
  return dia === 0 || dia === 6;
};

// Determinar la fase operativa
const obtenerFase = () => {
  const hora = parseInt(horaActual.split(':')[0], 10);
  const minuto = parseInt(horaActual.split(':')[1], 10);
  const totalMinutos = hora * 60 + minuto;

  if (totalMinutos < 570) return '⏳ Fase previa (antes de 9:30 a.m.)';
  if (totalMinutos >= 570 && totalMinutos < 585) return '🚕 TAXI (9:30 – 9:45 a.m.)';
  if (totalMinutos >= 645 && totalMinutos < 660) return '🕚 Ajustes tácticos (10:45 – 11:00 a.m.)';
  if (totalMinutos >= 810 && totalMinutos < 930) return '🕒 Cierre parcial (13:30)';
  if (totalMinutos >= 930 && totalMinutos < 990) return '⏹️ Cierre total obligatorio (15:30)';
  return '🔁 Jornada en curso';
};

const App = () => {
  const fase = obtenerFase();
  const feriado = hoyEsFeriado();

  return (
    <div className="min-h-screen bg-gray-900 text-white p-4">
      <h1 className="text-3xl font-bold mb-2">CODE BROKER</h1>
      <p className="text-sm mb-2">📅 Hoy: {diaActual}</p>

      {feriado ? (
        <div className="bg-red-800 text-white p-3 rounded-xl mb-4">
          ⛔ Hoy no es un día operativo. Las estrategias están ocultas.
        </div>
      ) : (
        <div className="bg-green-800 text-white p-3 rounded-xl mb-4">
          🧠 {fase}
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {activos.map((ticker) => (
          <div key={ticker} className="bg-gray-800 rounded-2xl p-2 shadow">
            <h2 className="text-lg font-bold mb-1">{ticker}</h2>

            {/* Gráfico de velas */}
            <div className="mb-2">
              <iframe
                title={`candles-${ticker}`}
                src={`https://s.tradingview.com/widgetembed/?frameElementId=tradingview_${ticker}_candles&symbol=NASDAQ%3A${ticker}&interval=5&hidesidetoolbar=1&theme=dark&style=1&timezone=Etc%2FUTC&withdateranges=1&hide_side_toolbar=true&allow_symbol_change=false`}
                width="100%"
                height="450"
                frameBorder="0"
                allowFullScreen
              ></iframe>
            </div>

            {/* Gráfico de precio lineal */}
            <div>
              <iframe
                title={`price-${ticker}`}
                src={`https://s.tradingview.com/widgetembed/?frameElementId=tradingview_${ticker}_price&symbol=NASDAQ%3A${ticker}&interval=5&hidesidetoolbar=1&theme=dark&style=2&timezone=Etc%2FUTC&withdateranges=1&hide_side_toolbar=true&allow_symbol_change=false`}
                width="100%"
                height="250"
                frameBorder="0"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;

