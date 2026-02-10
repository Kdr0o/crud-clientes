import { useEffect, useState } from "react";
import api from "../services/api";

function ClienteForm({ clienteEditando, setClienteEditando, atualizarLista }) {
  const [cliente, setCliente] = useState({
    nome: "",
    email: "",
    data_nascimento: "",
    profissao: "",
    observacoes: "",
  });

  useEffect(() => {
    if (clienteEditando) {
      setCliente({
        ...clienteEditando,
        data_nascimento: clienteEditando.data_nascimento
          ? clienteEditando.data_nascimento.split("T")[0]
          : "",
      });
    }
  }, [clienteEditando]);

  const handleChange = (e) => {
    setCliente({
      ...cliente,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (clienteEditando) {
      await api.put(`/clientes/${clienteEditando.id}`, cliente);
      setClienteEditando(null);
    } else {
      await api.post("/clientes", cliente);
    }

    setCliente({
      nome: "",
      email: "",
      data_nascimento: "",
      profissao: "",
      observacoes: "",
    });

    atualizarLista();
  };

  return (
    <form onSubmit={handleSubmit} className="container mt-4">
      <h3>{clienteEditando ? "Editar Cliente" : "Cadastrar Cliente"}</h3>

      <input
        type="text"
        className="form-control mb-2"
        name="nome"
        value={cliente.nome}
        onChange={handleChange}
        placeholder="Nome"
        required
      />

      <input
        type="email"
        className="form-control mb-2"
        name="email"
        value={cliente.email}
        onChange={handleChange}
        placeholder="Email"
        required
      />

      <input
        type="date"
        className="form-control mb-2"
        name="data_nascimento"
        value={cliente.data_nascimento}
        onChange={handleChange}
        required
      />

      <select
        className="form-control mb-2"
        name="profissao"
        value={cliente.profissao}
        onChange={handleChange}
        required
      >
        <option value="">Selecione a profissão</option>
        <option value="Programador">Programador</option>
        <option value="Consultor de Vendas">Consultor de Vendas</option>
        <option value="SDR">SDR</option>
        <option value="Suporte ao Cliente">Suporte ao Cliente</option>
      </select>

      <textarea
        className="form-control mb-3"
        name="observacoes"
        value={cliente.observacoes}
        onChange={handleChange}
        placeholder="Observações"
        rows="3"
      />

      <button className="btn btn-primary">
        {clienteEditando ? "Atualizar" : "Salvar"}
      </button>
    </form>
  );
}

export default ClienteForm;
