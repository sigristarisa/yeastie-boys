const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const initialSourdough = {
  starterName: null,
  starter: null,
  water: null,
  salt: null,
  flour: null,
  doughweight: null,
  starterCondition: "",
  autolyseTime: "",
  bulkFermentationTime: "",
  stretchAndFold: null,
  shaping: "",
  proofing: "",
  bakeWithLid: "",
  bakeWithoutLid: "",
  ovenSpring: null,
  crust: null,
  crumb: null,
  taste: "",
  positive: "",
  negative: "",
  note: "",
  å,
};

const setStarterName = async (req, res) => {
  const { starterName } = req.body;

  const createdSourdough = await prisma.sourdough.create({
    data: { ...initialSourdough, starterName },
  });
  res.json({ data: createdSourdough });
};

module.exports = {
  setStarterName,
};
