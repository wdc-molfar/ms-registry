const express = require('express');
const root = require('../services/root');

const router = new express.Router();


/**
 * Повертає сторінку загального опису
 */
router.get('/', async (req, res, next) => {
  const options = {
  };
  
  try {
    const result = await root.get(options);
    res.status(result.status || 200).send(result.data);
  } catch (err) {
    return res.status(500).send({
      status: 500,
      error: 'Server Error'
    });
  }
});

module.exports = router;
