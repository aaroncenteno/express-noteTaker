const fs = require('fs');
const path = require('path');

function createNote(body, notesArr) {
    const newNote = body;
    notesArr.push(newNote);
    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify({ notes: notesArr }, null, 2)
    );
    return newNote;
};

module.exports = {
    createNote
};

