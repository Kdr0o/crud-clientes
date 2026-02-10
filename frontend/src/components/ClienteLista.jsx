import api from "../services/api";

function ClienteLista({ clientes, setClienteEditando, atualizarLista }) {

  const excluirCliente = async (id) => {
    const confirmacao = window.confirm("Deseja excluir este cliente?");
    if (!confirmacao) return;

    await api.delete(`/clientes/${id}`);

    // Atualiza a lista depois de excluir
    atualizarLista();
  };

  return (
    <div className="container mt-4">
      <h3>Clientes</h3>

      {clientes.length === 0 ? (
        <p>Nenhum cliente cadastrado.</p>
      ) : (
        <ul className="list-group">
          {clientes.map(c => (
            <li key={c.id} className="list-group-item">
              <div className="d-flex justify-content-between align-items-center">
                <span>
                  <strong>{c.nome}</strong> — {c.email}
                </span>

                <div>
                  <button
                    className="btn btn-warning btn-sm me-2"
                    onClick={() => setClienteEditando(c)}
                  >
                    Editar
                  </button>

                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => excluirCliente(c.id)}
                  >
                    Excluir
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default ClienteLista;
