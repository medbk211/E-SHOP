const User = require('../models/user'); // Assurez-vous que votre modèle d'utilisateur est défini

// Récupérer tous les utilisateurs (clients)
exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json({ users });
  } catch (err) {
    res.status(500).json({ message: "Erreur lors de la récupération des utilisateurs", error: err.message });
  }
};

// Ajouter un client
exports.addClient = async (req, res) => {
  const { name, email, phone, address } = req.body;
  try {
    const newClient = new User({ name, email, phone, address });
    await newClient.save();
    res.status(201).json({ message: 'Client ajouté avec succès', client: newClient });
  } catch (err) {
    res.status(500).json({ message: 'Erreur lors de l\'ajout du client', error: err.message });
  }
};

// Supprimer un client
exports.deleteClient = async (req, res) => {
  const { id } = req.params;
  try {
    await User.findByIdAndDelete(id);
    res.status(200).json({ message: 'Client supprimé avec succès' });
  } catch (err) {
    res.status(500).json({ message: 'Erreur lors de la suppression du client', error: err.message });
  }
};
