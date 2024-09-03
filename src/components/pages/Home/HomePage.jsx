import { React, useState, useEffect } from "react";
import Cards from "../../Cards";
import NavBar from "../../NavBar";
import Footer from "../../Footer/Footer";
import data from "../../../resources/memoryVerses.json";
import dataPacks from "../../../resources/packs.json";
import "./style.scss";
import MemoryGame from "../../Memory/MemoryGame";

const HomePage = () => {
  const [memoryMode, setMemoryMode] = useState(false);
  const [testMode, setTestMode] = useState(false);
  const [packs, setPacks] = useState([]);
  const [allVerses, setAllVerses] = useState([]);
  const [verses, setVerses] = useState([]);
  const [mvPack, setMvPack] = useState("");
  const [score, setScore] = useState(0);

  // Get Memory Packs and all verses on load
  useEffect(() => {
    const getMemoryPack = () => {
      setPacks(dataPacks);
    };
    const getVerses = () => {
      setAllVerses(data);
    };
    getMemoryPack();
    getVerses();
  }, []);

  // Filter verses to display when mvPack is selected
  useEffect(() => {
    const filterMemoryVerses = (memory_pack) => {
      if (memory_pack === 'TMS 60') {
        return allVerses.filter((v) => (v.memory_pack.includes("TMS 60")));
      }
      return allVerses.filter((v) => (v.memory_pack === memory_pack));
    };
    setVerses(filterMemoryVerses(mvPack));
  }, [allVerses, mvPack]);

  return (
    <div className="page-layout">
      <header>
        <NavBar
          memoryMode={memoryMode}
          setMemoryMode={setMemoryMode}
          testMode={testMode}
          setTestMode={setTestMode}
          pack={packs}
          setPack={setMvPack}
          score={score}
        />
      </header>

      <div className="page-body">
        {verses.length ? (
          <>
            {memoryMode ? (
              <>
                <MemoryGame
                  verses={verses}
                />
              </>
            ) : (
              <>
                {verses.map((v) => {
                  return (
                    <Cards
                      key={`${v.id} + ${v.memory_pack}`}
                      test={testMode}
                      title={v.title}
                      subtitle={v.reference}
                      packDescription={v.pack_description}
                      content={v.verse}
                      score={score}
                      setScore={setScore}
                    />
                  );
                })}
              </>
            )}
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
