import { pool } from "../db.js";

export const getEmployees = async (req, res) => {
  try {
    // /*Esta linea sirve para simular un error*/throw new error('DB Error');
    const [rows] = await pool.query("SELECT * FROM employee");
    res.json(rows);
  } catch (error) {
    return res.status(500).json({
      message: "something goes whrong",
    });
  }
};
export const getEmployee = async (req, res) => {
  try {
    const [rows] = await pool.query("SELECT * FROM employee WHERE id=?", [
      req.params.id,
    ]);
    if (rows.length <= 0) {
      return res.status(404).json({
        message: "empleado no existe",
      });
    }
    res.json(rows[0]);
    console.log(rows);
  } catch (error) {
    return res.status(500).json({
      message: "something goes whrong",
    });
  }
};
export const createEmployees = async (req, res) => {
  try {
    const { Nombre, salary } = req.body;
    const [rows] = await pool.query(
      "INSERT INTO employee(Nombre,salary) VALUES (?, ?)",
      [Nombre, salary]
    );
    res.send({
      id: rows.insertId,
      Nombre,
      salary,
    });
  } catch (error) {
    return res.status(500).json({
      message: "something goes whrong",
    });
  }
};

export const deleteEmployees = async (req, res) => {
  try {
    const [result] = await pool.query("DELETE FROM employee WHERE id=?", [
      req.params.id,
    ]);
    if (result.affectedRows <= 0) {
      return res.status(404).json({
        message: "elmpleado no existe",
      });
    }
    res.sendStatus(204);
    console.log(result);
  } catch (error) {
    return res.status(500).json({
      message: "something goes whrong",
    });
  }
};

/*el ifnull sirve para que si no se cambia el dato sql deje el dato anterior*/
export const updateEmployees = async (req, res) => {
  try {
    const { id } = req.params;
    const { Nombre, salary } = req.body;
    const [result] = await pool.query(
      "UPDATE employee SET Nombre=IFNULL(?,Nombre), salary=IFNULL(?,salary) WHERE id=?",
      [Nombre, salary, id]
    );

    if (result.affectedRows === 0) {
      return res.status(404).json({
        message: "Empleado no encontrado",
      });
    }
    const [rows] = await pool.query(
      "SELECT * FROM employee WHERE id=?",
      req.params.id
    );
    res.json(rows);
    console.log(rows);
  } catch (error) {
    return res.status(500).json({
      message: "something goes whrong",
    });
  }
};
