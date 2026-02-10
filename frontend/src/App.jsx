import { useEffect, useState } from "react";
import api from "./services/api";
import ClienteForm from "./components/ClienteForm";
import ClienteLista from "./components/ClienteLista";

function App() {
  const [clientes, setClientes] = useState([]);
  const [clienteEditando, setClienteEditando] = useState(null);

  const carregarClientes = async () => {
    const response = await api.get("/clientes");
    setClientes(response.data);
  };

  useEffect(() => {
    carregarClientes();
  }, []);

  return (
    <>
      <ClienteForm
        clienteEditando={clienteEditando}
        setClienteEditando={setClienteEditando}
        atualizarLista={carregarClientes}
      />

      <ClienteLista
        clientes={clientes}
        setClienteEditando={setClienteEditando}
        atualizarLista={carregarClientes}
      />

    </>
  );
}

export default App;
