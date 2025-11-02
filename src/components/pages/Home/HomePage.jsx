import { React, useState, useEffect } from "react";
import Cards from "../../Cards";
import NavBar from "../../NavBar";
import Footer from "../../Footer/Footer";
import data from "../../../resources/memoryVerses.json";
import dataPacks from "../../../resources/packs.json";
import "./style.scss";

const HomePage = () => {
  const [testMode, setTestMode] = useState(false);
  const [packs, setPacks] = useState([]);
  const [allVerses, setAllVerses] = useState([]);
  const [verses, setVerses] = useState([]);
  const [selectedPacks, setSelectedPacks] = useState({});
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
   const filterMemoryVerses = (packsSelection) => {
         if (!packsSelection || Object.keys(packsSelection).length === 0) {
           return [];
         }

         const selectedVerseIds = new Set();

         // Collect all selected verse IDs from all packs
         Object.keys(packsSelection).forEach((packName) => {
           const packData = packsSelection[packName];
           packData.verses.forEach((verseId) => {
             selectedVerseIds.add(verseId);
           });
         });

         // Filter verses that match the selected IDs
         return allVerses.filter((v) => selectedVerseIds.has(v.id));
       };

       setVerses(filterMemoryVerses(selectedPacks));
     }, [allVerses, selectedPacks]);

     const handlePacksChange = (newSelection) => {
       setSelectedPacks(newSelection);
     };

  return (
    <div className="page-layout">
      <header>
        <NavBar
          isTestMode={true}
          testMode={testMode}
          setTestMode={setTestMode}
          selectedPacks={selectedPacks}
          onPacksChange={handlePacksChange}
          packs={packs}
          allVerses={allVerses}
          score={score}
        />
      </header>

      <div className="page-body">
        {verses.length ? (
          <>
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
          </>
        ) : (
          <div className="empty-state">
            <p>Please select memory packs to get started</p>
            <p className="text-muted">Click "Select Packs" above to choose verses</p>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
