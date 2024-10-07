export default function Filme (
    titulo: string,
    dataLancamento: Date,
    anoLancamento : number,
    duracao: number,
    genero : string,
    sinopse : string,
  ) {
    return { titulo, dataLancamento,anoLancamento,duracao, genero, sinopse };
  }
  