const router = require('express').Router();
const pizzaRoutes = require('./pizza-routes');
<<<<<<< HEAD

router.use('/pizzas', pizzaRoutes);
=======
const commentRoutes = require('./comment-routes');


router.use('/pizzas', pizzaRoutes);
router.use('/comments', commentRoutes);

>>>>>>> 695818c8124a52ec7ce6a8fae7f228507a9a0e60

module.exports = router;
