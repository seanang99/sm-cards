import { React, useState, useEffect } from "react";
import NavBar from "../../NavBar";
import Footer from "../../Footer/Footer";
import ScrollToTop from "../../ScrollToTop";
import data from "../../../resources/memoryVerses.json";
import dataPacks from "../../../resources/packs.json";
import "./style.scss";
import MemoryGame from "../../Memory/MemoryGame";

const Memory = () => {
  const [testMode, setTestMode] = useState(false);
  const [packs, setPacks] = useState([]);
  const [allVerses, setAllVerses] = useState([]);
  const [verses, setVerses] = useState([]);
  const [selectedPacks, setSelectedPacks] = useState({});
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

  // Filter verses to display when selectedPacks changes
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
          testMode={testMode}
          setTestMode={setTestMode}
          selectedPacks={selectedPacks}
          onPacksChange={handlePacksChange}
          packs={packs}
          allVerses={allVerses}
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
          <div className="empty-state">
            <p>Memory Game</p>
            <p className="text-muted">Click "Select Packs" above to choose verses</p>
          </div>
        )}
      </div>
      <ScrollToTop />
      <Footer />
    </div>
  );
};

export default Memory;
