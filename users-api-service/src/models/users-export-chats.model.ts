// users-export-chats-model.js - A mongoose model
//
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
import { Application } from '../declarations';

export default function (app: Application) {
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;
  const usersExportChats = new Schema({
    ownerId: { type: Schema.ObjectId }
  }, {
    timestamps: true
  });

  return mongooseClient.model('usersExportChats', usersExportChats);
}
