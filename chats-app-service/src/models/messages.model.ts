// messages-model.js - A mongoose model
//
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
import { Application } from '../declarations';

export default function (app: Application) {
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;
  const messages = new Schema({
    userId: { type: Schema.ObjectId, required: true },
    chatId: { type: Schema.ObjectId, required: true },
    message: { type: String, required: true }
  }, {
    timestamps: true
  });

  return mongooseClient.model('messages', messages);
}
