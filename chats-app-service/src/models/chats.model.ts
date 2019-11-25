// chats-model.js - A mongoose model
//
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
import { Application } from '../declarations';

export default function (app: Application) {
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;


  const chats = new Schema({
    ownerId: { type: Schema.ObjectId, required: true, ref: 'users' },
    membersIds: [{ type: Schema.ObjectId , required: true, ref: 'users' }],
    lastMessagesId: { type: Schema.ObjectId, ref: 'messages' }
  }, {
    timestamps: true
  });

  return mongooseClient.model('chats', chats);
}
