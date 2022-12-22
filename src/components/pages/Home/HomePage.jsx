import { React, useState } from "react";
import Cards from "../../Cards";
import NavBar from "../../NavBar";
import Footer from "../../Footer/Footer";

import { MOCK_VERSES } from "../../../mocks/MockVerses";

import "./style.scss";

const HomePage = () => {
  const [testMode, setTestMode] = useState(false);
  const [mvPack, setMvPack] = useState("");

  const filterMemoryVerses = (memory_pack) => {
    return MOCK_VERSES.filter((v) => v.memory_pack === memory_pack);
  };

  let memoryVerses = filterMemoryVerses(mvPack);

  return (
    <div className="page-layout">
      <header>
        <NavBar
          testMode={testMode}
          setTestMode={setTestMode}
          setPack={setMvPack}
        />
      </header>

      <div className="page-body">
        {memoryVerses.length ? (
          <>
            {memoryVerses.map((v) => {
              return (
                <Cards
                  key={`${v.id} + ${v.memory_pack}`}
                  test={testMode}
                  title={v.title}
                  subtitle={v.reference}
                  content={v.verse}
                />
              );
            })}
          </>
        ) : (
          <>
            <p> Please select a Memory Pack</p>
          </>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
