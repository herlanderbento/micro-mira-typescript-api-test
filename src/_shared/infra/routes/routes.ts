import Router from "express";
import { miraRoutes } from "../../../modules/mira/infra/https/routes";
import { careerRoutes } from "~/modules/career/infra";

const router = Router();

router.get("/", (_, res) => {
  return res.json("Welcome to the Mirantes accounts api.");
});

router.use("/miras", miraRoutes);
router.use("/careers", careerRoutes)

export { router };
