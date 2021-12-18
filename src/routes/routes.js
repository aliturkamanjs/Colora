import About from "../pages/about";
import Explore from "../pages/explore";
import Home from "../pages/home";
import NotFoundPage from "../pages/notFound";
import PaletteDetail from "../pages/paletteDetail";
import TempalteComp from "../pages/template";

const routes = [
  { path: "/palette/:id?", component: PaletteDetail },
  { path: "/explore", component: Explore },
  { path: "/template", component: TempalteComp },
  { path: "/about", component: About },
  { path: "/", component: Home, exact: true },
  { component: NotFoundPage },
];

export default routes;