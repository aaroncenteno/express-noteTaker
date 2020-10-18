const notesCalls = require("../../controllers/noteController");
const router = require("express").Router();

// GET /api/notes returns all notes from the file
router.get("/notes", (req, res) => {

    notesCalls
        .getNotes()
        .then((notes) => 
            res.json(notes))
        .catch((err) => 
            res.status(500).json(err));
});

router.post("/notes", (req, res) => {
    notesCalls
        .addNote(req.body)
        .then((note) => 
            res.json(note))
        .catch((err) => 
            res.status(500).json(err));
});

// Delete specific note with the assigned UUID
router.delete("/notes/:id", (req, res) => {
    notesCalls
    .deleteNote(req.params.id)
    .then(() => res.json({ ok: true }))
    .catch((err) => res.status(500).json(err));
});

module.exports = router;
