import { useEffect, useState } from "react";
import CounterPresentation from "./CounterPresentation";
import Swal from "sweetalert2";

const CounterContainer = ({ stock, onAdd, initial = 1 }) => {
  const [counter, setCounter] = useState(initial);

  useEffect(() => {
    setCounter(initial);
  }, [initial]);

  const sumar = () => {
    if (counter >= stock) {
      Swal.fire({
        position: "center",
        icon: "error",
        title: `Máximo de stock alcanzado`,
        showConfirmButton: true,
        timer: 1500,
      });
    } else {
      setCounter(counter + 1);
    }
  };

  const restar = () => {
    if (counter > 1) {
      setCounter(counter - 1);
    }
  };

  return (
    <div>
      <CounterPresentation
        counter={counter}
        sumar={sumar}
        restar={restar}
        onAdd={onAdd}
      />
    </div>
  );
};

export default CounterContainer;
