import React from 'react'
import { useState } from 'react';

export default function Professors() {
    
        const [professors, setProfessors] = useState([]);
        const [newProfessor, setNewProfessor] = useState({
          matricule: '',
          nom: '',
          prenoms: '',
          contact: '',
          email: '',
          adresse: '',
          sexe: '',
        });
      
        const handleInputChange = (e) => {
          setNewProfessor({
            ...newProfessor,
            [e.target.name]: e.target.value,
          });
        };
      
        const handleAddProfessor = () => {
          setProfessors([...professors, newProfessor]);
          setNewProfessor({
            matricule: '',
            nom: '',
            prenoms: '',
            contact: '',
            email: '',
            adresse: '',
            sexe: '',
          });
        };
    
  return (
    <>
        <h2 className="text-2xl font-bold mb-4">Gestion des Professeurs</h2>

        <div className="mb-4">
            <h3 className="text-xl font-bold mb-2">Nouveau Professeur</h3>
            <form className='flex flex-col my-6'>
                <label>Matricule</label>
                <input
                className='border outline-none my-3 p-2'
                type="text"
                name="matricule"
                value={newProfessor.matricule}
                onChange={handleInputChange}
                />
                <label>Nom</label>
                <input
                className='border outline-none my-3 p-2'
                type="text"
                name="nom"
                value={newProfessor.nom}
                onChange={handleInputChange}
                />
                <label>Prénoms</label>
                <input
                className='border outline-none my-3 p-2'
                type="text"
                name="prenoms"
                value={newProfessor.prenoms}
                onChange={handleInputChange}
                />
                <label>Contact</label>
                <input
                className='border outline-none my-3 p-2'
                type="text"
                name="contact"
                value={newProfessor.contact}
                onChange={handleInputChange}
                />
                <label>Email</label>
                <input
                className='border outline-none my-3 p-2'
                type="mail"
                name="email"
                value={newProfessor.email}
                onChange={handleInputChange}
                />
                <label>Adresse</label>
                <input
                className='border outline-none my-3 p-2'
                type="text"
                name="adresse"
                value={newProfessor.adresse}
                onChange={handleInputChange}
                />
                <label>Sexe</label>
                <select
                className='border outline-none my-3 p-2'
            name="sexe"
            value={newProfessor.sexe}
            onChange={handleInputChange}
          >
            <option value="Homme">Homme</option>
            <option value="Femme">Femme</option>
          </select>
                {/* Ajoute les autres champs de formulaire de la même manière */}
                <button 
                type="button" 
                onClick={handleAddProfessor}
                className='border rounded-sm px-3 py-2 bg-green-300 '
                >
                Ajouter Professeur
                </button>
            </form>
        </div>

        <div>
            <h3 className="text-xl font-bold mb-2">Liste des Professeurs</h3>
            <ul>
            {professors.map((professor, index) => (
            <li key={index}>{professor.nom} {professor.prenoms}</li>
                ))}
            </ul>
        </div>
    </>
  )
}
