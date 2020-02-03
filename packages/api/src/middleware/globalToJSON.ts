import {Schema} from 'mongoose'

function globalToJSON(schema: Schema) {
  schema.set('toJSON', {
    getters: true,
    virtuals: true,
    transform(doc, json) {
      delete json.__v;
      delete json.password;
    }
  });
}

export default globalToJSON
