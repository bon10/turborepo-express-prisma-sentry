import { getUsersHandler } from "../handler";
import AsyncRouter from "./custom-router";

const routes = new AsyncRouter();

routes.get("/users", getUsersHandler);

export default routes.getRouter();
