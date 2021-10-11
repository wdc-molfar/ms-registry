const ServerError = require('../../lib/error');
const config = require("../../lib/config")
const mongo = require("mongodb").MongoClient
/**
 * @param {Object} options
 * @throws {Error}
 * @return {Promise}
 */
module.exports.getSpec = async (options) => {

  try {
    
    let client = await mongo.connect(config.mongo.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
    })
    try {
      let collection = client.db(config.mongo.db).collection(config.mongo.collection)

      let res = await collection.find({}).toArray()

      client.close()
      
      return {
        status: 200,
        data: res
      }  
    } catch (e) {
      client.close()
      throw new ServerError({
        status: 500, // Or another error code.
        error: `Server Error: ${e.toString()}` // Or another error message.
      }) 
    }
    
  } catch (e) {
      throw new ServerError({
        status: 500, // Or another error code.
        error: `Server Error: ${e.toString()}` // Or another error message.
      })
  }
  

  
};

/**
 * @param {Object} options
 * @param {String} options.name Назва специфікації
 * @throws {Error}
 * @return {Promise}
 */
module.exports.getSpecByName = async (options) => {
  try {
    
    let client = await mongo.connect(config.mongo.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
    })
    try {
      let collection = client.db(config.mongo.db).collection(config.mongo.collection)

      let res = await collection.find({ name: options.name }).toArray()
      client.close()
      
      return {
        status: (res.length == 0) ? 404 : 200,
        data: (res.length == 0) ? {
          status: 404,
          message: `Specification "${options.name}" not found`
        } : res[0].data
      }  
    } catch (e) {
      client.close()
      throw new ServerError({
        status: 500, // Or another error code.
        error: `Server Error: ${e.toString()}` // Or another error message.
      }) 
    }
    
  } catch (e) {
      throw new ServerError({
        status: 500, // Or another error code.
        error: `Server Error: ${e.toString()}` // Or another error message.
      })
  }

};

/**
 * @param {Object} options
 * @param {String} options.name Назва специфікації
 * @throws {Error}
 * @return {Promise}
 */
module.exports.deleteSpecByName = async (options) => {
  try {

    let client = await mongo.connect(config.mongo.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
    })
    try {
      let collection = client.db(config.mongo.db).collection(config.mongo.collection)
      
      await collection.deleteOne({ name: options.name })

      client.close()
      
      return {
        status: 200,
        data:""
      }  

    } catch (e) {
      client.close()
      throw new ServerError({
        status: 500, // Or another error code.
        error: `Server Error: ${e.toString()}` // Or another error message.
      }) 
    }
    
  } catch (e) {
      throw new ServerError({
        status: 500, // Or another error code.
        error: `Server Error: ${e.toString()}` // Or another error message.
      })
  }
};

/**
 * @param {Object} options
 * @param {String} options.name Назва специфікації
 * @throws {Error}
 * @return {Promise}
 */
module.exports.postSpecByName = async (options) => {

  try {

    let client = await mongo.connect(config.mongo.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
    })
    try {
      let collection = client.db(config.mongo.db).collection(config.mongo.collection)
      let res = await collection.find({name:options.name}).toArray()
      
      if(res.length && res.length > 0){
        client.close()
        return {
          status: 400,
          data: {
            status: 400,
            message: `Bad request. Specification "${options.name} already exists"`
          }  
        }  
      }

      await collection.replaceOne(
          { name: options.name },

          { 
            name: options.name,
            data: options.body
          },

          {upsert: true}
      )

      client.close()
      
      return {
        status: 200,
        data: options.body
      }  

    } catch (e) {
      client.close()
      throw new ServerError({
        status: 500, // Or another error code.
        error: `Server Error: ${e.toString()}` // Or another error message.
      }) 
    }
    
  } catch (e) {
      throw new ServerError({
        status: 500, // Or another error code.
        error: `Server Error: ${e.toString()}` // Or another error message.
      })
  }
};

/**
 * @param {Object} options
 * @param {String} options.name Назва специфікації
 * @throws {Error}
 * @return {Promise}
 */
module.exports.putSpecByName = async (options) => {
  try {

    let client = await mongo.connect(config.mongo.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
    })
    try {
      let collection = client.db(config.mongo.db).collection(config.mongo.collection)
      
      await collection.replaceOne(
          { name: options.name },

          { 
            name: options.name,
            data: options.body
          },

          {upsert: true}
      )

      client.close()
      
      return {
        status: 200,
        data: options.body
      }  

    } catch (e) {
      client.close()
      throw new ServerError({
        status: 500, // Or another error code.
        error: `Server Error: ${e.toString()}` // Or another error message.
      }) 
    }
    
  } catch (e) {
      throw new ServerError({
        status: 500, // Or another error code.
        error: `Server Error: ${e.toString()}` // Or another error message.
      })
  }
};

