import { createSelector } from 'reselect';
import { Map, List } from 'immutable';
import * as _ from 'lodash';
import * as moment from 'moment';

const getGroupSaldos = state => state.api.getIn(['groupSaldos', 'results']);

export const getParsedGroupSaldos = createSelector(
  [getGroupSaldos],
  (saldos: List) => saldos.map(saldo => _.update(saldo, 'timestamp', x => moment(x).format('D.M.')))
);
