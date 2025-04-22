import { TextField } from "@mui/material";

export default function InputText({
  label,
  placeholder = "",
  type = "text",
  value,
  onChange,
  error = false,
  helperText = "",
  className = "",
}) {
  return (
    <TextField
      label={label}
      variant="outlined"
      placeholder={placeholder}
      type={type}
      value={value}
      onChange={onChange}
      error={error}
      helperText={helperText}
      fullWidth
      className={className} 
      InputLabelProps={{
        shrink: true,
      }}
      sx={{
        "& .MuiOutlinedInput-root": {
          height: "70px",
        },
        "& .MuiInputBase-input": {
          padding: "12px 14px",
          borderRadius: "8px",
          fontSize: "20px",
        },
      }}
    />
  );
}
