// @flow
import * as req from 'superagent';
import * as prefix from 'superagent-prefix';
import { Moment } from 'moment';

const apiUrl = ((process.env.apiUrl: any): string);
const token = ((process.env.token: any): string);

async function makeRequest(request: req.SuperAgentRequest) {
  request.use(prefix(`${apiUrl}/restricted`));
  request.set({ Authorization: token });

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

export async function getUsers() {
  return makeRequest(req.get('/group/members'));
}

export async function getUser(username: string) {
  return makeRequest(req.get(`/group/members/${username}`));
}

export async function authenticateUser(username: string, password: string) {
  return makeRequest(req.post('/users/authenticate').send({ username, password }));
}

export async function makeTransaction(username: string, amount: number) {
  return makeRequest(req.post('/transaction').send({ username, amount }));
}

export async function getDailyGroupSaldos(from: Moment) {
  return makeRequest(req.get('/group/saldo/daily').query({ from: from.format() }));
}

