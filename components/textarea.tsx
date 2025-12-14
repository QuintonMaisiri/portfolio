type TextAreaProps = {
    label: string;
    value?: string;
    required?: boolean;
    placeholder?: string;
    onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;

}

export default function TextArea({ label, value, onChange, required = false, placeholder }: TextAreaProps) {
  return (
    <div className="flex flex-col gap-2 ">
      <label htmlFor="name">{label}:</label>
      <textarea
        id="name"
        name="name"
        required={required}
        className="bg-themeBackdrop border border-themeStroke rounded-lg px-3 py-2 text-themeFg "
        value={value}
        onChange={onChange}
        rows={4}
        placeholder={placeholder}
      />
    </div>
  );
}