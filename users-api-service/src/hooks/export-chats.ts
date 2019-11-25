// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html
import { Hook, HookContext } from '@feathersjs/feathers';
import {ClientChatsAPI} from "../client/client";

export default (options = {}): Hook => {
  return async (context: HookContext) => {
    const { data, params } = context;

    const client = new ClientChatsAPI('http://localhost:3030');
    let token = undefined;

    if (params.headers !== undefined)
      token = params.headers['authorization'];

    if (token === undefined)
      return context;

    const res = await client.chats.find({
      headers: {
        authorization: token,
        'X-Requested-With': 'internal-users-api'
      },
      paginate: false,
      query: {
        ownerId: { $in: data['ownerId']},
        $populate: ['lastMessagesId', 'membersIds', 'ownerId']
      }
    });
    console.log(JSON.stringify(res, null, 2));
    return context;
  };
}
