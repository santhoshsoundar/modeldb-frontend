import makeRoute, { IRoute } from './makeRoute';

const routes = {
  mainPage: makeRoute({ getPath: () => '/' }),
  callback: makeRoute({ getPath: () => '/callback' }),
  settings: makeRoute({ getPath: () => '/settings' }),

  expirementRuns: makeRoute({
    getPath: () => '/project/:projectId/exp-runs',
    getRedirectPath: (p: { projectId: string }) => `/project/${p.projectId}/exp-runs`
  }),
  modelRecord: makeRoute({
    getPath: () => '/project/:projectId/exp-run/:modelRecordId',
    getRedirectPath: (p: { projectId: string; modelRecordId: string }) => `/project/${p.projectId}/exp-run/${p.modelRecordId}`
  })
};

type ArgumentTypes<F extends Function> = F extends (...args: infer A) => any ? A : never;

export type GetRouteParams<T extends IRoute<any>> = ArgumentTypes<T['getRedirectPath']>[0];
export default routes;
