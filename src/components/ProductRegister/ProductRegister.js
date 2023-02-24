import {
  Button,
  Card,
  CardContent,
  FormControl,
  InputLabel,
  Select,
  TextField,
} from "@mui/material";

export function ProductRegister({ texto }) {
  return (
    <>
      <Card>
        <CardContent>
          <div style={{ fontSize: "16px" }}>{texto}</div>
          <div style={{ display: "flex", flexDirection: "column" }}>

            <div style={{ width: "60%", marginTop: "14px" }}>
              <TextField fullWidth id="outlined-basic" label="Nome" variant="outlined" />
            </div>

            <div style={{ width: "60%", marginTop: "14px" }}>
              <TextField fullWidth id="outlined-basic" label="Preço"variant="outlined" />
            </div>

            <div style={{ width: "60%", marginTop: "14px" }}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Categoria</InputLabel>
                <Select labelId="demo-simple-select-label" id="demo-simple-select" label="Categoria">

                </Select>
              </FormControl>
            </div>

            <div style={{ width: "60%", display: "flex", marginTop: "14px", justifyContent: "right",}}>
              <Button variant="contained">Salvar</Button>
            </div>

          </div>
        </CardContent>
      </Card>
    </>
  );
}
