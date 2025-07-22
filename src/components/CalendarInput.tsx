import { useEffect, useRef } from "react";
import Pikaday from "pikaday";

interface CalendarInputProps {
  selectedDate?: Date | null;
  onChange?: (date: Date | null) => void;
  minDate?: Date | null;
  disabled?: boolean;
}

export default function CalendarInput({
  selectedDate = null,
  onChange = () => {},
  minDate = null,
  disabled = false,
}: CalendarInputProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const pickerRef = useRef<Pikaday | null>(null);

  useEffect(() => {
    if (!inputRef.current) return;

    const picker = new Pikaday({
      field: inputRef.current,
      onSelect: (date: Date) => {
        onChange(date);
      },
      minDate: minDate || undefined,
      defaultDate: selectedDate || undefined,
      setDefaultDate: Boolean(selectedDate),
    });

    pickerRef.current = picker;

    return () => picker.destroy();
  }, [minDate, selectedDate, onChange]);

  useEffect(() => {
    if (disabled && pickerRef.current) {
      pickerRef.current.hide();
      inputRef.current?.setAttribute("disabled", "true");
    } else {
      inputRef.current?.removeAttribute("disabled");
    }
  }, [disabled]);

  return (
    <input
      type="text"
      className="input pika-single bg-gray-100 border-1 border-gray-300"
      placeholder="Pick a date"
      ref={inputRef}
      disabled={disabled}
    />
  );
}