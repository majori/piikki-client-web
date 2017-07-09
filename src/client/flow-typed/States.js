// @flow
import type { Map } from 'immutable';

type ModalState = {
  type: string | null;
  modalProps: any;
}

type AppState = {
  user: {
    username: string | null;
    saldo: number | null;
  };
  group: {
    name: string | null;
  };
  login: {
    username: string | null;
    error: boolean;
  };
  card: {
    id: string | null;
  }
}

type ApiState = {
  users: {
    loading: boolean;
    results: any[];
    selectors: {
      order: 'asc' | 'desc';
    };
  };
  user: {
    loading: boolean;
    results: {
      username: string | null;
      saldo: number | null;
    };
  };
  transaction: {
    loading: boolean;
    results: any;
  };
  transactions: {
    loading: boolean;
    results: any[];
  };
  group: {
    loading: boolean;
    results: any;
  };
  groupSaldos: {
    loading: boolean;
    results: any[];
  };
  authentication: {
    loading: boolean;
    results: {
      username: string;
      authenticated: boolean | null;
    };
  };
}

type State = {
  app: Map<AppState>;
  api: ApiState;
  modal: ModalState;
}
