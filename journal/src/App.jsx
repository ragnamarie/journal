import { Header } from "./components/Header";
import { EntryForm } from "./components/EntryForm";
import { Entry } from "./components/Entry";
import { Footer } from "./components/Footer";
import "./App.css";
import "./resources/colors.css";
import star from "./resources/star.svg";

export default function App() {
  return (
    <>
      <Header></Header>
      <main>
        <EntryForm
          formName="Motto"
          textAreaName="Notes"
          buttonName="Create"
        ></EntryForm>
        <section>
          <nav>
            <a></a>
            <a></a>
          </nav>
          <Entry
            date="25.10.2023"
            title="Succession"
            text="Succession is an American satirical comedy-drama television series created by Jesse Armstrong that aired on HBO from June 3, 2018, to May 28, 2023. The series centers on the Roy family, the owners of global media and entertainment conglomerate Waystar RoyCo, and their fight for control of the company amidst uncertainty about the health of the family's patriarch."
            favButton="star"
          ></Entry>
          <Entry
            date="25.10.2023"
            title="The White Lotus"
            text="The White Lotus is an American dark comedy-drama anthology television series created by Mike White for HBO.[4][5] It follows the guests and employees of the fictional White Lotus resort chain, whose interactions are affected by their various psychosocial dysfunctions. The press release notes that each passing day, a darker complexity emerges in these picture-perfect travelers, the hotel's cheerful employees, and the idyllic locale itself. The first two seasons are set in Maui and Sicily, respectively."
            favButton="star"
          ></Entry>
        </section>
      </main>
      <Footer></Footer>
    </>
  );
}
