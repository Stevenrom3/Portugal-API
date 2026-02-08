const url = "https://restcountries.com/v3.1/alpha?codes=PRT,ESP&fields=name,translations,currencies,capital,region,flags";

fetch(url)
  .then(res => res.json())
  .then(data => {

    // Se identifica Portugal por el nombre
    const portugal = data.find(
      country => country.name.common === "Portugal"
    );

    const nombre = portugal.name.common;
    const traduccion = portugal.translations.spa.common;
    const capital = portugal.capital[0];
    const region = portugal.region;
    const moneda = Object.values(portugal.currencies)[0].name;
    const bandera = portugal.flags.png;

    document.getElementById("country-card").innerHTML = `
      <img src="${bandera}" alt="Bandera de Portugal" class="flag">

      <p><strong>Nombre del país:</strong> ${nombre}</p>
      <p><strong>Traducción al español:</strong> ${traduccion}</p>
      <p><strong>Capital:</strong> ${capital}</p>
      <p><strong>Región:</strong> ${region}</p>
      <p><strong>Moneda:</strong> ${moneda}</p>
    `;
  })
  .catch(error => {
    console.error("Error al consumir la API:", error);
  });

