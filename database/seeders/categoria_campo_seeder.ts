import Categoria from '#models/categoria'
import Campo from '#models/campo'

export default class CategoriaCampoSeeder {
  async run() {
    // 1. Garantir que as Categorias existam (sem depender de helpers externos)
    const categoriasDef = [
      { slug: 'alimentos', nome: 'Alimentos' },
      { slug: 'bebidas', nome: 'Bebidas' },
      { slug: 'roupas', nome: 'Roupas' },
      { slug: 'pecas-automotivas', nome: 'Peças Automotivas' },
      { slug: 'funcionarios', nome: 'Funcionários' },
      { slug: 'eletronicos', nome: 'Eletrônicos' },
    ]

    const categorias: Record<string, Categoria> = {}
    for (const def of categoriasDef) {
      categorias[def.slug] = await Categoria.firstOrCreate(
        { slug: def.slug },
        { nome: def.nome, slug: def.slug }
      )
    }

    // 2. Garantir que os Campos existam
    const camposDef = [
      { nome: 'sku', tipo: 'texto', label: 'SKU' },
      { nome: 'nome', tipo: 'texto', label: 'Nome' },
      { nome: 'quantidade', tipo: 'numero', label: 'Quantidade' },
      { nome: 'preco', tipo: 'decimal', label: 'Preço' },
      { nome: 'ativo', tipo: 'checkbox', label: 'Ativo' },
      { nome: 'peso', tipo: 'decimal', label: 'Peso' },
      { nome: 'tags', tipo: 'texto', label: 'Tags' },
      { nome: 'marca', tipo: 'texto', label: 'Marca' },
      { nome: 'modelo', tipo: 'texto', label: 'Modelo' },
      { nome: 'unidade', tipo: 'texto', label: 'Unidade' },
      { nome: 'validade', tipo: 'data', label: 'Validade' },
      { nome: 'codigo_barra', tipo: 'texto', label: 'Código de Barras' },
      { nome: 'imagem', tipo: 'imagem', label: 'Imagem' },
    ]

    const campos: Record<string, Campo> = {}
    for (const def of camposDef) {
      campos[def.nome] = await Campo.firstOrCreate(
        { nome: def.nome },
        {
          nome: def.nome,
          tipo: def.tipo as
            | 'texto'
            | 'numero'
            | 'decimal'
            | 'select'
            | 'checkbox'
            | 'data'
            | 'imagem',
          label: def.label,
        }
      )
    }

    // Função auxiliar para limpar e anexar campos
    const syncCampos = async (categoria: Categoria, mapping: any) => {
      // Limpa associações antigas para evitar duplicatas na tabela pivô
      await categoria.related('campos').detach()
      await categoria.related('campos').attach(mapping)
    }

    // --- ALIMENTOS ---
    await syncCampos(categorias['alimentos'], {
      [campos.sku.id]: { obrigatorio: true, ordem: 1 },
      [campos.nome.id]: { obrigatorio: true, ordem: 2 },
      [campos.quantidade.id]: { obrigatorio: false, ordem: 3 },
      [campos.preco.id]: { obrigatorio: false, ordem: 4 },
      [campos.ativo.id]: { obrigatorio: false, ordem: 5 },
      [campos.marca.id]: { obrigatorio: false, ordem: 6 },
      [campos.peso.id]: { obrigatorio: false, ordem: 7 },
      [campos.validade.id]: { obrigatorio: true, ordem: 8 },
      [campos.codigo_barra.id]: { obrigatorio: false, ordem: 9 },
      [campos.imagem.id]: { obrigatorio: false, ordem: 10 },
    })

    // --- BEBIDAS ---
    await syncCampos(categorias['bebidas'], {
      [campos.sku.id]: { obrigatorio: true, ordem: 1 },
      [campos.nome.id]: { obrigatorio: true, ordem: 2 },
      [campos.quantidade.id]: { obrigatorio: false, ordem: 3 },
      [campos.preco.id]: { obrigatorio: false, ordem: 4 },
      [campos.ativo.id]: { obrigatorio: false, ordem: 5 },
      [campos.unidade.id]: { obrigatorio: true, ordem: 6 },
      [campos.validade.id]: { obrigatorio: false, ordem: 7 },
      [campos.codigo_barra.id]: { obrigatorio: false, ordem: 8 },
      [campos.imagem.id]: { obrigatorio: false, ordem: 9 },
    })

    // --- ROUPAS ---
    await syncCampos(categorias['roupas'], {
      [campos.sku.id]: { obrigatorio: true, ordem: 1 },
      [campos.nome.id]: { obrigatorio: true, ordem: 2 },
      [campos.quantidade.id]: { obrigatorio: false, ordem: 3 },
      [campos.preco.id]: { obrigatorio: false, ordem: 4 },
      [campos.ativo.id]: { obrigatorio: false, ordem: 5 },
      [campos.marca.id]: { obrigatorio: false, ordem: 6 },
      [campos.modelo.id]: { obrigatorio: false, ordem: 7 },
      [campos.tags.id]: { obrigatorio: false, ordem: 8 },
      [campos.imagem.id]: { obrigatorio: false, ordem: 9 },
    })

    // --- PEÇAS AUTOMOTIVAS ---
    await syncCampos(categorias['pecas-automotivas'], {
      [campos.sku.id]: { obrigatorio: true, ordem: 1 },
      [campos.nome.id]: { obrigatorio: true, ordem: 2 },
      [campos.quantidade.id]: { obrigatorio: false, ordem: 3 },
      [campos.preco.id]: { obrigatorio: false, ordem: 4 },
      [campos.ativo.id]: { obrigatorio: false, ordem: 5 },
      [campos.marca.id]: { obrigatorio: true, ordem: 6 },
      [campos.modelo.id]: { obrigatorio: false, ordem: 7 },
      [campos.codigo_barra.id]: { obrigatorio: false, ordem: 8 },
      [campos.imagem.id]: { obrigatorio: false, ordem: 9 },
    })

    // --- FUNCIONÁRIOS ---
    await syncCampos(categorias['funcionarios'], {
      [campos.sku.id]: { obrigatorio: true, ordem: 1 },
      [campos.nome.id]: { obrigatorio: true, ordem: 2 },
      [campos.quantidade.id]: { obrigatorio: false, ordem: 3 },
      [campos.preco.id]: { obrigatorio: false, ordem: 4 },
      [campos.ativo.id]: { obrigatorio: true, ordem: 5 },
      [campos.tags.id]: { obrigatorio: false, ordem: 6 },
    })

    // --- ELETRÔNICOS ---
    await syncCampos(categorias['eletronicos'], {
      [campos.sku.id]: { obrigatorio: true, ordem: 1 },
      [campos.nome.id]: { obrigatorio: true, ordem: 2 },
      [campos.quantidade.id]: { obrigatorio: false, ordem: 3 },
      [campos.preco.id]: { obrigatorio: false, ordem: 4 },
      [campos.ativo.id]: { obrigatorio: false, ordem: 5 },
      [campos.marca.id]: { obrigatorio: true, ordem: 6 },
      [campos.modelo.id]: { obrigatorio: true, ordem: 7 },
      [campos.codigo_barra.id]: { obrigatorio: false, ordem: 8 },
      [campos.imagem.id]: { obrigatorio: false, ordem: 9 },
    })
  }
}
