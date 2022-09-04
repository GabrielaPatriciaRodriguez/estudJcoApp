import React, { useEffect, useState } from "react";

import { useParams } from "react-router-dom";

//Components
import ItemDetail from "../ItemDetail/ItemDetail";
import Spinner from "../Spinner/Spinner";

//Firebase
import { db } from "../../Firebase/FirebaseConfig";
import {
  getDoc,
  doc,
} from "firebase/firestore";

const ItemDetailContainer = () => {
  const [materia, setMateria] = useState([]);

  const [loading, setLoading] = useState(true);

  let { id } = useParams();

  const getMateria= async (id) => {
    const document = doc(db, "materias", id)
    const response = await getDoc(document)
    const result = {id: response.id, ...response.data()}
    return result
  }

  useEffect(() => {

    getMateria(id).then((doc) => {
      setMateria(doc);
      setLoading(false);
    })

  }, [id]);

  return (
    <div>
      {loading ? (
        <Spinner />
      ) : (
            <ItemDetail
              id={materia.id}
              imagen={materia.imagen}
              titulo={materia.titulo}
              descripcion={materia.descripcion}
              categoria={materia.categoria}
              informacion={materia.informacion}
            />
      )}
    </div>
  );
};

export default ItemDetailContainer;