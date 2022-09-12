const knex = require("../db/knex");

const create = async (req, res) => {
    const body = req.body;
    if (!body.product || !body.specification || !body.pickup || !body.quality) return res.status(400).json("Por favor, preencha os dados do produto.")
    await knex("donations").insert({ product: body.product, specification: body.specification, pickup: body.pickup, quality: body.quality })
        .then((id) => res.json({ ...body, id: id[0] }))
        .catch((err) => res.status(400).json(err));
};

const read = async (req, res) => {
    const id = req.params.id;
    const product = await knex("donations").where({ id: id }).first();
    return res.status(200).json(product || "Produto não cadastrado.");
};

const remove = async (req, res) => {
    const linhasDeletadas = await knex('donations')
        .where('id', req.params.id)
        .del()
    if (linhasDeletadas === 0) {
        res.status(400).json("O produto não existe")
    } else res.json(`O produto de id ${req.params.id} foi deletado`)
}

module.exports = {
    // index,
    read,
    create,
    remove,
};