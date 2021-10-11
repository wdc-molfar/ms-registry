const express = require('express');
const spec = require('../services/spec');

const router = new express.Router();


/**
 * Повертає список назв зареєстрованих специфікації
 */
router.get('/', async (req, res, next) => {
  const options = {
  };
  try {
    const result = await spec.getSpec(options);
    res.status(result.status || 200).send(result.data);
  } catch (err) {
    return res.status(500).send({
      status: 500,
      error: 'Server Error'
    });
  }
});

/**
 * Повертає специфікацію в форматі YAML за ім'ям
 */
router.get('/:name', async (req, res, next) => {
  const options = {
    name: req.params['name']
  };

  try {
    const result = await spec.getSpecByName(options);
    res.status(result.status || 200).send(result.data);
  } catch (err) {
    next(err);
  }
});

/**
 * Видаляє специфікацію з реєстру
 */
router.delete('/:name', async (req, res, next) => {
  const options = {
    name: req.params['name']
  };

  try {
    const result = await spec.deleteSpecByName(options);
    res.status(result.status || 200).send(result.data);
  } catch (err) {
    next(err);
  }
});

/**
 * Зберігає специфікацію в реєстрі та повертає її
 */
router.post('/:name', async (req, res, next) => {
  const options = {
    body: req.body,
    name: req.params['name']
  };

  try {
    const result = await spec.postSpecByName(options);
    res.status(result.status || 200).send(result.data);
  } catch (err) {
    next(err);
  }
});

/**
 * Оновлює специфікацію в реєстрі та повертає оновлену версію 
 * специфікації
 */
router.put('/:name', async (req, res, next) => {
  const options = {
    body: req.body,
    name: req.params['name']
  };

  try {
    const result = await spec.putSpecByName(options);
    res.status(result.status || 200).send(result.data);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
