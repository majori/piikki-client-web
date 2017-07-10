// @flow
import * as req from 'superagent';
import * as prefix from 'superagent-prefix';
import { Moment } from 'moment';

const apiUrl = ((process.env.apiUrl: any): string);

async function requestFactory(request: req.SuperAgentRequest) {
  request.use(prefix(`${apiUrl}/api/v1/restricted`));

  if (process.env.NODE_ENV !== 'production') {
    request.set('Authorization', 'restricted_token');
  }

  try {
    const res: req.Response = await request;
    const body: { ok: boolean, result: any } = res.body;

    if (!body.ok) {
      console.error(body);
      return body;
    }

    return body.result;
  } catch (err) {
    console.error(err);
    throw err;
  }
}

export async function getGroup() {
  return requestFactory(req.get('/group'));
}

export async function getUsers() {
  return requestFactory(req.get('/group/members'));
}

export async function getUser(username: string) {
  return requestFactory(req.get(`/group/members/${username}`));
}

export async function authenticateUser(username: string, password: string) {
  return requestFactory(req.post('/users/authenticate').send({ username, password }));
}

export async function makeTransaction(username: string, amount: number) {
  return requestFactory(req.post('/transaction').send({ username, amount }));
}

export async function getDailyGroupSaldos(from: Moment) {
  return requestFactory(req.get('/group/saldo/daily').query({ from: from.format() }));
}

export async function getLatestTransactions(from: Moment) {
  return requestFactory(req.get('/group/transactions').query({ from: from.format() }));
}

export async function createAlternativeLogin(username: string, key: string) {
  return requestFactory(req.post('/users/authenticate/alternative/create').send({ username, key, type: 20 }));
}

