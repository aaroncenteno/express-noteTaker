const router = require('express').Router();
const notesRoutes = require('../apiRoutes/notes-routes');

router.use(notesRoutes);

module.exports = router;