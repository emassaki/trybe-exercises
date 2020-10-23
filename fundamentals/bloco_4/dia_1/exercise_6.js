let piece = "RoOk";
//pawn - peão
//rook - torre
//knight - cavalo
//bishop - bispo
//queen - rainha
//king - rei

switch (piece.toLowerCase()) {
  case "pawn":
    console.log(
      "One square forward or one square diagonally to capture a piece"
    );
    break;
  case "rook":
    console.log("Cardinal directions");
    break;
  case "knight":
    console.log("L shaped");
    break;
  case "bishop":
    console.log("Diagonaly");
    break;
  case "queen":
    console.log("All directions");
    break;
  case "king":
    console.log("One square to all directions");
    break;
  default:
    console.log("I don't know that piece. Please insert a valid piece name.");
}
