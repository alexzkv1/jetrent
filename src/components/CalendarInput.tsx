import { useEffect, useRef } from "react";
import Pikaday from "pikaday";

export default function App() {
  const myDatepicker = useRef(null);
  useEffect(() => {
    const picker = new Pikaday({
      field: myDatepicker.current
    });
    return () => picker.destroy();
  }, []);
  return (
    <input type="text" className="input pika-single bg-gray-100 border-1 border-gray-300" defaultValue="Pick a date" ref={myDatepicker} />
  );
}