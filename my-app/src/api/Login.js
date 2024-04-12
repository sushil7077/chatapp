import { apiRoutes } from "../Routes";
import { api } from "../utils/api";

export const getTokenByLogin = (username, password) =>
  api.post(apiRoutes.getTokenByLogin, {
    username,
    password,
  });
