import React, { useState, useEffect } from "react";


//Component
import ItemList from "../ItemList/ItemList";
import Spinner from "../Spinner/Spinner";

//Firebase
import { db } from "../../Firebase/FirebaseConfig";
import { collection, query, getDocs, where } from "firebase/firestore";
import { useParams } from "react-router-dom";

function CardList() {
  const [materias, setMaterias] = useState([]);

  const { categoria } = useParams();

  const getMaterias = async () => {
    const q = categoria
      ? query(collection(db, "materias"), where("categoria", "==", categoria))
      : query(collection(db, "materias"));
    const querySnapshot = await getDocs(q);
    const docs = [];

    querySnapshot.forEach((doc) => {
      docs.push({ ...doc.data(), id: doc.id });
    });
    setMaterias(docs);
  };

  useEffect(() => {
    getMaterias();
  }, [categoria]);

  return (
    <>
    <div>
      <div>
        {materias.length > 0 ? <ItemList materias={materias} /> : <Spinner />}
      </div>
    </div>
    </>
  );
}

export default CardList;
