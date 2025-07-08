import * as Contact from '../models/contactModel.js'

export async function listContact(req, res) {
    try {
        const contact = await Contact.getAllContact();

        //res.render(`contact`, {contact}) // Pour montrer dans un vue en HTML
        res.status(200).json(contact) // Pour montrer dans un API, sur Postman
    } catch (err) {
        console.error(err);
        res.status(500).send(`Erreur serveur`);
    } 
}

export async function effaceContact(req, res) {
    try {
        // const {id} = req.body; // Cette ligne est pour envoyer l'id dans le BODY en POSTMAN ou en HTML
        const id = req.params.id;
        console.log("ID reçu pour effacer :", id); // Pour verifier si on reçoi l'id
        const wasDeleted = await Contact.deleteContact(id);

        if (wasDeleted) {
            res.status(200).send(`Contact effacé`)
        } else {
            res.status(404).send(`Aucun contact trouvé avec cet ID : ${id}`)
        }
        
        //res.render(`contact`, {contact})
    } catch (err) {
        console.error(err);
        res.status(500).send(`Erreur serveur`);
    } 
}

export async function addContact(req, res) {
    try {
        const {nom, prenom, email, message} = req.body;
        const contact = await Contact.createContact(nom, prenom, email, message);

        //res.render(`contact`, {contact})
        res.status(201).send(`Contact ajouté`);
    } catch (err) {
        console.error(err);
        res.status(500).send(`Erreur serveur`);
    } 
}

export async function trouveContactParEmail(req, res) {
    try {
        const {email} = req.body;
        const contact = await Contact.findContactByEmail(email);

        //res.render(`contact`, {contact})
        res.status(200).send(`Contact trouve`);
    } catch (err) {
        console.error(err);
        res.status(500).send(`Erreur serveur`);
    } 
}