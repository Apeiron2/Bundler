import moment from "moment";
import "./assets/scss/styles.scss";
import img1 from "./assets/img/facebook.png";
import config from "./config.json";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
export const app = () => {
  return `
  ${Header()}
<h1>Bây giờ là: ${moment().format("DD/MM/YY HH:mm:ss")}</h1>
<div class="content">
  <h2>Test</h2>
</div>
${Footer()}`;
};
console.log(img1);
