import { React, useState, useEffect } from "react";
import Cards from "../../Cards";
import NavBar from "../../NavBar/NavBar";
import axios from "axios";

import "./style.scss";

const HomePage = () => {
  const [testMode, setTestMode] = useState(false);
  const [packs, setPacks] = useState([]);
  const [allVerses, setAllVerses] = useState([]);
  const [mvPack, setMvPack] = useState("");
  const [verses, setVerses] = useState([]);

  // API calls to get Memory Packs and all verses on first load
  useEffect(() => {
    const getMemoryPack = () => {
      axios.get(`${process.env.REACT_APP_API_URL}/packs`).then((res) => {
        const data = res.data;
        setPacks(data);
      });
    };

    const getAllVerses = () => {
      axios.get(`${process.env.REACT_APP_API_URL}/verses`).then((res) => {
        const data = res.data;
        setAllVerses(data.verses);
      });
    };

    getAllVerses();
    getMemoryPack();
  }, []);

  // Filter verses to display when mvPack is selected
  useEffect(() => {
    const filterMemoryVerses = (memory_pack) => {
        if (memory_pack === "TMS - 60"){
            return allVerses.filter((v) => v.memory_pack.includes("TMS 60"));
        }
        return allVerses.filter((v) => v.memory_pack === memory_pack);
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
        />
      </header>
      <div className="page-body">
        {verses.length ? (
          <>
            {verses.map((v) => {
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
            <p>Please select a Memory Pack</p>
          </>
        )}
      </div>
    </div>
  );
};

export default HomePage;
