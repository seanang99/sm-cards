import { React, useState, useEffect } from "react";
import Cards from "../../Cards";
import NavBar from "../../NavBar";
import Footer from "../../Footer/Footer";
import { collection, getDocs, query, orderBy, where } from "firebase/firestore";
import { db } from "../../../api/firebaseConfig";

import "./style.scss";

const HomePage = () => {
  const [testMode, setTestMode] = useState(false);
  const [allMvPacks, setAllMvPacks] = useState([]);
  const [defaultText, setDefaultText] = useState("Please select a memory pack");
  const [verses, setVerses] = useState([]);
  const [mvPack, setMvPack] = useState("");

  // Firebase Collections
  const mvPacksCollectionRef = collection(db, "memory_pack");
  const versesCollectionRef = collection(db, "verses");

  useEffect(() => {
    const getAllMvPacks = async () => {
      const data = await getDocs(
        query(mvPacksCollectionRef, orderBy("pack", "asc"))
      );
      setAllMvPacks(
        data.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }))
      );
    };

    getAllMvPacks();
  }, [mvPacksCollectionRef]);

  useEffect(() => {
    const getVersesByPack = async (mvPack) => {
      const data = await getDocs(
        query(versesCollectionRef, where("memory_pack", "==", mvPack))
      );

      if (data.docs.length === 0) {
        setDefaultText("Please select a Memory Pack. There are no verses in this memory pack.");
      }

      setVerses(
        data.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }))
      );
    };

    getVersesByPack(mvPack);
  }, [versesCollectionRef, mvPack]);

  // const filterMemoryVerses = (memory_pack) => {
  //   return MOCK_VERSES.filter((v) => v.memory_pack === memory_pack);
  // };

  // let memoryVerses = filterMemoryVerses(mvPack);

  return (
    <div className="page-layout">
      <header>
        <NavBar
          testMode={testMode}
          setTestMode={setTestMode}
          pack={allMvPacks}
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
            <p> {defaultText}</p>
          </>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
