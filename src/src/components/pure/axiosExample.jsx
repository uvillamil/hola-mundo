import React, {useState} from 'react';
import { Button } from "@mui/material";
import { getRandomChuckNorrisJoke } from '../../services/axiosService';


const AxiosExample = () => {
    const [joke, setJoke] = useState(null);
  const [countMeGusta, setCountMeGusta] = useState(0);
  const [countNoMeGusta, setCountNoMeGusta] = useState(0);

  const obtainJoke = () => {
    getRandomChuckNorrisJoke()
      .then((response) => {
        console.log(response);
        if (response.status === 200) {
          setJoke(response.data);
        }
      })
      .catch((error) => {
        alert(`Somethin went wrong: ${error}`);
      });
  };

  function toggleAttributeBtnMui() {
    document
      .querySelectorAll(".btn-mui")
      .forEach((btn) => btn.toggleAttribute("disabled"));
  }

  return (
    <div>
      <h1>Axios</h1>
      {joke && <p>{joke.value}</p>}
      <button
        onClick={() => {
          obtainJoke();
          toggleAttributeBtnMui();
        }}
      >
        Get joke
      </button>
      {joke && (
        <>
          <div>
            <Button
              className="btn-mui"
              variant="contained"
              color="success"
              onClick={() => {
                setCountMeGusta(countMeGusta + 1);
                toggleAttributeBtnMui();
              }}
            >
              ME GUSTA
            </Button>
            <Button
              className="btn-mui"
              variant="contained"
              color="error"
              onClick={() => {
                setCountNoMeGusta(countNoMeGusta + 1);
                toggleAttributeBtnMui();
              }}
            >
              NO ME GUSTA
            </Button>
          </div>
          <div>
            <p>Te gustan: {countMeGusta} chistes</p>
            <p>No te gustan: {countNoMeGusta} chistes</p>
          </div>
        </>
      )}
    </div>
  );
}
export default AxiosExample;
