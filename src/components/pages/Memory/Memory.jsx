import { React, useState, useEffect } from "react";
import NavBar from "../../NavBar";
import Footer from "../../Footer/Footer";
import data from "../../../resources/memoryVerses.json";
import dataPacks from "../../../resources/packs.json";
import "./style.scss";
import MemoryGame from "../../Memory/MemoryGame";

const Memory = () => {
  const [testMode, setTestMode] = useState(false);
  const [packs, setPacks] = useState([]);
  const [allVerses, setAllVerses] = useState([]);
  const [verses, setVerses] = useState([]);
  const [mvPack, setMvPack] = useState("");
  // const [score, setScore] = useState(0);

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
          testMode={testMode}
          setTestMode={setTestMode}
          pack={packs}
          setPack={setMvPack}
          score={0}
        />
      </header>

      <div className="page-body">
        {verses.length ? (
          <>
            <>
              <MemoryGame
                verses={verses}
              />
            </>
          </>
        ) : (
          <div>
            <p> Memory Game </p>
            <p> Please select a Memory Pack</p>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Memory;
