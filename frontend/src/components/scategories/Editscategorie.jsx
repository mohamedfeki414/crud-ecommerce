import React, { useState, useEffect } from 'react';
import { Col, Form, Row } from 'react-bootstrap';
import { Link, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

const Editscategorie = () => {
  const [scategorie, setScategorie] = useState({
    nomscategorie: '',
    imagescategorie: '',
    categorieID: ''
  });
  const [categories, setCategories] = useState([]); // Liste des catégories
  const { id } = useParams(); // Récupération de l'ID de la sous-catégorie à modifier
  const navigate = useNavigate();

  // Charger les catégories
  const fetchCategories = async () => {
    try {
      const response = await axios.get("http://localhost:3001/api/categories");
      setCategories(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  // Charger les données de la sous-catégorie
  const fetchScategorie = async (id) => {
    try {
      const response = await axios.get(`http://localhost:3001/api/scategories/${id}`);
      setScategorie(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchCategories();
    fetchScategorie(id);
  }, [id]);

  // Sauvegarder les modifications
  const handleSave = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:3001/api/scategories/${id}`, scategorie)
        .then(() => {
          navigate("/scategories"); // Rediriger après modification
        });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
      <Form>
        <Row>
          <Form.Group as={Col} mb="6">
            <Form.Label>Nom de la Sous-Catégorie</Form.Label>
            <Form.Control
              type="text"
              placeholder="Nom de la sous-catégorie"
              value={scategorie.nomscategorie}
              onChange={(e) => setScategorie({ ...scategorie, nomscategorie: e.target.value })}
            />
          </Form.Group>
        </Row>
        <Row>
          <Form.Group as={Col} mb="6">
            <Form.Label>Image de la Sous-Catégorie</Form.Label>
            <Form.Control
              type="text"
              placeholder="URL de l'image de la sous-catégorie"
              value={scategorie.imagescategorie}
              onChange={(e) => setScategorie({ ...scategorie, imagescategorie: e.target.value })}
            />
          </Form.Group>
        </Row>
        <Row>
          <Form.Group as={Col} mb="6">
            <Form.Label>Catégorie Principale</Form.Label>
            <Form.Control
              as="select"
              value={scategorie.categorieID}
              onChange={(e) => setScategorie({ ...scategorie, categorieID: e.target.value })}
            >
              {/* Afficher les options des catégories */}
              <option value="">-- Sélectionnez une catégorie --</option>
              {categories.map((cat) => (
                <option key={cat._id} value={cat._id}>
                  {cat.nomcategorie}
                </option>
              ))}
            </Form.Control>
          </Form.Group>
        </Row>

        {/* Boutons */}
        <button className="btn btn-success btn-sm" onClick={handleSave}>
          <i className="fa-solid fa-floppy-disk"></i> Save
        </button>
        &nbsp;
        <Link to="/scategories">
          <button className="btn btn-danger btn-sm">
            <i className="fa-solid fa-person-walking-arrow-right"></i> Exit
          </button>
        </Link>
      </Form>
    </div>
  );
};

export default Editscategorie;
