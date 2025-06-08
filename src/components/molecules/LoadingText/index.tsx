import { Skeleton } from "@mui/material";

export default function LoadingText() {
  return(
    <div>
      <div style={{ display: "flex", gap: "1rem" }}>
        <Skeleton variant="text" height="1.4rem" animation="pulse" style={{ flexGrow: 2 }} />
        <Skeleton variant="text" height="1.4rem" animation="pulse" style={{ flexGrow: 2 }} />
      </div>
      <div style={{ display: "flex", gap: "1rem" }}>
        <Skeleton variant="text" height="1.4rem" animation="pulse" style={{ flexGrow: 2 }} />
        <Skeleton variant="text" height="1.4rem" animation="pulse" style={{ flexGrow: 2 }} />
        <Skeleton variant="text" height="1.4rem" animation="pulse" style={{ flexGrow: 1 }} />
      </div>
      <div style={{ display: "flex", gap: "1rem" }}>
        <Skeleton variant="text" height="1.4rem" animation="pulse" style={{ flexGrow: 2 }} />
        <Skeleton variant="text" height="1.4rem" animation="pulse" style={{ flexGrow: 1 }} />
      </div>
    </div>
  );
}