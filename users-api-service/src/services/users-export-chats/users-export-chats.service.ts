// Initializes the `users-export-chats` service on path `/users-export-chats`
import { ServiceAddons } from '@feathersjs/feathers';
import { Application } from '../../declarations';
import { UsersExportChats } from './users-export-chats.class';
import createModel from '../../models/users-export-chats.model';
import hooks from './users-export-chats.hooks';

// Add this service to the service type index
declare module '../../declarations' {
  interface ServiceTypes {
    'users-export-chats': UsersExportChats & ServiceAddons<any>;
  }
}

export default function (app: Application) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/users-export-chats', new UsersExportChats(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('users-export-chats');

  service.hooks(hooks);
}
