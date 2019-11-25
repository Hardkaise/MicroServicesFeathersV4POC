import * as restClient from "@feathersjs/rest-client";
import { Service } from "@feathersjs/feathers";
import * as  fetch from 'node-fetch';

const feathers = require('@feathersjs/feathers');
const rest = require('@feathersjs/rest-client');
const auth = require('@feathersjs/authentication-client');



export class ClientChatsAPI {
  private app = feathers();
  private restClient: restClient.Transport;
  chats: Service<any>;

  constructor(url: string) {
    this.restClient = rest(url);
    this.app.configure(this.restClient.fetch(fetch));
    this.app.configure(auth());
    this.chats = this.app.service('chats');
  }
}

