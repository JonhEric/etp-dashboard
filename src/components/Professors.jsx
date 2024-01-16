import React from "react";
import { useState } from "react";

export default function Professors() {
  const [professors, setProfessors] = useState([
    {
      matricule: "001",
      nom: "Rakoto",
      prenoms: "Hary",
      contact: "034 56 321 54",
      email: "test@example.com",
      adresse: "2 Rue Passing",
      sexe: "Homme"
    },
    {
      matricule: "002",
      nom: "Randria",
      prenoms: "Mox",
      contact: "032 11 456 78",
      email: "dev@example.com",
      adresse: "Anjanahary",
      sexe: "Homme"
    },
    {
      matricule: "003",
      nom: "Rak",
      prenoms: "Joe",
      contact: "034 31 425 46",
      email: "devfront@example.com",
      adresse: "miadana be",
      sexe: "Homme"
    }
  ]);
  const [selectedProfessorIndex, setSelectedProfessorIndex] = useState(null);
  const [newProfessor, setNewProfessor] = useState({
    matricule: "",
    nom: "",
    prenoms: "",
    contact: "",
    email: "",
    adresse: "",
    sexe: ""
  });

  const handleInputChange = (e) => {
    setNewProfessor({
      ...newProfessor,
      [e.target.name]: e.target.value,
    });
  };

  const handleAddProfessor = () => {
    if (selectedProfessorIndex !== null) {
      // Si un professeur est sélectionné, mettre à jour ses informations
      const updatedProfessors = [...professors];
      updatedProfessors[selectedProfessorIndex] = newProfessor;
      setProfessors(updatedProfessors);
      setSelectedProfessorIndex(null); // Réinitialiser l'index sélectionné
    } else {
      // Ajouter un nouveau professeur à la liste
      setProfessors([...professors, newProfessor]);
    }

    // Réinitialiser les informations du nouveau professeur
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

  
    const handleDeleteProfessor = (index) => {
      // Créer une copie de la liste des professeurs
      const updatedProfessors = [...professors];
      // Supprimer le professeur à l'index spécifié
      updatedProfessors.splice(index, 1);
      // Mettre à jour la liste des professeurs
      setProfessors(updatedProfessors);
    };
    
    const handleUpdateProfessor = (index) => {
      // Récupérer les informations du professeur sélectionné
      const selectedProfessor = professors[index];
      // Mettre à jour les champs du formulaire avec les informations du professeur sélectionné
      setNewProfessor({ ...selectedProfessor });
      // Mettre à jour l'index du professeur sélectionné
      setSelectedProfessorIndex(index);
    };
  

  return (
    <>
      <h2 className="text-2xl font-bold mb-4">Gestion des Professeurs</h2>

      <div className="mb-4">
        <h3 className="text-xl font-bold mb-2">Nouveau Professeur</h3>
        <form className="flex flex-col my-6">
          <label>Matricule</label>
          <input
            className="border outline-none my-3 p-2"
            type="text"
            name="matricule"
            value={newProfessor.matricule}
            onChange={handleInputChange}
          />
          <label>Nom</label>
          <input
            className="border outline-none my-3 p-2"
            type="text"
            name="nom"
            value={newProfessor.nom}
            onChange={handleInputChange}
          />
          <label>Prénoms</label>
          <input
            className="border outline-none my-3 p-2"
            type="text"
            name="prenoms"
            value={newProfessor.prenoms}
            onChange={handleInputChange}
          />
          <label>Contact</label>
          <input
            className="border outline-none my-3 p-2"
            type="text"
            name="contact"
            value={newProfessor.contact}
            onChange={handleInputChange}
          />
          <label>Email</label>
          <input
            className="border outline-none my-3 p-2"
            type="mail"
            name="email"
            value={newProfessor.email}
            onChange={handleInputChange}
          />
          <label>Adresse</label>
          <input
            className="border outline-none my-3 p-2"
            type="text"
            name="adresse"
            value={newProfessor.adresse}
            onChange={handleInputChange}
          />
          <label>Sexe</label>
          <select
            className="border outline-none my-3 p-2"
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
            className="border rounded-sm px-3 py-2 bg-green-300 "
          >
            Ajouter Professeur
          </button>
        </form>
      </div>

      <div>
        <h3 className="text-xl font-bold mb-2">Liste des Professeurs</h3>
        <table className="border-collapse w-full">
          <thead>
            <tr className="border-b">
              <th className="p-3">Matricule</th>
              <th className="p-3">Nom</th>
              <th className="p-3">Prénoms</th>
              <th className="p-3">Contact</th>
              <th className="p-3">Email</th>
              <th className="p-3">Adresse</th>
              <th className="p-3">Sexe</th>
              <th className="p-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {professors.map((professor, index) => (
              <tr key={index} className="border-b">
                <td className="p-3">{professor.matricule}</td>
                <td className="p-3">{professor.nom}</td>
                <td className="p-3">{professor.prenoms}</td>
                <td className="p-3">{professor.contact}</td>
                <td className="p-3">{professor.email}</td>
                <td className="p-3">{professor.adresse}</td>
                <td className="p-3">{professor.sexe}</td>
                <td className="p-3">
                  <button onClick={() => handleUpdateProfessor(index)}>
                    Editer
                  </button>
                  <button onClick={() => handleDeleteProfessor(index)}>
                    Suppr
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
