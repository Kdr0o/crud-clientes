const db = require("../db");

// Criar cliente
exports.create = (req, res) => {
  const { nome, email, data_nascimento, profissao, observacoes } = req.body;

  if (!nome || !email || !data_nascimento || !profissao) {
    return res.status(400).json({ erro: "Campos obrigatórios não preenchidos" });
  }

  if (new Date(data_nascimento) >= new Date()) {
    return res.status(400).json({ erro: "Data de nascimento deve ser anterior a hoje" });
  }

  const checkEmail = "SELECT id FROM clientes WHERE email = ?";
  db.query(checkEmail, [email], (err, result) => {
    if (err) return res.status(500).json(err);

    if (result.length > 0) {
      return res.status(400).json({ erro: "Email já cadastrado" });
    }

    const sql = `
      INSERT INTO clientes 
      (nome, email, data_nascimento, profissao, observacoes)
      VALUES (?, ?, ?, ?, ?)
    `;

    db.query(
      sql,
      [nome, email, data_nascimento, profissao, observacoes],
      (err) => {
        if (err) return res.status(500).json(err);
        res.status(201).json({ mensagem: "Cliente cadastrado com sucesso" });
      }
    );
  });
};

// Listar clientes
exports.findAll = (req, res) => {
  db.query("SELECT * FROM clientes", (err, result) => {
    if (err) return res.status(500).json(err);
    res.json(result);
  });
};

// Atualizar cliente
exports.update = (req, res) => {
  const { id } = req.params;
  const { nome, email, data_nascimento, profissao, observacoes } = req.body;

  const sql = `
    UPDATE clientes SET
      nome = ?,
      email = ?,
      data_nascimento = ?,
      profissao = ?,
      observacoes = ?
    WHERE id = ?
  `;

  db.query(
    sql,
    [nome, email, data_nascimento, profissao, observacoes, id],
    (err) => {
      if (err) return res.status(500).json(err);
      res.json({ mensagem: "Cliente atualizado com sucesso" });
    }
  );
};

// Remover cliente
exports.remove = (req, res) => {
  const { id } = req.params;

  db.query("DELETE FROM clientes WHERE id = ?", [id], (err) => {
    if (err) return res.status(500).json(err);
    res.json({ mensagem: "Cliente removido" });
  });
};
