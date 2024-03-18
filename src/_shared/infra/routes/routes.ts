import Router from "express";
import { miraRoutes } from "../../../modules/mira/infra/https/routes";
import { careerRoutes } from "~/modules/career/infra";
import { educationRoutes } from "~/modules/education/infra/https/routes/education.routes";

const router = Router();

router.get("/", (_, res) => {
  return res.json("Welcome to the Mirantes accounts api.");
});

router.use("/miras", miraRoutes);
router.use("/careers", careerRoutes)
router.use('/educations', educationRoutes)

export { router };
