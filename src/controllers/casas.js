import { connection } from "../db.config.js";

export const getCasaController = async (request, res) => {
  try {
    const [results] = await connection.query("SELECT * FROM properties ");

    res.json(results);
  } catch (error) {
    res.status(500).json({ mensaje: "Error al obtener dataBase" });
  }
};

export const createCasaController = async (request, res) => {
  const {
    owner_id,
    title,
    description,
    price_per_night,
    location,
    property_type,
    bedrooms,
    bathrooms,
    image_url,
  } = request.body;

  try {
    const [results] = await connection.query(
      `INSERT INTO properties (owner_id, title, description, price_per_night, location, property_type, bedrooms, bathrooms, image_url) VALUES
(?, ?, ?, ?, ?, ?, ?, ?, ?);`,

      [
        parseInt(owner_id),
        title,
        description,
        parseInt(price_per_night),
        location,
        property_type,
        parseInt(bedrooms),
        parseInt(bathrooms),
        image_url,
      ]
    );
    console.log(results);
    res.json(results);
  } catch (error) {
    res.status(500).json({ mensaje: error });
  }
};

export const upDateCasaController = async (req, res) => {
  const {
    owner_id,
    title,
    description,
    price_per_night,
    location,
    property_type,
    bedrooms,
    bathrooms,
    image_url,
  } = req.body;
  const { id } = req.params;
  try {
    const [results] = await connection.query(
      `UPDATE properties SET owner_id = ?, title =?, description =?, price_per_night =?, location =?, property_type =?, bedrooms=?, bathrooms =? , image_url =? 
       WHERE property_id = ? ;`,

      [
        parseInt(owner_id),
        title,
        description,
        parseInt(price_per_night),
        location,
        property_type,
        parseInt(bedrooms),
        parseInt(bathrooms),
        image_url,
        id,
      ]
    );
    console.log(results);
    res.json(results);
  } catch (error) {
    res.status(500).json({ mensaje: error });
  }
};

export const deleteCasaController = async (req, res) => {
  const { id } = req.params;

  try {
    //buscar la casa
    const casaEliminada = await connection.query(
      `DELETE FROM properties WHERE property_id = ? `,
      [id]
    );
    res.send("Ok");
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Error al eliminar la casa", error: error.message });
  }
};
