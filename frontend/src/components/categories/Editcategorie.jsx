import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Form, Col, Row } from 'react-bootstrap'
import { useNavigate, useParams } from 'react-router-dom'

const Editcategorie = () => {
    const [categorie, setCategorie] = useState({}) 
    const navigate = useNavigate()
    const { id } = useParams() 

   
    const loadCategorie = async (id) => {
        try {
            const res = await axios.get(`http://localhost:3001/api/categories/${id}`)
            setCategorie(res.data)
        } catch (error) {
            console.log(error)
        }
    }


    useEffect(() => {
        loadCategorie(id)
    }, [id])

    const handleSave = async (e) => {
        try {
            e.preventDefault()
          
            await axios.put(`http://localhost:3001/api/categories/${id}`,categorie)
            .then(res=>{navigate("/categories") })
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
            <Form>
                <Row>
                    <Form.Group as={Col} mb="6">
                        <Form.Label>Nom de la catégorie</Form.Label>
                        <Form.Control 
                            type="text" 
                            placeholder="Nom de la catégorie"
                            value={categorie.nomcategorie}
                            onChange={(e) => setCategorie({ ...categorie, nomcategorie: e.target.value })}
                        />
                    </Form.Group>
                </Row>
                <Row>
                    <Form.Group as={Col} mb="6">
                        <Form.Label>Image de la catégorie</Form.Label>
                        <Form.Control 
                            type="text" 
                            placeholder="URL de l'image"
                            value={categorie.imagecategorie}
                            onChange={(e) => setCategorie({ ...categorie, imagecategorie: e.target.value })}
                        />
                    </Form.Group>
                </Row>
            </Form>
            <button className="btn btn-success btn-sm" onClick={handleSave}>
                <i className="fa-solid fa-floppy-disk"></i> Save
            </button>
            &nbsp;
            <button className="btn btn-danger btn-sm" onClick={() => navigate("/categories")}>
                <i className="fa-solid fa-person-walking-arrow-right"></i> Exit
            </button>
        </div>
    )
}

export default Editcategorie
