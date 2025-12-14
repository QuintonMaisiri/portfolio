type inputProps = {
  label: string;
  value?: string;
  required?: boolean;
  type?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function Input({ label, value, onChange, required = false, type = "text" }: inputProps) {
  return (
    <div className="flex flex-col gap-2 ">
      <label htmlFor="name">{label}:</label>
      <input
        type={type}
        id="name"
        name="name"
        required={required}
        className="bg-themeBackdrop border border-themeStroke rounded-lg px-3 py-2 text-themeFg "
        value={value}
        onChange={onChange}
      />
    </div>
  );
}
