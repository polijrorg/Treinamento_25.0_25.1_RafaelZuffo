'use client';

import Piu from "../components/Piu";

export default function Home() {
  return (
    <main>
      <Piu
        foto="images/dogAnonimo.jpg"
        nome="Pedro Souza"
        usuario="pedrosz"
        texto="NÃO há imoralidade em furar a fila do bandejão..."
        curtidas={8}
        numero_comentarios={5}
        numero_reposts={3}
      />
    </main>
  );
}
