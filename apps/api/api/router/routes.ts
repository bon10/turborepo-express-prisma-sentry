import { getUsersHandler } from "../handler";
import AsyncRouter from "./custom-router";

const routes = new AsyncRouter();

routes.get("/api/users", getUsersHandler);

export default routes.getRouter();
