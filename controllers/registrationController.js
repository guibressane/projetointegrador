const knex = require("../db/knex");

// const index = async (req, res) => {
//   const registrations = await knex("registrations");
//   return res.status(200).json(registrations);
// };

const create = async (req, res) => {
  const body = req.body;
  if (!body.name || !body.email || !body.password) return res.status(400).json("Por favor, preencha com seus dados para continuar o cadastro.")
  await knex("registrations").insert({ name: body.name, email: body.email, password: body.password })
    .then(() => res.json({ ...body }))
    .catch((err) => {
      if (err.code == 'ER_DUP_ENTRY') res.status(400).json("E-mail já possui cadastro.")
      else res.status(400).json(err)
    });
};

const read = async (req, res) => {
  const email = req.body.email;
  const registration = await knex("registrations").where({ email: email }).first();
  return res.status(200).json(registration || "E-mail não cadastrado.");
};

const remove = async (req, res) => {
  const linhasDeletadas = await knex('registrations')
    .where('email', req.body.email)
    .del()
  if (linhasDeletadas === 0) {
    res.status(400).json("O cadastro não existe")
  } else res.json(`Cadastro de ${req.body.email} foi deletado`)
}

module.exports = {
  // index,
  read,
  create,
  remove,
};
