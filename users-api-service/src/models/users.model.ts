// users-model.js - A mongoose model
//
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
import { Application } from '../declarations';
import * as mongoose from 'mongoose'

const ObjectId = mongoose.SchemaTypes.ObjectId;

export default function (app: Application) {
  const mongooseClient = app.get('mongooseClient');
  const users = new mongooseClient.Schema({

    email: {type: String, unique: true, lowercase: true},
    password: { type: String },
    friendsId: { type: [ ObjectId ] }

  }, {
    timestamps: true
  });

  return mongooseClient.model('users', users);
}
