import assert from 'assert';
import app from '../../src/app';

describe('\'users-export-chats\' service', () => {
  it('registered the service', () => {
    const service = app.service('users-export-chats');

    assert.ok(service, 'Registered the service');
  });
});
