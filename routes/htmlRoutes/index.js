const router = require('express').Router();
const path = require('path');

// /notes will be notes.html file
router.get("notes", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/notes.html"));
});

// Other files shall all respond with index.html
router.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/index.html"));
});

module.exports =router;