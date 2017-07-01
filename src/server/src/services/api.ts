import * as request from 'superagent';
import { API_URL, API_TOKEN } from '../config';

const LOGIN_TYPE = 20;

export async function getUserWithCard(card: string) {
  const res = await request
    .post(`${API_URL}/api/v1/restricted/users/authenticate/alternative`)
    .set('Authorization', API_TOKEN)
    .send({ type: LOGIN_TYPE, key: card });

  if (res.body.ok) {
    return res.body.result;
  }
}
